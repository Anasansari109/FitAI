import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";

import api from "../services/api";

const UserPlanContext = createContext();

export const UserPlanProvider = ({
  children,
}) => {
  const [userPlan, setUserPlan] =
    useState({
      workoutPlan: null,
      dietPlan: null,
    });

  const [loading, setLoading] =
    useState(true);

  // =====================================================
  // FETCH USER PLANS
  // =====================================================

  const fetchPlans = async () => {
    try {
      const [
        workoutRes,
        dietRes,
      ] = await Promise.all([
        api.get("/workout"),
        api.get("/diet"),
      ]);

      const plan = {
        workoutPlan:
          workoutRes.data.workout
            ?.workoutPlan ?? null,

        dietPlan:
          dietRes.data.diet
            ?.dietPlan ?? null,
      };

      setUserPlan(plan);

      localStorage.setItem(
        "userPlan",
        JSON.stringify(plan)
      );
    } catch (error) {
      console.error(
        "Failed to fetch plans:",
        error
      );

      const saved =
        localStorage.getItem(
          "userPlan"
        );

      if (saved) {
        setUserPlan(
          JSON.parse(saved)
        );
      }
    } finally {
      setLoading(false);
    }
  };

  // =====================================================
  // LOAD ON START
  // =====================================================

  useEffect(() => {
    const token =
      localStorage.getItem("token");

    if (token) {
      fetchPlans();
    } else {
      setLoading(false);
    }
  }, []);

  // =====================================================
  // SAVE PLAN
  // =====================================================

  const saveUserPlan = (plan) => {
    setUserPlan(plan);

    localStorage.setItem(
      "userPlan",
      JSON.stringify(plan)
    );
  };

  // =====================================================
  // CLEAR PLAN
  // =====================================================

  const clearUserPlan = () => {
    setUserPlan({
      workoutPlan: null,
      dietPlan: null,
    });

    localStorage.removeItem(
      "userPlan"
    );
  };

  return (
    <UserPlanContext.Provider
      value={{
        userPlan,
        loading,
        fetchPlans,
        saveUserPlan,
        clearUserPlan,
      }}
    >
      {children}
    </UserPlanContext.Provider>
  );
};

export const useUserPlan = () =>
  useContext(UserPlanContext);