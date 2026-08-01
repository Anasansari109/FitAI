import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";

import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";
import Card from "../components/common/Card";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

function LoginPage() {
  const navigate = useNavigate();

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = async () => {
    if (
      !formData.email ||
      !formData.password
    ) {
      alert("Please fill all fields");
      return;
    }

    try {
      const response = await api.post(
        "/auth/login",
        {
          email:
formData.email.trim().toLowerCase(),
          password: formData.password,
        }
      );

      login(
        response.data.user,
        response.data.token
      );

      if (
  response.data.user
    ?.isOnboardingCompleted
) {
  navigate("/dashboard");
} else {
  navigate("/onboarding/personal");
}
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Login Failed"
      );
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
            Welcome Back
          </p>
        </div>

        <Card className="p-8">

          <h2 className="text-3xl font-bold text-slate-900 mb-2">
            Login
          </h2>

          <p className="text-slate-600 mb-6">
            Login to continue your fitness journey.
          </p>

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

          <div className="mb-6">
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
                placeholder="Enter password"
                className="pl-10"
              />
            </div>
          </div>

         <PrimaryButton
 className="w-full"
 onClick={handleLogin}
 disabled={loading}
>
 {loading
    ? "Logging in..."
    : "Login"}
</PrimaryButton>

          <p className="text-center mt-6 text-slate-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>

        </Card>
      </div>
    </div>
  );
}

export default LoginPage;