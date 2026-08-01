const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
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

    foodType: {
      type: String,
      enum: [
        "Vegetarian",
        "Vegan",
        "Eggetarian",
        "Non Vegetarian",
      ],
      required: true,
    },

    mealTypes: {
      type: [String],
      default: [],
    },

    // =====================================================
    // NUTRITION
    // =====================================================

    calories: {
      type: Number,
      required: true,
      min: 0,
    },

    protein: {
      type: Number,
      required: true,
      min: 0,
    },

    carbs: {
      type: Number,
      required: true,
      min: 0,
    },

    fats: {
      type: Number,
      required: true,
      min: 0,
    },

    fiber: {
      type: Number,
      default: 0,
      min: 0,
    },

    sugar: {
      type: Number,
      default: 0,
      min: 0,
    },

    sodium: {
      type: Number,
      default: 0,
      min: 0,
    },

    // =====================================================
    // SERVING
    // =====================================================

    serving: {
      type: String,
      required: true,
    },

    imageUrl: {
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
  "Food",
  foodSchema
);