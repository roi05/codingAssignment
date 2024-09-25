import AnimationPulse from '../ui/animation-pulse-button';

type SnowAdventurerCardProps = {
  setIsmodalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

function SnowAdventurerCard({ setIsmodalOpen }: SnowAdventurerCardProps) {
  const handleOpenModal = () => {
    setIsmodalOpen(true);
  };

  return (
    <div className='card h-[700px] tab-l:h-[500px] '>
      <div className='content'>
        <div className='front space-y-5'>
          <div className="bg-[url('/img/nat-5.jpg')] text-white bg-cover relative bg-center h-64 cut-image-small">
            <div className='z-10 absolute right-0 bottom-5 p-4 '>
              <h1 className='blue-text w-fit p-4 font-light text-lg tracking-widest'>
                THE SNOW
              </h1>
              <h1 className='blue-text  w-fit p-4 font-light text-lg tracking-widest'>
                ADVENTURER
              </h1>
            </div>
            <div className='absolute inset-0 bg-cover blue-bg'></div>
          </div>
          <div className='text-gray-500 text-center space-y-4 divide-y divide-gray-300 w-7/12 mx-auto'>
            <h1>5 day tours</h1>
            <h1>Up to 15 people</h1>
            <h1>3 tour guides</h1>
            <h1>Sleep in cozy hotels</h1>
            <h1>Difficulty: hard</h1>
          </div>
          <div className='blue card-cut pt-4  flex flex-col items-center justify-around text-white tab-l:hidden h-56'>
            <div className='text-center space-y-8'>
              <h1 className='text-xs'>ONLY</h1>
              <h1 className='text-3xl font-thin'>$897</h1>
            </div>
            <AnimationPulse onClick={handleOpenModal}>BOOK NOW!</AnimationPulse>
          </div>
        </div>
        <div className='back blue flex flex-col items-center justify-around text-white'>
          <div className='text-center space-y-8'>
            <h1 className='text-xl'>ONLY</h1>
            <h1 className='text-5xl font-thin'>$897</h1>
          </div>
          <AnimationPulse onClick={handleOpenModal}>BOOK NOW!</AnimationPulse>
        </div>
      </div>
    </div>
  );
}

export default SnowAdventurerCard;
