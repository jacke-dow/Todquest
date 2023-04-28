import React from "react";
import "./Login.css";
const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <img src="/door.jpg" alt="login" />
      </div>
      <div className="right">
        <div className="form">
          <div className="form__header">
            <p style={{ color: "orange" }}>ALREADY MEMBERS</p>
            <p
              style={{
                color: "lightslategrey",
                opacity: 0.6,
                cursor: "pointer",
              }}
            >
              Need help?
            </p>
          </div>
          <div className="form__input">
            <input
              className="input1"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="input2"
              type="password"
              placeholder="Enter your password"
            />
            <button className="btn">SIGN IN</button>
          </div>
          <div className="footer">
            <a style={{ color: "white", marginTop: "3rem", cursor: "pointer" }}>
              Don't have an account yet?
            </a>
            <a className="footer__account">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
