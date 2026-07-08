import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import LandingPage from "./components/Pages/LandingPage";
import SignUp from "./components/Pages/Login/SignUp";
import SignIn from "./components/Pages/Login/SignIn";

function App() {
  return (
    <div>
      <Navbar />
      <main style={{ marginTop: "1.2rem" }}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
