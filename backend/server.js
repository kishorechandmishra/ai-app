const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5001; // You can choose any available port

// Middleware
app.use(cors());
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the AI Query API!');
});

// Endpoint to handle queries
app.post('/api/query', (req, res) => {
    const { query } = req.body;

    // Mock AI response (replace this with actual AI logic)
    const response = `You asked: "${query}". This is a mock response.`;

    res.json({ response });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
