import { useUserPlan } from "../context/UserPlanContext";
import { getExerciseById } from "../utils/exerciseHelpers";

function WorkoutPlanPage() {
  const { userPlan } = useUserPlan();

  const workoutPlan = userPlan?.workoutPlan;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Your Workout Plan
        </h1>

        <div className="space-y-6">
          {workoutPlan?.days?.map((day) => (
            <div
              key={day.day}
              className="bg-white rounded-3xl p-6 shadow-sm"
            >
              <h2 className="text-2xl font-bold mb-4">
                Day {day.day} - {day.title}
              </h2>

              <div className="space-y-4">
                {day.exercises.map((exercise) => {
                  const info =
                    getExerciseById(
                      exercise.exerciseId
                    );

                  return (
                    <div
                      key={exercise.exerciseId}
                      className="border rounded-2xl p-4"
                    >
                      <h3 className="font-bold text-lg">
                        {info?.name}
                      </h3>

                      <p>
                        Sets:
                        {" "}
                        {exercise.sets}
                      </p>

                      <p>
                        Reps:
                        {" "}
                        {exercise.reps}
                      </p>

                      <p>
                        Rest:
                        {" "}
                        {exercise.rest}
                        sec
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default WorkoutPlanPage;