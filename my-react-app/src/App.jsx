<<<<<<< HEAD
import React from "react";
import { Routes,Route } from 'react-router-dom'
import Header from "./Component/Header";
function App() {
=======
import React from 'react'
import { Routes } from 'react-router-dom'
import Men from './Pages/Men'
import { Route, useLocation } from "react-router-dom";
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


>>>>>>> 44c5179c84f17e0fa6dc3255cf61e64b771d1c8f
  return (
<<<<<<< Updated upstream
    <>
    
     {location.pathname === "/" ? <Navbar/> : <Navbar /> }
    


      <Routes>
      <Route path="/Women" element={<Women />} />
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        
       
        <Route path="*" element={<NotFound />} />
        <Route path="/Kids" element={<Kids />} />

        
      </Routes>



   

      
    </>
=======
    <Routes>
      <Route path="/" element={<Header/>} />
    </Routes>
>>>>>>> Stashed changes
  )
}

export default App;