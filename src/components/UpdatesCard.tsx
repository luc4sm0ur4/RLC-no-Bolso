import React from 'react';
import { Bell } from 'lucide-react';

const UpdatesCard: React.FC = () => {
  return (
    <div className="bg-[#1e3a8a] text-white rounded-lg p-6 cursor-pointer hover:bg-[#1e3a8a]/90 transition-colors">
      <div className="flex items-start gap-4">
        <Bell className="w-6 h-6" />
        <div>
          <h2 className="text-xl font-semibold mb-2">Atualizações Recentes do RLC</h2>
          <p className="text-gray-100">Últimas alterações e novidades do regulamento</p>
        </div>
      </div>
    </div>
  );
}

export default UpdatesCard;