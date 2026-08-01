import foodLibrary from "../shared/foodLibrary";

export function getFoodById(id) {
  return foodLibrary.find(
    (food) => food.id === id
  );
}