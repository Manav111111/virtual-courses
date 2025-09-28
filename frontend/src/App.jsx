import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import SignUp from './pages/SignUp.jsx'
export const serverUrl = "http://localhost:8000"
import {ToastContainer} from "react-toastify"

const App = () => {
  return (
    <>
    <ToastContainer />
<Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/SignUp' element={<SignUp/>}/>
    </Routes>
    </>
  )
}

export default App
