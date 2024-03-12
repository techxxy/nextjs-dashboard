"use client"
import React, { useState } from 'react';
import TypingFeature from '@/components/keyboard/Typing';

const AlphabetsPage: React.FC = () => {

  return (
    <div>
     <div>
        <h1>TypingFeature</h1>
        <TypingFeature />
        </div>
      <h2>Alphabets Page</h2>
      <div>
      </div>
    </div>
  );
};

export default AlphabetsPage;