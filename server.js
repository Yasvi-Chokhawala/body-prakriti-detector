const express = require('express');
const cors = require('cors');
const users = require('./users');

const app = express();
app.use(cors());
app.use(express.json());

// User Profile API
app.post('/api/register', (req, res) => {
  const user = users.addUser(req.body);
  res.json(user);
});

// Prakriti Questionnaire API
app.post('/api/prakriti', (req, res) => {
  const { answers } = req.body;
  const prakriti = users.analyzePrakriti(answers);
  res.json({ prakriti });
});

app.listen(5000, () => console.log('Backend running on http://localhost:5000'));
