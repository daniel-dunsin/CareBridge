import Loader from "@/components/Common/Loaders";
import { parentVariant } from "@/lib/utils/variants";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { BoneMetrics } from "@/lib/types/reports";
import { FC } from "react";
import { TbHeartRateMonitor } from "react-icons/tb";
import { RiHeartAddLine, RiHeartLine, RiHeartPulseLine } from "react-icons/ri";
import { GiSkeleton } from "react-icons/gi";

type Props = {
  report?: BoneMetrics;
};

const BoneModel = dynamic(() => import("@/components/Common/3D/skeleton"), {
  ssr: false,
  loading: () => (
    <div className="grid place-content-center min-h-[10rem] text-center">
      <div className="space-y-2">
        <div className="grid place-content-center">
          <Loader />
        </div>

        <p className="text-sm">Skeleton loading...</p>
      </div>
    </div>
  ),
});

const BoneReportDetail: FC<Props> = ({ report }) => {
  return (
    <div className="grid md:grid-cols-2 gap-7 pb-8">
      <div className="border  dark:border-white/10 rounded-xl bg-white dark:bg-white/10 relative self-start">
        <div className="absolute top-2 p-5 left-0 space-y-1">
          <p>Evaluation:</p>
          <p className="text-4xl font-bold">Overall State of Health</p>
        </div>

        <BoneModel />
      </div>

      <motion.div {...parentVariant} animate="animate" className="grid gap-3 grid-cols-2 self-start">
        <div className="rounded-md bg-white dark:bg-white/10 border  dark:border-white/10 py-4 space-y-4 px-5 self-start">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <GiSkeleton />
            </span>
            Range Of Motion
          </p>
          <h1 className="text-[1.8rem] font-bold">{report?.rangeOfMotion}°</h1>
        </div>

        <div className="rounded-md bg-white dark:bg-white/10 border  dark:border-white/10 py-4 space-y-4 px-5 self-start">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <GiSkeleton />
            </span>
            Total Fractures
          </p>
          <h1 className="text-[1.8rem] font-bold">{report?.totalFractures || 0}</h1>
        </div>

        <div className="rounded-md bg-white dark:bg-white/10 border  dark:border-white/10 py-4 space-y-4 px-5 self-start col-span-2">
          <p className="font-bold">
            <span className="inline-flex align-middle size-10 text-primary bg-primary/10 rounded-xl items-center justify-center mr-3">
              <RiHeartLine />
            </span>
            Health Status
          </p>
          <p className="text-[.8rem]">{report?.boneHealthStatus}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default BoneReportDetail;
