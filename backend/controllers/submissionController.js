const Submission = require('../models/Submission');
const Team = require('../models/Team');
const Hackathon = require('../models/Hackathon');

// Add submission (team members only)
exports.addSubmission = async (req, res) => {
  try {
    const { teamId, hackathonId, projectTitle, description, techStack, githubLink, demoLink } = req.body;
    // Check if user is a member of the team
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'Team not found.' });
    if (!team.members.includes(req.user.userId)) return res.status(403).json({ message: 'Only team members can submit.' });
    // Check hackathon exists
    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) return res.status(404).json({ message: 'Hackathon not found.' });
    // Check deadline
    if (new Date() > hackathon.endDate) return res.status(400).json({ message: 'Submission deadline has passed.' });
    // Only one submission per team per hackathon
    const existing = await Submission.findOne({ teamId, hackathonId });
    if (existing) return res.status(400).json({ message: 'Submission already exists for this team.' });
    const submission = new Submission({ teamId, hackathonId, projectTitle, description, techStack, githubLink, demoLink });
    await submission.save();
    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update submission before deadline (team members only)
exports.updateSubmission = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const submission = await Submission.findById(id);
    if (!submission) return res.status(404).json({ message: 'Submission not found.' });
    // Check if user is a member of the team
    const team = await Team.findById(submission.teamId);
    if (!team.members.includes(req.user.userId)) return res.status(403).json({ message: 'Only team members can update.' });
    // Check hackathon deadline
    const hackathon = await Hackathon.findById(submission.hackathonId);
    if (new Date() > hackathon.endDate) return res.status(400).json({ message: 'Submission deadline has passed.' });
    Object.assign(submission, updates);
    await submission.save();
    res.json(submission);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get submissions for a hackathon
exports.getSubmissionsForHackathon = async (req, res) => {
  try {
    const { hackathonId } = req.params;
    const submissions = await Submission.find({ hackathonId }).populate('teamId', 'name members');
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
