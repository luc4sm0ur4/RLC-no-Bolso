import React from 'react';
import { FileText, Download } from 'lucide-react';
import Card from '../../components/common/Card';

interface Template {
  id: string;
  titulo: string;
  descricao: string;
  categoria: string;
  formato: string;
}

const templates: Template[] = [
  {
    id: '1',
    titulo: 'Termo de Referência Padrão',
    descricao: 'Modelo completo para elaboração de Termo de Referência',
    categoria: 'Licitação',
    formato: 'DOCX'
  },
  {
    id: '2',
    titulo: 'Minuta de Contrato',
    descricao: 'Template base para contratos administrativos',
    categoria: 'Contratos',
    formato: 'DOCX'
  },
  {
    id: '3',
    titulo: 'Checklist de Fiscalização',
    descricao: 'Lista de verificação para fiscais de contrato',
    categoria: 'Fiscalização',
    formato: 'XLSX'
  }
];

const TemplatesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        {templates.map((template) => (
          <Card key={template.id} className="hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between">
              <div className="flex gap-4">
                <FileText className="w-6 h-6 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-gray-800">{template.titulo}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.descricao}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs bg-gray-100 px-2 py-1 rounded">
                      {template.categoria}
                    </span>
                    <span className="text-xs text-gray-500">{template.formato}</span>
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