import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Eye, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600';
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-sm fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setIsOpen(false)}>
            <Eye className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">VisionAI</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/services" className={isActive('/services')}>Services</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
            <Link to="/faq" className={isActive('/faq')}>FAQ</Link>
            {isAuthenticated ? (
              <>
                <Link to="/account" className={isActive('/account')}>Account</Link>
                <button
                  onClick={handleLogout}
                  className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition duration-300"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link 
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <Link 
            to="/" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/')}`}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')}`}
            onClick={() => setIsOpen(false)}
          >
            About Us
          </Link>
          <Link 
            to="/services" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services')}`}
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')}`}
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
          <Link 
            to="/faq" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/faq')}`}
            onClick={() => setIsOpen(false)}
          >
            FAQ
          </Link>
          {isAuthenticated ? (
            <>
              <Link 
                to="/account"
                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/account')}`}
                onClick={() => setIsOpen(false)}
              >
                Account
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium bg-red-600 text-white hover:bg-red-700 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <Link 
              to="/login"
              className="block px-3 py-2 rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}