import React from 'react'
import { useContextCustom } from "../Context/StateContext";


const Three = () => {

    const {state} = useContextCustom();

  return (
    <div>
      <h2  className=' text-xl'>Three</h2>
      <h1 className=' text-3xl'>{state.value}</h1>
    </div>
  )
}

export default Three
