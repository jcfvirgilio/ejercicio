import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='flex w-full justify-between  px-10 pb-2'>
      <div className="text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg">
        Aviso de privacidad / Contacto
      </div>
      <div>
          <Image src={'/assets/images/logo-sochi.png'} alt='logo-sochi'
          className='h-auto w-auto max-w-full'
          width={100} height={90} />
      </div>
        <div className='flex space-x-2'>
          <span >
            <Image src={'/assets/images/mobli-icon.png'} alt='mobli-icon'
              style={{ backgroundColor: '#67ACF7' }}
              className='p-1'
              width={20} height={20} />
          </span>
          <span >
            <Image src={'/assets/images/mobli-icon.png'} alt='mobli-icon'
              style={{ backgroundColor: '#67ACF7' }}
              className='p-1'
              width={20} height={20} />
          </span>
          
          <span>
            <Image src={'/assets/images/mobli-icon.png'} alt='facebook-icon'
              style={{ backgroundColor: '#37599E' }}
              className='p-1'
              width={20} height={20} />
          </span>
          <span>
            <Image src={'/assets/images/mobli-icon.png'} alt='youtube-icon'
              style={{ backgroundColor: '#A22A1F' }}
              className='p-1'
              width={20} height={20} />
            </span>
          </div>
        </div>
  )
}

export  default Footer;
