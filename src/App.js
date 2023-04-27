import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import React from 'react';
import SignIn from "./components/SignIn/SignIn";
import SignUp from "./components/SignIn/SignUp";
import Dashboard from "./components/Dashboard/Dashboard";
import Profile from "./components/Profile/Profile";

function App() {
  return (
    <div className='app'>
      <BrowserRouter basename='/client.github.io'  >
        <Routes>

          <Route path="/dashboard" element={<Dashboard />} />

          <Route exact path="/client.github.io" element={<SignIn />} ></Route>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />


        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
