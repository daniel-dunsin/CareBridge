"use client";

import MeetingTypeList from "@/components/UI/Meeting/MeetingTypeList";
import { getPendingAppointments } from "@/lib/services/appointment.service";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { format, formatDistanceToNow } from "date-fns";

const Page = () => {
  const { data, isPending: loading } = useQuery({ queryFn: getPendingAppointments, queryKey: ["appointments"] });

  return (
    // <div>
    //   <MeetingTypeList />;
    // </div>

    <div className="mt-5">
      {loading ? (
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: 4 }).map((_, id) => (
            <div className="p-16 animate-skeleton bg-gray-400 rounded-lg" key={id}></div>
          ))}
        </div>
      ) : (
        <>
          {data && data.length > 0 ? (
            <div className="grid grid-cols-4 gap-4">
              {data.map(({ appointmentDate, mode, startTime, endTime }, id) => (
                <div className="border rounded-md p-5 bg-white" key={id}>
                  <p className="text-xl font-bold">In {formatDistanceToNow(appointmentDate)}</p>
                  <MeetingTypeList />
                </div>
              ))}
            </div>
          ) : (
            <div>no appointments found</div>
          )}
        </>
      )}
    </div>
  );
};

export default Page;
