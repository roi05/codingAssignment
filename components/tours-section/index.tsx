import { motion } from 'framer-motion';
import SeaExplorerCard from './sea-explorer-card';
import ForestHikerCard from './forest-hiker-card';
import SnowAdventurerCard from './snow-adventurer-card';
import AnimationPulse from '../ui/animation-pulse-button';

function ToursSection() {
  return (
    <section className='space-y-16'>
      <motion.h1
        className='text-xl px-12 w-fit mx-auto tab-p:text-2x tab-l:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] 
tracking-widest text-center'
        whileHover={{
          skewX: 15, // Skew the element horizontally
          skewY: 2, // Skew the element vertically
          scale: 1.1, // Scale slightly
          textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // Add text shadow
          transition: { duration: 0.3, ease: 'easeInOut' }, // Control speed and easing
        }}>
        MOST POPULAR TOURS
      </motion.h1>

      <div className='flex flex-col justify-center items-center gap-y-4 gap-x-16 tab-l:flex-row flex-wrap'>
        <SeaExplorerCard />
        <ForestHikerCard />
        <SnowAdventurerCard />
      </div>

      <AnimationPulse variant='green'>DISCOVER ALL TOURS</AnimationPulse>
    </section>
  );
}

export default ToursSection;
