import React from 'react';

interface KeyProps {
  value: string;
  onClick: () => void;
  className?: string;
}

const Key: React.FC<KeyProps> = ({ value, onClick, className }) => { // Include className in the props
   const handleClick = () => {
     onClick();
   };

  return (
    <div
      onClick={handleClick}
      className={`w-[47px] ${className} h-11 leading-[40px] rounded-md`}
      >
        {value}
    </div>
  );
};

export default Key;