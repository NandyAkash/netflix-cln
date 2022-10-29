import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';

function App() {
  const user = null;
  return (
    <div className="App">
      {!user ? <LoginScreen/> : 
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="about" element={<div> It is about page </div>} />
      </Routes>
      }
      
    </div>
  );
}

export default App;
