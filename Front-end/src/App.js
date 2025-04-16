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
import Instructions from './components/Instructions';
import Header from "./components/Header";
import LandingPage from './components/LandingPage';
import Definition from './components/Definition';
import Features from './components/Features';
const App = () => {
    const { user } = useUser(); // 👈 use context

    return (
    //     <div>
     
    //   <Header />
    //   <Routes>
    //     <Route path={"/"} element = {<Herosection/>}/>
    //     <Route path={"/Projects "} element = {<Project/>}/>
    //     <Route path={"/About"} element = {<About />}/>
    //     <Route path={"/Contact"} element = {<Contact />}/>
    //   </Routes>  
    //   <Footer />
     
      
    // </div>
        <Router>
            {/* <Navbar /> */}
            {/* <Header /> */}
            {/* <LandingPage /> */}
            {/* <Definition /> */}
            {/* <Instructions /> */}
            {/* <Features/> */}
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
                <Route path="/login" element={<Login />} />
                <Route path="/about" element={<MeetMoodIntro />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Login />} />

                {/* <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} /> */}
            </Routes>

            <MeetMoodIntro />
            {/* <Instructions /> */}
            
            <Results />

            <Footer />
        </Router>
    );
};

export default App;
