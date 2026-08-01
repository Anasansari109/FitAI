const mongoose = require("mongoose");

const exerciseSchema = new mongoose.Schema(
  {
    // =====================================================
    // BASIC INFORMATION
    // =====================================================

    id: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    difficulty: {
      type: String,
      required: true,
      trim: true,
    },

    // =====================================================
    // EXERCISE DETAILS
    // =====================================================

    equipment: {
      type: [String],
      default: [],
    },

    primaryMuscles: {
      type: [String],
      default: [],
    },

    secondaryMuscles: {
      type: [String],
      default: [],
    },

    instructions: {
      type: [String],
      default: [],
    },

    tips: {
      type: [String],
      default: [],
    },

    commonMistakes: {
      type: [String],
      default: [],
    },

    // =====================================================
    // MEDIA
    // =====================================================

    imageUrl: {
      type: String,
      default: "",
    },

    videoUrl: {
      type: String,
      default: "",
    },

    // =====================================================
    // STATUS
    // =====================================================

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Exercise",
  exerciseSchema
);