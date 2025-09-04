import { useRef } from "react";

import { cn } from "../../lib/utils";
import audio from "../../assets/audio/sci-fi-button-click.mp3";

const OutlineButton = ({ className, muted, children, onClick, ...props }) => {
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
          "font-montserrat border-primary/80 inline-flex cursor-pointer items-center justify-center gap-[0.4em] rounded-[0.5em] border-[0.2em] bg-transparent px-[5em] py-[0.5em] font-semibold text-white transition-all duration-200 enabled:hover:border-yellow-400 enabled:hover:bg-yellow-400 enabled:hover:text-black enabled:hover:brightness-110 enabled:focus:border-yellow-400 enabled:focus:bg-yellow-400 enabled:focus:text-black enabled:focus:brightness-110 disabled:opacity-50",
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

export default OutlineButton;
