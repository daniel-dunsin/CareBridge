import { ButtonHTMLAttributes, DetailedHTMLProps, FC, ReactNode } from "react";
import { LuLoader2 } from "react-icons/lu";

type Props = {
  children: ReactNode;
  size?: "small" | "medium" | "large" | "extra-small";
  variant?: "filled" | "outline" | "black" | "destructive" | "success";
  className?: string;
  icon?: JSX.Element;
  iconPosition?: "right" | "left";
  disabled?: boolean;
  fullWidth?: boolean;
  loading?: boolean;
  onClick?: () => void;
} & DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

const Button: FC<Props> = (props) => {
  const {
    onClick,
    icon,
    className: extraClass = "",
    variant = "outline",
    children,
    size = "small",
    disabled = false,
    loading = false,
    iconPosition = "right",
    fullWidth = false,
    role,
    ...rest
  } = props;
  let mainClass = `rounded-full font-semibold duration-300 ${
    fullWidth ? "w-full flex items-center justify-center gap-3" : "w-auto flex items-center gap-2"
  } disabled:opacity-40 disabled:cursor-not-allowed `;

  switch (variant) {
    case "filled":
      mainClass += "bg-primary text-white hover:bg-primary/80 text-center ";
      break;
    case "outline":
      mainClass +=
        "bg-transparent border border-primary hover:bg-primary hover:text-white text-primary disabled:border-zinc-500/50 ";
      break;
    case "destructive":
      mainClass +=
        "bg-transparent border border-red-500/50 hover:border-red-500 hover:bg-red-500 disabled:hover:bg-transparent hover:text-black disabled:hover:text-red-500 text-red-500 disabled:border-red-500/50 ";
      break;
    case "success":
      mainClass +=
        "bg-transparent border border-green-500/50 hover:border-green-500 hover:bg-green-500 disabled:hover:bg-transparent hover:text-black disabled:hover:text-green-500 text-green-500 disabled:border-green-500/50 ";
      break;
    case "black":
      mainClass += "hover:bg-primary/80 bg-primary text-primary ";
      break;
    default:
      break;
  }

  switch (size) {
    case "extra-small":
      mainClass += "px-4 py-[6px] text-xs ";
      break;
    case "small":
      mainClass += "px-6 py-[6px] text-[14px] ";
      break;
    case "medium":
      mainClass += "px-6 py-3 ";
      break;
    case "large":
      mainClass += "px-8 py-[14px] ";
      break;
    default:
      break;
  }

  return (
    <button
      onClick={onClick}
      className={`${mainClass} ${extraClass} `}
      disabled={disabled || loading}
      role={role}
      {...rest}
    >
      {iconPosition === "left" && (
        <>
          {loading ? (
            <div className="flex-shrink-0">
              <LuLoader2 size={12} className="animate-spin" />
            </div>
          ) : (
            icon
          )}
        </>
      )}

      <span className="flex-shrink-0">{!loading ? children : "Loading..."}</span>

      {iconPosition === "right" && (
        <>
          {loading ? (
            <div className="flex-shrink-0">
              <LuLoader2 size={12} className="animate-spin" />
            </div>
          ) : (
            icon
          )}
        </>
      )}
    </button>
  );
};

export default Button;
