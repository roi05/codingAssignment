import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Title from './title';

function Hamburger() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isParentHovered, setIsParentHovered] = useState<boolean>(false);

  return (
    <div className='fixed top-12 right-12 tab-l:right-16 tab-l:top-16 z-50'>
      <motion.div
        className='bg-white w-20 h-20 rounded-full cursor-pointer relative z-50'
        onHoverStart={() => setIsParentHovered(true)}
        onHoverEnd={() => setIsParentHovered(false)}
        onClick={() => setIsMenuOpen(prev => !prev)}>
        <motion.div
          className='w-9 h-[2px] bg-gray-900'
          initial={{ y: 27, x: 22 }}
          animate={
            isMenuOpen
              ? { rotate: 50, y: 38, x: 22 }
              : isParentHovered
              ? { y: 24, x: 22 } // Apply this if the parent is hovered
              : { y: 27, x: 22 } // Default state
          }
        />
        <motion.div
          className='w-9 h-[2px] bg-gray-900'
          initial={{ y: 37, x: 22 }}
          animate={
            isMenuOpen ? { visibility: 'hidden' } : { visibility: 'visible' }
          }
          transition={{ duration: 0 }}
        />

        <motion.div
          className='w-9 h-[2px] bg-gray-900'
          initial={{ y: 47, x: 22 }}
          animate={
            isMenuOpen
              ? { rotate: -50, y: 35, x: 22 }
              : isParentHovered
              ? { y: 50, x: 22 }
              : { y: 47, x: 22 }
          }
        />
      </motion.div>

      {/* menu bg */}
      <motion.div
        className='fixed top-12 right-12 tab-l:right-16 tab-l:top-16 z-30 hamburger-bg w-20 h-20 rounded-full'
        initial={false}
        animate={
          isMenuOpen
            ? {
                scale: 100, // Scale it up to fill the screen
                borderRadius: '100%', // Make the circle a square as it expands
              }
            : {
                scale: 1, // Original size
                borderRadius: '100%', // Circle shape
              }
        }
        transition={{
          duration: 0.7, // Duration of the animation
          ease: 'easeInOut', // Smooth easing for the expansion
        }}
      />

      {/* menu content */}
      <motion.div
        className='fixed z-40 text-white text-lg  tab-l:text-4xl font-light tracking-wide  space-y-8 tab-l:space-y-16 text-center'
        initial={{
          top: '50%',
          left: '50%',
          translateX: '-50%',
          translateY: '-50%',
          x: -1000,
          opacity: 0,
        }}
        animate={isMenuOpen ? { x: 0, opacity: 1 } : { x: -1000, opacity: 0 }}
        transition={{
          opacity: { duration: 0.2 },
          x: {
            type: 'spring',
            stiffness: 400,
            damping: 20,
          },
        }}>
        <Title>01 ABOUT NATOUS</Title>
        <Title>02 YOUR BENEFITS</Title>
        <Title>03 POPULAR TOURS</Title>
        <Title>04 STORIES</Title>
        <Title>05 BOOK NOW</Title>
      </motion.div>
    </div>
  );
}

export default Hamburger;
