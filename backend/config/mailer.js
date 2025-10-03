const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

exports.sendRegistrationEmail = async (to, name) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Welcome to DevCircle!',
    text: `Hello ${name},\n\nThank you for registering at DevCircle!`
  });
};

exports.sendTeamInvite = async (to, teamName) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Team Invitation',
    text: `You have been invited to join the team: ${teamName}`
  });
};

exports.sendSubmissionDeadline = async (to, hackathonTitle, deadline) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Submission Deadline Reminder',
    text: `Reminder: Submission deadline for ${hackathonTitle} is ${deadline}`
  });
};
