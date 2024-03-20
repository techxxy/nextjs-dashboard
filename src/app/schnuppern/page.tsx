"use client"
import React, { useState } from 'react';
import SchnuppernTyping from '@/components/keyboard/SchnuppernTyping';
import { Boundary } from '@/components/ui/boundary';

const SchnuppernPage: React.FC = () => {

  return (
     <>
      <h1 className='mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>Koreanisches Alphabet</h1>
        <Boundary
        labels={['Koreanisches Alphabet']}
        color="default"
        size="small"
        animateRerendering={true}
      >
      <p className='text-gray-1000'>Schreiben Sie deutsche Wörter auf Koreanisch Schrift, Hangul.</p>
      <p className='text-gray-1000'>Hangul ist wie deutsch Alphabet, das Laute darstellt. </p>
      <p className='text-gray-1000'>Ein Hangul-Zeichen entspricht einer Silbe. </p>
      </Boundary>
        <SchnuppernTyping />       
      </>
  );
};

export default SchnuppernPage;