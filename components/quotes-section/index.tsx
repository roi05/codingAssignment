import Card from './card';
import { CiGlobe } from 'react-icons/ci';
import { LiaCompass } from 'react-icons/lia';
import { GoHeart } from 'react-icons/go';

function QuotesSection() {
  return (
    <section className="bg-[url('/img/nat-4.jpg')] text-white bg-cover bg-center h-[1124px] quotes-image-cut relative">
      <div className='flex items-center flex-col tab-l:flex-row tab-l:h-full tab-l:justify-center  tab-l:gap-x-8 pt-32 gap-y-8'>
        <Card className='space-y-4 tab-l:space-y-8'>
          <CiGlobe className='w-[48px] h-[51px] text-my-green block mx-auto' />
          <h1 className='text-gray-500 text-center text-sm tab-l:text-xl'>
            EXPLORE THE WORLD
          </h1>
          <p className='text-gray-500 text-center text-sm tab-l:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </Card>
        <Card className='space-y-4'>
          <LiaCompass className='w-[48px] h-[51px] text-my-green block mx-auto' />
          <h1 className='text-gray-500 text-center text-sm tab-l:text-xl'>
            MEET NATURE
          </h1>
          <p className='text-gray-500 text-center text-sm tab-l:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </Card>
        <Card className='space-y-4'>
          <CiGlobe className='w-[48px] h-[51px] text-my-green block mx-auto' />
          <h1 className='text-gray-500 text-center text-sm tab-l:text-xl'>
            FIND YOUR WAY
          </h1>
          <p className='text-gray-500 text-center text-sm tab-l:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </Card>
        <Card className='space-y-4'>
          <GoHeart className='w-[48px] h-[51px] text-my-green block mx-auto' />
          <h1 className='text-gray-500 text-center text-sm tab-l:text-xl'>
            LIVE A HEALTHIER LIFE
          </h1>
          <p className='text-gray-500 text-center text-sm tab-l:text-xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur.
          </p>
        </Card>
      </div>

      <div className='absolute inset-0 bg-cover custom-bg' />
    </section>
  );
}

export default QuotesSection;
