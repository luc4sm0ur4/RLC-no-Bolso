import React from 'react';
import { Search, Mic } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => {
  return (
    <div className="relative">
      <div className="flex items-center bg-white rounded-full shadow-sm border border-gray-200 px-4 py-2">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="flex-1 ml-3 outline-none text-gray-700"
        />
        <Mic className="w-5 h-5 text-gray-400 cursor-pointer" />
      </div>
    </div>
  );
}

export default SearchBar;