import React from 'react';
import { Book, Download } from 'lucide-react';
import Card from '../../components/common/Card';

interface Guia {
  id: string;
  titulo: string;
  descricao: string;
  paginas: number;
  formato: string;
}

const guias: Guia[] = [
  {
    id: '1',
    titulo: 'Guia de Licitações Sustentáveis',
    descricao: 'Orientações para implementação de critérios sustentáveis em licitações',
    paginas: 45,
    formato: 'PDF'
  },
  {
    id: '2',
    titulo: 'Manual de Gestão de Contratos',
    descricao: 'Procedimentos e boas práticas na gestão contratual',
    paginas: 60,
    formato: 'PDF'
  },
  {
    id: '3',
    titulo: 'Cartilha do Pregoeiro',
    descricao: 'Guia prático para condução de pregões eletrônicos',
    paginas: 30,
    formato: 'PDF'
  }
];

const GuiasPraticosPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {guias.map((guia) => (
          <Card key={guia.id} className="hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <Book className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">{guia.titulo}</h3>
                  <p className="text-sm text-gray-600 mt-1">{guia.descricao}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-gray-500">{guia.paginas} páginas</span>
                    <span className="text-xs text-gray-500">{guia.formato}</span>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700">
                <Download className="w-5 h-5" />
                <span className="text-sm">Baixar</span>
              </button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};