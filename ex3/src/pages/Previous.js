// pages/Previous.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css'; // นำเข้าไฟล์ CSS

function Previous() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="previous-container">
      <h1 className="previous-heading">Previous Page</h1>
      <p className="previous-path">Current path: {location.pathname}</p>

      <button className="previous-button" onClick={() => navigate('/next')}>
        Go to Next Page
      </button>
    </div>
  );
}

export default Previous;
