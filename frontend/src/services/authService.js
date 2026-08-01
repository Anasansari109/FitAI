export const authService = {
  login(email, password) {
    console.log("Login", email);

    return {
      success: true,
    };
  },

  signup(userData) {
    console.log("Signup", userData);

    return {
      success: true,
    };
  },

  logout() {
    localStorage.removeItem("user");
  },
};