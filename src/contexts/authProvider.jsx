import { createContext, useContext } from "react";
import { signUp, signIn, logOut } from "../../asyncMock.js";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebase.config.js";


export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

const AuthProvider = ({ children }) => {
  const [loadingLog,setLoadingLog] = useState(true)
  const [userLog,setUserLog] = useState(null);
  

  useEffect(()  => {
  onAuthStateChanged(auth, (currentUser) => {
      setUserLog(currentUser)
      setLoadingLog(false)
    
    });
    
  }, []);


 

  return (
    <authContext.Provider value={{ signUp, signIn,userLog, logOut,loadingLog }}>
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;