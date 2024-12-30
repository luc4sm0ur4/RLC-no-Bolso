import React from 'react';
import { GraduationCap, Target, Award, BarChart } from 'lucide-react';

const TreinamentosInterativos: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Treinamentos Interativos</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-4 bg-indigo-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <GraduationCap className="w-6 h-6 text-indigo-600" />
              <h3 className="font-semibold">Cursos Online</h3>
            </div>
            <p className="text-gray-600">Treinamentos estruturados por módulos</p>
          </div>

          <div className="p-4 bg-rose-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Target className="w-6 h-6 text-rose-600" />
              <h3 className="font-semibold">Exercícios Práticos</h3>
            </div>
            <p className="text-gray-600">Atividades hands-on com casos reais</p>
          </div>

          <div className="p-4 bg-amber-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Award className="w-6 h-6 text-amber-600" />
              <h3 className="font-semibold">Certificações</h3>
            </div>
            <p className="text-gray-600">Avaliações e certificados de conclusão</p>
          </div>

          <div className="p-4 bg-emerald-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <BarChart className="w-6 h-6 text-emerald-600" />
              <h3 className="font-semibold">Progresso</h3>
            </div>
            <p className="text-gray-600">Acompanhamento do seu desenvolvimento</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreinamentosInterativos;