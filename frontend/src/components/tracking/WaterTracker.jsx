import { useProgress } from "../../context/ProgressContext";

function WaterTracker() {
  const { progressData, updateProgress } =
    useProgress();

  const addGlass = () => {
    updateProgress({
      waterIntake:
        (progressData.waterIntake || 0) + 1,
    });
  };

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-4">
        Water Intake
      </h2>

      <p className="text-3xl font-bold mb-4">
        {progressData.waterIntake || 0} Glasses
      </p>

      <button
        onClick={addGlass}
        className="
          bg-blue-600
          text-white
          px-5
          py-3
          rounded-xl
          font-semibold
        "
      >
        + Add Glass
      </button>
    </div>
  );
}

export default WaterTracker;