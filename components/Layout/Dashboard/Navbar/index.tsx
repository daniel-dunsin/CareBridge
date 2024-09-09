"use client";
import { useGlobalStore, useTheme } from "@/lib/store/global.store";
import { CiSearch } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import NotificationDrop from "./dropdowns/notification";
// import ProfileDrop from "./dropdowns/profile";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/Common/Others/theme-toggle";

const DNavbar = () => {
  const { toggleSidebar } = useGlobalStore();

  const router = useRouter();

  return (
    <nav className="bg-white dark:bg-dark w-full p-[0.5rem] dark:border-white/10 flex z-[1000] items-center justify-between sticky top-0 left-0">
      <div className="flex items-center gap-2">
        <div className="size-8 grid place-content-center cursor-pointer duration-200 hover:bg-primary hover:text-black rounded-full border dark:border-white/10">
          <RxHamburgerMenu onClick={toggleSidebar} />
        </div>
        <div className="min-w-[18rem] px-3 sm:flex hidden items-center justify-between border dark:border-white/10 rounded-full">
          <input type="text" className="flex-grow text-sm py-2 bg-transparent" placeholder="Type to search" />
          <CiSearch />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <NotificationDrop />
        <ThemeToggle />

        {/* <ProfileDrop /> */}
      </div>
    </nav>
  );
};

export default DNavbar;
