"use client";

import MeetingTypeList from "@/components/UI/Meeting/MeetingTypeList";
import { getPendingAppointments, updateAppointmentJoinURL } from "@/lib/services/appointment.service";
import { useMutation, useQuery } from "@tanstack/react-query";
import React from "react";
import { format, formatDistanceToNow, isBefore } from "date-fns";
import Image from "next/image";
import useUserInfo from "@/lib/hooks/useUserInfo";
import Link from "next/link";
import Button from "@/components/Common/Button";
import ScreenRecorder from "@/components/UI/Dashboard/Meeting/Recorder";

const Page = () => {
  const {
    data,
    isPending: loading,
    isFetching,
    refetch,
  } = useQuery({ queryFn: getPendingAppointments, queryKey: ["appointments"] });

  const { mutate, isPending: starting } = useMutation({
    mutationFn: updateAppointmentJoinURL,
    mutationKey: ["appointments", "join_url", "update"],
  });

  const { user, loading: userLoading } = useUserInfo();

  return (
    // <div>
    //   <MeetingTypeList />;
    // </div>

    <div className="space-y-5">
      <div className="h-[14rem] relative rounded-b-md overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <Image src="/images/meeting/meet.jpg" layout="fill" objectFit="cover" alt="doctor" />
        </div>
        <div className="absolute flex items-end md:p-10 p-4 top-0 left-0 w-full h-full from-black/50 bg-gradient-to-t text-white">
          <div className="md:flex space-y-1 items-center justify-between w-full">
            <p className="font-extrabold text-5xl">Pending Meetings</p>

            <Button disabled={isFetching} onClick={refetch}>
              {isFetching ? "Refreshing..." : "Refresh"}
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-">
        {loading ? (
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4">
            {Array.from({ length: 4 }).map((_, id) => (
              <div className="p-16 animate-skeleton bg-gray-400 rounded-lg" key={id}></div>
            ))}
          </div>
        ) : (
          <>
            {data && data.length > 0 ? (
              <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
                {data
                  .sort((d1, d2) =>
                    new Date(d1.appointmentDate).getTime() > new Date(d2.appointmentDate).getTime() ? 1 : -1
                  )
                  .sort((d1, d2) => new Date(d1.appointmentDate).getTime() - new Date(d2.appointmentDate).getTime())
                  .map(({ join_url: joinUrl, mode, _id, startTime, endTime }) => (
                    <div className="border rounded-md p-5 bg-white space-y-4" key={_id}>
                      {/* <p className="text-xl font-bold">In {formatDistanceToNow(appointmentDate)}</p> */}
                      <div>
                        <p>
                          <span className="font-semibold">
                            {isBefore(new Date(), startTime) ? "Starts" : "Started"}
                          </span>
                          : {formatDistanceToNow(startTime, { addSuffix: true })}
                        </p>
                        <p>
                          <span className="font-semibold">{isBefore(endTime, new Date()) ? "Ended" : "Ends"}</span>:{" "}
                          {formatDistanceToNow(endTime, { addSuffix: true })}
                        </p>
                      </div>

                      {!isBefore(endTime, new Date()) && (
                        <>
                          {user && (
                            <>
                              {user.role === "doctor" ? (
                                <>
                                  {joinUrl ? (
                                    <div>
                                      <Link href={joinUrl}>
                                        <Button>Join</Button>
                                      </Link>
                                    </div>
                                  ) : (
                                    <MeetingTypeList full={false} id={_id} loading={starting} extraFn={mutate} />
                                  )}
                                </>
                              ) : (
                                <div>
                                  {joinUrl ? (
                                    <div>
                                      <Link href={joinUrl}>
                                        <Button>Join</Button>
                                      </Link>
                                    </div>
                                  ) : (
                                    <div className="flex items-center gap-1">
                                      {/* <Button disabled size="extra-small">
                                        Pending
                                      </Button> */}
                                      <Button size="extra-small" variant="black">
                                        Ping Doctor
                                      </Button>
                                    </div>
                                  )}
                                </div>
                              )}
                            </>
                          )}
                        </>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div>No appointments found</div>
            )}
          </>
        )}
      </div>

      {/* <ScreenRecorder /> */}
    </div>
  );
};

export default Page;
