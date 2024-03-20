"use client"
import React, { useState } from 'react';
import SchnuppernTyping from '@/components/keyboard/SchnuppernTyping';
import { Boundary } from '@/components/ui/boundary';

const SchnuppernPage: React.FC = () => {

  return (
     <>
{/*              <Boundary
        labels={['Koreanisches Alphabet']}
        color="default"
        size="small"
        animateRerendering={true}
      >
           <h1 className='mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-4xl lg:text-5xl '><span className="text-blue-600 dark:text-blue-500">한글</span> Koreanisches Alphabet</h1>
      <p className='text-gray-1000'>Schreiben Sie deutsche Wörter auf Koreanisch Schrift, Hangul.</p>
      <p className='text-gray-1000'>Hangul ist wie deutsch Alphabet, das Laute darstellt. </p>
      <p className='text-gray-1000'>Ein Hangul-Zeichen entspricht einer Silbe. </p>
      </Boundary> */}
        <SchnuppernTyping />       
      </>
  );
};

export default SchnuppernPage;