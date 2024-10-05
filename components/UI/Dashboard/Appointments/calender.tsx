"use client";

import React, { useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { toastError } from "@/lib/utils/toast";
import { format, getDay, parse, startOfWeek } from "date-fns";
import { enUS } from "date-fns/locale/en-US";
import { useModal } from "@/lib/providers/modal-provider";
import AppointmentModal from "./modal";
import useEventsStore, { EventType, useAppointment } from "@/lib/store/event.store";
import { useQuery } from "@tanstack/react-query";
import useUserInfo from "@/lib/hooks/useUserInfo";
import AppointmentInfoModal from "./modal/appointment-info";
import { getAppointments } from "@/lib/services/appointment.service";
import { mapAppointmentsToEvents } from "@/lib/utils/helpers";
// import "./index";

const locales = { "en-US": enUS };

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const BigCalendar = () => {
  const { showModal } = useModal();

  const { events, setEvents } = useEventsStore();

  const { update: updateAppointment } = useAppointment();

  const { user } = useUserInfo();

  const {
    data: appointments,
    isPending,
    refetch,
  } = useQuery({
    queryKey: ["appointments"],
    queryFn: getAppointments,
  });

  useEffect(() => {
    const events = mapAppointmentsToEvents(appointments || [], user!);
    setEvents(events);
  }, [appointments, isPending]);

  const handleSelect = ({ start, end }: { start: any; end: any }) => {
    // check if date selected is in the past
    const [now, startTime] = [new Date().getTime(), new Date(end).getTime()];

    const validTime = startTime > now;
    if (!validTime) {
      toastError("Invalid time/date range selected", { id: "invalid-time-range" });
      return;
    }

    updateAppointment({
      appointmentDate: new Date(start),
      startTime: start,
      endTime: end,
      mode: "online",
    });

    if (user?.role === "patient") showModal(<AppointmentModal />);
  };

  const handleSelectEvent = (event: EventType) => {
    showModal(<AppointmentInfoModal event={event} refetchAppointments={refetch} />);
  };

  return (
    <div className="">
      <Calendar
        views={["day", "agenda", "work_week", "month"]}
        selectable
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        style={{ height: "100vh" }}
        events={events}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelect}
        // className="dark:bg-darkGray border-transparent dark:text-offWhite duration-300 rbc-today"
      />
    </div>
  );
};

export default BigCalendar;
