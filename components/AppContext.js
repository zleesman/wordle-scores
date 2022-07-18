import React, { createContext, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/config";

const AppContext = createContext({});
export const AppProvider = ({ children }) => {
  const [currUser, setCurrUser] = useState(null);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrUser(user);
    } else {
      setCurrUser(null);
    }
  });

  return (
    <AppContext.Provider
      value={{
        currUser,
        setCurrUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppContext;
