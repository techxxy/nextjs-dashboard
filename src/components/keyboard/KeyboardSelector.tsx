import React from 'react';

interface KeyboardSelectorProps {
  selectedLayout: string;
  onSelectLayout: (layout: string) => void;
}

const layoutOptions = [
  { value: 'korean', label: 'Korean' },
  { value: 'koreanShifted', label: 'Korean Shifted' },
  { value: 'german', label: 'German' },
  { value: 'germanShifted', label: 'German Shifted' },
  // Add more layout options as needed
];

const KeyboardSelector: React.FC<KeyboardSelectorProps> = ({ selectedLayout, onSelectLayout }) => {
  const handleLayoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectLayout(event.target.value);
  };

  return (
    <div>
      {layoutOptions.map((option) => (
        <div key={option.value}>
          <input
            type="radio"
            id={option.value + 'Layout'}
            value={option.value}
            checked={selectedLayout === option.value}
            onChange={handleLayoutChange}
          />
          <label htmlFor={option.value + 'Layout'}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default KeyboardSelector;