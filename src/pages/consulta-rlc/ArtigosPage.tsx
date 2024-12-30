import React, { useState } from 'react';
import { FileText, Search } from 'lucide-react';
import Card from '../../components/common/Card';
import SearchBar from '../../components/common/SearchBar';

interface Artigo {
  numero: number;
  titulo: string;
  conteudo: string;
  capitulo: string;
}

const artigos: Artigo[] = [
  {
    numero: 1,
    titulo: "Objeto e Âmbito de Aplicação",
    conteudo: "Este Regulamento estabelece as normas gerais sobre licitações e contratos...",
    capitulo: "I"
  },
  {
    numero: 42,
    titulo: "Modalidades de Licitação",
    conteudo: "São modalidades de licitação: I - Pregão; II - Concorrência...",
    capitulo: "II"
  },
  {
    numero: 89,
    titulo: "Gestão do Contrato",
    conteudo: "A gestão do contrato compreende o conjunto de ações...",
    capitulo: "III"
  }
];

const ArtigosPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedArtigo, setSelectedArtigo] = useState<Artigo | null>(null);

  const filteredArtigos = artigos.filter(artigo => 
    artigo.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    artigo.conteudo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="mb-6">
        <SearchBar
          value={searchTerm}
          onChange={setSearchTerm}
          placeholder="Pesquisar artigos..."
        />
      </div>

      <div className="grid gap-4">
        {filteredArtigos.map((artigo) => (
          <Card 
            key={artigo.numero}
            className="hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => setSelectedArtigo(artigo)}
          >
            <div className="flex gap-4">
              <FileText className="w-6 h-6 text-blue-600 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800">
                  Artigo {artigo.numero} - {artigo.titulo}
                </h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                  {artigo.conteudo}
                </p>
                <span className="text-xs text-gray-500 mt-2 block">
                  Capítulo {artigo.capitulo}
                </span>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {selectedArtigo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-semibold">
                Artigo {selectedArtigo.numero} - {selectedArtigo.titulo}
              </h3>
              <button 
                onClick={() => setSelectedArtigo(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <p className="text-gray-600">{selectedArtigo.conteudo}</p>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ArtigosPage;