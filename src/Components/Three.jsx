import React from 'react'
import {  useContextCustom } from '../Context/StateContext'

const Three = () => {

    const {setCount} = useContextCustom();

  return (
    <div>
      <button onClick={() => setCount( prev => prev - 1)}>Decrease From Three</button>
    </div>
  )
}

export default Three
