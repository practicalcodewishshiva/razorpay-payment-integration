import React from 'react'
import { Routes } from 'react-router-dom'
import Men from './Pages/Men'
import { Route, useLocation } from "react-router-dom";
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Kids from './Pages/Kids';
import Women from './Pages/women';
import Login from './Components/Login/Login';
import MainPage from './Components/MainPage/MainPage';
import Sidebar from './Components/Sidebar/Sidebar';
// import Products from './Components/'
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
      {location.pathname === "/" ? <Navbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/" element={<Home />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/Kids" element={<Kids />} />
        {/* <Route path="/Products" element={<Products />} /> */}
      </Routes>
    </>
  )
}

export default App
