import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
// src/App.js
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from './pages/Login';
import Contract from './pages/Contract';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} /> | 
        <Route path="contract" element={<Contract />} /> 
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
}

export default App;
