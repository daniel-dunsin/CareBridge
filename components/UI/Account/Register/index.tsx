"use client";
import { FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { opacityVariant } from "@/lib/utils/variants";
import PatientRegister from "./patient";
import DoctorRegister from "./doctor";
import Link from "next/link";

export type Tag = "patient" | "doctor";

const choices: { name: string; tag: Tag; icon: JSX.Element }[] = [
  { name: "Patient", tag: "patient", icon: <FaUser size={30} /> },
  { name: "Doctor", tag: "doctor", icon: <FaUserDoctor size={30} /> },
];

const Register = () => {
  const [mainTag, setTag] = useState<Tag | null>(null);

  const updateTag = (tag: Tag | null) => setTag(tag);

  const renderContent = () => {
    switch (mainTag) {
      case "doctor":
        return <DoctorRegister key="doctor" updateTag={updateTag} />;
      case "patient":
        return <PatientRegister key={"patient"} updateTag={updateTag} />;
      default:
        return (
          <motion.div {...opacityVariant} key={"quest"} className="min-w-full min-h-screen grid place-content-center">
            <div className="space-y-5">
              <div className="text-center">
                <h1 className="font-bold text-5xl">I&apos;m a ...</h1>
              </div>

              <div className="flex items-center md:gap-5 gap-3 flex-wrap">
                {choices.map(({ icon, name, tag }, id) => (
                  <div
                    key={id}
                    className={`border space-y-2 rounded-xl border-gray-500/20 mx-auto dark:border-white/10 px-20 sm:py-6 py-4 cursor-pointer duration-200 ring ring-transparent hover:ring-primary ${
                      tag === mainTag ? "bg-primary text-white" : "bg-white dark:bg-white/10"
                    }`}
                    onClick={() => setTag(tag)}
                  >
                    <div className="flex items-center justify-center">{icon}</div>
                    <p>{name}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                Have an account?{" "}
                <Link href={"/account/login"} className="text-primary border-b border-primary">
                  Login
                </Link>
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return <AnimatePresence mode="wait">{renderContent()}</AnimatePresence>;
};

export default Register;
