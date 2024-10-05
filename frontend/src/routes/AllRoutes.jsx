import { Route, Routes } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import { SignUpPage } from "../Pages/SignUpPage";
import { LoginPage } from "../Pages/LoginPage";
import { Dashboard } from "../Pages/Dashboard";
import { AdminPanel } from "../Pages/AdminPanel";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/admin" element={<AdminPanel />} />
    </Routes>
  );
};
