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
  alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
  laut: ['a', 'be', 'tse', 'de', 'e', 'ef', 'ge', 'ha', 'i', 'yot', 'ka', 'el', 'em', 'en', 'o', 'pe', 'ku', 'er', 'es', 'te', 'u','fow', 've', 'i.', 'i.', 't.'],
  korean: ['아', '베', '체', '데', '에', '', '게', '하', '이', '욭', '카', '엘', '엠', '엔', '오', '페', '쿠', '', '', '테', '우', '', '', '', '', ''],
};
