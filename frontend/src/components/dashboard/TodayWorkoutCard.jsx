import { useUserPlan } from "../../context/UserPlanContext";
import { useNavigate } from "react-router-dom";

import { getExerciseById } from "../../utils/exerciseHelpers";

function TodayWorkoutCard() {
  const { userPlan, loading } =
    useUserPlan();

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        Loading Workout...
      </div>
    );
  }

  const workout =
    userPlan?.workoutPlan;

  const todayWorkout =
    workout?.days?.[0]?.exercises || [];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          Today's Workout
        </h2>

        <span className="text-blue-600 font-medium">
          {todayWorkout.length} Exercises
        </span>
      </div>

      {todayWorkout.length === 0 ? (
        <p className="text-slate-500">
          No workout found.
        </p>
      ) : (
        <div className="space-y-4">
          {todayWorkout
            .slice(0, 4)
            .map((exercise, index) => {
              const info =
                getExerciseById(
                  exercise.primary
                );

              return (
                <div
                  key={index}
                  className="border-b pb-3"
                >
                  <p className="font-semibold">
                    {info?.name ||
                      exercise.primary}
                  </p>

                  <p className="text-sm text-slate-500 mt-1">
                    {exercise.sets} Sets •{" "}
                    {exercise.reps} •{" "}
                    {exercise.rest}s Rest
                  </p>
                </div>
              );
            })}
        </div>
      )}

      <button
        onClick={() =>
          navigate("/workout")
        }
        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition"
      >
        View Workout Plan
      </button>
    </div>
  );
}

export default TodayWorkoutCard;