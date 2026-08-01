import { useParams, Link } from "react-router-dom";

import { getFoodById } from "../utils/foodHelpers";

function FoodDetailsPage() {
  const { id } = useParams();

  const food = getFoodById(id);

  if (!food) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-bold">
        Food Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-4xl mx-auto">

        <Link
          to="/diet"
          className="text-green-600 hover:underline mb-6 inline-block"
        >
          ← Back to Diet
        </Link>

        <div className="bg-white rounded-3xl shadow-sm overflow-hidden">

          {food.imageUrl && (
            <img
              src={food.imageUrl}
              alt={food.name}
              className="w-full h-80 object-cover"
            />
          )}

          <div className="p-8">

            <h1 className="text-4xl font-bold mb-6">
              {food.name}
            </h1>

            <div className="grid md:grid-cols-2 gap-4 mb-8">

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Category
                </p>

                <p className="font-bold">
                  {food.category}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Food Type
                </p>

                <p className="font-bold">
                  {food.foodType}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Serving
                </p>

                <p className="font-bold">
                  {food.serving}
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Calories
                </p>

                <p className="font-bold">
                  {food.calories} kcal
                </p>
              </div>

            </div>

            <h2 className="text-2xl font-bold mb-4">
              Nutrition Facts
            </h2>

            <div className="grid md:grid-cols-2 gap-4">

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Protein
                </p>

                <p className="font-bold">
                  {food.protein} g
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Carbohydrates
                </p>

                <p className="font-bold">
                  {food.carbs} g
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Fat
                </p>

                <p className="font-bold">
                  {food.fats} g
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Fiber
                </p>

                <p className="font-bold">
                  {food.fiber} g
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Sugar
                </p>

                <p className="font-bold">
                  {food.sugar} g
                </p>
              </div>

              <div className="border rounded-2xl p-4">
                <p className="text-slate-500">
                  Sodium
                </p>

                <p className="font-bold">
                  {food.sodium} mg
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default FoodDetailsPage;