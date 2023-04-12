import { createContext, useContext, useReducer, useState } from "react";

 const StateContext = createContext();

export const ContextProvider = ({ children }) => {

  const initialState = {
    count : 0,
    value : 10,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "increase":
        return {...state,count:state.count + 1};
      case "increase2":
        return {...state,value:state.value + 10}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const data = { state, dispatch };

  return (
    <StateContext.Provider value={data}>
      {children}
    </StateContext.Provider>
  );
};

export const useContextCustom = () => useContext(StateContext);
