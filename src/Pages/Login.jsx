import React from 'react';
import './CSS/LoginSignup.css';

export const Login = () => {
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

       
        <div className="loginsignup-fields">
          <input type="text" placeholder="Enter Your Name" />
          <input type="email" placeholder="Enter Email Address" />
          <input type="password" placeholder="Enter Password" />
        </div>

       
        <button>Continue</button>

        
        <p className="loginsignup-login">
          Already have an account? <span>Login</span>
        </p>

        
        <div className="loginsignup-area">
          <input type="checkbox" />
          <p>
            By continuing, I agree to <span>Terms of Service</span> and{' '}
            <span>Privacy Policy</span>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
