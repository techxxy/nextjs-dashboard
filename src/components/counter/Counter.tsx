"use client"
import React from 'react';
import axios from 'axios';

interface CounterProps {
  userId: string;
  character: string;
}

const Counter: React.FC<CounterProps> = ({ userId, character }) => {

  const handleIncrement = async () => {
    console.log('1. Counter.tsx');
    try {
      console.log('2. before await axios.post(');
      await axios.post('/api/count', {
        userId,
        character,
      });
      // Optionally, update UI to reflect the incremented count
    } catch (error) {
      console.error('Failed to increment count:', error);
    }
  };

  return (
    <button onClick={handleIncrement}>{character}</button>
  );
};

export default Counter;