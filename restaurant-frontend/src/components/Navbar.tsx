import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
// import { HiMenu, HiX } from 'react-icons/hi'; // hamburger icons

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="bg-white shadow fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              Restaurant
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900">
              Cart ({cartItems.length})
            </Link>
            <Link to="/menu" className="text-gray-700 hover:text-gray-900">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-gray-900">About</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              {/* {isOpen ? <HiX size={28} /> : <HiMenu size={28} />} */}
                            {isOpen ? 'X' : 'M' }

            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Home
          </Link>
          <Link
            to="/cart"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Cart ({cartItems.length})
          </Link>
          <Link
            to="/menu"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Menu
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            About
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
