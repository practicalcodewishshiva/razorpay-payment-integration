import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import MainPage from "./Components/MainPage/MainPage";
import Women from "./components/Women/Women";
import Men from "./components/Men/Men";
import Sidebar from "./Components/Sidebar/Sidebar";
import Kids from "./components/Kids/Kids";
import Products from "./Components/Products/Products";
// You will need to create these components as well.
// import Contact from './Pages/Contact'
// import NotFound from './Pages/NotFound'

const App = () => {
  const location = useLocation();

  const Contact = () => <h1>Contact Page</h1>;
  const NotFound = () => <h1>404 - Not Found</h1>;

  return (
    <>
      {/* {showNavbar && <Navbar onLogout={handleLogout} />} */}
      {location.pathname === "/" ? <Navbar /> : <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Women" element={<Women />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Men" element={<Men />} />
        <Route path="/sidebar" element={<Sidebar />} />

        <Route path="*" element={<NotFound />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </>
  );
};

export default App;
