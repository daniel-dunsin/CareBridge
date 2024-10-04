import Button from "@/components/Common/Button";
import Select from "@/components/Common/Inputs/select";
import Loader from "@/components/Common/Loaders";
import Modal from "@/components/Common/Modal";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { useModal } from "@/lib/providers/modal-provider";
import { cancelAppointment, getSingleAppointment, updateAppointmentStatus } from "@/lib/services/appointment.service";
import { getAppointmentReport } from "@/lib/services/report.service";
import { EventType } from "@/lib/store/event.store";
import { useMutation, useQuery } from "@tanstack/react-query";
import { format, isBefore } from "date-fns";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { FC, useCallback, useMemo } from "react";
import { GiFemale, GiMale } from "react-icons/gi";

type Props = {
  event: EventType;
  refetchAppointments(): void;
};

const AppointmentInfoModal: FC<Props> = ({ event, refetchAppointments }) => {
  const { hideModal } = useModal();
  const router = useRouter();

  const { data: appointment, isPending: appointmentLoading } = useQuery({
    queryKey: ["getAppointment", event.id],
    queryFn: getSingleAppointment(event.id),
  });
  const { data: report, isPending: reportLoading } = useQuery({
    queryKey: ["getAppointmentReport", event.id],
    queryFn: getAppointmentReport(event.id),
  });

  const { mutate: cancel, isPending: cancelPending } = useMutation({
    mutationFn: cancelAppointment,
    onSuccess() {
      hideModal();
      refetchAppointments();
    },
  });

  const { mutate: updateStatus, isPending: updateStatusPending } = useMutation({
    mutationFn: updateAppointmentStatus,
    onSuccess() {
      hideModal();
      refetchAppointments();
    },
  });

  const { user } = useUserInfo();

  const partner = useMemo(() => {
    if (appointment && user) {
      if (user!.role === "doctor") {
        return appointment.patient.user;
      } else {
        return appointment.doctor.user;
      }
    }
  }, [appointment, user]);

  const Footer = useCallback(() => {
    if (user && appointment) {
      const isPast = isBefore(appointment?.startTime!, new Date().toISOString());
      switch (isPast) {
        case true:
          return (
            <div className="flex items-center justify-end">
              {((user?.role === "patient" && appointment?.patientStatus === "pending") ||
                (user?.role === "doctor" && appointment?.doctorStatus === "pending")) && (
                <Select
                  label=""
                  options={[
                    { value: "successful", label: "Successful" },
                    { value: "failed", label: "Failed" },
                  ]}
                  dropUp={true}
                  onValueChange={(status: "successful" | "failed") => {
                    updateStatus({ appointmentId: appointment?._id!, status });
                  }}
                  loading={updateStatusPending}
                />
              )}
              {user?.role === "doctor" ? (
                <Button
                  className="ml-auto"
                  onClick={() => {
                    router.push(`/appointments/${appointment!._id}/report/submit`);
                    hideModal();
                  }}
                >
                  Submit Report
                </Button>
              ) : (
                report && (
                  <Button
                    className="ml-auto"
                    variant="filled"
                    onClick={() => (
                      router.push(`/reports/${report!._id}?department=${appointment?.department}`), hideModal()
                    )}
                  >
                    View Report
                  </Button>
                )
              )}
            </div>
          );

        case false:
          return (
            <div className="flex items-center justify-between">
              <Button variant="faint" onClick={() => cancel(appointment?._id!)} loading={cancelPending}>
                Cancel Appointment
              </Button>
            </div>
          );
      }
    }
  }, [user, appointment, report]);

  return (
    <Modal
      onClose={hideModal}
      className="bg-white dark:bg-dark shadow-2xl p-4 rounded-xl xl:min-w-[40rem] min-h-[28rem] max-h-[28rem] overflow-y-auto lg:min-w-[30rem] space-y-4 relative"
    >
      {appointmentLoading || reportLoading ? (
        <div className="grid place-content-center w-full h-full">
          <Loader />
        </div>
      ) : (
        <>
          <header className="flex flex-col items-center justify-center">
            <Image
              src={partner?.profilePicture!}
              alt={partner?.firstName!}
              width={150}
              height={150}
              className="rounded-full object-center object-cover"
            />

            <h1 className="mt-2 text-xl font-bold">
              {partner?.firstName} {partner?.lastName}
              <span className="inline-block align-middle ml-2">
                {partner?.gender === "male" ? <GiMale color="royalblue" /> : <GiFemale color="pink" />}
              </span>
            </h1>

            <p className="mt-2 capitalize">
              {appointment?.department} - {appointment?.mode}
            </p>

            <p className="mt-2 capitalize font-bold">{appointment?.status?.toLowerCase()}</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-2 space-x-2">
            <div className="space-y-1">
              <label>Appointment Date</label>
              <input
                type="text"
                disabled={true}
                className="w-full border dark:border-white/10 rounded-xl p-2"
                value={format(appointment?.appointmentDate!, "dd MMMM, yyyy")}
              />
            </div>

            <div className="space-y-1">
              <label>Appointment Time</label>
              <input
                type="text"
                disabled={true}
                className="w-full border dark:border-white/10 rounded-xl p-2"
                value={`${format(appointment?.startTime!, "h:mm a")} - ${format(appointment?.endTime!, "h:mm a")}`}
              />
            </div>
          </div>

          <div className="mt-6">
            <Footer />
          </div>
        </>
      )}
    </Modal>
  );
};

export default AppointmentInfoModal;
