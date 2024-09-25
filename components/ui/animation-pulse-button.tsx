'use client';

import { useState, useRef, useEffect, ReactNode } from 'react';
import { motion } from 'framer-motion';
import Button from './button';

type AnimationPulseProps = {
  children?: ReactNode;
  variant?: 'green' | 'white';
};

function AnimationPulse({ children, variant }: AnimationPulseProps) {
  const [isHovered, setIsHovered] = useState(false); // State to track hover
  const buttonRef = useRef<HTMLButtonElement | null>(null); // Reference to the button
  const [buttonSize, setButtonSize] = useState({ width: 0, height: 0 }); // State to hold button size

  // Effect to measure button size after render
  useEffect(() => {
    if (buttonRef.current) {
      const { offsetWidth, offsetHeight } = buttonRef.current;
      setButtonSize({ width: offsetWidth, height: offsetHeight });
    }
  }, []);

  return (
    <div className='relative flex justify-center items-center'>
      {/* Pulse animation */}
      <motion.div
        initial={{ scale: 1, opacity: 1 }}
        animate={
          isHovered ? { scale: 1.7, opacity: 0 } : { scale: 1, opacity: 1 }
        }
        transition={{ duration: 0.4 }}
        className={`absolute rounded-full ${
          variant === 'green' ? 'bg-green-500' : 'bg-white'
        } `}
        style={{
          width: buttonSize.width ? `${buttonSize.width}px` : '0',
          height: buttonSize.height ? `${buttonSize.height}px` : '0',
          visibility: isHovered ? 'visible' : 'hidden', // Make pulse visible only on hover
        }}
      />

      {/* The button stays visible */}
      <div
        className='relative'
        onMouseEnter={() => setIsHovered(true)} // Start animation
        onMouseLeave={() => setIsHovered(false)} // Stop animation
      >
        <Button
          size='medium'
          ref={buttonRef} // Attach ref to button
          className={`min-w-fit rounded-full font-light text-gray-500 hover:shadow-xl hover:-translate-y-0.5 ${
            variant === 'green' ? 'bg-green-500 text-white' : 'bg-white'
          }`}>
          {children}
        </Button>
      </div>
    </div>
  );
}

export default AnimationPulse;
