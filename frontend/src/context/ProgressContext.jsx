import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

const ProgressContext = createContext();

export const ProgressProvider = ({
  children,
}) => {
  const [progressData, setProgressData] =
    useState({
      startingWeight: 0,
      currentWeight: 0,

      waterIntake: 0,

      workoutCompleted: 0,
      dietCompleted: 0,

      streak: 0,

      energyLevel: "",

      lastWorkoutDate: "",
      lastDietDate: "",

      weightHistory: [],
    });

  const [loading, setLoading] =
    useState(true);

  /* Fetch Progress */

  const fetchProgress = async () => {
    try {
      const res = await api.get(
        "/progress"
      );

      if (res.data.progress) {
        setProgressData(
          res.data.progress
        );
      }
    } catch (error) {
      console.log(
        "Progress not found"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
  const token = localStorage.getItem("token");

  if (token) {
    fetchProgress();
  } else {
    setLoading(false);
  }
}, []);

  const updateProgress = (data) => {
    setProgressData((prev) => ({
      ...prev,
      ...data,
    }));
  };
const resetProgress = () => {
  setProgressData({
    startingWeight: 0,
    currentWeight: 0,
    waterIntake: 0,
    workoutCompleted: 0,
    dietCompleted: 0,
    streak: 0,
    energyLevel: "",
    lastWorkoutDate: "",
    lastDietDate: "",
    weightHistory: [],
  });
};
  return (
    <ProgressContext.Provider
     value={{
  progressData,
  updateProgress,
  fetchProgress,
  resetProgress,
  loading,
}}
    >
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () =>
  useContext(ProgressContext);