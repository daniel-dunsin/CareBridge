"use client";

import { services } from "@/lib/data/home";
import { montserrat } from "@/lib/utils/fonts";
import { fadeToTopVariant } from "@/lib/utils/variants";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section>
      <div className="container my-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { staggerChildren: 0.1 } }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 sm:grid-cols-2 lg:gap-10 gap-6 justify-center flex-wrap"
        >
          <motion.div
            variants={fadeToTopVariant}
            initial="initial"
            animate="animate"
            key="434"
            className="space-y-3 p-5"
          >
            <p className={`text-lg font-extrabold ${montserrat.className}${montserrat.className} uppercase`}>
              Services
            </p>
            <p className="font-extrabold md:text-5xl text-4xl text-primary">Our Core Services</p>
          </motion.div>
          {services.map(({ description, icon, title }, id) => (
            <motion.div
              key={id}
              variants={fadeToTopVariant}
              initial="initial"
              animate="animate"
              className="px-5 py-7 space-y-4 bg-white dark:bg-white/10 dark:bg-white dark:bg-white/10/10 shadow-lg shadow-gray-100 dark:shadow-none rounded-xl duration-300 hover:shadow-2xl"
            >
              <div className="size-12 border dark:border-none rounded-full bg-primary text-white grid place-content-center">
                {icon}
              </div>

              <p className={`font-extrabold text-2xl`}>{title}</p>

              <p className="text-gray-500">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
