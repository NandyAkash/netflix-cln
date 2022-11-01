import React, { useRef } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import './SignInScreen.css';
import {auth} from "../firebase";

function SignInScreen() {
  const emailRef = useRef(null)
  const PasswordRef = useRef(null)

  // const provider = new  GoogleAuthProvider()
  // const auth = getAuth();
  // const handleSignin =() => {
  //   signInWithPopup(auth, provider).then((res) => {console.log(res)}).catch(err => console.log(err))
  // }

  const register = (e) => {
    e.preventDefault();
    
    
    createUserWithEmailAndPassword(auth,
      emailRef.current.value,
      PasswordRef.current.value
    ).then((authUser) =>{
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    })  
  }
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,
      emailRef.current.value,
      PasswordRef.current.value
    ).then((authUser) =>{
      console.log(authUser);
    }).catch((error) => {
      alert(error.message);
    }) 
  }
  return (
    <div className='signInScreen'>
        <form>
            <h1>Sign In</h1>
            <input ref={emailRef} type="email" placeholder='Email' />
            <input ref={PasswordRef} type="password" placeholder='Password' />
            <button type='submit' onClick={signIn}>Sign In</button>
            <h4>
              <span className='signInScreen_span'>New to Netflix? </span>
              <span className='signInScreen_link' onClick={register}>Sign Up Now.</span></h4>
        </form>
    </div>
  )
}

export default SignInScreen