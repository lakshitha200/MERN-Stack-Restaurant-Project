import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import OrderSuccess from './pages/OrderSuccess';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/success" element={<OrderSuccess />} />
      </Routes>
    </div>
  )
}

export default App