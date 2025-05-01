// src/pages/Login.js
import React, { useState } from 'react';
import '../App.css'; // นำเข้าหมายเลข CSS เพื่อใช้ตกแต่ง

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // การส่งข้อมูล (สามารถส่งไปที่ API หรือแสดงข้อมูลได้ที่นี่)
    console.log('Login form submitted:', formData);
  };

  return (
    <div className="login-container">
      <header className="login-header">
        <h1>Login to Your Account</h1>
        <p className="login-description">Please enter your credentials to login.</p>
      </header>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
        <p className="forgot-password-link">
          <a href="/forgot-password">Forgot your password?</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
