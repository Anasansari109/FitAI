import { useParams } from "react-router-dom";

import { getExerciseById } from "../utils/exerciseHelpers";
import exerciseImages from "../utils/exerciseImages";

function ExerciseDetailsPage() {
  const { id } = useParams();

  const exercise =
    getExerciseById(id);

  if (!exercise) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Exercise Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white rounded-3xl overflow-hidden shadow-sm">

          {exerciseImages[id] && (
            <img
              src={exerciseImages[id]}
              alt={exercise.name}
              className="w-full h-80 object-cover"
            />
          )}

          <div className="p-8">

            <h1 className="text-4xl font-bold mb-4">
              {exercise.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Category
                </p>

                <p className="font-bold">
                  {exercise.category}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Difficulty
                </p>

                <p className="font-bold">
                  {exercise.difficulty}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Equipment
                </p>

                <p className="font-bold">
                  {exercise.equipment?.join(", ") ||
                    "-"}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Primary Muscle
                </p>

                <p className="font-bold">
                  {exercise.primaryMuscles?.join(", ") ||
                    "-"}
                </p>
              </div>

            </div>

            <div className="border rounded-2xl p-5">

              <h2 className="text-xl font-bold mb-3">
                Instructions
              </h2>

              <ul className="space-y-2 list-disc pl-5">

                {exercise.instructions?.length ? (
                  exercise.instructions.map(
                    (
                      step,
                      index
                    ) => (
                      <li key={index}>
                        {step}
                      </li>
                    )
                  )
                ) : (
                  <li>
                    No instructions available.
                  </li>
                )}

              </ul>

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default ExerciseDetailsPage;