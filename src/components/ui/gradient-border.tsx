import React, { ReactNode } from 'react';

interface GradientBorderProps {
  children: ReactNode;
  className?: string;
  fullMode?:'h-full';
}

const GradientBorder: React.FC<GradientBorderProps> = ({ children, className, fullMode }) => {
  return (
    <div className={`rounded-lg bg-opacity-80 p-px shadow-lg dark:bg-vc-border-gradient ${className}`}>
      <div className={`rounded-lg dark:bg-black dark:bg-none ${fullMode}`}>
        {children}
      </div>
    </div>
  );
};

export default GradientBorder;