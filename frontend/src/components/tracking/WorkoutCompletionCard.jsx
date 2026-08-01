import { useProgress } from "../../context/ProgressContext";
import api from "../../services/api";

function WorkoutCompletionCard() {
  const {
    progressData,
    updateProgress,
  } = useProgress();

  const markWorkoutDone = async () => {
    const today =
      new Date().toDateString();

    if (
      progressData.lastWorkoutDate ===
      today
    ) {
      alert(
        "Workout already completed today"
      );
      return;
    }

    try {
      await api.put(
        "/workout/complete",
        {
          day: 1,
        }
      );

      const updated = {
        ...progressData,

        workoutCompleted:
          (progressData.workoutCompleted ||
            0) + 1,

        streak:
          (progressData.streak || 0) + 1,

        lastWorkoutDate: today,
      };

      await api.post(
        "/progress/save",
        updated
      );

      updateProgress(updated);

      alert(
        "Workout Completed Successfully"
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to complete workout"
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <h2 className="text-xl font-bold mb-4">
        Workout Progress
      </h2>

      <p className="mb-4">
        Completed :{" "}
        {progressData.workoutCompleted || 0}
      </p>

      <button
        onClick={markWorkoutDone}
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition"
      >
        Mark Workout Complete
      </button>

    </div>
  );
}

export default WorkoutCompletionCard;