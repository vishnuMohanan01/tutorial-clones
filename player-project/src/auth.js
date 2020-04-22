import React, {createContext, useEffect, useState} from "react";
import app from "./firebase";


export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {
  const [currentuser, setCurrentuser] = useState(null);

  useEffect(() =>
    app.auth().onAuthStateChanged(setCurrentuser),[]
  );
  return (
    <AuthContext.Provider value = {{currentuser}}>
    {children}
    </AuthContext.Provider>
  );
};


export default AuthContextProvider;
