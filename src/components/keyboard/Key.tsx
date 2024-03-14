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
      className={`${className} h-11`}
    >
      {value}
    </button>
  );
};

export default Key;