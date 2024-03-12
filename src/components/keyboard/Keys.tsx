import React from 'react';
import Key from './Key';

interface KeysProps {
  keyboardLayout: string[];
  onClick: (key: string) => void;
  onShiftClick: () => void;
}

const Keys: React.FC<KeysProps> = ({ keyboardLayout, onClick, onShiftClick }) => {

  const specialKeys = ['Tab', 'Lock', 'Shift', 'Control', 'Option', 'Command', 'Space', 'Backspace', 'Enter' ]

  return (
    <div>
      {/* First row */}
      <div className="flex gap-1.5">
      {keyboardLayout.slice(0, 13).map((key, index) => (
      <Key key={index} value={key} onClick={() => onClick(key)} className="w-11" />
        ))}
      <Key value={specialKeys[7]} onClick={() => onClick('')} className="w-20"/>
      </div>

      {/* Second row */}
      <div className="flex gap-1.5 mt-1.5">
      <Key value={specialKeys[0]} onClick={() => onClick('')} className="w-20"/>
        {keyboardLayout.slice(13, 26).map((key, index) => (
      <Key key={index} value={key} onClick={() => onClick(key)} className="w-11" />
        ))}
      </div>

      <div className="flex gap-1.5 mt-1.5">
      <Key value={specialKeys[1]} onClick={() => onClick('')} className="w-24"/>
        {keyboardLayout.slice(26, 37).map((key, index) => (
          <Key key={index} value={key} onClick={() => onClick(key)} className="w-11" />
        ))}
            <Key value={specialKeys[8]} onClick={() => onClick('')} className="w-20"/>
      </div>
      <div className="flex gap-1.5 mt-1.5">
      <Key value={specialKeys[2]} onClick={onShiftClick} className="w-20"/>
        {keyboardLayout.slice(37, 48).map((key, index) => (
          <Key key={index} value={key} onClick={() => onClick(key)} className="w-11" />
        ))}
        <Key value={specialKeys[2]} onClick={onShiftClick} className="w-24"/>
      </div>
      <div className="flex gap-1.5 mt-1.5">
      <Key value={specialKeys[3]} onClick={() => onClick('')} className="w-16"/>
      <Key value={specialKeys[4]} onClick={() => onClick('')} className="w-14"/>
      <Key value={specialKeys[5]} onClick={() => onClick('')} className="w-16"/>
      <Key value={specialKeys[6]} onClick={() => onClick(' ')} className="w-80"/>
      <Key value={specialKeys[5]} onClick={() => onClick('')} className="w-16"/>
      <Key value={specialKeys[4]} onClick={() => onClick('')} className="w-16"/>
      <Key value={specialKeys[3]} onClick={() => onClick('')} className="w-16"/>
      </div>
    </div>
  );
};

export default Keys;