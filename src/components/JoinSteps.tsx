import React, { FC } from 'react';
import styles from '@/styles';

interface JoinStepsProps {
  number: number;
  text: string;
}

const JoinSteps: FC<JoinStepsProps> = ({ number, text }) => (
  <div className={`${styles.flexCenter} flex-row`}>
    <div
      className={`${styles.flexCenter} w-[70px] h-[70px] rounded-full bg-[#323F5D] hover:bg-lime-400`}
    >
      <p className="font-bold text-[20px] text-white">
        {number}
      </p>
    </div>
    <p className="flex-1 ml-[30px] font-normal text-[18px] text-[#B0B0B0] leading-[32.4px]">
      {text}
    </p>
  </div>
);

export default JoinSteps;