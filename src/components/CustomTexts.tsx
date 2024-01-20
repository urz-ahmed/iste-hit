import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { textContainer,textVariant2 } from '@/utils/motion';
interface TypingTextProps {
  title: string;
  textStyles: string;
}

const TypingText: FC<TypingTextProps> = ({ title, textStyles }) => {
  return (
    <motion.p
      variants={textContainer}
      className={`font-bold text-3xl text-white ${textStyles}`}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span variants={textVariant2} key={index}>
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.p>
  );
};

export default TypingText;