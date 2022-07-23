import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";
import { updateUser } from "../util/functions";

const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        updateUser(user).then((data) => setUserData(data));
      } else {
        setUserData(null);
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
