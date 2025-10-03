const express = require('express');
const { protect, authorizeRoles } = require('../middlewares/auth');
const hackathonController = require('../controllers/hackathonController');
const router = express.Router();

// Admin only
router.post('/', protect, authorizeRoles('admin'), hackathonController.createHackathon);
router.put('/:id', protect, authorizeRoles('admin'), hackathonController.updateHackathon);
router.delete('/:id', protect, authorizeRoles('admin'), hackathonController.deleteHackathon);

// Public
router.get('/', hackathonController.getAllHackathons);

module.exports = router;
