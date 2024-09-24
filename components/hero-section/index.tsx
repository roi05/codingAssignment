import AnimationPulse from '@/components/ui/animation-pulse-button';

function HeroSection() {
  return (
    <section className="bg-[url('/img/hero.jpg')] text-white bg-cover bg-center h-[941px] cut-image-small tab-p:cut-image-big relative">
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
          <AnimationPulse>DISCOVER OUR TOURS</AnimationPulse>
        </div>
      </div>
      <div className='absolute inset-0 bg-cover custom-bg'></div>
    </section>
  );
}

export default HeroSection;
