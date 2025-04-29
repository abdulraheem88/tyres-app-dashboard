import React, { useState } from 'react';
import './LoginForm.css';

function LoginForm({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <section className="login-section">
      <div className="background-img">
        <div className="login-form-container">
          <form className="login-form" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="checkbox-container">
              <input type="checkbox" id="keep-logged-in" />
              <label htmlFor="keep-logged-in">Keep me logged in</label>
            </div>
            <button type="submit">Login</button>
            <div className="login-options">
              <a href="#">Forgot password?</a>
              <a href="#">Request new account</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default LoginForm;
