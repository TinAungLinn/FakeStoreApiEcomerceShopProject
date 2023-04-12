import React, { useContext } from 'react'
import { useContextCustom } from '../Context/StateContext'

const One = () => {

    const {count} = useContextCustom();

  return (
    <div>
      <h1>From One : {count}</h1>
    </div>
  )
}

export default One
