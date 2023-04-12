import { createContext, useContext, useState } from "react";

 const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const [count,setCount] = useState(0);

  const data = { count,setCount };

  return <StateContext.Provider value={data}>{children}</StateContext.Provider>;
};

export const useContextCustom = () => useContext(StateContext);
