import { opacityVariant } from "@/lib/utils/variants";
import { motion } from "framer-motion";
import Image from "next/image";

const Payments = () => {
  return (
    <motion.div {...opacityVariant} className="w-full h-full flex items-center justify-center">
      <div className="space-y-4">
        <Image src="/svgs/under-construction-cone.svg" width={200} height={200} alt="under construction" />
      </div>
    </motion.div>
  );
};

export default Payments;
