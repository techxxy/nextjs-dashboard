"use client"
import React, { useState } from 'react';
import Typing from '@/components/keyboard/Typing';
import type { WordPair } from '@/lib/definitions';

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

<Typing 
      keyboardMode="original"
      showKeyboardSelector={false}
      textDisplayType="pair"
      wordSet={schnuppernWords}
/>
   
      </>
  );
};

export default SchnuppernPage;

const schnuppernWords: WordPair = [
  { german: 'Kino', korean: '키노' },
  { german: 'Banana', korean: '바나나' },
  { german: 'Kanal', korean: '카날' },
  { german: 'Kugel', korean: '쿠겔' },
  { german: 'man', korean: '만' },
  { german: 'Nutella', korean: '누텔라' },

];

const vowelStartingWords: WordPair = [
  { german: 'du', korean: '두' },
  { german: 'haben', korean: '하벤' },
  { german: 'gut', korean: '궅' },
  { german: 'leben', korean: '레벤' },
  { german: 'Tag', korean: '탁' },
  { german: 'damit', korean: '다밑' },
  { german: 'genug', korean: '게눅' },
  { german: 'da', korean: '다' },
  { german: 'tun', korean: '툰' },
  { german: 'mal', korean: '말' },
  { german: 'denken', korean: '덴켄' },
  { german: 'nun', korean: '눈' },
  { german: 'Datum', korean: '다툼' },


  { german: 'oben', korean: '오벤' },
  { german: 'in', korean: '인' },
  { german: 'um', korean: '움' },
  { german: 'ob', korean: '옵' },
  { german: 'ab', korean: '압' },
  { german: 'lang', korean: '랑' },
  { german: 'Ding', korean: '딩' },
  { german: 'Ende', korean: '엔데' },
  { german: 'jung', korean: '융' },
  { german: 'unten', korean: '운텐튼' },

];