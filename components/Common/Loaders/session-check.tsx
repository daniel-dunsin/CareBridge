import Logo from "../Logos";

const SessionCheckLoader = () => {
  return (
    <div className="fixed top-0 left-0 w-full text-xl h-full flex items-center justify-center backdrop-blur-md">
      <div className="flex items-center gap-2">
        <div className="flex items-center animate-spin gap-2 text-primary font-extrabold text-2xl">
          <Logo size={42} />
        </div>
      </div>
    </div>
  );
};

export default SessionCheckLoader;
