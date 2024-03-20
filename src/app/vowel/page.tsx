"use client"
import React, { useState } from 'react';
import Typing from '@/components/keyboard/Typing';
import { Boundary } from '@/components/ui/boundary';

const VowelsPage: React.FC = () => {

  return (
    <div>
     <div>
        <h1>Consonante & Vocale </h1>

     <Typing 
      keyboardMode={'simple'}
      showKeyboardSelector={true}
      wordPair={'consonants'}
      />
        </div>
      <h2>Alphabets Page</h2>
      <div>
      </div>
    </div>
  );
};

export default VowelsPage;