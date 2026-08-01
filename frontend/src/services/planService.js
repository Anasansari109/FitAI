export const planService = {
  savePlan(plan) {
    localStorage.setItem(
      "userPlan",
      JSON.stringify(plan)
    );
  },

  getPlan() {
    const plan =
      localStorage.getItem("userPlan");

    return plan
      ? JSON.parse(plan)
      : null;
  },

  clearPlan() {
    localStorage.removeItem(
      "userPlan"
    );
  },
};