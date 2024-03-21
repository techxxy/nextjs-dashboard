"use client"
import React, { useState } from 'react';
import Typing from '@/components/keyboard/Typing';
import type { WordList } from '@/lib/definitions';

const VowelsPage: React.FC = () => {

  return (
    <div>
     <div>
        <h1>Consonante & Vocale </h1>

     <Typing 
      keyboardMode="mixed"
      showKeyboardSelector={true}
      textDisplayType="all"
      wordSet={alphabets}
/>
      </div>
      <h2>Alphabets Page</h2>
      <div>
      </div>
    </div>
  );
};
export default VowelsPage;


const alphabets: WordList = {
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
  laut: ['a', 'be', 'tse', 'de', 'e', '', 'ge'],
  korean: ['아', '베', '체', '데', '에', '', '게'],
};
