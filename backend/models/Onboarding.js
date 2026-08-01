const mongoose = require("mongoose");

const onboardingSchema =
  new mongoose.Schema(
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true,
        unique: true,
      },

      personalInfo: {
        type: Object,
        default: {},
      },

      goal: {
        type: Object,
        default: {},
      },

      lifestyle: {
        type: Object,
        default: {},
      },

      food: {
        type: Object,
        default: {},
      },

      workout: {
        type: Object,
        default: {},
      },
    },
    {
      timestamps: true,
    }
  );

module.exports = mongoose.model(
  "Onboarding",
  onboardingSchema
);