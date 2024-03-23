"use client"
import React, { useState } from 'react';
import Typing from '@/components/keyboard/Typing';
import { Boundary } from '@/components/ui/boundary';

const AlphabetsPage: React.FC = () => {

  return (
    <div>
     <div>
        <h1>TypingFeature</h1>
        <Boundary
      labels={['Counter Context [Client Component]']}
      color="default"
      size="small"
      animateRerendering={true}
    >
        {/*<Typing />*/}
        
        </Boundary>
        </div>
      <h2>Alphabets Page</h2>
      <div>
      </div>
    </div>
  );
};

export default AlphabetsPage;