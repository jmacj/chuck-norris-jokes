const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * random joke endpoint
 */
router.get('/random', async (req, res) => {
    const category = req.query.category;

    try {
        let apiUrl = 'https://api.chucknorris.io/jokes/random';

        if (category) {
            apiUrl += `?category=${category}`;
        }

        const response = await axios.get(apiUrl);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

/**
 * joke search endpoint
 */
router.get('/search', async (req, res) => {
    const query = req.query.query;

    if (!query) {
        return res.status(400).json({ error: 'Missing search text parameter' });
    }

    try {
        const response = await axios.get(`https://api.chucknorris.io/jokes/search?query=${query}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
