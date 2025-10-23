// import { useState } from 'react'
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './Components/Login/Login'
import MainPage from './Components/MainPage/MainPage'



import Men from './Pages/Men'
import { useLocation } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Kids from './Pages/Kids';
import Women from './Pages/women';
import { CiRouter } from 'react-icons/ci';

// You will need to create these components as well.
// import Contact from './Pages/Contact' 
// import NotFound from './Pages/NotFound'





const App = () => {
  const location = useLocation();


  const Contact = () => <h1>Contact Page</h1>;
  const NotFound = () => <h1>404 - Not Found</h1>;


  return (

    <>

      <BrowserRouter>
      
        <Routes>
          {location.pathname === "/" ? <Navbar /> : <Navbar />}
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/" element={<Home />} />
          <Route path="/Men" element={<Men />} />


          <Route path="*" element={<NotFound />} />
          <Route path="/Kids" element={<Kids />} />

        </Routes>
      </BrowserRouter>






    </>
  )
}

export default App
