import { useUserPlan } from "../../context/UserPlanContext";
import { useNavigate } from "react-router-dom";

import { getFoodById } from "../../utils/foodHelpers";

function TodayDietCard() {
  const { userPlan, loading } =
    useUserPlan();

  const navigate = useNavigate();

  if (loading) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        Loading Diet...
      </div>
    );
  }

  const diet =
    userPlan?.dietPlan;

  const meals =
    diet?.meals || [];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <div className="flex justify-between items-center mb-5">
        <h2 className="text-xl font-bold">
          Today's Diet
        </h2>

        <span className="text-green-600 font-medium">
          {meals.length} Meals
        </span>
      </div>

      {meals.length === 0 ? (
        <p className="text-slate-500">
          No diet found.
        </p>
      ) : (
        <div className="space-y-5">

          {meals
            .slice(0, 2)
            .map((meal, index) => (
              <div
                key={index}
                className="border-b pb-4"
              >
                <h3 className="font-semibold mb-2">
                  {meal.mealType}
                </h3>

                {(meal.items || []).map(
                  (item, idx) => {
                    const food =
                      getFoodById(
                        item.primary || item.foodId
                      );

                    return (
                      <p
                        key={idx}
                        className="text-sm text-slate-600"
                      >
                        • {food?.name ||
                          item.primary ||
                          item.foodId}
                        {item.quantity &&
                          ` (${item.quantity}${
                            item.unit
                              ? ` ${item.unit}`
                              : ""
                          })`}
                      </p>
                    );
                  }
                )}
              </div>
            ))}

        </div>
      )}

      <button
        onClick={() =>
          navigate("/diet")
        }
        className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
      >
        View Full Diet
      </button>

    </div>
  );
}

export default TodayDietCard;