import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200 p-4 shadow-md absolute w-screen">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li>
            <Link
              to="/"
              className="relative group text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Home
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="relative group text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Produtos
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="relative group text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Sobre
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="relative group text-gray-700 hover:text-purple-600 transition duration-300 ease-in-out"
            >
              Contato
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
