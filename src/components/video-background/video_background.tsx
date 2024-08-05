import React from 'react';

const VideoBackground: React.FC = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/images/event-loidai/pc-banner-vid.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
      {/* <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl font-bold text-white">Your Content Here</h1>
      </div> */}
    </div>
  );
};

export default VideoBackground;