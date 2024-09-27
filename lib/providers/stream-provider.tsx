"use client";
import { StreamCall, StreamVideo, StreamVideoClient, User } from "@stream-io/video-react-sdk";
import { ReactNode, useEffect, useState } from "react";
import { tokenProvider } from "../actions/stream.action";
import Loader from "@/components/Common/Loaders";
import { useSession } from "next-auth/react";

const apiKey = process.env.NEXT_PUBLIC_STREAM_API_KEY;

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [videoClient, setVideoClient] = useState<StreamVideoClient>();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading" || !session) return;

    const user = session.user!;

    if (!apiKey) throw new Error("Stream API key missing");

    const client = new StreamVideoClient({
      apiKey,
      user: {
        id: user._id,
        name: user.firstName + " " + user.lastName,
        image: user.profilePicture,
      },
      tokenProvider: tokenProvider,
    });

    setVideoClient(client);
  }, [status, session]);

  if (!videoClient) return <Loader />;

  return <StreamVideo client={videoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;
