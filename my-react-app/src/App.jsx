import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Login from "./Components/Login/Login";
import MainPage from "./Components/MainPage/MainPage";
import Women from "./Pages/Women";
import Men from "./Pages/Men";
import Sidebar from "./Components/Sidebar/Sidebar";
import Kids from "./Pages/Kids";
import Products from "./Components/Products/Products";
import CartPage from "./Components/CartPage/CartPage";
import Payments from "./Pages/Payments";
import CheckOutPage from "./Components/CheckOutPage/CheckOutPage";
import Address from "./Components/Address/Address";
import RazorPayPaymentIntegration from "./Components/RazorPayPaymentIntegration/RazorPayPaymentIntegration";
import Home from "./Pages/Home";
import Beauty from "./Pages/Beauty";
import GenZ from "./Pages/GenZ";
import Studio from "./Pages/Studio";

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
      {/* {location.pathname === "/" ? <Navbar /> : <Navbar />} */}

      {location.pathname === "/" ? null : <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Kids" element={<Kids />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/kids" element={<Kids />} />
        <Route path="/home" element={<Home />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/genz" element={<GenZ />} />
        <Route path="/studio" element={<Studio />} />
        <Route path="/cartPage" element={<CartPage />} />
        <Route path="/payments" element={<Payments />} />
        <Route path="/checkOutPage" element={<CheckOutPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/razorpay" element={<RazorPayPaymentIntegration />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
