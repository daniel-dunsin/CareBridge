"use client";

const ThreeDotsLoader = () => {
  return (
    <div className="flex items-center gap-1">
      <div className="size-3 rounded-full bg-primaryBlue animate-bounce ease-out"></div>
      <div className="size-3 rounded-full bg-primaryBlue animate-bounce ease-out [animation-delay:0.15s]"></div>
      <div className="size-3 rounded-full bg-primaryBlue animate-bounce ease-out [animation-delay:0.3s]"></div>
    </div>
  );
};

export default ThreeDotsLoader;
