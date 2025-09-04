import { useRef } from "react";

import { cn } from "../../lib/utils";
import audio from "../../assets/audio/sci-fi-button-click.mp3";

const GradientButton = ({
  className,
  muted = false,
  children,
  onClick,
  ...props
}) => {
  const audioRef = useRef();

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    }
  };

  const handleClick = () => {
    !muted && playAudio();
    onClick && onClick();
  };

  return (
    <>
      <audio ref={audioRef} src={audio}></audio>
      <button
        className={cn(
          "font-montserrat from-secondary to-primary inline-flex items-center justify-center gap-[0.4em] rounded-[0.5em] border-4 border-black bg-gradient-to-r px-[2em] py-[0.5em] font-semibold text-black transition-all duration-200 enabled:cursor-pointer enabled:hover:from-yellow-300 enabled:hover:to-yellow-400 enabled:hover:brightness-110 enabled:focus:from-yellow-300 enabled:focus:to-yellow-400 enabled:focus:brightness-110 disabled:opacity-50",
          className
        )}
        onClick={handleClick}
        {...props}
      >
        {children}
      </button>
    </>
  );
};

export default GradientButton;
