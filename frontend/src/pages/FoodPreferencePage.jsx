import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";

function FoodPreferencePage() {
  const navigate = useNavigate();

  const { updateSection } = useOnboarding();

  const [foodType, setFoodType] = useState("");
  const [selectedFoods, setSelectedFoods] = useState([]);
  const [waterIntake, setWaterIntake] = useState("");

  const foodTypes = [
    {
      id: "vegetarian",
      icon: "🥗",
      title: "Vegetarian",
    },
    {
      id: "eggetarian",
      icon: "🥚",
      title: "Eggetarian",
    },
    {
      id: "non_vegetarian",
      icon: "🍗",
      title: "Non Vegetarian",
    },
  ];

  const availableFoods = [
    "Milk",
    "Paneer",
    "Peanut Butter",
    "Soya Chunks",
    "Oats",
    "Banana",
    "Eggs",
    "Chicken",
    "Fish",
    "Curd",
    "Dry Fruits",
  ];

  const waterOptions = [
    "Less than 2L",
    "2-3L",
    "3-4L",
    "4L+",
  ];

  const toggleFood = (food) => {
    if (selectedFoods.includes(food)) {
      setSelectedFoods(
        selectedFoods.filter(
          (item) => item !== food
        )
      );
    } else {
      setSelectedFoods([
        ...selectedFoods,
        food,
      ]);
    }
  };

  const handleNext = async () => {
    if (!foodType || !waterIntake) {
      alert(
        "Please select your food type and water intake."
      );
      return;
    }

    await updateSection("food", {
      foodType,
      availableFoods: selectedFoods,
      waterIntake,
    });

    navigate("/onboarding/workout");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Step 4 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Food Preferences
          </h1>

          <p className="text-slate-600 mb-8">
            Tell us what foods are available to you.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Food Type
          </h2>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {foodTypes.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() =>
                  setFoodType(item.id)
                }
                className={`p-5 rounded-2xl border-2 transition-all ${
                  foodType === item.id
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
            Available Foods
          </h2>

          <p className="text-slate-600 mb-4">
            Select all foods you can regularly eat.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {availableFoods.map((food) => (
              <button
                key={food}
                type="button"
                onClick={() =>
                  toggleFood(food)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  selectedFoods.includes(food)
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {food}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Daily Water Intake
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {waterOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() =>
                  setWaterIntake(option)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  waterIntake === option
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {option}
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

export default FoodPreferencePage;