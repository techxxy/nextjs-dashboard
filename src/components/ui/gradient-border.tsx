import React, { ReactNode } from 'react';

export default function GradientBorder ({
  children,
  className,
  fullMode,
}: {
  children: ReactNode;
  className?: string;
  fullMode?:'h-full';
}) {
  return (
    <div className={`rounded-lg bg-opacity-80 p-px shadow-lg dark:bg-vc-border-gradient ${className}`}>
      <div className={`rounded-lg dark:bg-black dark:bg-none ${fullMode}`}>
        {children}
      </div>
    </div>
  );
};

