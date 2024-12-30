import React from 'react';
import ConsultaRLCTabs from './consulta-rlc/ConsultaRLCTabs';

const ConsultaRLC: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Consulta RLC</h2>
        <ConsultaRLCTabs />
      </div>
    </div>
  );
};

export default ConsultaRLC;