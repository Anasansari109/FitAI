import { useNavigate } from "react-router-dom";
import { Dumbbell, Salad, BarChart3 } from "lucide-react";

import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";
import Card from "../components/common/Card";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}

      <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">

        <h1 className="text-2xl font-bold text-blue-600">
          FitAI
        </h1>

        <div className="flex gap-4">

          <SecondaryButton
            onClick={() => navigate("/login")}
          >
            Login
          </SecondaryButton>

          <PrimaryButton
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </PrimaryButton>

        </div>

      </nav>

      {/* Hero */}

      <section className="max-w-6xl mx-auto px-6 py-20 text-center">

        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          AI Fitness Coach for
          <span className="text-blue-600">
            {" "}Hostel Students{" "}
          </span>
          & Beginners
        </h1>

        <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
          Get personalized workout plans,
          smart diet recommendations,
          and track your fitness journey
          without complicated calorie counting.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <PrimaryButton
            onClick={() => navigate("/signup")}
          >
            Get Started
          </PrimaryButton>

          <SecondaryButton
            onClick={() => navigate("/dashboard")}
          >
            Continue as Guest
          </SecondaryButton>

        </div>

      </section>

      {/* Features */}

      <section className="max-w-6xl mx-auto px-6 py-16">

        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose FitAI?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <Card>

            <Dumbbell
              size={40}
              className="text-blue-600 mb-4"
            />

            <h3 className="text-xl font-semibold mb-3">
              Personalized Workouts
            </h3>

            <p className="text-slate-600">
              Workout plans based on your goal,
              level and available time.
            </p>

          </Card>

          <Card>

            <Salad
              size={40}
              className="text-green-600 mb-4"
            />

            <h3 className="text-xl font-semibold mb-3">
              Smart Diet Plans
            </h3>

            <p className="text-slate-600">
              Diet plans built around foods
              you actually have access to.
            </p>

          </Card>

          <Card>

            <BarChart3
              size={40}
              className="text-orange-500 mb-4"
            />

            <h3 className="text-xl font-semibold mb-3">
              Progress Tracking
            </h3>

            <p className="text-slate-600">
              Track workouts, nutrition
              and long-term fitness progress.
            </p>

          </Card>

        </div>

      </section>

      {/* How It Works */}

      <section className="bg-white py-16">

        <div className="max-w-5xl mx-auto px-6">

          <h2 className="text-3xl font-bold text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>

              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                1
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                Answer Questions
              </h3>

              <p className="text-slate-600 mt-2">
                Tell us your goals,
                lifestyle and fitness level.
              </p>

            </div>

            <div>

              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                2
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                Get Your Plan
              </h3>

              <p className="text-slate-600 mt-2">
                Receive personalized workout
                and diet plans.
              </p>

            </div>

            <div>

              <div className="w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                3
              </div>

              <h3 className="mt-4 font-semibold text-lg">
                Track Progress
              </h3>

              <p className="text-slate-600 mt-2">
                Monitor your fitness journey
                and improve consistently.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="py-20 text-center">

        <h2 className="text-4xl font-bold text-slate-900">
          Start Your Fitness Journey Today
        </h2>

        <p className="mt-4 text-slate-600">
          Build better habits with FitAI.
        </p>

        <PrimaryButton
          className="mt-8"
          onClick={() => navigate("/signup")}
        >
          Get Started
        </PrimaryButton>

      </section>

    </div>
  );
}

export default LandingPage;