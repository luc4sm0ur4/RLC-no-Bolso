import React from 'react';
import { FileText, Users, GraduationCap, BookOpen, ClipboardCheck } from 'lucide-react';
import NavigationCard from './NavigationCard';

const navigationItems = [
  { icon: <FileText size={24} />, title: 'Consulta RLC', color: 'bg-emerald-600', to: '/consulta-rlc' },
  { icon: <Users size={24} />, title: 'Modelos Didáticos', color: 'bg-emerald-600', to: '/modelos-didaticos' },
  { icon: <GraduationCap size={24} />, title: 'Treinamentos Interativos', color: 'bg-emerald-600', to: '/treinamentos' },
  { icon: <BookOpen size={24} />, title: 'Referências Externas', color: 'bg-emerald-600', to: '/referencias' },
  { icon: <ClipboardCheck size={24} />, title: 'Fiscalização', color: 'bg-emerald-600', to: '/fiscalizacao' },
];

const NavigationGrid: React.FC = () => (
  <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
    {navigationItems.map((item, index) => (
      <NavigationCard key={index} {...item} />
    ))}
  </div>
);

export default NavigationGrid;