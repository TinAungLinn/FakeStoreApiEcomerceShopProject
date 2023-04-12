import React from 'react'
import { useContextCustom } from '../Context/StateContext'

const Two = () => {

    const {setCount} = useContextCustom();

  return (
    <div>
      <button onClick={() => setCount( prev => prev + 1)}>Increase From Two</button>
    </div>
  )
}

export default Two
