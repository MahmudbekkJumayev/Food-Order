import React, { useState } from "react";
import AppContext from "./appContext";

const AppContextProvider = (props) => {
  const [isVerify, setIsVerify] = useState(false);
  const [korzinka, setKorzinka] = useState([]);
  const onLogin = (username, password) => {};
  const onLogOut = () => {
    setIsVerify(false);
  };

  return (
    <AppContext.Provider
      value={{ isVerify, onLogin, onLogOut, korzinka, setKorzinka }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
