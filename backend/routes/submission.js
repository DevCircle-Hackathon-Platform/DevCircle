const express = require('express');
const { protect } = require('../middlewares/auth');
const submissionController = require('../controllers/submissionController');
const router = express.Router();

// Add submission (team members only)
router.post('/', protect, submissionController.addSubmission);

// Update submission before deadline (team members only)
router.put('/:id', protect, submissionController.updateSubmission);

// Get submissions for a hackathon
router.get('/hackathon/:hackathonId', submissionController.getSubmissionsForHackathon);

module.exports = router;
