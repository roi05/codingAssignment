import { motion } from 'framer-motion';
import AnimationPulse from '../ui/animation-pulse-button';

function FormSection() {
  return (
    <section className='h-96 green flex items-center min-h-fit justify-center py-24'>
      <div className='container mx-auto px-12 tab-l:hidden'>
        <div className="relative space-y-8 p-6 py-24 min-w-fit bg-[url('/img/nat-10.jpg')] text-white bg-cover flex flex-col items-center justify-center">
          {/* Overlay using the before pseudo-element */}
          <div className='absolute  inset-0 bg-white bg-opacity-80'></div>
          <motion.h1
            className='relative text-lg w-fit tab-p:text-2xl tab-l:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] tracking-widest text-center'
            whileHover={{
              skewX: 15, // Skew the element horizontally
              skewY: 2, // Skew the element vertically
              scale: 1.1, // Scale slightly
              textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // Add text shadow
              transition: { duration: 0.3, ease: 'easeInOut' }, // Control speed and easing
            }}>
            START BOOKING NOW
          </motion.h1>

          <form className='relative z-10 text-black space-y-8'>
            <div>
              <input
                type='text'
                className='w-[298px] h-10 p-4 focus:outline-none focus:border-b-2 focus:border-orange-500'
                placeholder='Fullname'
              />
            </div>
            <div>
              <input
                type='text'
                className='w-[298px] h-10 p-4 focus:outline-none focus:border-b-2 focus:border-orange-500'
                placeholder='Email Address'
              />
            </div>
            <div className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  id='small'
                  name='tour_group'
                  value='small'
                  defaultChecked
                  className='appearance-none h-6 w-6 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 focus:outline-none transition-all'
                />
                <label htmlFor='small' className='text-gray-700'>
                  Small tour group
                </label>
              </div>

              <div className='flex items-center space-x-2 '>
                <input
                  type='radio'
                  id='large'
                  name='tour_group'
                  value='large'
                  className='appearance-none h-6 w-6 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 focus:outline-none transition-all'
                />
                <label htmlFor='large' className='text-gray-700'>
                  Large tour group
                </label>
              </div>
            </div>

            <div className='flex'>
              <AnimationPulse variant='green'>Next Step --&gt;</AnimationPulse>
            </div>
          </form>
        </div>
      </div>

      {/* tab-l version */}
      <div className="w-[1143px] h-[531px] max-[899px]:hidden relative min-w-fit bg-[url('/img/nat-10.jpg')] text-white bg-cover grid grid-cols-3">
        <div className='col-span-2 bg-white bg-opacity-80 form-cut flex flex-col p-8 space-y-16'>
          <motion.h1
            className='relative text-lg w-fit tab-p:text-2xl tab-l:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] tracking-widest text-center'
            whileHover={{
              skewX: 15, // Skew the element horizontally
              skewY: 2, // Skew the element vertically
              scale: 1.1, // Scale slightly
              textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // Add text shadow
              transition: { duration: 0.3, ease: 'easeInOut' }, // Control speed and easing
            }}>
            START BOOKING NOW
          </motion.h1>
          <form className='relative z-10 text-black space-y-8'>
            <div>
              <input
                type='text'
                className='w-[298px] h-10 p-4 focus:outline-none focus:border-b-2 focus:border-orange-500'
                placeholder='Fullname'
              />
            </div>
            <div>
              <input
                type='text'
                className='w-[298px] h-10 p-4 focus:outline-none focus:border-b-2 focus:border-orange-500'
                placeholder='Email Address'
              />
            </div>
            <div className='flex items-center gap-x-8'>
              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  id='small'
                  name='tour_group'
                  value='small'
                  defaultChecked
                  className='appearance-none h-6 w-6 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 focus:outline-none transition-all'
                />
                <label htmlFor='small' className='text-gray-700'>
                  Small tour group
                </label>
              </div>

              <div className='flex items-center space-x-2'>
                <input
                  type='radio'
                  id='large'
                  name='tour_group'
                  value='large'
                  className='appearance-none h-6 w-6 border-2 border-gray-400 rounded-full checked:bg-green-500 checked:border-green-500 focus:outline-none transition-all'
                />
                <label htmlFor='large' className='text-gray-700'>
                  Large tour group
                </label>
              </div>
            </div>

            <div className='flex'>
              <AnimationPulse variant='green'>Next Step --&gt;</AnimationPulse>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSection;
