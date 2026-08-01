import { Link } from "react-router-dom";
import { useState } from "react";

import { useUserPlan } from "../context/UserPlanContext";
import { getExerciseById } from "../utils/exerciseHelpers";

function WorkoutPage() {
  const { userPlan, loading } =
    useUserPlan();

  const [search, setSearch] =
    useState("");

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  const workout =
    userPlan?.workoutPlan;

  if (
    !workout ||
    !workout.days ||
    workout.days.length === 0
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
        No Workout Plan Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Your Workout Plan
        </h1>

        <input
          type="text"
          placeholder="🔍 Search Exercise..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full mb-8 px-5 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
        />

        {workout.days.map((day) => {

          const filteredExercises =
            day.exercises.filter(
              (exercise) => {
                const info =
                  getExerciseById(
                    exercise.primary
                  );

                const exerciseName =
                  info?.name ||
                  exercise.primary;

                return exerciseName
                  .toLowerCase()
                  .includes(
                    search.toLowerCase()
                  );
              }
            );

          if (
            filteredExercises.length === 0
          ) {
            return null;
          }

          return (
            <div
              key={day.day}
              className="bg-white rounded-3xl p-6 mb-6 shadow-sm"
            >

              <h2 className="text-2xl font-bold">
                Day {day.day}
              </h2>

              <p className="text-slate-500 mb-5">
                {day.title}
              </p>

              <div className="space-y-4">

                {filteredExercises.map(
                  (
                    exercise,
                    index
                  ) => {

                    const info =
                      getExerciseById(
                        exercise.primary
                      );

                    return (
                      <div
                        key={index}
                        className="border rounded-2xl p-4"
                      >

                        <Link
                          to={`/exercise/${exercise.primary}`}
                          className="text-lg font-bold text-blue-600 hover:underline"
                        >
                          {info?.name ||
                            exercise.primary}
                        </Link>

                        <div className="grid md:grid-cols-3 gap-3 mt-3">

                          <p>
                            Sets : {exercise.sets}
                          </p>

                          <p>
                            Reps : {exercise.reps}
                          </p>

                          <p>
                            Rest : {exercise.rest}s
                          </p>

                        </div>

                      </div>
                    );
                  }
                )}

              </div>

            </div>
          );
        })}

      </div>
    </div>
  );
}

export default WorkoutPage;