import { useState } from "react";
import { Link } from "react-router-dom";

import { useUserPlan } from "../context/UserPlanContext";
import { getFoodById } from "../utils/foodHelpers";

function DietPage() {
  const { userPlan } =
    useUserPlan();

  const [search, setSearch] =
    useState("");

  const dietPlan =
    userPlan?.dietPlan;

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-2">
          Your Diet Plan
        </h1>

        <p className="text-slate-600 mb-6">
          Follow your personalized nutrition plan.
        </p>

        <input
          type="text"
          placeholder="🔍 Search Food..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full mb-6 px-5 py-3 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
        />

        <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200 mb-6">

          <h2 className="text-xl font-bold mb-4">
            Daily Targets
          </h2>

          <div className="grid md:grid-cols-2 gap-4">

            <div className="border rounded-2xl p-4">
              <p className="text-slate-500">
                Calories
              </p>

              <p className="text-2xl font-bold">
                {dietPlan?.calories || 0}
              </p>
            </div>

            <div className="border rounded-2xl p-4">
              <p className="text-slate-500">
                Protein Goal
              </p>

              <p className="text-2xl font-bold">
                {dietPlan?.proteinGoal || 0} g
              </p>
            </div>

          </div>

        </div>

        <div className="space-y-6">

          {dietPlan?.meals?.map(
            (meal, index) => {

              const filteredItems =
                meal.items.filter(
                  (item) => {

                    const food =
                      getFoodById(
                        item.primary
                      );

                    return (
                      food?.name
                        ?.toLowerCase()
                        .includes(
                          search.toLowerCase()
                        )
                    );
                  }
                );

              if (
                filteredItems.length === 0
              ) {
                return null;
              }

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200"
                >

                  <div className="flex justify-between mb-5">

                    <h2 className="text-xl font-bold">
                      {meal.mealType}
                    </h2>

                    <span className="text-green-600">
                      {meal.targetCalories} kcal
                    </span>

                  </div>

                  <div className="space-y-4">

                    {filteredItems.map(
                      (item, idx) => {

                        const food =
                          getFoodById(
                            item.primary
                          );

                        return (

                          <Link
                            key={idx}
                            to={`/food/${item.primary}`}
                            className="flex justify-between border-b pb-3 hover:bg-slate-50 rounded-xl p-2 transition"
                          >

                            <div>

                              <p className="font-medium">
                                {food?.name ||
                                  item.primary}
                              </p>

                              <p className="text-sm text-slate-500">
                                {food?.serving}
                              </p>

                            </div>

                            <span>
                              {item.quantity}{" "}
                              {item.unit}
                            </span>

                          </Link>

                        );
                      }
                    )}

                  </div>

                </div>
              );
            }
          )}

        </div>

      </div>

    </div>
  );
}

export default DietPage;