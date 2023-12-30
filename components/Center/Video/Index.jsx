import React,{useState,useEffect} from 'react';
import PropTypes from "prop-types";
import { observable } from '@/app/lib/Observer';

const VideoPlayer = () => {
  const [videoId, setVideoId] = useState('');

   const handleEventHeader = (param) => {
    setVideoId(param)
  }

  useEffect(() => {
    observable.subscribe(handleEventHeader)
    return () => {
      observable.unsubscribe(handleEventHeader)
    }
 },[])

   return (
    <div className='flex w-full items-center justify-center' >
      <iframe
        width="360"
        height="260"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
   
  )
}

VideoPlayer.propTypes = {
  videoUrl:PropTypes.string
}
export default React.memo(VideoPlayer);