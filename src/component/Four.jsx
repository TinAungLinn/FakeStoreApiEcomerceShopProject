import React from 'react'
import { useContextCustom } from '../Context/StateContext'

const Four = () => {

    const {dispatch} = useContextCustom();

  return (
    <div>
      <h1 className=" text-xl">Four</h1>
      <button onClick={()=>dispatch({type: "increase2"})} className=" py-1 px-6 bg-slate-700 rounded">Increase2</button>
    </div>
  )
}

export default Four
