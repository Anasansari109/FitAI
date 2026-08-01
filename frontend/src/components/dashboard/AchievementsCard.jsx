import { useProgress } from "../../context/ProgressContext";

function AchievementsCard() {
  const { progressData } =
    useProgress();

  const achievements = [
    {
      title: "First Workout",
      unlocked:
        progressData.workoutCompleted >= 1,
    },

    {
      title: "7 Day Streak",
      unlocked:
        progressData.streak >= 7,
    },

    {
      title: "10 Workouts",
      unlocked:
        progressData.workoutCompleted >= 10,
    },

    {
      title: "30 Diets",
      unlocked:
        progressData.dietCompleted >= 30,
    },

    {
      title: "100 Glass Water",
      unlocked:
        progressData.waterIntake >= 100,
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <h2 className="text-xl font-bold mb-5">
        🏆 Achievements
      </h2>

      <div className="space-y-3">

        {achievements.map(
          (
            achievement,
            index
          ) => (
            <div
              key={index}
              className="flex justify-between items-center border-b pb-2"
            >
              <span>
                {achievement.title}
              </span>

              <span className="text-xl">
                {achievement.unlocked
                  ? "✅"
                  : "🔒"}
              </span>
            </div>
          )
        )}

      </div>

    </div>
  );
}

export default AchievementsCard;