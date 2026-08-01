import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

const OnboardingContext =
  createContext();

export const OnboardingProvider = ({
  children,
}) => {
  const [onboardingData, setOnboardingData] =
    useState({
      personalInfo: {},
      goal: {},
      lifestyle: {},
      food: {},
      workout: {},
    });

  const [loading, setLoading] =
    useState(true);

  /* Fetch Onboarding */

  const fetchOnboarding =
    async () => {
      try {
        const res =
          await api.get(
            "/onboarding"
          );

        if (
          res.data.onboarding
        ) {
          setOnboardingData(
            res.data.onboarding
          );
        }
      } catch (error) {
        console.log(
          "No onboarding found."
        );
      } finally {
        setLoading(false);
      }
    };

 useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    fetchOnboarding();
  } else {
    setLoading(false);
  }
}, []);;

 const updateSection = async (
  section,
  data
) => {
  const updatedData = {
    ...onboardingData,
    [section]: {
      ...onboardingData[section],
      ...data,
    },
  };

  setOnboardingData(updatedData);

  try {
    await api.post(
      "/onboarding/save",
      updatedData
    );
  } catch (error) {
    console.error(
      "Failed to save onboarding",
      error
    );
  }
};

  const clearOnboarding = () => {
  setOnboardingData({
    personalInfo: {},
    goal: {},
    lifestyle: {},
    food: {},
    workout: {},
  });
};

  return (
    <OnboardingContext.Provider
      value={{
  onboardingData,
  updateSection,
  fetchOnboarding,
  clearOnboarding,
  loading,
}}
    >
      {children}
    </OnboardingContext.Provider>
  );
};

export const useOnboarding = () =>
  useContext(
    OnboardingContext
  );