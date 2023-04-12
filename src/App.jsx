import React, { useReducer } from "react";

const App = () => {
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

  return (
  <div>
    
    <div>
      <h1 className=" text-3xl">{state.count}</h1>
      <button onClick={()=>dispatch({type: "increase"})} className=" py-1 px-6 bg-slate-700 rounded">Increase</button>
    </div>
    <div>
      <h1 className=" text-3xl">{state.value}</h1>
      <button onClick={()=>dispatch({type: "increase2"})} className=" py-1 px-6 bg-slate-700 rounded">Increase2</button>
    </div>

  </div>);
};

export default App;
