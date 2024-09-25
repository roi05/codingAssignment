import { motion } from 'framer-motion';
import Image from 'next/image';
import Girl from '@/public/img/nat-8.jpg';
import Boy from '@/public/img/nat-9.jpg';
import Button from '../ui/button';

function FeedbackSection() {
  return (
    <section className='mt-14'>
      <div className='relative w-full h-screen overflow-hidden'>
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          autoPlay
          loop
          muted>
          <source src='./img/video.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>

        <div className='absolute inset-0 bg-white bg-opacity-70'></div>

        <div className='relative z-10 h-full pt-12 space-y-8'>
          <motion.h1
            className='text-lg w-fit mx-auto  px-12 tab-p:text-2xl tab-l:text-4xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-[#7ed56f] to-[#28b485] 
      tracking-widest text-center'
            whileHover={{
              skewX: 15, // Skew the element horizontally
              skewY: 2, // Skew the element vertically
              scale: 1.1, // Scale slightly
              textShadow: '0.5rem 1rem 2rem rgba(0, 0, 0, 0.2)', // Add text shadow
              transition: { duration: 0.3, ease: 'easeInOut' }, // Control speed and easing
            }}>
            WE MAKE PEOPLE GENUINELY HAPPY
          </motion.h1>

          <div className='px-12 tab-l:px-56 space-y-8'>
            <div className='tab-p:feedback-cut px-24 py-8 bg-white bg-opacity-70'>
              <div>
                <Image
                  src={Girl}
                  className='circle w-44 h-36 rounded-full mr-12'
                  alt='customer profile'
                />
                <div className='leading-relaxed text-gray-500'>
                  <h1 className='mb-4 font-semibold'>
                    I HAD THE BEST WEEK EVER WITH MY FAMILY
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                </div>
              </div>
            </div>
            <div className='tab-p:feedback-cut px-24 py-8 bg-white bg-opacity-70'>
              <div>
                <Image
                  src={Boy}
                  className='circle w-44 h-36 rounded-full mr-12'
                  alt='customer profile'
                />
                <div className='leading-relaxed text-gray-500'>
                  <h1 className='mb-4 font-semibold'>
                    I HAD THE BEST WEEK EVER WITH MY FAMILY
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla,
                    ut commodo diam libero vitae erat. Aenean faucibus nibh et
                    justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae
                    risus tristique posuere.
                  </p>
                </div>
              </div>
            </div>
            <Button
              size='small'
              className='block mx-auto underline bg-transparent underline-offset-4 text-my-green bg-transparent p-[120px] hover:bg-my-green hover:text-white'>
              Read all Stories -&gt;
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeedbackSection;
