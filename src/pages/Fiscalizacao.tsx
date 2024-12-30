import React from 'react';
import { ClipboardList, FileCheck, AlertCircle, History } from 'lucide-react';

const Fiscalizacao: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Fiscalização</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <ClipboardList className="w-6 h-6 text-emerald-600" />
              <h3 className="font-semibold">Checklists</h3>
            </div>
            <p className="text-gray-600">Listas de verificação para diferentes tipos de contratos</p>
          </div>

          <div className="p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <FileCheck className="w-6 h-6 text-blue-600" />
              <h3 className="font-semibold">Modelos de Relatórios</h3>
            </div>
            <p className="text-gray-600">Templates para relatórios de fiscalização</p>
          </div>

          <div className="p-4 bg-yellow-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              <h3 className="font-semibold">Alertas e Notificações</h3>
            </div>
            <p className="text-gray-600">Avisos importantes sobre prazos e obrigações</p>
          </div>

          <div className="p-4 bg-purple-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <History className="w-6 h-6 text-purple-600" />
              <h3 className="font-semibold">Histórico</h3>
            </div>
            <p className="text-gray-600">Registro de atividades de fiscalização</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fiscalizacao;