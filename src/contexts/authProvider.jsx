import { createContext, useState, useContext } from "react";
import { signUp } from "../../asyncMock.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

const AuthProvider = ({ children }) => {
  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  );
};

export default AuthProvider;
