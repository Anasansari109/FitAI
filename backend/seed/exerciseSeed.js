const Exercise = require("../models/Exercise");

const exerciseLibrary = require("../../shared/exerciseLibrary");

const seedExercises = async () => {
  try {
    await Exercise.deleteMany();

    await Exercise.insertMany(exerciseLibrary);

    console.log("✅ Exercises Seeded");
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedExercises;