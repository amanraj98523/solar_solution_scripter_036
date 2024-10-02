
import "./App.css";
import Features from "./components/Features";
import Review from "./components/Review";


function App() {
  


import Contact from './components/Contact'
import Footer from './components/Footer'
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Box } from "@chakra-ui/react";

function App() {
  return (

    <div className="App"> 
      <Features/>
      <Review/>
    </div>
  )

    <>
      <ChakraProvider>
        <Navbar />
        <Box>
          <HomePage />
    <Contact/>
    <Footer/>
        </Box>
      </ChakraProvider>

    </>
  );

}

export default App;
