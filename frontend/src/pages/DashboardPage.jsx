import DashboardHeader from "../components/dashboard/DashboardHeader";

import TodayWorkoutCard from "../components/dashboard/TodayWorkoutCard";
import TodayDietCard from "../components/dashboard/TodayDietCard";

import NutritionCard from "../components/dashboard/NutritionCard";
import DailyCheckinCard from "../components/dashboard/DailyCheckinCard";
import WeeklyProgressCard from "../components/dashboard/WeeklyProgressCard";

import WaterTracker from "../components/tracking/WaterTracker";
import WeightTracker from "../components/tracking/WeightTracker";

import WorkoutCompletionCard from "../components/tracking/WorkoutCompletionCard";
import DietCompletionCard from "../components/tracking/DietCompletionCard";

import WeightProgressChart from "../components/dashboard/WeightProgressChart";
import AchievementsCard from "../components/dashboard/AchievementsCard";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-slate-100 p-6">
      <div className="max-w-7xl mx-auto space-y-6">

        <DashboardHeader />

        <div className="grid lg:grid-cols-2 gap-6">
          <TodayWorkoutCard />
          <TodayDietCard />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <NutritionCard />
          <WaterTracker />
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <WeightTracker />
          <DailyCheckinCard />
        </div>

<div className="grid lg:grid-cols-2 gap-6">
  <WorkoutCompletionCard />
  <DietCompletionCard />
</div>

<div className="grid lg:grid-cols-2 gap-6">
  <WeightProgressChart />
  <WeeklyProgressCard />
</div>

<div className="grid lg:grid-cols-2 gap-6">
  <AchievementsCard />
</div>

      </div>
    </div>
  );
}

export default DashboardPage;