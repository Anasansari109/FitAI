import { useProgress } from "../../context/ProgressContext";

function WeeklyProgressCard() {
  const { progressData } = useProgress();

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <h2 className="text-xl font-bold mb-6">
        Weekly Progress
      </h2>

      <div className="space-y-4">

        <div className="flex justify-between">
          <span>Workout Completed</span>

          <span>
            {progressData.workoutCompleted || 0}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Diet Followed</span>

          <span>
            {progressData.dietCompleted || 0}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Current Weight</span>

          <span>
            {progressData.currentWeight || 0} kg
          </span>
        </div>

        <div className="flex justify-between">
          <span>Starting Weight</span>

          <span>
            {progressData.startingWeight || 0} kg
          </span>
        </div>

        <div className="flex justify-between">
          <span>Current Streak</span>

          <span>
            {progressData.streak || 0} Days 🔥
          </span>
        </div>

      </div>
    </div>
  );
}

export default WeeklyProgressCard;