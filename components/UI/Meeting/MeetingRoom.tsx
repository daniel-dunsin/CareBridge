import {
  CallControls,
  CallParticipantsList,
  CallStatsButton,
  CallingState,
  PaginatedGridLayout,
  SpeakerLayout,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import EndCallButton from "./EndCallButton";
import { RiUserSmileLine } from "react-icons/ri";
import Loader from "@/components/Common/Loaders";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
  const searchParams = useSearchParams();
  const [layout, setLayout] = useState<CallLayoutType>("speaker-left");
  const [showParticipants, setShowParticipants] = useState(false);

  const isPersonalRoom = !!searchParams.get("personal");

  const { useCallCallingState } = useCallStateHooks();
  const callingState = useCallCallingState();

  const router = useRouter();

  if (callingState !== CallingState.JOINED) return <Loader />;

  const CallLayout = () => {
    switch (layout) {
      case "grid":
        return <PaginatedGridLayout />;
      case "speaker-left":
        return <SpeakerLayout participantsBarPosition="left" />;
      default:
        return <SpeakerLayout participantsBarPosition="right" />;
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden pt-4">
      <div className="relative flex size-full items-center justify-center">
        <div className="flex size-full max-w-[1000px] items-center">
          <CallLayout />
        </div>

        <div
          className={cn("h-[calc(100vh-86px)] hidden ml-2", {
            "show-block": showParticipants,
          })}
        >
          <CallParticipantsList onClose={() => setShowParticipants(false)} />
        </div>

        <div className="fixed bottom-0 flex w-full items-center justify-center gap-5 flex-wrap">
          <CallControls onLeave={() => router.push("/")} />

          {/* <DropdownMenu>
            <div className="flex items-center">
              <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                <CgLayoutList size={20} className="text-white" />
              </DropdownMenuTrigger>
            </div>

            <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
              {["Grid", "Speaker-Left", "Speaker-Right"].map((item, index) => (
                <div key={index}>
                  <DropdownMenuItem
                    className="cursor-pointer hover:bg-[#4c535b]"
                    onClick={() => setLayout(item.toLowerCase() as CallLayoutType)}
                  >
                    {item}
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="border-dark-1" />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu> */}

          <CallStatsButton />

          <button onClick={() => setShowParticipants((prev) => !prev)}>
            <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
              <RiUserSmileLine size={20} className="text-white" />
            </div>
          </button>

          {!isPersonalRoom && <EndCallButton />}
        </div>
      </div>
    </section>
  );
};

export default MeetingRoom;
