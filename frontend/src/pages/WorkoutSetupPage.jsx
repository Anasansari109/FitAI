import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";

function WorkoutSetupPage() {
  const navigate = useNavigate();

  const { updateSection } = useOnboarding();

  const [experience, setExperience] =
    useState("");

  const [workoutDays, setWorkoutDays] =
    useState("");

  const [workoutTime, setWorkoutTime] =
    useState("");

  const [injury, setInjury] =
    useState("");

  const [motivation, setMotivation] =
    useState("");

  const experienceOptions = [
    "Beginner",
    "Intermediate",
    "Advanced",
  ];

  const daysOptions = [
    "3 Days",
    "4 Days",
    "5 Days",
    "6 Days",
  ];

  const timeOptions = [
    "Morning",
    "Afternoon",
    "Evening",
    "Night",
  ];

  const injuryOptions = [
    "No Issues",
    "Knee Pain",
    "Back Pain",
    "Shoulder Pain",
    "Other",
  ];

  const motivationOptions = [
    "Low",
    "Medium",
    "High",
  ];

  const handleComplete = async () => {
    if (
      !experience ||
      !workoutDays ||
      !workoutTime ||
      !injury ||
      !motivation
    ) {
      alert("Please complete all fields.");
      return;
    }

    await updateSection("workout", {
      experience,
      workoutDays,
      workoutTime,
      injury,
      motivation,
    });

    navigate("/plan-summary");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Step 5 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Workout Setup
          </h1>

          <p className="text-slate-600 mb-8">
            Help us create the perfect workout
            plan.
          </p>

          <h2 className="text-xl font-bold mb-4">
            Workout Experience
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {experienceOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setExperience(item)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  experience === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Workout Days Per Week
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {daysOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setWorkoutDays(item)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  workoutDays === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Preferred Workout Time
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {timeOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setWorkoutTime(item)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  workoutTime === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Injuries / Limitations
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {injuryOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setInjury(item)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  injury === item
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <h2 className="text-xl font-bold mb-4">
            Motivation Level
          </h2>

          <div className="flex flex-wrap gap-3 mb-8">
            {motivationOptions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setMotivation(item)
                }
                className={`px-4 py-2 rounded-full border transition-all ${
                  motivation === item
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
            onClick={handleComplete}
          >
            Complete Setup
          </PrimaryButton>
        </Card>
      </div>
    </div>
  );
}

export default WorkoutSetupPage;