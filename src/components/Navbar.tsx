import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, User } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full bg-black/95 backdrop-blur-sm text-white z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold tracking-wider">
            CANNIBAL.CO
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-gray-300 transition-colors">Home</Link>
            <Link to="/store" className="hover:text-gray-300 transition-colors">Store</Link>
            <Link to="/fashiongallery" className="hover:text-gray-300 transition-colors">Gallery</Link>
            <Link to="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-gray-300 transition-colors">Contact</Link>
            <Link to="/admin" className="hover:text-gray-300 transition-colors">Admin</Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link to="/cart" className="hover:text-gray-300 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
            <Link to="/admin" className="hover:text-gray-300 transition-colors">
              <User className="w-6 h-6" />
            </Link>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}