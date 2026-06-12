import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import home from './pages/home/home'
import cart from './pages/cart/cart'
import placeOrder from './pages/placeOrder/placeOrder'

const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<home/>}/>
        <Route path='/cart' element={<cart/>}/>
        <Route path='/Order' element={<placeOrder/>}/>
      </Routes>
    </div>
  )
}

export default App
