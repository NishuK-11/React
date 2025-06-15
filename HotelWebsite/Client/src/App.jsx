import React from 'react'
import Navbar from './components/Navbar'
//Routes :-Think of it like a folder that holds all your page paths.
//Route- Each Route defines
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomePage from './pages/HomePage'
import UserRoutes from './components/routes/Private'
import UserDashboard from './pages/user/UserDashboard'
import YourOrder from './pages/user/YourOrder'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

        <Route path='/user' element={<UserRoutes/>}>
        <Route path='' element={<UserDashboard/>}/>
        <Route path='your-order' element={<YourOrder/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default App
