import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";

function LifestylePage() {
  const navigate = useNavigate();

  const { updateSection } = useOnboarding();

  const [livingType, setLivingType] = useState("");
  const [foodAvailability, setFoodAvailability] =
    useState("");
  const [dailyTime, setDailyTime] = useState("");
  const [workoutLocation, setWorkoutLocation] =
    useState("");
  const [budget, setBudget] = useState("");

  const livingOptions = [
    { id: "home", icon: "🏠", title: "Home" },
    { id: "hostel", icon: "🏢", title: "Hostel" },
    { id: "pg", icon: "🏘️", title: "PG" },
  ];

  const foodOptions = [
    "Can Cook Food",
    "Mess Food Only",
    "Tiffin Service",
    "Both",
  ];

  const timeOptions = [
    "15-30 min",
    "30-45 min",
    "45-60 min",
    "60+ min",
  ];

  const workoutOptions = [
    "Home Workout",
    "Gym Access",
    "Both",
  ];

  const budgetOptions = [
    "Low Budget",
    "Medium Budget",
    "High Budget",
  ];

  const handleNext = async () => {
    if (
      !livingType ||
      !foodAvailability ||
      !dailyTime ||
      !workoutLocation ||
      !budget
    ) {
      alert("Please complete all fields.");
      return;
    }

    await updateSection("lifestyle", {
      livingType,
      foodAvailability,
      dailyTime,
      workoutLocation,
      budget,
    });

    navigate("/onboarding/food");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Step 3 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Lifestyle Information
          </h1>

          <p className="text-slate-600 mb-8">
            Help us understand your daily lifestyle.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Where do you live?
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {livingOptions.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setLivingType(item.id)}
                className={`p-5 rounded-2xl border-2 transition-all ${
                  livingType === item.id
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-200 hover:border-blue-400"
                }`}
              >
                <div className="text-4xl mb-2">
                  {item.icon}
                </div>

                <h3 className="font-bold">
                  {item.title}
                </h3>
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Food Availability
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {foodOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setFoodAvailability(item)
                }
                className={`px-4 py-2 rounded-full border ${
                  foodAvailability === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Daily Free Time
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {timeOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setDailyTime(item)}
                className={`px-4 py-2 rounded-full border ${
                  dailyTime === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Workout Location
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {workoutOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setWorkoutLocation(item)
                }
                className={`px-4 py-2 rounded-full border ${
                  workoutLocation === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Monthly Food Budget
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {budgetOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setBudget(item)}
                className={`px-4 py-2 rounded-full border ${
                  budget === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <PrimaryButton
            className="w-full"
            onClick={handleNext}
          >
            Next Step
          </PrimaryButton>
        </Card>
      </div>
    </div>
  );
}

export default LifestylePage;