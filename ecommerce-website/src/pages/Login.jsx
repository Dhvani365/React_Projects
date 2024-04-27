import { useState } from 'react'
import './Login.css'

function Login() {
  return (
    <>
      <div class="login-container">
        <h2>Login to Your Account</h2>
        <form>
          <div class="form-group">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required/>
          </div>

          <div class="form-group">
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required/>
          </div>

          <div class="form-group">
            <button type="submit">Login</button>
          </div>
        </form>
        
        <div className="content">
            <p>Don't have an account? <a href="#" class="register-link">Register here</a></p>
            <input type="checkbox" style={{marginTop: '20px'}}/>By Clicking to the button, You agree to the <a href="#">terms & conditions</a>
        </div>
      </div>
      {/* <div class="switch-container">
        <span class="switch-label">Toggle Switch:</span>
        <label class="switch">
          <input type="checkbox"/>
          <span class="slider"></span>
        </label>
      </div> */}
    </>
  )
}

export default Login