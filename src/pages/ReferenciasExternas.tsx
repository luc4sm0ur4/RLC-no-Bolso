import React from 'react';
import { BookOpen, Link, FileText, Scale } from 'lucide-react';

const ReferenciasExternas: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Referências Externas</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-cyan-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-6 h-6 text-cyan-600" />
              <h3 className="font-semibold">Legislação</h3>
            </div>
            <p className="text-gray-600">Leis e normas relacionadas</p>
          </div>

          <div className="p-4 bg-violet-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Link className="w-6 h-6 text-violet-600" />
              <h3 className="font-semibold">Links Úteis</h3>
            </div>
            <p className="text-gray-600">Portais e sites relacionados</p>
          </div>

          <div className="p-4 bg-teal-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="w-6 h-6 text-teal-600" />
              <h3 className="font-semibold">Documentos</h3>
            </div>
            <p className="text-gray-600">Manuais e guias complementares</p>
          </div>

          <div className="p-4 bg-fuchsia-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Scale className="w-6 h-6 text-fuchsia-600" />
              <h3 className="font-semibold">Jurisprudência</h3>
            </div>
            <p className="text-gray-600">Decisões e entendimentos relevantes</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferenciasExternas;