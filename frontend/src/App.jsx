import "./App.css";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dasboard";
import HomePage from "./Pages/HomePage";

import AttendPoll from "./components/MCQPoll/MCQpollAttend";
import PollCreation from "./components/MCQPoll/pollMCQ";
import LoginForm from "./components/login-signup/LoginPage";
import RegisterForm from "./components/login-signup/Signup";
// import { Box } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/Signup" element={<RegisterForm />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/polls/:pollId" element={<AttendPoll />} />
          <Route path="/pollcreation" element={<PollCreation />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
