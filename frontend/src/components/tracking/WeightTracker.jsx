import { useProgress } from "../../context/ProgressContext";

function WeightTracker() {
  const { progressData } = useProgress();

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-4">
        Weight Tracker
      </h2>

      <div className="space-y-3">
        <p>
          Starting Weight:
          {" "}
          {progressData.startingWeight || "-"} kg
        </p>

        <p>
          Current Weight:
          {" "}
          {progressData.currentWeight || "-"} kg
        </p>

       <p>
  Change:
  {" "}
  {progressData.currentWeight &&
  progressData.startingWeight
    ? (
        progressData.currentWeight -
        progressData.startingWeight
      ).toFixed(1)
    : "-"}
  kg
</p>
      </div>
    </div>
  );
}

export default WeightTracker;