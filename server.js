// Simple Node.js server to serve API keys securely
const express = require('express');
const path = require('path');
const app = express();

// Serve static files
app.use(express.static('.'));

// API endpoint to get keys (only for your domain)
app.get('/api/keys', (req, res) => {
  // Add CORS headers for your domain only
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  
  res.json({
    gmapsKey: process.env.GMAPS_KEY || '',
    openaiKey: process.env.OPENAI_KEY || ''
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});