import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Products from './component/Products'
import Navbar from './component/Navbar'
import Cart from './component/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Products/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  )
}

export default App
