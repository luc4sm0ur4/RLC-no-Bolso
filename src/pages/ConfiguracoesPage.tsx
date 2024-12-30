import React from 'react';
import { Bell, Moon, Globe, Shield, User, Database } from 'lucide-react';
import Card from '../components/common/Card';

interface ConfigSection {
  title: string;
  icon: React.ReactNode;
  options: {
    id: string;
    label: string;
    type: 'toggle' | 'select' | 'button';
    value?: boolean | string;
    choices?: string[];
  }[];
}

const configSections: ConfigSection[] = [
  {
    title: 'Aparência',
    icon: <Moon className="w-5 h-5 text-purple-600" />,
    options: [
      { id: 'darkMode', label: 'Modo Escuro', type: 'toggle', value: false },
      { id: 'fontSize', label: 'Tamanho da Fonte', type: 'select', value: 'medium', choices: ['small', 'medium', 'large'] }
    ]
  },
  {
    title: 'Notificações',
    icon: <Bell className="w-5 h-5 text-yellow-600" />,
    options: [
      { id: 'updates', label: 'Atualizações do RLC', type: 'toggle', value: true },
      { id: 'news', label: 'Novidades e Dicas', type: 'toggle', value: true }
    ]
  },
  {
    title: 'Dados e Armazenamento',
    icon: <Database className="w-5 h-5 text-blue-600" />,
    options: [
      { id: 'cache', label: 'Limpar Cache', type: 'button' },
      { id: 'offline', label: 'Conteúdo Offline', type: 'toggle', value: true }
    ]
  }
];

const ConfiguracoesPage: React.FC = () => {
  const handleToggle = (sectionId: string, optionId: string) => {
    console.log(`Toggle ${optionId} in ${sectionId}`);
  };

  const handleSelect = (sectionId: string, optionId: string, value: string) => {
    console.log(`Select ${value} for ${optionId} in ${sectionId}`);
  };

  const handleButton = (sectionId: string, optionId: string) => {
    console.log(`Button clicked: ${optionId} in ${sectionId}`);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Configurações</h1>

      <div className="space-y-4">
        {configSections.map((section) => (
          <Card key={section.title} className="space-y-4">
            <div className="flex items-center gap-3">
              {section.icon}
              <h2 className="font-semibold text-gray-800">{section.title}</h2>
            </div>

            <div className="space-y-4">
              {section.options.map((option) => (
                <div key={option.id} className="flex items-center justify-between">
                  <span className="text-gray-700">{option.label}</span>
                  
                  {option.type === 'toggle' && (
                    <button
                      onClick={() => handleToggle(section.title, option.id)}
                      className={`w-11 h-6 rounded-full transition-colors ${
                        option.value ? 'bg-emerald-600' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded-full bg-white transform transition-transform ${
                        option.value ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </button>
                  )}

                  {option.type === 'select' && (
                    <select
                      value={option.value as string}
                      onChange={(e) => handleSelect(section.title, option.id, e.target.value)}
                      className="border rounded px-2 py-1 text-sm"
                    >
                      {option.choices?.map((choice) => (
                        <option key={choice} value={choice}>
                          {choice.charAt(0).toUpperCase() + choice.slice(1)}
                        </option>
                      ))}
                    </select>
                  )}

                  {option.type === 'button' && (
                    <button
                      onClick={() => handleButton(section.title, option.id)}
                      className="px-3 py-1 text-sm text-white bg-red-600 rounded hover:bg-red-700"
                    >
                      Limpar
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ConfiguracoesPage;