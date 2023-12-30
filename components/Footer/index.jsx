import React from 'react';
import Image from 'next/image';

const socialIcons = [
  { src: '/assets/images/mobli-icon.png', alt: 'mobli-icon', bgColor: '#67ACF8' },
  { src: '/assets/images/mobli-icon.png', alt: 'mobli-icon', bgColor: '#67ACF7' },
  { src: '/assets/images/mobli-icon.png', alt: 'facebook-icon', bgColor: '#37599E' },
  { src: '/assets/images/mobli-icon.png', alt: 'youtube-icon', bgColor: '#A22A1F' },
];

const Footer = () => {
  return (
    <div className='flex w-full justify-between  px-10 pb-2'>
      <div className="text-xxs sm:text-xxs md:text-sm lg:text-base xl:text-lg"
      style={{fontFamily:'Exo'}}>
        Aviso de privacidad / Contacto
      </div>
      <div>
          <Image src={'/assets/images/logo-sochi.png'} alt='logo-sochi'
          className='h-auto w-auto max-w-full'
          width={100} height={90} />
      </div>
      <div className='flex space-x-2'>
        {
          socialIcons.map((icon, index) => (
            <span  key={icon.bgColor}>
              <Image src={icon.src} alt={icon.alt}
              style={{ backgroundColor: icon.bgColor }}
              className='p-1'
              width={20} height={20} />
            </span>
          ))
        }   
      </div>
    </div>
  )
}

export  default Footer;
