const jwt = require('jsonwebtoken');

// Middleware to verify JWT token
const authenticate = (req, res, next) => {
    const authHeader = req.headers.authorization;

    // Check if authorization header is provided and in the correct format
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Extract token from "Bearer <token>"
    const token = authHeader.split(' ')[1];

    try {
        // Verify the token using the secret key
        const decoded = jwt.verify(token, 'your_secret_key'); // Replace with a strong secret key
        req.user = decoded;  // Attach decoded user data to the request object
        next();  // Proceed to the next middleware or route
    } catch (err) {
        return res.status(403).json({ error: 'Unauthorized: Invalid token' });
    }
};

module.exports = authenticate;
