import React, { useState } from 'react';
import SearchBar from '../components/common/SearchBar';
import UpdatesCard from '../components/home/UpdatesCard';
import NavigationGrid from '../components/home/NavigationGrid';

const HomePage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="space-y-6">
      <SearchBar 
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Pesquisar no RLC..."
      />
      <UpdatesCard />
      <NavigationGrid />
    </div>
  );
};

export default HomePage;