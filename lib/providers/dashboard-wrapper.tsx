"use client";
import DNavbar from "@/components/Layout/Dashboard/Navbar";
import Sidebar from "@/components/Layout/Dashboard/Sidebar";
import { useGlobalStore } from "../store/global.store";
import { cn } from "../utils";
import useUserInfo from "../hooks/useUserInfo";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

type Props = { children: React.ReactNode };

const DashboardWrapper = ({ children }: Props) => {
  const { sidebarOpen } = useGlobalStore();

  const { user } = useUserInfo();

  const router = useRouter();

  useEffect(() => {
    if (user?.role === "admin") {
      router.replace("/s/dashboard");
    }
  }, [user]);

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div
          className={cn(
            `duration-300 flex-grow relative`
            //   {
            //   "xl:ml-[280px] md:ml-[260px]": sidebarOpen,
            //   "ml-[60px]": !sidebarOpen,
            // }
          )}
          style={{ marginLeft: sidebarOpen ? "280px" : "60px" }}
        >
          <DNavbar />
          {user?.role !== "admin" && <div className="mt-[2.5rem] px-5">{children}</div>}
        </div>
      </div>
    </main>
  );
};

export default DashboardWrapper;
