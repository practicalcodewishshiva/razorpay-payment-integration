// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import MainPage from './Components/MainPage/MainPage'


function App() {
    

  return (

    <>

   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/mainpage" element={<MainPage/>} />
    
   </Routes>
   </BrowserRouter>
     
    </>
  )
}

export default App
