const Food = require("../models/Food");

const foodLibrary = require("../../shared/foodLibrary");

const seedFoods = async () => {
  try {
    await Food.deleteMany();

    await Food.insertMany(foodLibrary);

    console.log("✅ Foods Seeded");
  } catch (error) {
    console.log(error);
  }
};

module.exports = seedFoods;