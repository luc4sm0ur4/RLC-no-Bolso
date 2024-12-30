import React from 'react';
import { Home, Star, Settings } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const BottomNav: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 w-full bg-white border-t border-gray-200 py-3">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-around items-center">
          <Link to="/" className={`flex flex-col items-center ${location.pathname === '/' ? 'text-blue-900' : 'text-gray-600'}`}>
            <Home className="w-6 h-6" />
            <span className="text-sm mt-1">Home</span>
          </Link>
          <Link to="/favoritos" className={`flex flex-col items-center ${location.pathname === '/favoritos' ? 'text-blue-900' : 'text-gray-600'}`}>
            <Star className="w-6 h-6" />
            <span className="text-sm mt-1">Favoritos</span>
          </Link>
          <Link to="/configuracoes" className={`flex flex-col items-center ${location.pathname === '/configuracoes' ? 'text-blue-900' : 'text-gray-600'}`}>
            <Settings className="w-6 h-6" />
            <span className="text-sm mt-1">Configurações</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;