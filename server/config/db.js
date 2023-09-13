const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.mongoDB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Mongo DB conected: ${conn.connection.host}`);
  } catch (err) {
    console.log('database connection failed. exiting now...');
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;