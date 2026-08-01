import { useUserPlan } from "../../context/UserPlanContext";

function NutritionCard() {
  const { userPlan } = useUserPlan();

  const dietPlan =
    userPlan?.dietPlan;

  const calories =
    dietPlan?.calories || 0;

  const protein =
    dietPlan?.proteinGoal || 0;

  // V2 Ready
  const carbs =
    dietPlan?.carbsGoal || 0;

  const fats =
    dietPlan?.fatGoal || 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <div className="flex justify-between items-center mb-6">

        <h2 className="text-xl font-bold">
          Nutrition Goals
        </h2>

        <span className="text-sm text-slate-500">
          Daily Target
        </span>

      </div>

      <div className="space-y-6">

        {/* Calories */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Calories
            </span>

            <span className="font-semibold">
              {calories}
            </span>

          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full">

            <div
              className="h-3 rounded-full bg-orange-500"
              style={{
                width: calories
                  ? "60%"
                  : "0%",
              }}
            />

          </div>

        </div>

        {/* Protein */}

        <div>

          <div className="flex justify-between mb-2">

            <span className="font-medium">
              Protein
            </span>

            <span className="font-semibold">
              {protein} g
            </span>

          </div>

          <div className="w-full h-3 bg-slate-200 rounded-full">

            <div
              className="h-3 rounded-full bg-green-500"
              style={{
                width: protein
                  ? "45%"
                  : "0%",
              }}
            />

          </div>

        </div>

        {/* Coming Soon */}

        <div className="grid grid-cols-2 gap-4 pt-3">

          <div className="rounded-2xl border border-dashed border-slate-300 p-4">

            <p className="text-sm text-slate-500">
              Carbs
            </p>

            <h3 className="text-xl font-bold mt-1">
              {carbs} g
            </h3>

            <p className="text-xs text-slate-400 mt-2">
              V2 Feature
            </p>

          </div>

          <div className="rounded-2xl border border-dashed border-slate-300 p-4">

            <p className="text-sm text-slate-500">
              Fat
            </p>

            <h3 className="text-xl font-bold mt-1">
              {fats} g
            </h3>

            <p className="text-xs text-slate-400 mt-2">
              V2 Feature
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default NutritionCard;