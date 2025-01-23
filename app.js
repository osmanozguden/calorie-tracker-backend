const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./models/index');  // Import database connection
const User = require('./models/User');            // Import the User model
const authRoutes = require('./routes/auth');       // Import authentication routes
const authMiddleware = require('./middleware/authMiddleware');  // Import authentication middleware

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Test route to check if the server is running
app.get('/', (req, res) => {
    res.send('Calorie Tracker API is running!');
});

// Authentication routes (register and login)
app.use('/api/auth', authRoutes);

// Protected route (requires token)
app.get('/api/protected', authMiddleware, (req, res) => {
    res.json({ message: 'You have accessed a protected route!', user: req.user });
});

// Sync database and create tables if they don't exist
sequelize.sync()
    .then(() => console.log('Database synchronized.'))
    .catch(err => console.error('Error syncing database:', err));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
