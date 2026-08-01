const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    // =====================================================
    // AUTHENTICATION
    // =====================================================

    name: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false,
    },

    isVerified: {
      type: Boolean,
      default: false,
    },

    googleId: {
      type: String,
      default: "",
    },

    // =====================================================
    // PERSONAL INFORMATION
    // =====================================================

    gender: {
      type: String,
      enum: ["male", "female"],
      default: null,
    },

    age: {
      type: Number,
      min: 10,
      max: 100,
      default: null,
    },

    height: {
      type: Number,
      min: 50,
      max: 250,
      default: null,
    },

    weight: {
      type: Number,
      min: 20,
      max: 300,
      default: null,
    },

    // =====================================================
    // FITNESS GOALS
    // =====================================================

    primaryGoal: {
      type: String,
      enum: [
        "weight_loss",
        "weight_gain",
        "muscle_gain",
        "maintenance",
      ],
      default: null,
    },

    secondaryGoals: [
      {
        type: String,
        enum: [
          "fat_loss",
          "strength",
          "endurance",
          "flexibility",
          "better_sleep",
          "better_posture",
          "more_energy",
          "heart_health",
        ],
      },
    ],

    // =====================================================
    // LIFESTYLE
    // =====================================================

    livingType: {
      type: String,
      enum: ["home", "hostel", "pg"],
      default: null,
    },

    foodAvailability: {
      type: String,
      enum: [
        "can_cook",
        "mess_only",
        "tiffin_service",
        "both",
      ],
      default: null,
    },

    dailyTime: {
      type: String,
      enum: [
        "15_30_min",
        "30_45_min",
        "45_60_min",
        "60_plus_min",
      ],
      default: null,
    },

    workoutLocation: {
      type: String,
      enum: [
        "home",
        "gym",
        "both",
      ],
      default: null,
    },

    budget: {
      type: String,
      enum: [
        "low",
        "medium",
        "high",
      ],
      default: null,
    },

    // =====================================================
    // FOOD PREFERENCES
    // =====================================================

    foodType: {
      type: String,
      enum: [
        "vegetarian",
        "eggetarian",
        "non_vegetarian",
      ],
      default: null,
    },

    availableFoods: [
      {
        type: String,
      },
    ],

    waterIntake: {
      type: String,
      enum: [
        "less_than_2l",
        "2_3l",
        "3_4l",
        "4l_plus",
      ],
      default: null,
    },

    // =====================================================
    // WORKOUT PREFERENCES
    // =====================================================

    experienceLevel: {
      type: String,
      enum: [
        "beginner",
        "intermediate",
        "advanced",
      ],
      default: null,
    },

    workoutDays: {
      type: Number,
      min: 3,
      max: 6,
      default: 3,
    },

    workoutTime: {
      type: String,
      enum: [
        "morning",
        "afternoon",
        "evening",
        "night",
      ],
      default: null,
    },

    injury: {
      type: String,
      default: "",
    },

    // =====================================================
    // DAILY TARGETS
    // =====================================================

    calorieGoal: {
      type: Number,
      default: 0,
    },

    proteinGoal: {
      type: Number,
      default: 0,
    },

    carbsGoal: {
      type: Number,
      default: 0,
    },

    fatGoal: {
      type: Number,
      default: 0,
    },

    // =====================================================
    // APP STATUS
    // =====================================================

    isOnboardingCompleted: {
      type: Boolean,
      default: false,
    },

    accountStatus: {
      type: String,
      enum: ["active", "blocked", "deleted"],
      default: "active",
    },

    lastLogin: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);