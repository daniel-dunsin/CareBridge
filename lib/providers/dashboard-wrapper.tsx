"use client";
import DNavbar from "@/components/Layout/Dashboard/Navbar";
import Sidebar from "@/components/Layout/Dashboard/Sidebar";

type Props = { children: React.ReactNode };

const DashboardWrapper = ({ children }: Props) => {
  return (
    <main>
      <div className="flex">
        <Sidebar />
        <div className={`duration-300 relative w-full`}>
          <DNavbar />
          <div className="mt-[2.5rem] px-5">{children}</div>
        </div>
      </div>
    </main>
  );
};

export default DashboardWrapper;
