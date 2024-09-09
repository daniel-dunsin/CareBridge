import Image from "next/image";
import { CiCalendar } from "react-icons/ci";
import { IoRemoveOutline } from "react-icons/io5";

const Appointments = () => {
  return (
    <div className="w-full h-full">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-center gap-2">
          <CiCalendar className="text-primary" />
          <p className="text-sm font-semibold">Pending Appointments</p>
        </div>

        <p className="text-gray-500 font-semibold">5</p>
      </div>

      <div className="overflow-y-auto">
        {Array.from({ length: 6 }).map((_, id) => (
          <div className="flex items-center justify-between px-4 py-3" key={id}>
            <div className="flex gap-2 items-center">
              <div className="size-8 rounded-full relative overflow-hidden">
                <Image
                  src={`/images/doctors/doc${((id + 1) % 5) + 1}.jpg`}
                  alt="doc"
                  width={100}
                  height={100}
                  className="absolute top-0 left-0 w-full h-full"
                />
              </div>
              <div className="text-sm">
                <p className="font-semibold">Username</p>
                <p className="text-gray-400 text-xs">In 2 days</p>
              </div>
            </div>

            {/* <div
              className="size-8 rounded-full bg-red-200/50 grid place-content-center cursor-pointer ring-[2px] duration-300 ring-transparent hover:ring-red-500"
              title="Cancel Appointment"
            >
              <IoRemoveOutline className="text-red-500" />
            </div> */}
          </div>
        ))}

        <div className="p-4 grid place-content-center">
          <p className="text-primary cursor-pointer text-sm">View More</p>
        </div>
      </div>
    </div>
  );
};

export default Appointments;
