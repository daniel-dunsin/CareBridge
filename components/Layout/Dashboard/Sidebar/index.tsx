"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiLogOut } from "react-icons/fi";
import { useEffect, useState } from "react";
import { doctorLinks, bottomSidebarLinks, patientLinks, adminLinks } from "@/lib/data/sidebar";
import SidebarSkeleton from "./skeleton";
import { useGlobalStore } from "@/lib/store/global.store";
import useUserInfo from "@/lib/hooks/useUserInfo";
import Logo from "@/components/Common/Logos";

const Sidebar = () => {
  const pathname = usePathname();
  const [links, setLinks] = useState(patientLinks);

  const { sidebarOpen } = useGlobalStore();

  const { user, loading } = useUserInfo();

  useEffect(() => {
    if (!user) return;

    switch (user.role) {
      case "patient":
        setLinks(patientLinks);
        return;
      case "doctor":
        setLinks(doctorLinks);
        return;
      case "admin":
        setLinks(adminLinks);
        return;
    }
  }, [user, loading]);

  return (
    <aside
      className={`fixed top-0 z-[100] min-h-screen overflow-x-hidden duration-300 w-0 dark:bg-darkGray bg-white dark:text-[#f3fdfe] overflow-y-auto show-scroll flex flex-col gap-10 justify-between ${
        sidebarOpen ? "xl:w-[280px] md:w-[260px]" : "w-[60px]"
      }`}
    >
      {loading ? (
        <SidebarSkeleton />
      ) : (
        <>
          <div>
            <div className={`pl-6 dark:border-white/10 ${sidebarOpen ? "py-3" : "py-4"}`}>
              <Link href={"/dashboard"} className="text-xl">
                <div className="flex items-center gap-2">
                  <Logo />
                  {sidebarOpen && <span className="font-extrabold">CareBridge</span>}
                </div>
              </Link>
            </div>

            <div className="mt-5 space-y-2">
              {links.map((section, index) => (
                <div key={index} className="space-y-1">
                  <ul className={`${sidebarOpen ? "space-y-2" : "space-y-3"}`}>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.path}
                          className={`flex items-center transition-colors duration-300 gap-4 m-over ${
                            pathname.startsWith(link.path)
                              ? "dark:bg-[#404040] bg-lightShade font-semibold border-l-0 border border-b-[5px] border-[#010101]"
                              : "dark:text-white dark:hover:bg-[#010101]/20 font-medium hover:bg-zinc-300 hover:text-black "
                          } ${
                            sidebarOpen
                              ? "px-5 py-3 mr-4 rounded-r-2xl"
                              : "grid place-content-center py-3 mr-2 rounded-r-full"
                          }`}
                        >
                          <span>{pathname.startsWith(link.path) ? link.iconFilled : link.iconOutlined}</span>
                          {sidebarOpen && <span>{link.text}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-1">
            <div>
              {bottomSidebarLinks.map((section, index) => (
                <div key={index} className="space-y-1">
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <Link
                          href={link.path}
                          className={`flex items-center rounded-full transition-colors duration-300 gap-4 m-over mx-auto ${
                            link.path.startsWith(pathname) ? "text-primary" : "dark:text-white hover:text-primary"
                          } ${sidebarOpen ? "px-5 py-2" : "grid place-content-center size-8"}`}
                        >
                          <span>{link.path.startsWith(pathname) ? link.iconFilled : link.iconOutlined}</span>

                          {sidebarOpen && <span>{link.text}</span>}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div
              className={`hover:text-primary duration-300 grid md:flex py-2 items-center gap-4 cursor-pointer ${
                sidebarOpen ? "px-5" : "grid place-content-center mx-auto"
              }`}
              onClick={() => signOut()}
            >
              <FiLogOut />
              {sidebarOpen && <span>Logout</span>}
            </div>
          </div>
        </>
      )}
    </aside>
  );
};

export default Sidebar;
