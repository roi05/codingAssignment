import AnimationPulseButton from '@/components/ui/animation-pulse-button';
import Logo from '@/public/img/logo-white.png';
import Image from 'next/image';

function HeroSection() {
  return (
    <section className="bg-[url('/img/hero.jpg')] text-white bg-cover bg-center h-[941px] cut-image-small tab-p:cut-image-big relative">
      <Image
        src={Logo}
        alt='logo'
        className='absolute w-16 h-8 z-10 top-8 left-8'
      />
      <div className='pt-72 h-full z-10 relative'>
        <div className='space-y-8'>
          <div className='text-center space-y-4'>
            <h1 className='text-5xl tracking-[1rem] tab-p:tracking-[2rem] text-wrap'>
              OUTDOORS
            </h1>
            <p className='text-md font-semibold tracking-[0.3rem] tab-p:tracking-[.95rem]'>
              IS WHERE LIFE HAPPENS
            </p>
          </div>
          <AnimationPulseButton>DISCOVER OUR TOURS</AnimationPulseButton>
        </div>
      </div>
      <div className='absolute inset-0 bg-cover custom-bg'></div>
    </section>
  );
}

export default HeroSection;
