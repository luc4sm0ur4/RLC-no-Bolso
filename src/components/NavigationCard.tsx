import React from 'react';
import { Link } from 'react-router-dom';

interface NavigationCardProps {
  icon: React.ReactNode;
  title: string;
  color: string;
  to: string;
}

const NavigationCard: React.FC<NavigationCardProps> = ({ icon, title, color, to }) => {
  return (
    <Link to={to} className={`${color} rounded-lg p-6 text-white hover:opacity-90 transition-opacity block`}>
      <div className="flex flex-col items-center text-center">
        <div className="mb-3">
          {icon}
        </div>
        <h3 className="font-medium">{title}</h3>
      </div>
    </Link>
  );
};

export default NavigationCard;