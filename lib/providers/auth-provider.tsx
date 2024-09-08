"use client";

import SessionCheckLoader from "@/components/Common/Loaders/session-check";
import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = React.PropsWithChildren;

const AuthProvider: React.FC<Props> = ({ children }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (!session && status === "unauthenticated") {
      router.replace("/");
    }
  }, [session, status]);

  if (status === "loading") return <SessionCheckLoader />;

  return <>{children}</>;
};

export default AuthProvider;
