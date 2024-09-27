"use client";
import authOptions from "@/lib/config/auth-options";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import { BiHealth } from "react-icons/bi";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const router = useRouter();

  useEffect(() => {
    if (session) router.replace("/dashboard");
  }, []);

  return (
    <main>
      <div className="text-black fixed top-3 right-6">
        <Link href="/" className="flex items-center gap-1">
          <BiHealth size={20} className="text-primary" />
          <span className="font-bold text-lg dark:text-white">CareBridge</span>
        </Link>
      </div>

      {children}
    </main>
  );
};

export default Layout;
