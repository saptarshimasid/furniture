const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5001;

// Middlewares
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

// API Routes
app.post('/api/contact', (req, res) => {
  const { name, email, room, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Name, email, and project notes are required fields.',
    });
  }

  // Log to mock database/CRM
  console.log(`[Contact Submission Received]`);
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Room: ${room || 'Not specified'}`);
  console.log(`Message: ${message}`);
  console.log(`-----------------------------------`);

  // Send successful response
  return res.status(200).json({
    success: true,
    message: 'Thanks! Your style request has been received by our consultants.',
  });
});

app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date() });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Express server running on http://localhost:${PORT}`);
});
