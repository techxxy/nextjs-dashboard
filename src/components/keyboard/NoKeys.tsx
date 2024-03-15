import React from 'react';
import styles from './styles.module.css';

export default function NoKeys() {
  const numberKeys = [
    { korean: '~', koreanShifted: '₩' },
    { korean: '1', koreanShifted: '!' },
    { korean: '2', koreanShifted: '@' },
    { korean: '3', koreanShifted: '#' },
    { korean: '4', koreanShifted: '$' },
    { korean: '5', koreanShifted: '%' },
    { korean: '6', koreanShifted: '^' },
    { korean: '7', koreanShifted: '&' },
    { korean: '8', koreanShifted: '*' },
    { korean: '9', koreanShifted: '(' },
    { korean: '0', koreanShifted: ')' },
    { korean: '-', koreanShifted: '_' },
    { korean: '=', koreanShifted: '+' },
  ];

  return (
    <>
      {numberKeys.map(({ korean, koreanShifted }, index) => (
        <div
          key={index}
          className={`${styles.key} h-11 w-[47px] items-end rounded-md`}
        >
          <div className="flex flex-col items-center gap-1.5">
            <div className="mt-1.5 text-[10px] leading-none">
              {koreanShifted}
            </div>
            <div className="text-sm leading-none">{korean}</div>
          </div>
        </div>
      ))}
    </>
  );
}
