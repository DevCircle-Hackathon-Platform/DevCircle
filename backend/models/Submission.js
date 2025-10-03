const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  teamId: { type: mongoose.Schema.Types.ObjectId, ref: 'Team', required: true },
  hackathonId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hackathon', required: true },
  projectTitle: { type: String, required: true },
  description: { type: String, required: true },
  techStack: { type: [String], default: [] },
  githubLink: { type: String, required: true },
  demoLink: { type: String },
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
