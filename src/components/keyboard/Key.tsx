import React from 'react';

interface KeyProps {
  value: string;
  onClick: () => void;
  className?: string; // Define className as an optional property
}

const Key: React.FC<KeyProps> = ({ value, onClick, className }) => { // Include className in the props
  const handleClick = () => {
    onClick();
  };

  return (
    <button 
      onClick={handleClick}
      className={`bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ${className}`}
    >
      {value}
    </button>
  );
};

export default Key;