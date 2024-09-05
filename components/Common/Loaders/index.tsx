import { BiHealth } from "react-icons/bi";

const Loader = () => {
  return (
    <div className="size-12 grid place-content-center rounded-full bg-secondary-800 shadow-md">
      <BiHealth size={35} className="text-primary animate-spin" />
    </div>
  );
};

export default Loader;
