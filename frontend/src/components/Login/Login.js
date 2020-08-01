import React, { Component } from 'react';
import './Login.scss';

export default class Login extends Component {
  render() {
    return (
      <section className="login-container">
        <h1>Sign up</h1>
        <ul className="login-items">
          <li>
            <h4>Username</h4>
            <input
              className="signup-input"
              type="text"
              placeholder="choose your username"
            ></input>
          </li>
          <li>
            <h4>Email</h4>
            <input
              className="signup-input"
              type="text"
              placeholder="enter your email"
            ></input>
          </li>
          <li>
            <h4>Password</h4>
            <input
              className="signup-input"
              type="password"
              placeholder="enter your password"
            ></input>
          </li>
          <li>
            <h4>Confirm Password</h4>
            <input
              className="signup-input"
              type="password"
              placeholder="confirm your password"
            ></input>
          </li>
        </ul>
        <div className="signup-btn">sign up</div>
        <div className="already-btn">
          Already have an account?
          <div>Sign In</div>
        </div>
      </section>
    );
  }
}
