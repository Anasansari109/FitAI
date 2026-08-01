import { useOnboarding } from "../../context/OnboardingContext";
import { useProgress } from "../../context/ProgressContext";

import LogoutButton from "./LogoutButton";
import { Link } from "react-router-dom";

function DashboardHeader() {
  const {
    onboardingData,
    loading: onboardingLoading,
  } = useOnboarding();

  const {
    progressData,
    loading: progressLoading,
  } = useProgress();

  if (
    onboardingLoading ||
    progressLoading
  ) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
        <h2 className="text-xl font-semibold">
          Loading...
        </h2>
      </div>
    );
  }

  const userName =
    onboardingData?.personalInfo?.name ||
    onboardingData?.personalInfo?.fullName ||
    "Athlete";

  const goal =
    onboardingData?.goal?.primaryGoal ||
    "Fitness";

  const currentWeight =
    progressData?.currentWeight ?? "-";

  const streak =
    progressData?.streak ?? 0;

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">

      <div className="flex justify-between items-start">

        <div>
          <p className="text-slate-500 text-sm">
            Welcome Back 👋
          </p>

          <h1 className="text-3xl font-bold mt-2">
            Assalamualaikum, {userName}
          </h1>
        </div>

        <div className="flex gap-3">

          <Link
            to="/profile"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200"
          >
            Profile
          </Link>

          <Link
            to="/settings"
            className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200"
          >
            Settings
          </Link>

          <LogoutButton />

        </div>

      </div>

      <div className="grid md:grid-cols-3 gap-4 mt-6">

        <div className="bg-blue-100 rounded-xl p-4">
          <p className="text-sm text-slate-500">
            Goal
          </p>

          <h3 className="font-bold text-blue-700">
            {goal}
          </h3>
        </div>

        <div className="bg-green-100 rounded-xl p-4">
          <p className="text-sm text-slate-500">
            Current Weight
          </p>

          <h3 className="font-bold text-green-700">
            {currentWeight} kg
          </h3>
        </div>

        <div className="bg-orange-100 rounded-xl p-4">
          <p className="text-sm text-slate-500">
            Streak
          </p>

          <h3 className="font-bold text-orange-700">
            🔥 {streak} Days
          </h3>
        </div>

      </div>

    </div>
  );
}

export default DashboardHeader;