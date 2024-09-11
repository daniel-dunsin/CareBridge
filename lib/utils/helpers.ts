import { EventType } from "../store/event.store";
import { AppointmentDocument, IUser } from "../types";

export const getBase64 = (file: File) => {
  return new Promise((resolve) => {
    let baseURL = "";
    let reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(file);

    reader.onload = () => {
      // @ts-ignore
      baseURL = reader.result;
      resolve(baseURL);
    };
  });
};

export const mapAppointmentsToEvents = (appointments: AppointmentDocument[], user: IUser): EventType[] => {
  return appointments.map((appointment) => {
    let partnerName: string;
    if (user?.role === "patient") {
      partnerName = `Dr. ${appointment.doctor.user.firstName}`;
    } else {
      partnerName = appointment.patient.user.firstName;
    }

    return {
      id: appointment._id,
      title: `Session with ${partnerName}`,
      allDay: false,
      start: new Date(appointment.startTime),
      end: new Date(appointment.endTime),
    };
  });
};

export const formatDollar = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    currency: "USD",
    style: "currency",
  }).format(price);
};
