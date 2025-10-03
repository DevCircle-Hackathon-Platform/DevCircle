const Team = require('../models/Team');
const Hackathon = require('../models/Hackathon');
const MAX_TEAM_SIZE = 5; // You can adjust this as needed

// Create team (linked to a hackathon)
exports.createTeam = async (req, res) => {
  try {
    const { name, hackathonId } = req.body;
    if (!name || !hackathonId) return res.status(400).json({ message: 'Name and hackathonId are required.' });
    const hackathon = await Hackathon.findById(hackathonId);
    if (!hackathon) return res.status(404).json({ message: 'Hackathon not found.' });
    const team = new Team({
      name,
      hackathonId,
      members: [req.user.userId],
      createdBy: req.user.userId
    });
    await team.save();
    res.status(201).json(team);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Invite user to team
exports.inviteToTeam = async (req, res) => {
  try {
    const { teamId, userId } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'Team not found.' });
    if (!team.createdBy.equals(req.user.userId)) return res.status(403).json({ message: 'Only team creator can invite.' });
    if (team.members.length + team.invites.length >= MAX_TEAM_SIZE) return res.status(400).json({ message: 'Team size limit reached.' });
    if (team.invites.includes(userId) || team.members.includes(userId)) return res.status(400).json({ message: 'User already invited or member.' });
    team.invites.push(userId);
    await team.save();
    res.json({ message: 'User invited.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Join team (with invite system)
exports.joinTeam = async (req, res) => {
  try {
    const { teamId } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'Team not found.' });
    if (!team.invites.includes(req.user.userId)) return res.status(403).json({ message: 'No invite found.' });
    if (team.members.length >= MAX_TEAM_SIZE) return res.status(400).json({ message: 'Team size limit reached.' });
    team.members.push(req.user.userId);
    team.invites = team.invites.filter(id => id.toString() !== req.user.userId);
    await team.save();
    res.json({ message: 'Joined team.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Leave team
exports.leaveTeam = async (req, res) => {
  try {
    const { teamId } = req.body;
    const team = await Team.findById(teamId);
    if (!team) return res.status(404).json({ message: 'Team not found.' });
    if (!team.members.includes(req.user.userId)) return res.status(400).json({ message: 'Not a team member.' });
    team.members = team.members.filter(id => id.toString() !== req.user.userId);
    await team.save();
    res.json({ message: 'Left team.' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get team details
exports.getTeam = async (req, res) => {
  try {
    const { id } = req.params;
    const team = await Team.findById(id).populate('members', 'name email').populate('createdBy', 'name email').populate('hackathonId', 'title');
    if (!team) return res.status(404).json({ message: 'Team not found.' });
    res.json(team);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
