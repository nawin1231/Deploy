// src/pages/Layout.js
import React from "react";
import { Link, Outlet } from "react-router-dom";  //ถ้าอยู่ folder เดียวกันให้ใส่ . ตัวเดียว แต่ถ้าอยู่นอก folder ให้ใส่ .. สองจุด

function Layout() {
  return (
    <div className="layout-container">
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <Link to="/" className="navbar-link active">Home</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contract" className="navbar-link">Contract</Link>
          </li>
          <li className="navbar-item">
            <Link to="/login" className="navbar-link">Login</Link>
          </li>
          <li className="navbar-item">
            <Link to="/register" className="navbar-link">Register</Link>
          </li>
        </ul>
      </nav>
      <hr className="divider" />
      <Outlet />
    </div>
  );
}

export default Layout;
