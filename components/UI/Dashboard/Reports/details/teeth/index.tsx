import Loader from "@/components/Common/Loaders";
import { parentVariant } from "@/lib/utils/variants";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { HeartMetrics, TeethMetrics } from "@/lib/types/reports";
import { FC } from "react";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiHeartAddLine, RiHeartLine, RiHeartPulseLine } from "react-icons/ri";
import { FaTeeth } from "react-icons/fa";
import { FaTeethOpen } from "react-icons/fa6";
import { GiFrontTeeth } from "react-icons/gi";

type Props = {
  report?: TeethMetrics;
};

const TeethModel = dynamic(() => import("@/components/Common/3D/teeth"), {
  ssr: false,
  loading: () => (
    <div className="grid place-content-center min-h-[10rem] text-center">
      <div className="space-y-2">
        <div className="grid place-content-center">
          <Loader />
        </div>

        <p className="text-sm">Teeth loading...</p>
      </div>
    </div>
  ),
});

const TeethReportDetails: FC<Props> = ({ report }) => {
  return (
    <div className="grid md:grid-cols-2 gap-7 pb-8">
      <div className="border dark:border-white/10 rounded-xl bg-white dark:bg-white/10 relative self-start">
        <div className="absolute top-2 p-5 left-0 space-y-1">
          <p>Evaluation:</p>
          <p className="text-4xl font-bold">Overall State of Health</p>
        </div>

        <TeethModel />
      </div>

      <motion.div {...parentVariant} animate="animate" className="grid gap-3 grid-cols-2 self-start">
        <div className="rounded-md bg-white dark:bg-white/10 border dark:border-white/10 py-4 space-y-4 px-5 self-start">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <FaTeeth />
            </span>
            Cavities Count
          </p>
          <h1 className="text-[1.8rem] font-bold">3</h1>
        </div>

        <div className="rounded-md bg-white dark:bg-white/10 border dark:border-white/10 py-4 space-y-4 px-5 self-start">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <FaTeethOpen />
            </span>
            Gum Recession
          </p>
          <h1 className="text-[1.8rem] font-bold">30mm</h1>
        </div>

        <div className="rounded-md bg-white dark:bg-white/10 border dark:border-white/10 py-4 space-y-4 px-5 self-start col-span-2">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <GiFrontTeeth />
            </span>
            Plaque Index
          </p>
          <h1 className="text-[1.8rem] font-bold">50mm</h1>
        </div>

        <div className="rounded-md bg-white dark:bg-white/10 border dark:border-white/10 py-4 space-y-4 px-5 self-start col-span-2">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <RiHeartLine />
            </span>
            Health Status
          </p>
          <p className="text-[.8rem]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae earum inventore nemo et architecto,
            doloremque quis rerum, itaque, quas obcaecati error modi eveniet tempore recusandae aut quaerat accusantium.
            Laborum, numquam similique eos minima soluta quas nisi cupiditate nobis unde odit.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default TeethReportDetails;
