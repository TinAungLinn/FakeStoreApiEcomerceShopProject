import React, { useContext } from 'react'
import { StateContext } from './Context/StateContext'

const Nav = () => {

  const {movieList,setMovieList} = useContext(StateContext)

  return (
    <div className=' flex justify-around bg-amber-600 py-10'>
      <h1 className=' text-3xl text-white'>DevelopBy....</h1>
      <h1 className=' text-3xl text-white'>MovieList : {movieList.length}</h1>
    </div>
  )
}

export default Nav
