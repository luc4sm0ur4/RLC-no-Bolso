import React, { useState } from 'react';
import { Book, FileText, Video, Users } from 'lucide-react';
import GuiasPraticosPage from './GuiasPraticosPage';
import TemplatesPage from './TemplatesPage';
import VideoAulasPage from './VideoAulasPage';
import CasosSucessoPage from './CasosSucessoPage';

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

const tabs: Tab[] = [
  {
    id: 'guias',
    label: 'Guias Práticos',
    icon: <Book className="w-5 h-5" />,
    component: <GuiasPraticosPage />
  },
  {
    id: 'templates',
    label: 'Templates',
    icon: <FileText className="w-5 h-5" />,
    component: <TemplatesPage />
  },
  {
    id: 'videos',
    label: 'Vídeo Aulas',
    icon: <Video className="w-5 h-5" />,
    component: <VideoAulasPage />
  },
  {
    id: 'casos',
    label: 'Casos de Sucesso',
    icon: <Users className="w-5 h-5" />,
    component: <CasosSucessoPage />
  }
];

const ModelosDidaticosTabs: React.FC = () => {
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