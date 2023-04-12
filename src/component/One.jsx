import React from "react";
import { useContextCustom } from "../Context/StateContext";

const One = () => {

    const {state} = useContextCustom();

  return (
    <div>
      <h2 className=" text-xl">One</h2>
      <h1 className=" text-3xl">{state.count}</h1>
    </div>
  );
};

export default One;
