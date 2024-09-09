"use client";
import { useGlobalStore } from "@/lib/store/global.store";
import NotificationDrop from "./dropdowns/notification";
import ThemeToggle from "@/components/Common/Others/theme-toggle";
import ProfileDrop from "./dropdowns/profile";
import { VscLayoutSidebarLeftOff } from "react-icons/vsc";

const DNavbar = () => {
  const { toggleSidebar, sidebarOpen } = useGlobalStore();

  return (
    <nav className="bg-white dark:bg-dark w-full py-3 px-5 dark:border-white/10 flex z-[1000] items-center justify-between sticky top-0 left-0">
      <div className="flex items-center gap-4">
        <VscLayoutSidebarLeftOff
          onClick={toggleSidebar}
          className={`cursor-pointer ${!sidebarOpen ? "text-primary" : ""}`}
        />

        <p className="font-semibold">Dashboard</p>
      </div>

      <div className="flex items-center gap-2">
        <NotificationDrop />
        <ThemeToggle />
        <ProfileDrop />
      </div>
    </nav>
  );
};

export default DNavbar;
