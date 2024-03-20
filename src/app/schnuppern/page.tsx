"use client"
import React, { useState } from 'react';
import SchnuppernTyping from '@/components/keyboard/SchnuppernTyping';
import { Boundary } from '@/components/ui/boundary';

const SchnuppernPage: React.FC = () => {

  return (
     <div>
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
        <SchnuppernTyping />       
      </div>
  );
};

export default SchnuppernPage;