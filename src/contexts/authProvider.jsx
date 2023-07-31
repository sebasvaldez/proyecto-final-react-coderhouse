import { createContext, useContext } from "react";
import { signUp, signIn } from "../../asyncMock.js";

export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

const AuthProvider = ({ children }) => {
  return (
    <authContext.Provider value={{ signUp, signIn }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
