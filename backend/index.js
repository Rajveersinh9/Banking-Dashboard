const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

// In-memory store (for demo; use a DB for production)
const transactions = [
  { id: uuidv4(), date: '2025-08-01', description: 'Groceries', amount: -54.23 },
  { id: uuidv4(), date: '2025-08-03', description: 'Salary', amount: 2500.00 },
  { id: uuidv4(), date: '2025-08-05', description: 'Coffee', amount: -3.95 }
];

// Root route (welcome page)
app.get('/', (req, res) => {
  res.send('Banking Dashboard Backend is running');
});

// GET /api/transactions
app.get('/api/transactions', (req, res) => {
  res.json({ transactions });
});

// POST /api/transactions
app.post('/api/transactions', (req, res) => {
  const { date, description, amount } = req.body;
  if (!date || !description || amount === undefined) {
    return res.status(400).json({ error: 'date, description and amount are required' });
  }
  const tx = { id: uuidv4(), date, description, amount: Number(amount) };
  transactions.unshift(tx);
  res.status(201).json(tx);
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Banking Dashboard backend listening on port ${PORT}`);
});
