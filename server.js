const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", 'data:'],
    },
  },
  hsts: { maxAge: 31536000, includeSubDomains: true },
}));

app.use(cors({ origin: 'http://localhost:4000' }));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests!' }
});
app.use('/api/', limiter);

const csrfProtection = csrf({ cookie: true });

function requireApiKey(req, res, next) {
  const key = req.headers['x-api-key'];
  if (key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  next();
}

app.get('/', (req, res) => {
  res.send('Security Project Running!');
});

app.get('/csrf-token', csrfProtection, (req, res) => {
  res.json({ token: req.csrfToken() });
});

app.get('/api/data', requireApiKey, (req, res) => {
  res.json({ message: 'Secret data!', status: 'authorized' });
});

app.post('/transfer', csrfProtection, (req, res) => {
  res.json({ success: true, message: 'Transfer completed!' });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
