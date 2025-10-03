const Hackathon = require('../models/Hackathon');

// Create hackathon (admin only)
exports.createHackathon = async (req, res) => {
  try {
    const { title, description, startDate, endDate, prizes, rules } = req.body;
    const hackathon = new Hackathon({
      title,
      description,
      startDate,
      endDate,
      prizes,
      rules,
      createdBy: req.user.userId
    });
    await hackathon.save();
    res.status(201).json(hackathon);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Update hackathon (admin only)
exports.updateHackathon = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const hackathon = await Hackathon.findByIdAndUpdate(id, updates, { new: true });
    if (!hackathon) return res.status(404).json({ message: 'Hackathon not found' });
    res.json(hackathon);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Delete hackathon (admin only)
exports.deleteHackathon = async (req, res) => {
  try {
    const { id } = req.params;
    const hackathon = await Hackathon.findByIdAndDelete(id);
    if (!hackathon) return res.status(404).json({ message: 'Hackathon not found' });
    res.json({ message: 'Hackathon deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

// Get all hackathons
exports.getAllHackathons = async (req, res) => {
  try {
    const hackathons = await Hackathon.find().populate('createdBy', 'name email');
    res.json(hackathons);
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
