import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import Card from '../../components/common/Card';

interface CasoSucesso {
  id: string;
  titulo: string;
  descricao: string;
  resultado: string;
  orgao: string;
  ano: number;
}

const casos: CasoSucesso[] = [
  {
    id: '1',
    titulo: 'Implementação de Pregão Eletrônico',
    descricao: 'Caso de sucesso na implementação do pregão eletrônico para aquisição de insumos agrícolas',
    resultado: 'Economia de 35% e redução do tempo de processo em 50%',
    orgao: 'Superintendência Regional',
    ano: 2023
  },
  {
    id: '2',
    titulo: 'Gestão de Contratos Inovadora',
    descricao: 'Nova metodologia de gestão contratual com uso de ferramentas digitais',
    resultado: 'Melhoria de 80% na eficiência do acompanhamento',
    orgao: 'Matriz',
    ano: 2024
  }
];

const CasosSucessoPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {casos.map((caso) => (
          <Card key={caso.id} className="hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Award className="w-6 h-6 text-yellow-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">{caso.titulo}</h3>
                  <p className="text-sm text-gray-600 mt-1">{caso.descricao}</p>
                </div>
              </div>

              <div className="pl-10">
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-green-800">
                    <strong>Resultado:</strong> {caso.resultado}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-600">{caso.orgao}</span>
                  <span className="text-sm text-gray-500">{caso.ano}</span>
                </div>
              </div>

              <div className="pl-10">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm">
                  <span>Ver detalhes</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};