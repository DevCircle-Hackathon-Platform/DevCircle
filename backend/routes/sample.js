const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/', sampleController.getSample);

// Dummy chatbot route
router.post('/chatbot', (req, res) => {
	const { message } = req.body;
	res.json({ reply: `Echo: ${message}` });
});

module.exports = router;
