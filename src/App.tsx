import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LoadingSpinner from './components/common/LoadingSpinner';

// Lazy load pages
const HomePage = React.lazy(() => import('./pages/HomePage'));
const ConsultaRLC = React.lazy(() => import('./pages/ConsultaRLC'));
const ModelosDidaticos = React.lazy(() => import('./pages/ModelosDidaticos'));
const TreinamentosInterativos = React.lazy(() => import('./pages/TreinamentosInterativos'));
const ReferenciasExternas = React.lazy(() => import('./pages/ReferenciasExternas'));
const Fiscalizacao = React.lazy(() => import('./pages/Fiscalizacao'));
const FavoritosPage = React.lazy(() => import('./pages/FavoritosPage'));
const ConfiguracoesPage = React.lazy(() => import('./pages/ConfiguracoesPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="consulta-rlc" element={<ConsultaRLC />} />
            <Route path="modelos-didaticos" element={<ModelosDidaticos />} />
            <Route path="treinamentos" element={<TreinamentosInterativos />} />
            <Route path="referencias" element={<ReferenciasExternas />} />
            <Route path="fiscalizacao" element={<Fiscalizacao />} />
            <Route path="favoritos" element={<FavoritosPage />} />
            <Route path="configuracoes" element={<ConfiguracoesPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;