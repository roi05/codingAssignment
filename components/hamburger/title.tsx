import { motion } from 'framer-motion';
import { useState } from 'react';

type TitleProps = {
  children: React.ReactNode;
};

function Title({ children }: TitleProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div
      className='p-5 relative group flex items-center justify-center overflow-hidden cursor-pointer'
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}>
      <motion.div
        className='w-full h-full absolute bg-white hamburger-cut'
        initial={{ width: '0px', right: 0 }}
        animate={isHover ? { width: '130%' } : { width: '0px', right: 0 }}
      />
      <h1 className='group-hover:gradient-text relative z-10'>{children}</h1>
    </motion.div>
  );
}

export default Title;
