import { useUserPlan } from "../context/UserPlanContext";
import { getFoodById } from "../utils/foodHelpers";

function DietPage() {
  const { userPlan } = useUserPlan();

  const dietPlan = userPlan?.dietPlan;

  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-6">
          Your Diet Plan
        </h1>

        <div className="bg-white rounded-3xl p-6">

          <p>
            Calories:
            {" "}
            {dietPlan?.calories}
          </p>

          <p className="mb-6">
            Protein Goal:
            {" "}
            {dietPlan?.proteinGoal}g
          </p>

          <div className="space-y-4">
            {dietPlan?.meals?.map((foodId) => {
              const food =
                getFoodById(foodId);

              return (
                <div
                  key={foodId}
                  className="border rounded-2xl p-4"
                >
                  <h3 className="font-bold">
                    {food?.name}
                  </h3>

                  <p>
                    Serving:
                    {" "}
                    {food?.serving}
                  </p>

                  <p>
                    Protein:
                    {" "}
                    {food?.protein}g
                  </p>

                  <p>
                    Calories:
                    {" "}
                    {food?.calories}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}

export default DietPage;