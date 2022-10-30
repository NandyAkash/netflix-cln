import React from 'react'
import './SignInScreen.css';

function SignInScreen() {
  return (
    <div className='signInScreen'>
        <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit'>Sign In</button>
        </form>
    </div>
  )
}

export default SignInScreen