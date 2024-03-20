"use client"
import React, { useState } from 'react';
import Typing from '@/components/keyboard/Typing';
import { Boundary } from '@/components/ui/boundary';

const VowelsPage: React.FC = () => {

  return (
    <div>
     <div>
        <h1>Vowels</h1>
    <Boundary
        labels={['Korean']}
        color="default"
        size="small"
        animateRerendering={true}
      >
      <p className='text-gray-1000'>Lassen Sie uns deutsche Wörter so schreiben, wie sie klingen, auf Koreanisch.</p>
      <p className='text-gray-1000'>Koreanisch Schreiben, Hangul ist ein Alphabet, das Laute darstellt. </p>
      <p className='text-gray-1000'>Ein Hangul-Zeichen entspricht einer Silbe. </p>
      </Boundary>
      <Typing />
        </div>
      <h2>Alphabets Page</h2>
      <div>
      </div>
    </div>
  );
};

export default VowelsPage;