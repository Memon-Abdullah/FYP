import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
// import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { auth, onAuthStateChanged } from "./firebase"; // Import Firebase Auth
import MeetMoodIntro from "./components/MeetMoodIntro";
import ModelSelector from "./components/ModelSelector";
import Results from "./components/Results"; 
const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Firebase Auth listener to check if the user is logged in
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // Set the user if logged in
    });

    return () => unsubscribe(); // Clean up the listener when the component unmounts
  }, []);

  return (
    <Router>
      {/* <Nav  bar/> */}
      {/* Conditionally render Navbar  */}
      {console.log(user)}
      {user && <> <Navbar /> <ModelSelector /></>}

      <Routes>
        {/* Redirect to Dashboard if logged in, else show Login */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> :  <Login setUser={setUser} />} />

        {/* Show SignUp page when user clicks "Sign Up" */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route for Dashboard */}
        {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} /> */}
      </Routes>
      <MeetMoodIntro/>
      <Results/>
      <Footer />
    </Router>
  );
};

export default App;
