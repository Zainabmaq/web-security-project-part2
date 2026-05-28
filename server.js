const express = require('express');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());

// CORS - sirf apni site se requests allow karo
app.use(cors({
  origin: 'http://localhost:4000'
}));

// Rate Limiting - 100 requests per 15 minutes
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: 'Too many requests, slow down!' }
});
app.use('/api/', limiter);

// API Key middleware
function requireApiKey(req, res, next) {
  const key = req.headers['x-api-key'];
  if (key !== process.env.API_KEY) {
    return res.status(401).json({ error: 'Invalid API key' });
  }
  next();
}

// Routes
app.get('/', (req, res) => {
  res.send('Security Project Running!');
});

app.get('/api/data', requireApiKey, (req, res) => {
  res.json({ message: 'Secret data!', status: 'authorized' });
});

app.listen(4000, () => {
  console.log('Server running on port 4000');
});
