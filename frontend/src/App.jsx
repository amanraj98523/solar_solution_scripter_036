import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import HomePage from "./Pages/HomePage";
import { Box } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Box>
          <HomePage />
        </Box>
      </ChakraProvider>
    </>
  );
}

export default App;
