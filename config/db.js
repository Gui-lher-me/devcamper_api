const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

async function connectDB() {
  const conn = await mongoose.connect(process.env.MONGO_URI);

  console.log(conn.connection.host);
}

module.exports = connectDB;
