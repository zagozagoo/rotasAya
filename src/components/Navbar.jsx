import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Navbar = () => {
  return (
    <nav className="bg-pink-300 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Logo />
        <ul className="flex space-x-4 text-white">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/products" className="hover:underline">Produtos</Link></li>
          <li><Link to="/about" className="hover:underline">Sobre</Link></li>
          <li><Link to="/contact" className="hover:underline">Contato</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
