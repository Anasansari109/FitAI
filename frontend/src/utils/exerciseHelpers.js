import exerciseLibrary from "../shared/exerciseLibrary";

export function getExerciseById(id) {
  return exerciseLibrary.find(
    (exercise) => exercise.id === id
  );
}