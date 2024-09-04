import { BiHealth } from "react-icons/bi";

type Props = {
  size?: number;
};

const Logo: React.FC<Props> = ({ size = 20 }) => {
  return <BiHealth size={size} className="text-primary" />;
};

export default Logo;
