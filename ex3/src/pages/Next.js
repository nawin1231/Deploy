// pages/Next.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css'; // นำเข้าไฟล์ CSS

function Next() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="next-container">
      <h1 className="next-heading">Next Page</h1>
      <p className="next-path">Current path: {location.pathname}</p>

      <button className="next-button" onClick={() => navigate('/')}>
        Go to Previous Page
      </button>
    </div>
  );
}

export default Next;
