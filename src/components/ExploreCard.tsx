import React, { FC } from 'react';
import { motion, Variants } from 'framer-motion';
import { fadeIn } from '@/utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard: FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  description,
  index,
  active,
  handleClick,
}) => {
  const cardVariants: Variants = fadeIn('right', 'spring', index * 0.5, 0.75);

  return (
    <motion.div
      variants={cardVariants}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="teams-images"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="bg-[rgba(0,0,0,0.5)] font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <p className="font-normal text-[16px] leading-[20.16px] text-white">
            {description}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;