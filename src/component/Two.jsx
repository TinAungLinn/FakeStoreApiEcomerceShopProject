import React from 'react'
import { useContextCustom } from '../Context/StateContext'

const Two = () => {

    const {dispatch} = useContextCustom();

  return (
    <div>
      <h1 className=" text-xl">Two</h1>
      <button onClick={()=>dispatch({type: "increase"})} className=" py-1 px-6 bg-slate-700 rounded">Increase</button>
    </div>
  )
}

export default Two
