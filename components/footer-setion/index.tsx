import React from 'react';
import Logo from '@/public/img/logo-green-small-2x.png';
import BiggerLogo from '@/public/img/logo-green-2x.png';
import Image from 'next/image';

function FooterSection() {
  return (
    <footer className='bg-[#333333] text-white py-16 '>
      <div className='container mx-auto space-y-8'>
        <Image
          src={Logo}
          alt='logo'
          className='w-36 h-8 block mx-auto min-[599px]:hidden'
        />
        <Image
          src={BiggerLogo}
          alt='logo'
          className='w-36 h-24 block mx-auto'
        />
        <div className='text-xs flex justify-center gap-4 flex-wrap'>
          <h2 className='transition-transform duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3'>
            COMPANY
          </h2>
          <h2 className='transition-transform duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3'>
            CONTACT US
          </h2>
          <h2 className='transition-transform duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3'>
            CAREERS
          </h2>
          <h2 className='transition-transform duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3'>
            PRIVACY POLICY
          </h2>
          <h2 className='transition-transform duration-300 ease-in-out hover:skew-x-6 hover:skew-y-3'>
            TERMS
          </h2>
        </div>
      </div>
    </footer>
  );
}

export default FooterSection;
