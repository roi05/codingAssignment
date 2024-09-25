'use client';
import Kayaking from '@/public/img/nat-8.jpg';
import Mountain from '@/public/img/nat-9.jpg';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import AnimationPulse from './animation-pulse-button';
import { TbLetterX } from 'react-icons/tb';

type ModalProps = {
  isMOdalOpen: boolean;
  setIsmodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function Modal({ isMOdalOpen, setIsmodalOpen }: ModalProps) {
  const handleCloseModal = () => {
    setIsmodalOpen(false);
  };

  return (
    <AnimatePresence>
      {isMOdalOpen && (
        <motion.div
          className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 z-50 flex justify-center items-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}>
          <motion.div
            className='w-9/12 h-4/6 bg-white relative grid grid-cols-3'
            initial={{ scale: 0.8, opacity: 0 }} // Starting state when modal opens
            animate={{ scale: 1, opacity: 1 }} // Animation when modal is fully open
            exit={{ scale: 0.8, opacity: 0 }} // Animation when modal is closing
            transition={{ duration: 0.3, ease: 'easeInOut' }} // Control speed and easing
          >
            <div
              className='absolute right-4 top-4 hover:cursor-pointer'
              onClick={handleCloseModal}>
              <TbLetterX className='w-12 h-6' />
            </div>
            <div className='col-span-1'>
              <div className='relative w-full h-auto'>
                <Image src={Kayaking} alt='kayaking' />
              </div>
              <div className='relative w-full h-auto'>
                <Image src={Mountain} alt='mountain' />
              </div>
            </div>
            <div className='col-span-2 p-8 space-y-8'>
              <motion.h1
                className='text-xl w-fit tab-p:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] 
tracking-widest text-center'
                whileHover={{
                  skewX: 15,
                  skewY: 2,
                  scale: 1.1,
                  textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)',
                  transition: { duration: 0.3, ease: 'easeInOut' },
                }}>
                START BOOKING NOW
              </motion.h1>
              <h2 className='text-gray-500 font-semibold'>
                IMPORTANT – PLEASE READ THESE TERMS BEFORE BOOKING
              </h2>
              <div className='flex divide-x divide-gray-300'>
                <div className='pr-4 text-gray-500'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Sed sed risus pretium quam. Aliquam sem et tortor consequat
                  id. Volutpat odio facilisis mauris sit amet massa vitae. Mi
                  bibendum neque egestas congue. Placerat orci nulla
                  pellentesque dignissim enim sit. Vitae semper quis lectus
                  nulla at volutpat diam ut venenatis. Malesuada pellentesque
                  elit eget gravida cum sociis natoque pe
                </div>
                <div className='px-4 text-gray-500'>
                  natibus et. Proin fermentum leo vel orci porta non pulvinar
                  neque laoreet. Gravida neque convallis a cras semper. Molestie
                  at elementum eu facilisis sed odio morbi quis. Faucibus vitae
                  aliquet nec ullamcorper sit amet risus nullam eget. Nam libero
                  justo laoreet sit. Amet massa vitae tortor condimentum lacinia
                  quis vel eros donec. Sit amet facilisis magna etiam. Imperdiet
                  sed euismod nisi porta.
                </div>
              </div>
              <div className='flex'>
                <AnimationPulse variant='green' onClick={handleCloseModal}>
                  Book Now
                </AnimationPulse>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Modal;
