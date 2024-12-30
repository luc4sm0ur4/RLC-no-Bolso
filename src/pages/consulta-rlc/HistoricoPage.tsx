import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import Card from '../../components/common/Card';

interface HistoricoItem {
  id: string;
  tipo: string;
  descricao: string;
  data: string;
  hora: string;
}

const historico: HistoricoItem[] = [
  {
    id: '1',
    tipo: 'Consulta',
    descricao: 'Artigo 42 - Modalidades de Licitação',
    data: '15/03/2024',
    hora: '14:30'
  },
  {
    id: '2',
    tipo: 'Pesquisa',
    descricao: 'Termo: "pregão eletrônico"',
    data: '15/03/2024',
    hora: '11:20'
  },
  {
    id: '3',
    tipo: 'Capítulo',
    descricao: 'Capítulo III - Dos Contratos',
    data: '14/03/2024',
    hora: '16:45'
  }
];

const HistoricoPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Histórico de Consultas</h2>
        <button className="text-sm text-red-600 hover:text-red-700">
          Limpar Histórico
        </button>
      </div>

      <div className="grid gap-4">
        {historico.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">{item.tipo}</span>
                    <ArrowRight className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-800">{item.descricao}</span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {item.data} às {item.hora}
                  </div>
                </div>
              </div>
              <button className="text-blue-600 hover:text-blue-700 text-sm">
                Acessar
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default HistoricoPage;