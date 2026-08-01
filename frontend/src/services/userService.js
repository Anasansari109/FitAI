export const userService = {
  saveUser(user) {
    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );
  },

  getUser() {
    const user =
      localStorage.getItem("user");

    return user
      ? JSON.parse(user)
      : null;
  },

  saveToken(token) {
    localStorage.setItem(
      "token",
      token
    );
  },

  getToken() {
    return localStorage.getItem(
      "token"
    );
  },

  removeUser() {
    localStorage.removeItem(
      "user"
    );

    localStorage.removeItem(
      "token"
    );
  },
};