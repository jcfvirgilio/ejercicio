'use client'

import React from 'react';
import VideoPlayer from './Video';
import CountdownCustom from './Countdown';
import Image from 'next/image';
import { observable } from '@/app/lib/Observer';

const videoButtons = [
  { src: '/assets/images/team-latam.png', alt: 'team-latam', videoUrl: '82b4u7ba4Ps', text: 'Los Deportistas latinoamericanos que participan en Sochi 2024' },
  { src: '/assets/images/travel-meets-fashion.png', alt: 'travel-meets-fashion', videoUrl: 'UomdFp8DNys', text: 'Travel meets Fashion' },
  { src: '/assets/images/velocidad-riesgo.png', alt: 'velocidad-riesgo', videoUrl: 'peuVFBTt47o', text: 'Velocidad y riesgo en los deportes' },
  { src: '/assets/images/experiencia.png', alt: 'experiencia', videoUrl: 'ytHWv7otmJ0', text: 'vive la experiencia multimedia' },
];

const Content = () => {
  const loadVideo = (urlVideo) => {
    observable.notify(urlVideo);
  };

  return (
    <div className='flex w-full flex-col' style={{ height: '80vh' }}>
      <div
        className='flex w-full flex-col'
        style={{
          backgroundImage: `url("/assets/images/background.jpg")`,
          backgroundSize: '70% 100%',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          flexGrow: 1,
        }}>
        <CountdownCustom />
      </div>
      <VideoPlayer key={'videoTracker'} />
      <div className='flex w-full flex-col items-center justify-center' style={{ backgroundColor: '#232323', height: '30vh', justifyContent: 'center', borderBottom:'2px solid #363636' }}>
        <div className='pb-5 text-lg sm:text-lg md:text-sm lg:text-base xl:text-lg' style={{ fontFamily: 'Exo' }}>CLARO SPORTS EN SOCHI 2024</div>
        <div className='flex space-x-8 pb-10'>
          {videoButtons.map((video, index) => (
            <span key={video.alt} className='cursor-pointer'>
              <Image src={video.src} width={100} height={120} alt={video.text} onClick={() => loadVideo(video.videoUrl)} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
