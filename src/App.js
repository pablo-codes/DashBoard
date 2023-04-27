import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

const App = () => {
  return (
    <>
      <Routes>

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />


      </Routes>
    </>
  );
}

export default App;
