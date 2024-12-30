import React from 'react';
import { Book, ChevronRight } from 'lucide-react';
import Card from '../../components/common/Card';

interface Capitulo {
  numero: string;
  titulo: string;
  descricao: string;
  artigos: number;
}

const capitulos: Capitulo[] = [
  {
    numero: "I",
    titulo: "Das Disposições Gerais",
    descricao: "Princípios e diretrizes fundamentais do RLC",
    artigos: 12
  },
  {
    numero: "II",
    titulo: "Das Licitações",
    descricao: "Procedimentos e modalidades licitatórias",
    artigos: 45
  },
  {
    numero: "III",
    titulo: "Dos Contratos",
    descricao: "Gestão e fiscalização de contratos",
    artigos: 30
  }
];

const CapitulosPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-800">Capítulos do RLC</h2>
      
      <div className="grid gap-4">
        {capitulos.map((capitulo) => (
          <Card key={capitulo.numero} className="hover:shadow-md transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <Book className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    Capítulo {capitulo.numero} - {capitulo.titulo}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{capitulo.descricao}</p>
                  <span className="text-xs text-gray-500 mt-2 block">
                    {capitulo.artigos} artigos
                  </span>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CapitulosPage;