import "./App.css";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./routes/AllRoutes.jsx";
import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:4000";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkAuthStatus = async () => {
    const token = localStorage.getItem("accessToken");
    console.log(isAuthenticated);
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    checkAuthStatus();
  }, [isAuthenticated]);

  const handleLogout = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      const response = await axios.post(
        "/auth/logout",
        { refreshToken },
        { withCredentials: true }
      );
      if (response) {
        setIsAuthenticated(false);
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("resetToken");
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <>
      <ChakraProvider>
        <Navbar isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <AllRoutes />
        {/*<HomePage />*/}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  );
}

export default App;
