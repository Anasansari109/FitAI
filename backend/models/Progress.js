const mongoose = require("mongoose");

const progressSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    startingWeight: {
      type: Number,
      default: null,
    },

    currentWeight: {
      type: Number,
      default: null,
    },

    weightHistory: [
      {
        weight: Number,
        date: String,
      },
    ],

    waterIntake: {
      type: Number,
      default: 0,
    },

    workoutCompleted: {
      type: Number,
      default: 0,
    },

    dietCompleted: {
      type: Number,
      default: 0,
    },

    streak: {
      type: Number,
      default: 0,
    },

    energyLevel: {
      type: String,
      default: "",
    },

    lastWorkoutDate: {
      type: String,
      default: "",
    },

    lastDietDate: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Progress",
  progressSchema
);