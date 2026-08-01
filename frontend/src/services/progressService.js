export const progressService = {
  saveProgress(progress) {
    localStorage.setItem(
      "progressData",
      JSON.stringify(progress)
    );
  },

  getProgress() {
    const progress =
      localStorage.getItem(
        "progressData"
      );

    return progress
      ? JSON.parse(progress)
      : null;
  },

  clearProgress() {
    localStorage.removeItem(
      "progressData"
    );
  },
};