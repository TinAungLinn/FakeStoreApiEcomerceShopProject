import React, { useReducer } from "react";
import { useContextCustom } from "./Context/StateContext";
import One from "./component/One";
import Two from "./component/Two";
import Three from "./component/Three";
import Four from "./component/Four";

const App = () => {

  return (
  <div>
    
    {/* <div>
      <h1 className=" text-3xl">{state.count}</h1>
      <button onClick={()=>dispatch({type: "increase"})} className=" py-1 px-6 bg-slate-700 rounded">Increase</button>
    </div>
    <div>
      <h1 className=" text-3xl">{state.value}</h1>
      <button onClick={()=>dispatch({type: "increase2"})} className=" py-1 px-6 bg-slate-700 rounded">Increase2</button>
    </div> */}

    <One/>
    <Two/>
    <Three/>
    <Four/>

  </div>
  );
};

export default App;
