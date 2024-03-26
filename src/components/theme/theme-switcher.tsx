'use client';

import { useTheme } from 'next-themes';
import { SunIcon } from '@heroicons/react/24/outline';
import { MoonIcon } from '@heroicons/react/24/solid';
import { GoMoon } from 'react-icons/go';
import { useState } from 'react';

export default function ThemeSwitcher({ className }: { className?: string }) {
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === 'system' ? systemTheme : theme;
  const [isHovered, setIsHovered] = useState(false);

  if (currentTheme === 'dark') {
    return (
      <SunIcon
        className={`h-6 w-6 transform text-amber-500 transition duration-500 hover:rotate-45 ${className}`}
        role="button"
        onClick={() => setTheme('light')}
      />
    );
  } else {
    return (
      <>
        <GoMoon
          className={`h-6 w-6 text-gray-500 ${className}`}
          style={{
            transform: `rotate(${isHovered ? '15deg' : '-20deg'})`,
            transition: 'transform 0.5s',
            cursor: 'pointer', // Optionally, add cursor style for better UX
          }}
          role="button"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setTheme('dark')}
        />
      </>
    );
  }
}
