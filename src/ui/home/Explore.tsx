import React, { FC, useState } from 'react';
import { motion } from 'framer-motion';

import styles from '@/styles';
import { exploreTeams } from '@/consts';
import {staggerContainer} from '@/utils/motion';
import { ExploreCard, TypingText } from '@/components';

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const [active, setActive] = useState<string>('world-2');

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer(0.1, 0.5)} 
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="Explore the teams" textStyles="text-center" />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreTeams.map((teams, index) => (
            <ExploreCard
              key={teams.id}
              {...teams}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;