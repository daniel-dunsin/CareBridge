"use client";

import Button from "@/components/Common/Button";
import { toastError } from "@/lib/utils/toast";
import { CgChevronRight } from "react-icons/cg";

const Appointment = () => {
  return (
    <section>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,224L120,224C240,224,480,224,720,218.7C960,213,1200,203,1320,197.3L1440,192L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg>

      {/*  */}
      <div className="lg:min-h-[30rem] min-h-[45rem] bg-[#273036] relative text-white grid place-content-center py-10 md:py-0">
        <div className="container space-y-6">
          <div className="space-y-4 text-center">
            <h3 className="font-extrabold sm:text-5xl text-4xl">Book an Appointment</h3>
            <p className="text-lg">Book an appointment with us today and get the best healthcare services.</p>
          </div>

          {/* form */}
          <form onSubmit={(e) => (e.preventDefault(), toastError("Feature coming soon"))} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="firstName" className="font-bold">
                  First Name
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="lastName" className="font-bold">
                  Last Name
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label htmlFor="lastName" className="font-bold">
                Reason for Appointment
              </label>
              <input
                type="text"
                placeholder="e.g Eye test, Dental checkup, etc."
                className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="phoneNumber" className="font-bold">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label htmlFor="preferredDate" className="font-bold">
                  Preferred Date
                </label>
                <input
                  type="date"
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="preferredTime" className="font-bold">
                  Preferred Time
                </label>
                <input
                  type="tel"
                  placeholder="10 AM, 2 PM, etc."
                  className="p-4 bg-white dark:bg-white/10 bg-opacity-20 placeholder:text-white/80 rounded-lg w-full"
                />
              </div>
            </div>

            <Button icon={<CgChevronRight />} size="large" fullWidth>
              Submit
            </Button>
          </form>
        </div>
      </div>

      {/*  */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#273036"
          fillOpacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,192C960,203,1200,213,1320,218.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </section>
  );
};

export default Appointment;
