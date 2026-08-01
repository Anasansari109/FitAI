import { useOnboarding } from "../context/OnboardingContext";
import { useProgress } from "../context/ProgressContext";
import { useAuth } from "../context/AuthContext";

function ProfilePage() {
  const { onboardingData, loading: onboardingLoading } =
    useOnboarding();

  const { progressData, loading: progressLoading } =
    useProgress();

  const { user } = useAuth();

  if (onboardingLoading || progressLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Profile...
      </div>
    );
  }

  const personal =
    onboardingData?.personalInfo || {};

  const goal =
    onboardingData?.goal || {};

  const lifestyle =
    onboardingData?.lifestyle || {};

  const food =
    onboardingData?.food || {};

  const workout =
    onboardingData?.workout || {};

  return (
    <div className="min-h-screen bg-slate-100 p-6">

      <div className="max-w-6xl mx-auto">

        <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200">

          <h1 className="text-3xl font-bold mb-8">
            My Profile
          </h1>

          <div className="grid lg:grid-cols-2 gap-6">

            {/* Personal Information */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Personal Information
              </h2>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Name :
                  </span>{" "}
                  {personal.name || user?.name || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Email :
                  </span>{" "}
                  {user?.email || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Age :
                  </span>{" "}
                  {personal.age || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Gender :
                  </span>{" "}
                  {personal.gender || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Height :
                  </span>{" "}
                  {personal.height || "-"} cm
                </p>

                <p>
                  <span className="font-semibold">
                    Weight :
                  </span>{" "}
                  {progressData.currentWeight || "-"} kg
                </p>

              </div>

            </div>

            {/* Fitness Goal */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Fitness Information
              </h2>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Goal :
                  </span>{" "}
                  {goal.primaryGoal || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Experience :
                  </span>{" "}
                  {workout.experience || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Workout Days :
                  </span>{" "}
                  {workout.workoutDays || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Workout Location :
                  </span>{" "}
                  {lifestyle.workoutLocation || "-"}
                </p>

                <p>
                  <span className="font-semibold">
                    Food Type :
                  </span>{" "}
                  {food.foodType || "-"}
                </p>

              </div>

            </div>

            {/* Progress */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Progress
              </h2>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Workout Completed :
                  </span>{" "}
                  {progressData.workoutCompleted}
                </p>

                <p>
                  <span className="font-semibold">
                    Diet Completed :
                  </span>{" "}
                  {progressData.dietCompleted}
                </p>

                <p>
                  <span className="font-semibold">
                    Water Intake :
                  </span>{" "}
                  {progressData.waterIntake} Glasses
                </p>

                <p>
                  <span className="font-semibold">
                    Current Streak :
                  </span>{" "}
                  🔥 {progressData.streak} Days
                </p>

                <p>
                  <span className="font-semibold">
                    Energy Level :
                  </span>{" "}
                  {progressData.energyLevel}
                </p>

              </div>

            </div>

            {/* Account */}

            <div className="border rounded-2xl p-6">

              <h2 className="text-xl font-bold mb-5">
                Account
              </h2>

              <div className="space-y-3">

                <p>
                  <span className="font-semibold">
                    Account Status :
                  </span>{" "}
                  Active ✅
                </p>

                <p>
                  <span className="font-semibold">
                    Plan :
                  </span>{" "}
                  Free
                </p>

                <p>
                  <span className="font-semibold">
                    Version :
                  </span>{" "}
                  FitAI V1
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProfilePage;