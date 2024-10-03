import Button from "@/components/Common/Button";
import Modal from "@/components/Common/Modal";
import { useModal } from "@/lib/providers/modal-provider";
import { useEffect, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { formatISO, parseISO } from "date-fns";
import { toastError } from "@/lib/utils/toast";
import { useMutation, useQuery } from "@tanstack/react-query";
import Select from "@/components/Common/Inputs/select";
import { departments } from "@/lib/data/dashboard";
import { opacityVariant } from "@/lib/utils/variants";
import { motion, AnimatePresence } from "framer-motion";
import { Department } from "@/lib/types";
import Loader from "@/components/Common/Loaders";
import Image from "next/image";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { queryClient } from "@/lib/providers";
import { FaRegPaperPlane } from "react-icons/fa";
import { getDoctors } from "@/lib/services/user.service";
import * as dateFns from "date-fns";
import { useRouter } from "next/navigation";
import { bookAppointment } from "@/lib/services/appointment.service";
import { useAppointment } from "@/lib/store/event.store";
import { CgArrowLeft, CgClose } from "react-icons/cg";
import React from "react";

type Inputs = {
  appointmentDate: string;
  startTime: string;
  endTime: string;
};

function combineDateAndTime(dateString: string, timeString: string) {
  return new Date(`${dateString}T${timeString}:00`);
}

let searchTime = 0;

const AppointmentModal = () => {
  const { hideModal } = useModal();
  const router = useRouter();

  const [infoComplete, setInfoComplete] = useState(false);
  const [mode, setMode] = useState<"online" | "physical">("online");
  const [department, setDepartment] = useState<Department>("Cardiology (Heart)");
  const [search, setSearch] = useState("");
  const [doctorId, setDoctorId] = useState("");

  const { update: updateAppointment, appointment } = useAppointment();

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { isValid },
  } = useForm<Inputs>({
    defaultValues: {
      appointmentDate: `${
        appointment.appointmentDate ? dateFns.format(appointment.appointmentDate, "yyyy-MM-dd") : ""
      }`,
    },
  });

  const startTime = watch("startTime");

  const {
    data: doctors,
    isPending: loading,
    isFetching,
    refetch,
  } = useQuery({
    queryKey: ["doctors", department],
    queryFn: () => getDoctors({ department, search }),
    enabled: Boolean(department),
  });

  useEffect(() => {
    refetch();
  }, [department]);

  const updateDepartment = (value: Department) => setDepartment(value);

  useEffect(() => {
    if (startTime) {
      // Parse the start time and add one hour to it
      const [hours, minutes] = startTime.split(":").map(Number);
      const newHours = (hours + 1) % 24; // Ensure the time stays within 24 hours
      const formattedEndTime = `${String(newHours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

      // Update the endTime field
      setValue("endTime", formattedEndTime);
    }
  }, [startTime, setValue]);

  useEffect(() => {
    setTimeout(() => {
      searchTime += 1;
      if (searchTime === 1) {
        refetch();
      }
      searchTime = 0;
    }, 1000);
  }, [search]);

  const submit: SubmitHandler<Inputs> = (data) => {
    if (!data.appointmentDate || !data.endTime || !data.startTime) {
      toastError("Invalid data");
      return;
    }

    const appointmentDate = data.appointmentDate;
    const startTime = data.startTime;
    const endTime = data.endTime;

    const startDateTime = combineDateAndTime(appointmentDate, startTime);
    const endDateTime = combineDateAndTime(appointmentDate, endTime);

    const appointmentDateISO = formatISO(parseISO(appointmentDate));

    updateAppointment({
      appointmentDate: appointmentDateISO,
      startTime: startDateTime.toISOString(),
      endTime: endDateTime.toISOString(),
      mode,
    });
    setInfoComplete(true);
  };

  const { mutate, isPending: booking } = useMutation({
    mutationFn: bookAppointment,
  });

  const bookIt = () => {
    mutate(
      { payload: appointment, doctorId },
      {
        onSuccess: (data) => (
          queryClient.invalidateQueries({
            predicate: (query) => query.queryKey.includes("appointments"),
          }),
          hideModal(),
          // console.log(data?.data),
          data?.data && (window.location.href = data?.data as string)
        ),
      }
    );
  };

  return (
    <Modal
      onClose={hideModal}
      isAutomatic={false}
      className="bg-white dark:bg-dark shadow-2xl p-4 rounded-xl xl:min-w-[40rem] min-h-[30rem] max-h-[40rem] overflow-y-auto lg:min-w-[30rem] space-y-4 relative"
    >
      <>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg">{infoComplete ? "Select Doctor" : "New Appointment"}</p>

          <div className="flex items-center gap-2">
            {infoComplete && (
              // <button className="text-primary" onClick={() => setInfoComplete(false)}>
              //   Back
              // </button>

              <div
                className="size-8 grid place-content-center rounded-full text-yellow-500 bg-yellow-500/20 cursor-pointer duration-200 hover:bg-red-500/30"
                onClick={hideModal}
              >
                <CgArrowLeft size={20} />
              </div>
            )}
            <div
              className="size-8 grid place-content-center rounded-full text-red-500 bg-red-500/20 cursor-pointer duration-200 hover:bg-red-500/30"
              onClick={hideModal}
            >
              <CgClose size={20} />
            </div>
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {!infoComplete ? (
            <>
              <motion.form {...opacityVariant} onSubmit={handleSubmit(submit)} className="grid gap-4">
                <div className="space-y-1">
                  <label>Appointment Date</label>
                  <input
                    type="date"
                    {...register("appointmentDate", { required: true })}
                    className="w-full border dark:border-white/10 rounded-xl p-2 dark:bg-dark cursor-not-allowed"
                    disabled
                  />
                </div>
                <div className="space-y-1">
                  <label>Start Time</label>
                  <input
                    type="time"
                    {...register("startTime", { required: true })}
                    className="w-full border dark:border-white/10 rounded-xl p-2 dark:bg-dark"
                  />
                </div>
                <div className="space-y-1">
                  <label>End Time</label>
                  <input
                    type="time"
                    {...register("endTime", { required: true })}
                    className="w-full border dark:border-white/10 rounded-xl p-2 dark:bg-dark disabled:opacity-80 cursor-not-allowed"
                    disabled
                  />
                </div>

                <div className="space-y-1">
                  <p>Type</p>
                  <div className="grid grid-cols-2 gap-3">
                    {["online", "physical"].map((m, id) => (
                      <div
                        key={id}
                        onClick={() => setMode(m as "physical" | "online")}
                        className={`p-2 text-center capitalize rounded-lg justify-center flex gap-2 duration-300 cursor-pointer ${
                          m === mode ? "bg-primary text-black font-semibold" : "bg-white dark:bg-darkGray"
                        }`}
                      >
                        <p className="text-center">{m}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <Button fullWidth disabled={!isValid}>
                  Continue
                </Button>
              </motion.form>
            </>
          ) : (
            <motion.div {...opacityVariant} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <p className="font-semibold">Search</p>
                  <input
                    type="text"
                    className="w-full border-b dark:border-white/10 dark:bg-transparent rounded p-2"
                    placeholder="search by name"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </div>

                <div className="space-y-1">
                  <Select
                    data={
                      departments.find((dep) => dep.dept === department)
                        ? { value: department, label: department }
                        : undefined
                    }
                    label="Department"
                    onValueChange={updateDepartment}
                    options={
                      departments?.map((dep) => ({
                        value: dep.dept,
                        label: dep.dept,
                      })) ?? []
                    }
                    placeholder="Select department"
                  />
                </div>
              </div>

              <div>
                {loading ? (
                  <div className="min-h-[10rem] grid place-content-center">
                    <Loader />
                  </div>
                ) : (
                  <>
                    {isFetching && <p className="absolute bottom-1 right-1 text-sm">fetching...</p>}

                    {doctors && doctors.length > 0 ? (
                      <div className="space-y-4">
                        <div className="divide-y dark:divide-white/10">
                          {doctors.map((doc, id) => (
                            <div key={id} className="py-1 flex items-center justify-between">
                              <div className="flex items-center gap-2">
                                <div className="size-10 border rounded-full relative overflow-hidden">
                                  <Image
                                    src={doc.user.profilePicture}
                                    alt="profile image"
                                    width={100}
                                    height={100}
                                    className="absolute top-0 left-0 w-full h-full"
                                  />
                                </div>
                                <div className="text-sm">
                                  <div className="flex items-center gap-2">
                                    <p>
                                      {doc.user.firstName} {doc.user.lastName}
                                    </p>
                                    {doc.kycDetails?.status === "successful" && (
                                      <RiVerifiedBadgeFill className="text-[#1c96e8]" />
                                    )}
                                  </div>
                                  <p className="truncate text-gray-500 max-w-[8rem]">{doc.bio}</p>
                                </div>
                              </div>

                              <Button size="extra-small" onClick={() => setDoctorId(doc._id)}>
                                {doc._id === doctorId ? "Selected" : "Select"}
                              </Button>
                            </div>
                          ))}
                        </div>

                        <AnimatePresence mode="wait">
                          {doctorId && (
                            <Button variant="filled" icon={<FaRegPaperPlane />} onClick={bookIt} loading={booking}>
                              Book
                            </Button>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <div className="min-h-[10rem] grid place-content-center text-center">
                        <p>No doctor found in the department: {department}</p>
                      </div>
                    )}
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </>
    </Modal>
  );
};

export default AppointmentModal;
