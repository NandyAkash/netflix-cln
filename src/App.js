import React from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { Routes, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import {auth} from './firebase';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';

function App() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  // const auth = getAuth();
  useEffect(()=>{
    const unscbscribe = onAuthStateChanged(auth,(user)=>{
      if(user) {
        const uid = user.uid;
        console.log(uid);
        dispatch(login({
          uid: user.uid,
          email: user.email
        }))
      }
      else{
        //Logged Out
        dispatch(logout());
      }
    })
    return unscbscribe;
  },[dispatch])


  return (
    <div className="App">
      {!user ? <LoginScreen/> : 
      <Routes>
        <Route exact path="/" element={<HomeScreen />} />
        <Route path="/profile" element={<ProfileScreen />} />
      </Routes>
      }
      
    </div>
  );
}

export default App;
