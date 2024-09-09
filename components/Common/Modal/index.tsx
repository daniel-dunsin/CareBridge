import { useModal } from "@/lib/providers/modal-provider";
import { opacityVariant } from "@/lib/utils/variants";
import { motion } from "framer-motion";
import { FC, useEffect, useRef } from "react";

const variant = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1, transition: { ease: "easeInOut", type: "spring", damping: 15, duration: 0.5 } },
  exit: { opacity: 0, scale: 0 },
};

type ModalProps = {
  isOpen?: boolean;
  onClose: () => void;
  isAutomatic?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

const Modal: FC<ModalProps> = ({ children, isOpen = true, onClose, isAutomatic = true, ...rest }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose;
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "hidden";
    }

    return () => {
      window.removeEventListener("click", handleOutsideClick);
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="fixed top-0 left-0 min-w-full min-h-full flex justify-center items-center z-[3000] overflow-hidden">
          {/* background */}
          <motion.div
            {...opacityVariant}
            className="fixed top-0 left-0 min-w-full min-h-full bg-black/20 backdrop-blur-md flex items-center justify-center [perspective:800px] [transform-style:preserve-3d] inset-0"
            onClick={isAutomatic ? onClose : () => {}}
          ></motion.div>

          {/* modal */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
              rotateX: 40,
              y: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              rotateX: 10,
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            className="md:max-h-3/4 mx-auto min-w-[98%] sm:min-w-[30rem] relative z-[300]"
          >
            <div ref={ref} {...rest}>
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default Modal;
