import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";

function GoalPage() {
  const navigate = useNavigate();

  const { updateSection } = useOnboarding();

  const [selectedGoal, setSelectedGoal] =
    useState("");

  const [secondaryGoals, setSecondaryGoals] =
    useState([]);

  const goals = [
    {
      id: "weight_loss",
      icon: "⚖️",
      title: "Weight Loss",
      description:
        "Reduce body fat and get leaner",
    },
    {
      id: "weight_gain",
      icon: "📈",
      title: "Weight Gain",
      description:
        "Increase healthy body weight",
    },
    {
      id: "muscle_gain",
      icon: "💪",
      title: "Muscle Gain",
      description:
        "Build muscle mass and size",
    },
    {
      id: "strength",
      icon: "🏋️",
      title: "Strength",
      description:
        "Become stronger and improve performance",
    },
    {
      id: "general_fitness",
      icon: "❤️",
      title: "General Fitness",
      description:
        "Stay active, healthy and fit",
    },
  ];

  const secondaryGoalOptions = [
    "Fat Loss",
    "Strength",
    "Endurance",
    "Flexibility",
    "Better Sleep",
    "Better Posture",
    "More Energy",
    "Heart Health",
  ];

  const toggleSecondaryGoal = (goal) => {
    if (secondaryGoals.includes(goal)) {
      setSecondaryGoals(
        secondaryGoals.filter(
          (g) => g !== goal
        )
      );
    } else {
      setSecondaryGoals([
        ...secondaryGoals,
        goal,
      ]);
    }
  };

  const handleNext = async () => {
    if (!selectedGoal) {
      alert(
        "Please select your primary goal."
      );
      return;
    }

    await updateSection("goal", {
      primaryGoal: selectedGoal,
      secondaryGoals,
    });

    navigate("/onboarding/lifestyle");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-4xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Step 2 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Select Your Goal
          </h1>

          <p className="text-slate-600 mb-8">
            Choose your primary fitness
            goal.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {goals.map((goal) => (
              <button
                type="button"
                key={goal.id}
                onClick={() =>
                  setSelectedGoal(goal.id)
                }
                className={`
                  text-left
                  p-5
                  rounded-2xl
                  border-2
                  transition-all
                  duration-200

                  ${
                    selectedGoal === goal.id
                      ? "bg-blue-600 border-blue-600 text-white"
                      : "bg-white border-slate-200 hover:border-blue-400"
                  }
                `}
              >
                <div className="text-4xl mb-3">
                  {goal.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">
                  {goal.title}
                </h3>

                <p
                  className={
                    selectedGoal === goal.id
                      ? "text-blue-100"
                      : "text-slate-600"
                  }
                >
                  {goal.description}
                </p>
              </button>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-10 mb-2">
            Secondary Goals
          </h2>

          <p className="text-slate-600 mb-5">
            Optional: Select anything else
            you would like to improve.
          </p>

          <div className="flex flex-wrap gap-3">
            {secondaryGoalOptions.map(
              (goal) => (
                <button
                  type="button"
                  key={goal}
                  onClick={() =>
                    toggleSecondaryGoal(
                      goal
                    )
                  }
                  className={`
                    px-4
                    py-2
                    rounded-full
                    border
                    transition-all

                    ${
                      secondaryGoals.includes(
                        goal
                      )
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-white border-slate-300 hover:border-blue-400"
                    }
                  `}
                >
                  {goal}
                </button>
              )
            )}
          </div>

          <PrimaryButton
            className="w-full mt-8"
            onClick={handleNext}
          >
            Next Step
          </PrimaryButton>
        </Card>
      </div>
    </div>
  );
}

export default GoalPage;