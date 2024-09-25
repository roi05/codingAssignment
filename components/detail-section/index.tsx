import Button from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Forest from '@/public/img/nat-1-large.jpg';
import Road from '@/public/img/nat-2-large.jpg';
import Mountain from '@/public/img/nat-3-large.jpg';

function DetailSection() {
  return (
    <section className='space-y-6 mb-40 tab-l:mb-0'>
      <motion.h1
        className='text-xl w-fit mx-auto  px-12 tab-p:text-2xl tab-l:text-5xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] 
      tracking-widest text-center'
        whileHover={{
          skewX: 15, // Skew the element horizontally
          skewY: 2, // Skew the element vertically
          scale: 1.1, // Scale slightly
          textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // Add text shadow
          transition: { duration: 0.3, ease: 'easeInOut' }, // Control speed and easing
        }}>
        Exciting Tours For Adventurous People
      </motion.h1>

      <div className='px-4 space-y-8  max-tab-l:max-w-[311px] max-tab-l:mx-auto tab-l:grid tab-l:grid-cols-2 '>
        <div className='space-y-8 text-sm tab-l:text-lg tab-l:px-24'>
          <div>
            <h1 className='font-semibold text-gray-500'>
              YOU&apos;RE GOING TO FALL IN LOVE WITH NATURE
            </h1>
            <p className='text-gray-400 '>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              ipsum sapiente aspernatur libero repellat quis consequatur ducimus
              quam nisi exercitationem omnis earum qui.
            </p>
          </div>
          <div>
            <h1 className='font-semibold text-gray-500'>
              LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE
            </h1>
            <p className='text-gray-400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores nulla deserunt voluptatum nam.
            </p>
          </div>
          <Button
            size='small'
            className='underline underline-offset-4 text-my-green bg-transparent p-[120px] hover:bg-my-green hover:text-white'>
            Learn More -&gt;
          </Button>
        </div>

        <div className='group relative tab-l:-top-12'>
          {/* Image 1 (Forest) */}
          <div className='absolute -left-10 p-2 rounded-md w-[190px] h-[130px] tab-l:w-[350px] tab-l:h-[250px] flex items-center justify-center transition-all group-hover:scale-90 hover:z-20 hover:scale-100 hover:border-8 hover:border-my-green'>
            <Image
              src={Forest}
              alt='forest'
              className='w-[152px] h-[101px] tab-l:w-[297px] tab-l:h-[198px] shadow-2xl rounded-md'
            />
          </div>

          {/* Image 2 (Road) */}
          <div className='absolute -top-4 left-1/2 -translate-x-1/2 tab-l:translate-x-0 tab-l:left-32 tab-l:top-12 z-10 p-2 rounded-md w-[190px] h-[130px] tab-l:w-[350px] tab-l:h-[250px] flex items-center justify-center transition-all group-hover:scale-90 hover:z-20 hover:scale-100 hover:border-8 hover:border-my-green'>
            <Image
              src={Road}
              alt='road'
              className='w-[152px] h-[101px] tab-l:w-[297px] tab-l:h-[198px] shadow-2xl rounded-md'
            />
          </div>

          {/* Image 3 (Mountain) */}
          <div className='absolute left-36 tab-l:top-24 tab-l:left-12 tab-l:z-10 p-2 rounded-md w-[190px] h-[130px] tab-l:w-[350px] tab-l:h-[250px] flex items-center justify-center transition-all group-hover:scale-90 hover:z-20 hover:scale-100 hover:border-8 hover:border-my-green'>
            <Image
              src={Mountain}
              alt='mountain'
              className='w-[152px] h-[101px] tab-l:w-[297px] tab-l:h-[198px] shadow-2xl rounded-md'
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailSection;
