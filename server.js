const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const logger = require('./middleware/logger');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Connect to database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Middleware
// app.use(logger)

// Body parser
app.use(express.json()); // allow to use req.body

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(error.message);
  // Close server & exit process
  server.close(() => process.exit(1));
});
