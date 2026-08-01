import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Lock, User } from "lucide-react";

import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";
import SecondaryButton from "../components/common/SecondaryButton";
import Card from "../components/common/Card";

import { useAuth } from "../context/AuthContext";
import api from "../services/api";

function SignupPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSignup = async () => {
    if (
      !formData.name ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      alert("Please fill all fields");
      return;
    }

    if (
      formData.password !==
      formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    try {
      setLoading(true);

      const { data } = await api.post(
        "/auth/register",
        {
          name: formData.name.trim(),
          email: formData.email
            .trim()
            .toLowerCase(),
          password: formData.password,
        }
      );

      login(data.user, data.token);

      localStorage.removeItem("onboardingData");
      localStorage.removeItem("userPlan");
      localStorage.removeItem("progressData");

      navigate("/onboarding/personal", {
        replace: true,
      });

    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Registration Failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">

        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-600">
            FitAI
          </h1>

          <p className="text-slate-600 mt-2">
            Create your fitness account
          </p>
        </div>

        <Card className="p-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Create Account
          </h2>

          <p className="text-slate-600 mb-6">
            Start your fitness journey today.
          </p>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <div className="relative">
              <User
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <InputField
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="pl-10"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Email
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <InputField
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="pl-10"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block mb-2 font-medium">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <InputField
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                className="pl-10"
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block mb-2 font-medium">
              Confirm Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
              />

              <InputField
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                className="pl-10"
              />
            </div>
          </div>

          <PrimaryButton
            className="w-full"
            onClick={handleSignup}
            disabled={loading}
          >
            {loading
              ? "Creating..."
              : "Create Account"}
          </PrimaryButton>

          <div className="flex items-center gap-3 my-6">
            <div className="flex-1 h-px bg-slate-200"></div>

            <span className="text-sm text-slate-500">
              OR
            </span>

            <div className="flex-1 h-px bg-slate-200"></div>
          </div>

          <SecondaryButton className="w-full">
            Continue with Google
          </SecondaryButton>

        </Card>
      </div>
    </div>
  );
}

export default SignupPage;