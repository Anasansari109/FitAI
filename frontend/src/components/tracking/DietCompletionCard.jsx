import { useProgress } from "../../context/ProgressContext";
import api from "../../services/api";

function DietCompletionCard() {
  const {
    progressData,
    updateProgress,
  } = useProgress();

  const markDietDone = async () => {
    const today =
      new Date().toDateString();

    if (
      progressData.lastDietDate ===
      today
    ) {
      alert(
        "Diet already completed today"
      );
      return;
    }

    try {
      await api.put(
        "/diet/complete",
        {
          meal: "breakfast",
        }
      );

      const updated = {
        ...progressData,

        dietCompleted:
          (progressData.dietCompleted ||
            0) + 1,

        lastDietDate: today,
      };

      await api.post(
        "/progress/save",
        updated
      );

      updateProgress(updated);

      alert(
        "Diet Completed Successfully"
      );
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Failed to complete diet"
      );
    }
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <h2 className="text-xl font-bold mb-4">
        Diet Progress
      </h2>

      <p className="mb-4">
        Completed :{" "}
        {progressData.dietCompleted || 0}
      </p>

      <button
        onClick={markDietDone}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-xl font-semibold"
      >
        Mark Diet Complete
      </button>

    </div>
  );
}

export default DietCompletionCard;