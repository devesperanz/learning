import { createContext } from "react";

export const AppContext = createContext();

const ContextProvider = (props) => {
  const phone = "+2349038845894";
  return (
    <AppContext.Provider value={phone}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
