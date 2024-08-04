import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ProjectsPage from "../Pages/ProjectsPage";
import SkillsPage from "../Pages/SkillsPage";
import ExperiencePage from "../Pages/ExperiencePage";
import ContactPage from "../Pages/ContactPage";
// import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import LoginPage from "../Pages/LoginPage";
import SignupPage from "../Pages/SignupPage";
// import Login from "../Components/Login";
import Footer from "../Components/Footer";
import { Toaster } from "react-hot-toast";
import { useAuth } from "../context/AuthContext";
// D:\Portfolio\my-project\src\context\AuthContext.js

const AppRouter = () => {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      <div>
        <Header />

        <Routes>
          <Route path="/" exact element={<HomePage />} />
          {/* <Route
            path="/projects"
            element={authUser ? <ProjectsPage /> : <Navigate to="/signup" />}
          /> */}
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignupPage />} />
        </Routes>
        <Footer />
        <Toaster />
      </div>
    </>
  );
};

export default AppRouter;
