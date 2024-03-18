import React from 'react';
interface KeyboardSelectorProps {
  selectedLayout: string;
  onSelectLayout: (layout: string) => void;
}

const layoutOptions = [
  { value: 'germanShifted', label: 'German Shifted' },
  { value: 'german', label: 'German' },
  { value: 'koreanShifted', label: 'Korean Shifted' },
  { value: 'korean', label: 'Korean' },
];

const KeyboardSelector: React.FC<KeyboardSelectorProps> = ({ selectedLayout, onSelectLayout }) => {
  
  const handleLayoutChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSelectLayout(event.target.value);
  };

  return (
    <div className="flex flex-row-reverse items-start gap-2 mr-3 mt-3 flex-nowrap min-w-[450px]">
      {layoutOptions.map((option) => (
        <div key={option.value}>
          <input
            className='peer opacity-0 w-0 fixed'
            type="radio"
            id={option.value + 'Layout'}
            value={option.value}
            checked={selectedLayout === option.value}
            onChange={handleLayoutChange}
          />
          <label
            className='rounded-tl-[20px] rounded-br rounded-bl rounded-tr-lg cursor-pointer w-fit px-3 py-1 text-sm font-medium bg-gray-700 text-gray-100 hover:bg-gray-500 hover:text-white peer-checked:bg-vercel-blue peer-checked:text-white overflow-hidden'
          htmlFor={option.value + 'Layout'}>{option.label}</label>
        </div>
      ))}
    </div>
  );
};

export default KeyboardSelector;