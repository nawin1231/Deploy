// src/pages/Home.js
import React from 'react';
import '../App.css'; // นำเข้าหมายเลข CSS เพื่อใช้ตกแต่ง

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Home Page</h1>
        <p className="home-description">
          This is the home page of your awesome React app. Enjoy your stay!
        </p>
      </header>
    </div>
  );
}

export default Home;
