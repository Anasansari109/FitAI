import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Card from "../components/common/Card";
import InputField from "../components/common/InputField";
import PrimaryButton from "../components/common/PrimaryButton";

import { useOnboarding } from "../context/OnboardingContext";

function OnboardingPage() {
  const navigate = useNavigate();

  const { updateSection } = useOnboarding();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const handleNext = async () => {
    if (
      !name.trim() ||
      !age ||
      !gender ||
      !height ||
      !weight
    ) {
      alert("Please fill all fields.");
      return;
    }

    await updateSection("personalInfo", {
      name: name.trim(),
      age: Number(age),
      gender,
      height: Number(height),
      weight: Number(weight),
    });

    navigate("/onboarding/goal");
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-2xl">
        <Card className="p-8">
          <p className="text-blue-600 font-semibold mb-2">
            Step 1 of 5
          </p>

          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Personal Information
          </h1>

          <p className="text-slate-600 mb-8">
            Tell us a little about yourself so we can
            create your personalized fitness plan.
          </p>

          {/* Name */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Full Name
            </label>

            <InputField
              placeholder="Enter your full name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />
          </div>

          {/* Age */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Age
            </label>

            <InputField
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) =>
                setAge(e.target.value)
              }
            />
          </div>

          {/* Gender */}
          <div className="mb-5">
            <label className="block mb-3 font-medium">
              Gender
            </label>

            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setGender("male")}
                className={`p-4 rounded-xl border font-medium transition ${
                  gender === "male"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                Male
              </button>

              <button
                type="button"
                onClick={() => setGender("female")}
                className={`p-4 rounded-xl border font-medium transition ${
                  gender === "female"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white border-slate-300"
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Height */}
          <div className="mb-5">
            <label className="block mb-2 font-medium">
              Height (cm)
            </label>

            <InputField
              type="number"
              placeholder="Enter your height"
              value={height}
              onChange={(e) =>
                setHeight(e.target.value)
              }
            />
          </div>

          {/* Weight */}
          <div className="mb-8">
            <label className="block mb-2 font-medium">
              Weight (kg)
            </label>

            <InputField
              type="number"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
            />
          </div>

          <PrimaryButton
            className="w-full"
            onClick={handleNext}
          >
            Next Step
          </PrimaryButton>
        </Card>
      </div>
    </div>
  );
}

export default OnboardingPage;