// AuthContext.js
import React, { useState, useContext, createContext, useEffect } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  // Get token from localStorage and use it as a string
  const initialAuthUser = localStorage.getItem("token");

  const [authUser, setAuthUser] = useState(
    initialAuthUser ? initialAuthUser : undefined
  );

  // Set token in localStorage whenever authUser changes
  useEffect(() => {
    if (authUser) {
      localStorage.setItem("token", authUser);
    } else {
      localStorage.removeItem("token");
    }
  }, [authUser]);

  return (
    <AuthContext.Provider value={[authUser, setAuthUser]}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
