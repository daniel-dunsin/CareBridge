"use client";
import StreamVideoProvider from "@/lib/providers/stream-provider";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session && status === "unauthenticated") router.replace("/account/login");
  }, [session]);

  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};

export default Layout;
