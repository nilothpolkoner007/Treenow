import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Routes will be implemented as we add more pages */}
          <Route path="/tree-care" element={<div>Tree Care Page</div>} />
          <Route path="/bonsai" element={<div>Bonsai Care Page</div>} />
          <Route path="/krishi-help" element={<div>Krishi Help Page</div>} />
          <Route path="/products" element={<div>Products Page</div>} />
          <Route path="/blog" element={<div>Blog Page</div>} />
          <Route path="/contact" element={<div>Contact Page</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;