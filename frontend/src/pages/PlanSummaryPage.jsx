import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";
import { useUserPlan } from "../context/UserPlanContext";
import { useProgress } from "../context/ProgressContext";

import api from "../services/api";

function PlanSummaryPage() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const { onboardingData } = useOnboarding();
  const { saveUserPlan } = useUserPlan();
  const { updateProgress } = useProgress();

  const {
    personalInfo,
    goal,
    lifestyle,
    food,
    workout,
  } = onboardingData;

  const handleAcceptPlan = async () => {
    if (loading) return;

    setLoading(true);

    try {
      const { data } = await api.post(
        "/plan/generate",
        {
          personalInfo,
          goal,
          lifestyle,
          food,
          workout,
        }
      );

      const generatedPlan = data.plan;

      await api.post("/onboarding/save", {
        personalInfo,
        goal,
        lifestyle,
        food,
        workout,
      });

      await api.post("/workout/save", {
        workoutPlan:
          generatedPlan.workoutPlan,
      });

      await api.post("/diet/save", {
        dietPlan:
          generatedPlan.dietPlan,
      });

      await api.post("/progress/save", {
        startingWeight: Number(
          personalInfo?.weight
        ),

        currentWeight: Number(
          personalInfo?.weight
        ),

        waterIntake: 0,

        workoutCompleted: 0,

        dietCompleted: 0,

        streak: 0,

        energyLevel: "Medium",

        lastWorkoutDate: "",

        lastDietDate: "",

        weightHistory: [],
      });

      saveUserPlan(generatedPlan);

      updateProgress({
        startingWeight: Number(
          personalInfo?.weight
        ),

        currentWeight: Number(
          personalInfo?.weight
        ),
      });

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to generate plan"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-5xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Setup Complete
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Your Fitness Plan Summary
          </h1>

          <p className="text-slate-600 mb-8">
            Review your information before
            starting.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <Card className="p-5">
              <h2 className="font-bold text-lg mb-3">
                Personal Information
              </h2>

              <p>Name: {personalInfo?.name || "-"}</p>
              <p>Age: {personalInfo?.age || "-"}</p>
              <p>Gender: {personalInfo?.gender || "-"}</p>
              <p>Height: {personalInfo?.height || "-"} cm</p>
              <p>Weight: {personalInfo?.weight || "-"} kg</p>
            </Card>

            <Card className="p-5">
              <h2 className="font-bold text-lg mb-3">
                Goal
              </h2>

              <p>
                Primary Goal:{" "}
                {goal?.primaryGoal || "-"}
              </p>

              <p>
                Secondary Goals:{" "}
                {goal?.secondaryGoals?.length
                  ? goal.secondaryGoals.join(", ")
                  : "-"}
              </p>
            </Card>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-8">
            <Card className="p-5">
              <h2 className="font-bold text-lg mb-3">
                Lifestyle
              </h2>

              <p>
                Living:{" "}
                {lifestyle?.livingType || "-"}
              </p>

              <p>
                Food Access:{" "}
                {lifestyle?.foodAvailability ||
                  "-"}
              </p>

              <p>
                Free Time:{" "}
                {lifestyle?.dailyTime || "-"}
              </p>

              <p>
                Workout Location:{" "}
                {lifestyle?.workoutLocation ||
                  "-"}
              </p>

              <p>
                Budget:{" "}
                {lifestyle?.budget || "-"}
              </p>
            </Card>

            <Card className="p-5">
              <h2 className="font-bold text-lg mb-3">
                Food Preferences
              </h2>

              <p>
                Food Type:{" "}
                {food?.foodType || "-"}
              </p>

              <p>
                Water Intake:{" "}
                {food?.waterIntake || "-"}
              </p>

              <p>
                Available Foods:{" "}
                {food?.availableFoods?.length
                  ? food.availableFoods.join(", ")
                  : "-"}
              </p>
            </Card>
          </div>

          <Card className="p-5 mb-8">
            <h2 className="font-bold text-lg mb-3">
              Workout Setup
            </h2>

            <p>
              Experience:{" "}
              {workout?.experience || "-"}
            </p>

            <p>
              Workout Days:{" "}
              {workout?.workoutDays || "-"}
            </p>

            <p>
              Workout Time:{" "}
              {workout?.workoutTime || "-"}
            </p>

            <p>
              Injury:{" "}
              {workout?.injury || "-"}
            </p>

            <p>
              Motivation:{" "}
              {workout?.motivation || "-"}
            </p>
          </Card>

          <div className="flex gap-4">
            <button
              onClick={() => navigate(-1)}
              disabled={loading}
              className="flex-1 border border-slate-300 rounded-xl py-3 hover:bg-slate-100 transition disabled:opacity-50"
            >
              Back
            </button>

            <PrimaryButton
              className="flex-1"
              onClick={handleAcceptPlan}
              disabled={loading}
            >
              {loading
                ? "Generating Your AI Plan..."
                : "Generate My Plan"}
            </PrimaryButton>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default PlanSummaryPage;