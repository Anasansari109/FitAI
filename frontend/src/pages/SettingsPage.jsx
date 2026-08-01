import { useNavigate } from "react-router-dom";

import { useProgress } from "../context/ProgressContext";
import { useOnboarding } from "../context/OnboardingContext";
import { useUserPlan } from "../context/UserPlanContext";
import { useAuth } from "../context/AuthContext";

function SettingsPage() {
  const navigate = useNavigate();

  const { resetProgress } =
    useProgress();

  const { clearOnboarding } =
    useOnboarding();

  const { clearUserPlan } =
    useUserPlan();

  const { logout, user } =
    useAuth();

  const handleResetProgress = () => {
    if (
      !window.confirm(
        "Reset all progress?"
      )
    )
      return;

    resetProgress();

    alert("Progress Reset Successfully");
  };

  const handleClearPlan = () => {
    if (
      !window.confirm(
        "Delete your workout & diet plan?"
      )
    )
      return;

    clearUserPlan();

    alert("Workout & Diet Plan Cleared");
  };

  const handleClearOnboarding =
    () => {
      if (
        !window.confirm(
          "Delete onboarding information?"
        )
      )
        return;

      clearOnboarding();

      alert("Onboarding Cleared");
    };

  const handleLogout = () => {
    if (
      !window.confirm(
        "Logout from FitAI?"
      )
    )
      return;

    logout();

    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-5xl mx-auto">

        <div className="bg-white rounded-3xl shadow-sm border border-slate-200 p-8">

          <h1 className="text-3xl font-bold mb-8">
            Settings
          </h1>

          {/* Account */}

          <div className="border rounded-2xl p-6 mb-8">

            <h2 className="text-xl font-bold mb-4">
              Account
            </h2>

            <p className="mb-2">
              <span className="font-semibold">
                Name :
              </span>{" "}
              {user?.name || "-"}
            </p>

            <p>
              <span className="font-semibold">
                Email :
              </span>{" "}
              {user?.email || "-"}
            </p>

          </div>

          {/* Data */}

          <div className="border rounded-2xl p-6 mb-8">

            <h2 className="text-xl font-bold mb-5">
              Data Management
            </h2>

            <div className="space-y-4">

              <button
                onClick={
                  handleResetProgress
                }
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Reset Progress
              </button>

              <button
                onClick={
                  handleClearPlan
                }
                className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Clear Workout & Diet Plan
              </button>

              <button
                onClick={
                  handleClearOnboarding
                }
                className="w-full bg-purple-500 hover:bg-purple-600 text-white py-3 rounded-xl font-semibold transition"
              >
                Clear Onboarding Data
              </button>

            </div>

          </div>

          {/* About */}

          <div className="border rounded-2xl p-6 mb-8">

            <h2 className="text-xl font-bold mb-4">
              About FitAI
            </h2>

            <div className="space-y-2 text-slate-600">

              <p>
                Version :
                <strong>
                  {" "}
                  V1.0
                </strong>
              </p>

              <p>
                Build :
                Stable
              </p>

              <p>
                Developed with ❤️
                using React,
                Express,
                MongoDB &
                Tailwind CSS
              </p>

            </div>

          </div>

          {/* Logout */}

          <button
            onClick={handleLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Logout
          </button>

        </div>

      </div>

    </div>
  );
}

export default SettingsPage;