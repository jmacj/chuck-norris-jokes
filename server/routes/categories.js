const express = require('express');
const axios = require('axios');
const router = express.Router();

/**
 * category list endpoint
 */
router.get('/list', async (req, res) => {
    try {
        const response = await axios.get('https://api.chucknorris.io/jokes/categories');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
