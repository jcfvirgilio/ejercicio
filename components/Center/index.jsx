import React from 'react';
import Video from './Video';
import Image from 'next/image';

const videoButtons = [
  { src: '/assets/images/team-latam.png', alt: 'team-latam', text: 'Los Deportistas latinoamericanos que participan en Sochi 2024' },
  { src: '/assets/images/travel-meets-fashion.png', alt: 'travel-meets-fashion', text: 'Travel meets Fashion' },
  { src: '/assets/images/velocidad-riesgo.png', alt: 'velocidad-riesgo', text: 'Velocidad y riesgo en los deportes' },
  { src: '/assets/images/experiencia.png', alt: 'experiencia', text: 'vive la experiencia multimedia' },
];

 const Center = () => {
  return (
    <div
      className='flex w-full flex-col items-center justify-center'
      style={{ containerType: 'inline-size', height: '80vh' }}>
      <div className='flex w-full items-center '
        style={{ 
          flexGrow: 1,
          backgroundImage: `url("/assets/images/background.jpg")`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
        }}>
          <Video/>
        </div>
      
      <div
          className='flex w-full flex-col items-center justify-center '
        style={{ backgroundColor: '#232323', height: '30vh', justifyContent: 'center' }}>
        <div className='pb-5'>CLARO SPORTS EN SOCHI 2024</div>
        <div className='flex space-x-8 pb-10'>
          {
            videoButtons.map((video) => (
              <span key={video.alt}>
                <Image src={video.src} width={100} height={120} alt='button'/>
              </span>
            ))
          }
        </div>
        </div>
    </div>
  )
}

export default Center;