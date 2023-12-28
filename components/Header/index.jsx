import React from 'react';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex w-full justify-between border-b-4 border-red-600 px-10 pb-2'>
      <div>
        <Image src={'/assets/images/logo-sochi.png'} alt='logo-sochi'
          className='h-auto w-auto max-w-full'
          width={100} height={90} />
      </div>
      <div>
        <Image src={'/assets/images/logo-claro-sports.png'}
          className='h-auto w-auto max-w-full'
          alt='logo-claro-sports' width={100} height={190} />
      </div>
    </div>
  )
}

export default Header;