// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Next from './pages/Next';
import Previous from './pages/Previous';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Previous />} />
        <Route path="/next" element={<Next />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
