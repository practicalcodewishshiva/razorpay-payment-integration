import { useLocation, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import Men from "./components/Men/Men";
import Women from "./components/Women/Women";
import Kids from "./components/Kids/Kids";

function App() {
  const location = useLocation();
  const showNavbar = location.pathname !== "/";

  const handleLogout = () => {
    localStorage.removeItem("access_token");
  };

  return (
    <>
      {showNavbar && <Navbar onLogout={handleLogout} />}

      <Routes>
        {/* Public route */}
        <Route path="/" element={<Navbar/>} />

        {/* Protected routes */}
        <Route
          path="/men"
          element={
        
              <Men />
          
          }
        />
        <Route
          path="/women"
          element={
            
              <Women />
            
          }
        />
        <Route
          path="/kids"
          element={
            
              <Kids />
            
          }
        />
      </Routes>
    </>
  );
}

export default App;
