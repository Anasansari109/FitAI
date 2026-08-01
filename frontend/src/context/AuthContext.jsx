import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import api from "../services/api";
import { userService } from "../services/userService";

const AuthContext = createContext();

export const AuthProvider = ({
  children,
}) => {
  const [user, setUser] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    try {
      const token =
        userService.getToken();

      if (!token) {
        setLoading(false);
        return;
      }

      const { data } =
  await api.get("/auth/me");

setUser(data.user);

userService.saveUser(data.user);
    } catch (error) {
      userService.removeUser();
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const login = (
    userData,
    token
  ) => {
    userService.saveUser(userData);

    userService.saveToken(token);

    setUser(userData);

    // ❌ NO REDIRECT HERE
  };

  const logout = () => {
    userService.removeUser();

    setUser(null);

    // ❌ NO REDIRECT HERE
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
        isAuthenticated: !!user,
        checkUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () =>
  useContext(AuthContext);