import React from 'react';
import ModelosDidaticosTabs from './modelos-didaticos/ModelosDidaticosTabs';

const ModelosDidaticos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Modelos Didáticos</h2>
        <ModelosDidaticosTabs />
      </div>
    </div>
  );
};

export default ModelosDidaticos;