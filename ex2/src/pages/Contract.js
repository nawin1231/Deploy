// src/pages/Contract.js
import React, { useState } from 'react';
import '../App.css'; // นำเข้าหมายเลข CSS เพื่อใช้ตกแต่ง

function Contract() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
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
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contract-container">
      <header className="contract-header">
        <h1>Contact Us</h1>
        <p className="contract-description">
          Please fill out the form below and we will get back to you as soon as possible.
        </p>
      </header>
      <form className="contract-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Your Email:</label>
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
          <label htmlFor="message">Your Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
            required
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default Contract;
