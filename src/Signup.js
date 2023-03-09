import React, { useState } from 'react';
import './Signup.css';
import { useNavigate } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
   <div>
     <div className="signup-button">
        <button type="submit" onClick={handleLogin}>Login</button>
      </div>
    <div className="signup-page-container">
      <h1 className="signup-header">Sign Up</h1>
      <form className="signup-form" onSubmit={handleSubmit}>
        <label className="input-label">
          Username:
          <input type="text" className="input-field" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label className="input-label">
          Password:
          <input type="password" className="input-password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <label className="input-label">
          Email:
          <input type="email" className="input-email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Signup;
