import React from 'react';
import { Play, Clock } from 'lucide-react';
import Card from '../../components/common/Card';

interface VideoAula {
  id: string;
  titulo: string;
  descricao: string;
  duracao: string;
  instrutor: string;
  thumbnail: string;
}

const videoAulas: VideoAula[] = [
  {
    id: '1',
    titulo: 'Introdução ao RLC',
    descricao: 'Visão geral do Regulamento de Licitações e Contratos',
    duracao: '45min',
    instrutor: 'Dr. João Silva',
    thumbnail: 'https://images.unsplash.com/photo-1588702547919-26089e690ecc?w=500'
  },
  {
    id: '2',
    titulo: 'Modalidades de Licitação',
    descricao: 'Detalhamento das diferentes modalidades previstas no RLC',
    duracao: '60min',
    instrutor: 'Dra. Maria Santos',
    thumbnail: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500'
  }
];

const VideoAulasPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 md:grid-cols-2">
        {videoAulas.map((video) => (
          <Card key={video.id} className="hover:shadow-md transition-shadow">
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.titulo}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg opacity-0 hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </button>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800">{video.titulo}</h3>
                <p className="text-sm text-gray-600 mt-1">{video.descricao}</p>
                
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-600">{video.instrutor}</span>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{video.duracao}</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};