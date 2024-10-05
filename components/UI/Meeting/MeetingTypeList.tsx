"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";
import { toastError, toastSuccess } from "@/lib/utils/toast";
import HomeCard from "./HomeCard";
import useUserInfo from "@/lib/hooks/useUserInfo";
import MeetingModal from "./MeetingModal";
import Button from "@/components/Common/Button";
import { UseMutateFunction } from "@tanstack/react-query";

type Props = {
  full?: boolean;
  id?: string;
  extraFn?: UseMutateFunction<
    any,
    Error,
    {
      appointmentId: string;
      joinUrl: string;
    },
    unknown
  >;
  loading?: boolean;
};

const MeetingTypeList = ({ full = true, extraFn, id, loading = false }: Props) => {
  const router = useRouter();
  // const [meetingState, setMeetingState] = useState<
  //   "isScheduleMeeting" | "isJoiningMeeting" | "isInstantMeeting" | undefined
  // >();

  const [starting, setStarting] = useState(false);

  const { user } = useUserInfo();

  const client = useStreamVideoClient();

  const [values, setValues] = useState({
    dateTime: new Date(),
    description: "",
    link: "",
  });

  let meetingLink = "";

  const [callDetails, setCallDetails] = useState<Call>();

  const createMeeting = async () => {
    if (!client || !user) return;

    try {
      setStarting(true);
      // this is useful for schedule meetings
      if (!values.dateTime) {
        toastError("Please select a date and time");
        return;
      }

      const id = crypto.randomUUID();

      const call = client.call("default", id);

      if (!call) {
        throw new Error("Failed to create call");
      }

      const startsAt = values.dateTime.toISOString() || new Date(Date.now()).toISOString();
      const description = values.description || "Instant Meeting";

      await call.getOrCreate({
        data: {
          starts_at: startsAt,
          custom: {
            description,
          },
        },
      });

      setCallDetails(call);

      if (!values.description) {
        meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${call.id}`;
        router.push(`/meeting/${call.id}`);
      }

      toastSuccess("Meeting created successfully");
    } catch (error) {
      console.log(error);
      toastError("Failed to create meeting");
    } finally {
      setStarting(false);
    }
  };

  // const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetails?.id}`;

  return (
    <Button
      className={full ? `mt-20 container` : ""}
      onClick={() => (extraFn ? extraFn({ joinUrl: meetingLink, appointmentId: id ?? "" }) : () => {}, createMeeting())}
      disabled={starting || loading}
    >
      {starting ? "Starting..." : "Start Meeting"}
    </Button>
  );
};

export default MeetingTypeList;
