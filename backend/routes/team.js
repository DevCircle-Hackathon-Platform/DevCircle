const express = require('express');
const { protect } = require('../middlewares/auth');
const teamController = require('../controllers/teamController');
const router = express.Router();

// Create team (must be logged in)
router.post('/', protect, teamController.createTeam);

// Invite user to team (only creator)
router.post('/invite', protect, teamController.inviteToTeam);

// Join team (must be invited)
router.post('/join', protect, teamController.joinTeam);

// Leave team
router.post('/leave', protect, teamController.leaveTeam);

// Get team details
router.get('/:id', protect, teamController.getTeam);

module.exports = router;
