"use client";
import Sidebar from "@/components/Layout/Sidebar";
import Navbar from "@/components/Layout/Navbar";
import useDimension from "../hooks/useDimension";
import { useSideBar } from "../store/global.store";

type Props = { children: React.ReactNode };

const DashboardWrapper = ({ children }: Props) => {
  const { sidebarOpen } = useSideBar();

  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div
          className={`duration-300 relative w-full`}
          style={{ marginLeft: sidebarOpen ? "250px" : "60px" }}
        >
          <Navbar />
          <div className="mt-[2.5rem] px-5">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardWrapper;
