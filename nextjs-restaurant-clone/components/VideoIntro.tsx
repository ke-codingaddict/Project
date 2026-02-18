"use client";
import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

const VideoIntro = () => {
  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
  }

  return (
    <div className="relative h-[80vh] md:h-[60vh] lg:h-[80vh] w-full bg-black flex justify-center items-center">
      <video
        ref={videoRef}
        src="/video.mp4"
        poster="/images/KPC01993.jpg"
        loop
        controls={false}
        muted
        className="w-full h-full object-cover opacity-80"
      />
      <div className={`absolute inset-0 flex justify-center items-center bg-black/40 transition-opacity duration-500 ${playVideo ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}>
        <div 
          className="w-[100px] h-[100px] rounded-full border border-golden flex justify-center items-center cursor-pointer hover:bg-golden/20 transition duration-300"
          onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color="#fff" fontSize={30} />
            : <BsFillPlayFill color="#fff" fontSize={30} />
          }
        </div>
      </div>
    </div>
  );
};

export default VideoIntro;
