const dns = require("dns");
const mongoose = require("mongoose");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

const connectDB = async () => {
  try {
    const connection =
      await mongoose.connect(
        process.env.MONGO_URI
      );

    console.log(
      `MongoDB Connected: ${connection.connection.host}`
    );
  } catch (error) {
    console.error(
      "MongoDB Connection Failed"
    );

    console.error(error);

    process.exit(1);
  }
};

module.exports = connectDB;