require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const http = require('http');
const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const io = socketio(server, { cors: { origin: '*' } });
// CORS Middleware
app.use(cors(corsOptions));

const sampleRoute = require('./routes/sample');
const authRoute = require('./routes/auth');
const hackathonRoute = require('./routes/hackathon');
const teamRoute = require('./routes/team');
const submissionRoute = require('./routes/submission');

// Middleware
app.use(express.json());


// Routes
app.use('/api/sample', sampleRoute);
app.use('/api/auth', authRoute);
app.use('/api/hackathons', hackathonRoute);
app.use('/api/teams', teamRoute);
app.use('/api/submissions', submissionRoute);

// MongoDB Connection
const connectDB = require('./config/db');
connectDB();

// Socket.IO events
io.on('connection', (socket) => {
  // Team chat room join
  socket.on('joinTeam', (teamId) => {
    socket.join(`team_${teamId}`);
  });
  // Team chat message
  socket.on('teamMessage', ({ teamId, user, message }) => {
    io.to(`team_${teamId}`).emit('teamMessage', { user, message, time: new Date() });
  });
  // Global hackathon announcement
  socket.on('hackathonAnnouncement', ({ hackathonId, announcement }) => {
    io.emit(`hackathon_${hackathonId}_announcement`, { announcement, time: new Date() });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
