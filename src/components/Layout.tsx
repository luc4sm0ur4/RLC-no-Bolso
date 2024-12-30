import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNav from './BottomNav';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      <main className="max-w-5xl mx-auto px-4 py-6">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;