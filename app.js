const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let calories = [];

// GET: Fetch calorie entries
app.get('/api/calories', (req, res) => {
    res.json(calories);
});

// POST: Add a new calorie entry
app.post('/api/calories', (req, res) => {
    const entry = req.body;
    calories.push(entry);
    res.status(201).json({ message: 'Entry saved successfully' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
