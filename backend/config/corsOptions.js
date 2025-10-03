// backend/config/corsOptions.js
const corsOptions = {
  origin: '*', // Change to your frontend URL in production
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
};

module.exports = corsOptions;
