import React from 'react'
import Navbar from './components/Navbar'
//Routes :-Think of it like a folder that holds all your page paths.
//Route- Each Route defines
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </div>
  )
}

export default App
