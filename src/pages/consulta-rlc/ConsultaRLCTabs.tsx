import React, { useState } from 'react';
import { Book, FileText, Search, History } from 'lucide-react';
import CapitulosPage from './CapitulosPage';
import ArtigosPage from './ArtigosPage';
import PesquisaAvancadaPage from './PesquisaAvancadaPage';
import HistoricoPage from './HistoricoPage';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'capitulos',
    label: 'Capítulos',
    icon: <Book className="w-5 h-5" />,
    component: <CapitulosPage />
  },
  {
    id: 'artigos',
    label: 'Artigos',
    icon: <FileText className="w-5 h-5" />,
    component: <ArtigosPage />
  },
  {
    id: 'pesquisa',
    label: 'Pesquisa Avançada',
    icon: <Search className="w-5 h-5" />,
    component: <PesquisaAvancadaPage />
  },
  {
    id: 'historico',
    label: 'Histórico',
    icon: <History className="w-5 h-5" />,
    component: <HistoricoPage />
  }
];

const ConsultaRLCTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <div className="space-y-6">
      <div className="border-b border-gray-200">
        <div className="flex overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-3 border-b-2 transition-colors ${
                activeTab === tab.id
                  ? 'border-emerald-600 text-emerald-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="py-4">
        {tabs.find(tab => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default ConsultaRLCTabs;