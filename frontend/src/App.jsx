import "./App.css";
// import { Contact } from "./components/Contact";
// import { Footer } from "./components/Footer";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Box } from "@chakra-ui/react";
import { AllRoutes } from "./routes/AllRoutes.jsx";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <AllRoutes />
        {/*<HomePage />*/}
        {/* <Contact /> */}
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  );
}

export default App;
