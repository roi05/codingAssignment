'use client';
import Image, { StaticImageData } from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

type CustomerPictureProps = {
  src: StaticImageData;
  name: string[];
};

function CustomerPicture({ src, name }: CustomerPictureProps) {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <motion.div
      className='circle w-44 h-36 rounded-full overflow-hidden mr-12 relative'
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}>
      <motion.div
        className='flex items-center justify-center'
        initial={{
          position: 'absolute',
          zIndex: 1,
          backdropFilter: 'blur(1px)',
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          bottom: 0,
          width: '100%',
          height: '0',
        }}
        animate={isHover ? { height: '100%' } : { height: 0 }}
        transition={{ duration: 0 }}
      />
      <motion.div
        className='space-y-2 text-center'
        initial={{
          position: 'absolute',
          zIndex: 1,
          left: '50%',
          translateX: '-50%',
          bottom: '20%',
          translateY: '50%',
          opacity: 0,
        }}
        animate={isHover ? { opacity: 1, bottom: '50%' } : {}}
        transition={{ duration: 0.3 }}>
        <h1 className='text-white'>{name[0]}</h1>
        <h1 className='text-white'>{name[1]}</h1>
      </motion.div>

      <Image
        src={src}
        alt='customer profile'
        className={`w-full h-full rounded-full bg-cover transform transition-transform duration-200 ease-in-out ${
          isHover ? 'scale-100' : 'scale-150'
        }`}
      />
    </motion.div>
  );
}

export default CustomerPicture;
