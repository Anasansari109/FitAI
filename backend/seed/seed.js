require("dotenv").config();

const mongoose = require("mongoose");

const connectDB = require("../config/db");

const seedFoods = require("./foodSeed");
const seedExercises = require("./exerciseSeed");

const seedDatabase = async () => {
  try {
    await connectDB();

    console.log("🚀 Seeding Database...");

    await seedFoods();

    await seedExercises();

    console.log("✅ Database Seeded Successfully");

    mongoose.connection.close();
  } catch (error) {
    console.error(error);

    mongoose.connection.close();
  }
};

seedDatabase();