// src/App.js
import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import MeetMoodIntro from './components/MeetMoodIntro';
import ModelSelector from './components/ModelSelector';
import Results from './components/Results';
import { useUser } from './context/UserContext'; // 👈

const App = () => {
    const { user } = useUser(); // 👈 use context

    return (
        <Router>
            {user && (
                <>
                    <Navbar />
                    <ModelSelector />
                </>
            )}
            <Routes>
                <Route
                    path="/"
                    element={user ? <Navigate to="/dashboard" /> : <Login />}
                />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<Login />} />
                {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} /> */}
            </Routes>

            <MeetMoodIntro />
      <Results />

            <Footer />
        </Router>
    );
};

export default App;
