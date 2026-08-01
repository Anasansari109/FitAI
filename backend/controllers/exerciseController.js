const Exercise = require("../models/Exercise");

// =====================================================
// GET ALL EXERCISES
// =====================================================

const getAllExercises = async (req, res) => {
  try {
    const exercises = await Exercise.find({
      isActive: true,
    });

    return res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET EXERCISE BY ID
// =====================================================

const getExerciseById = async (
  req,
  res
) => {
  try {
    const exercise =
      await Exercise.findOne({
        id: req.params.id,
        isActive: true,
      });

    if (!exercise) {
      return res.status(404).json({
        success: false,
        message: "Exercise not found",
      });
    }

    return res.status(200).json({
      success: true,
      exercise,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// =====================================================
// GET EXERCISES BY CATEGORY
// =====================================================

const getExercisesByCategory =
  async (req, res) => {
    try {
      const exercises =
        await Exercise.find({
          category:
            req.params.category,
          isActive: true,
        });

      return res.status(200).json({
        success: true,
        count: exercises.length,
        exercises,
      });
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };

// =====================================================
// SEARCH EXERCISES
// =====================================================

const searchExercises = async (
  req,
  res
) => {
  try {
    const keyword =
      req.query.q || "";

    const exercises =
      await Exercise.find({
        isActive: true,
        name: {
          $regex: keyword,
          $options: "i",
        },
      });

    return res.status(200).json({
      success: true,
      count: exercises.length,
      exercises,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllExercises,
  getExerciseById,
  getExercisesByCategory,
  searchExercises,
};