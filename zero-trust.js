// Zero Trust Security Implementation
const jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
require('dotenv').config();

const JWT_SECRET = process.env.JWT_SECRET || 'zerotrust-secret-key-2026';
const API_KEY = process.env.API_KEY || 'zt-api-key-zainab-2026';

const verifyApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];
  if (!apiKey || apiKey !== API_KEY) {
    return res.status(401).json({ error: 'Unauthorized: Invalid API key ❌' });
  }
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token ❌' });
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    res.status(403).json({ error: 'Invalid token ❌' });
  }
};

const generateToken = (user) =>
  jwt.sign(user, JWT_SECRET, { expiresIn: '1h' });

module.exports = { verifyApiKey, verifyToken, generateToken };
