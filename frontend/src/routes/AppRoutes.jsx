import { Routes, Route } from "react-router-dom";

import LandingPage from "../pages/LandingPage";
import SignupPage from "../pages/SignupPage";

import OnboardingPage from "../pages/OnboardingPage";
import GoalPage from "../pages/GoalPage";
import LifestylePage from "../pages/LifestylePage";
import FoodPreferencePage from "../pages/FoodPreferencePage";
import WorkoutSetupPage from "../pages/WorkoutSetupPage";
import PlanSummaryPage from "../pages/PlanSummaryPage";

import DashboardPage from "../pages/DashboardPage";

import WorkoutPage from "../pages/WorkoutPage";
import DietPage from "../pages/DietPage";

import ExerciseDetailsPage from "../pages/ExerciseDetailsPage";
import ProtectedRoute from "../components/auth/ProtectedRoute";

import ProfilePage from "../pages/ProfilePage";
import SettingsPage from "../pages/SettingsPage";
import NotFoundPage from "../pages/NotFoundPage";

import LoginPage from "../pages/LoginPage";
import FoodDetailsPage from "../pages/FoodDetailsPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/signup" element={<SignupPage />} />

      <Route
        path="/onboarding/personal"
        element={<OnboardingPage />}
      />

      <Route
        path="/onboarding/goal"
        element={<GoalPage />}
      />

      <Route
        path="/onboarding/lifestyle"
        element={<LifestylePage />}
      />

      <Route
        path="/onboarding/food"
        element={<FoodPreferencePage />}
      />

      <Route
        path="/onboarding/workout"
        element={<WorkoutSetupPage />}
      />

      <Route
        path="/plan-summary"
        element={<PlanSummaryPage />}
      />

      <Route
  path="/dashboard"
  element={
    <ProtectedRoute>
      <DashboardPage />
    </ProtectedRoute>
  }
/>

      <Route
        path="/workout"
        element={<WorkoutPage />}
      />

      <Route
        path="/diet"
        element={<DietPage />}
      />
       <Route
       path="/exercise/:id"
      element={<ExerciseDetailsPage />}
      />

      <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <ProfilePage />
    </ProtectedRoute>
  }
/>

  <Route
  path="/settings"
  element={
    <ProtectedRoute>
      <SettingsPage />
    </ProtectedRoute>
  }
/>

<Route
  path="/login"
  element={<LoginPage />}
/>

<Route
  path="/food/:id"
  element={<FoodDetailsPage />}
/>

   <Route
  path="*"
  element={<NotFoundPage />}
/>
    </Routes>
  );
}

export default AppRoutes;