import React from 'react'

const Movie = ({ name,price}) => {
  return (
    <div className=' flex justify-center'>
      <ul className=' text-center mb-3'>
        <li>{name}</li>
        <li>{price}</li>
      </ul>
    </div>
  )
}

export default Movie
