import React, { useEffect } from 'react';

// Define the props type
interface AudioPlayerProps {
  audioSrc: string;
  title?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioSrc, title = 'React Audio Player' }) => {
  useEffect(() => {
    const audio = new Audio(audioSrc);
    audio.play().catch(error => {
      console.log('Autoplay was prevented:', error);
    });
  }, [audioSrc]); // Dependency on the audio source

  return (
    <div>
      <h2>{title}</h2>
      <button
        onClick={() => {
          const audio = new Audio(audioSrc);
          audio.play();
        }}
      >
        Play Audio
      </button>
    </div>
  );
};

export default AudioPlayer;
