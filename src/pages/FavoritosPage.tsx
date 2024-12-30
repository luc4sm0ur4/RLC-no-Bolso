import React from 'react';
import { Star, Bookmark, Clock, Heart } from 'lucide-react';
import Card from '../components/common/Card';

interface FavoriteItem {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'document' | 'section';
  date: string;
}

const mockFavorites: FavoriteItem[] = [
  {
    id: '1',
    title: 'Artigo 42 - Licitações',
    description: 'Procedimentos e diretrizes para condução de licitações',
    type: 'article',
    date: '2024-03-15'
  },
  {
    id: '2',
    title: 'Modelo de Contrato Padrão',
    description: 'Template atualizado para contratos administrativos',
    type: 'document',
    date: '2024-03-14'
  },
  {
    id: '3',
    title: 'Seção 3.2 - Fiscalização',
    description: 'Orientações sobre fiscalização de contratos',
    type: 'section',
    date: '2024-03-13'
  }
];

const FavoritosPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Meus Favoritos</h1>
        <button className="text-blue-600 hover:text-blue-700 flex items-center gap-2">
          <Star className="w-5 h-5" />
          <span>Organizar</span>
        </button>
      </div>

      <div className="grid gap-4">
        {mockFavorites.map((item) => (
          <Card key={item.id} className="hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              {item.type === 'article' && <Bookmark className="w-5 h-5 text-blue-600" />}
              {item.type === 'document' && <Clock className="w-5 h-5 text-green-600" />}
              {item.type === 'section' && <Heart className="w-5 h-5 text-red-600" />}
              
              <div className="flex-1">
                <h3 className="font-semibold text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-xs text-gray-500">Salvo em {item.date}</span>
                  <button className="text-xs text-red-600 hover:text-red-700">Remover</button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FavoritosPage;