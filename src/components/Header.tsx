import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <Link to="/" className="flex items-center gap-4">
          <img src="/logo.svg" alt="RLC de Bolso" className="h-8" />
          <h1 className="text-2xl font-bold text-[#1e3a8a]">RLC DE BOLSO</h1>
        </Link>
      </div>
    </header>
  );
};

export default Header;