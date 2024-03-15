import React from 'react';
import styles from './styles.module.css';

import {
  MdFlare,
  MdOutlineWbSunny,
  MdOutlineCalendarViewMonth,
  MdSearch,
  MdMicNone,
  MdOutlineDarkMode,
  MdOutlineVolumeMute,
  MdOutlineVolumeDown,
  MdOutlineVolumeUp,
  MdLockOutline,
} from 'react-icons/md';

import {
  TbPlayerTrackPrev,
  TbPlayerSkipForward,
  TbPlayerTrackNext,
} from 'react-icons/tb';

import { BiVolume, BiVolumeLow } from "react-icons/bi";
import { SlVolume1 } from "react-icons/sl";
import { GrVolumeLow, GrVolume } from "react-icons/gr";

const functionKeys = [
  { code: 'F1', icon: MdFlare },
  { code: 'F2', icon: MdOutlineWbSunny },
  { code: 'F3', icon: MdOutlineCalendarViewMonth },
  { code: 'F4', icon: MdSearch },
  { code: 'F5', icon: MdMicNone },
  { code: 'F6', icon: MdOutlineDarkMode },
  { code: 'F7', icon: TbPlayerTrackPrev },
  { code: 'F8', icon: TbPlayerSkipForward },
  { code: 'F9', icon: TbPlayerTrackNext },
  { code: 'F10', icon: BiVolume },
  { code: 'F11', icon: GrVolumeLow },
  { code: 'F12', icon: GrVolume },
];

export default function FnKeys() {
  return (
    <>
      <div
        className={`${styles.key} w-20 rounded-bl-md rounded-br-md rounded-tl-[20px] rounded-tr-md text-xs flex items-end pl-2 pb-1`}>
        esc
      </div>
      {functionKeys.map(({ code, icon: Icon }, index) => (
        <div key={index} className={`${styles.key} h-11 w-[47px] rounded-md`}>
          <div className='flex flex-col items-center gap-1 pt-2'>
            <div>
              <Icon size="13"/>
            </div>
            <div className='text-[8px]'>{code}</div>
          </div>
        </div>
      ))}
      <div
        className={`${styles.key} w-[47px] rounded-bl-md rounded-br-md rounded-tl-md rounded-tr-[20px] flex flex-col items-center pt-3.5`}
      >
        <MdLockOutline size="13"/>
      </div>
    </>
  );
}
