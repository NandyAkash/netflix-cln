import React, { useState } from 'react'
import './LoginScreen.css'
import SignInScreen from './SignInScreen';
import '../firebase'

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  
  return (
    <div className='loginScreen'>
      <div className="loginScreen_background">
        <img 
        className='loginScreen_logo'
        src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="logo" />

        <button 
        onClick={() => setSignIn(true)}
        // onClick={handleSignin}
        className='loginScreen_btn'>Sign In</button>
        <div className="loginScreen_gradient"></div>
      </div>
      <div className="loginScreen_body">
        {signIn ? (<SignInScreen />) : 
        (
          <>
          <h1>Unlimited flims, Tv programs and more</h1>
          <h2>Watch anywhere, cancel it anytime.</h2>
          <h3>Ready to watch? Enter your email to create or restart your subscription.</h3>
          <div className="loginScreen_input">
            <form>
              <input type="email" placeholder='Email Address' />
              <button 
              onClick={() => setSignIn(true)}
              className='loginScreeen_getStarted'>Get Started</button>
            </form>
          </div>
        </>
        )}
        
      </div>
    </div>
  )
}

export default LoginScreen