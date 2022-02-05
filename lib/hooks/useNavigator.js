import React, { useContext } from "react";

const Navigator = React.createContext();

const useNavigator = () => {
  const { isActive, setIsActive } = useContext(Navigator);
  return { isActive, setIsActive };
};

function StateProvider({ activeState, children }) {
  return (
    <Navigator.Provider value={activeState}>{children}</Navigator.Provider>
  );
}

export { StateProvider, useNavigator };
