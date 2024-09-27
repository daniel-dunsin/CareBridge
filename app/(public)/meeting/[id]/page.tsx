"use client";
import Loader from "@/components/Common/Loaders";
import MeetingRoom from "@/components/UI/Meeting/MeetingRoom";
import MeetingSetup from "@/components/UI/Meeting/MeetingSetup";
import { useGetCallById } from "@/lib/hooks/useGetCallById";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";
import React, { useState } from "react";

const Meeting = ({ params: { id } }: { params: { id: string } }) => {
  const { user, loading } = useUserInfo();
  const [isSetupComplete, setIsSetupComplete] = useState(false);
  const { call, isCallLoading } = useGetCallById(id);

  if (loading || isCallLoading)
    return (
      <div className="fixed top-0 w-full h-full left-0 z-[10000] backdrop-blur-md grid place-content-center">
        <Loader />
      </div>
    );

  return (
    <main className="h-screen w-full">
      <StreamCall call={call}>
        <StreamTheme>
          {!isSetupComplete ? <MeetingSetup setIsSetupComplete={setIsSetupComplete} /> : <MeetingRoom />}
        </StreamTheme>
      </StreamCall>
    </main>
  );
};

export default Meeting;
