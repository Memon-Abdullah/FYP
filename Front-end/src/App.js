import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        {/* Show Login page first */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Login setUser={setUser} />} />
        
        {/* Show SignUp page when user clicks "Sign Up" */}
        <Route path="/signup" element={<SignUp />} />
        
        {/* Redirect to Dashboard after login */}
        <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
