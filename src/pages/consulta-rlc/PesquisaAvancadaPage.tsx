import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';
import Card from '../../components/common/Card';

const PesquisaAvancadaPage: React.FC = () => {
  const [filters, setFilters] = useState({
    termo: '',
    capitulo: '',
    dataInicial: '',
    dataFinal: '',
    tipo: 'todos'
  });

  return (
    <div className="space-y-6">
      <Card>
        <form className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Termo de Pesquisa
              </label>
              <input
                type="text"
                value={filters.termo}
                onChange={(e) => setFilters({...filters, termo: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Digite sua pesquisa..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Capítulo
              </label>
              <select
                value={filters.capitulo}
                onChange={(e) => setFilters({...filters, capitulo: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="">Todos</option>
                <option value="1">Capítulo I</option>
                <option value="2">Capítulo II</option>
                <option value="3">Capítulo III</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Inicial
              </label>
              <input
                type="date"
                value={filters.dataInicial}
                onChange={(e) => setFilters({...filters, dataInicial: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data Final
              </label>
              <input
                type="date"
                value={filters.dataFinal}
                onChange={(e) => setFilters({...filters, dataFinal: e.target.value})}
                className="w-full px-3 py-2 border rounded-md"
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => setFilters({
                termo: '',
                capitulo: '',
                dataInicial: '',
                dataFinal: '',
                tipo: 'todos'
              })}
              className="px-4 py-2 text-gray-600 hover:text-gray-800"
            >
              Limpar
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-emerald-600 text-white rounded-md hover:bg-emerald-700 flex items-center gap-2"
            >
              <Search className="w-4 h-4" />
              Pesquisar
            </button>
          </div>
        </form>
      </Card>

      <div className="text-center text-gray-500 py-8">
        <Filter className="w-12 h-12 mx-auto mb-3 text-gray-400" />
        <p>Use os filtros acima para realizar uma pesquisa avançada</p>
      </div>
    </div>
  );
};

export default PesquisaAvancadaPage;