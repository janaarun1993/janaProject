import React, { useState } from "react";
import "./Login.css"; // import CSS file
import { useNavigate } from "react-router-dom";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userName,"userName")
    console.log(password,"password")
    if (userName === "admin" && password === "admin123") {
       navigate("/dashboard");
      } else {
        navigate("/");
      }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="form-group">
          <label>username:</label>
          <input
            type="text"
            value={userName}
            onChange={handleUserNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <a href="/signup" className="signup-link">Create Account</a>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Login;
