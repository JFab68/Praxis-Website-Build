import React, { useState } from 'react';

interface AutoSuggestInputProps {
  label: string;
  id: string;
  suggestions: string[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

const AutoSuggestInput = ({ label, id, suggestions, value, onChange, required = false }: AutoSuggestInputProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<string[]>([]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userInput = e.target.value;
    onChange(userInput);

    const filtered = suggestions.filter(
      suggestion => suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );
    setFilteredSuggestions(filtered);
    setShowSuggestions(true);
  };

  const handleSuggestionClick = (suggestion: string) => {
    onChange(suggestion);
    setShowSuggestions(false);
  };

  return (
    <div className="relative">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type="text"
        id={id}
        value={value}
        onChange={handleInputChange}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-navy focus:border-navy"
        aria-autocomplete="list"
        aria-expanded={showSuggestions}
        required={required}
      />
      {showSuggestions && filteredSuggestions.length > 0 && (
        <ul
          className="absolute z-10 w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-auto"
          role="listbox"
        >
          {filteredSuggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => handleSuggestionClick(suggestion)}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              role="option"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AutoSuggestInput;