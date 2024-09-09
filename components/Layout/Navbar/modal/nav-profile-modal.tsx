"use client";

import Modal from "@/components/Common/Modal";
import { useModal } from "@/lib/providers/modal-provider";
import { CgHome, CgProfile } from "react-icons/cg";
import { IoIosLogOut } from "react-icons/io";
import { fadeToBottomVariant } from "@/lib/utils/variants";
import { signOut } from "next-auth/react";
import Image from "next/image";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/store/global.store";

const NavProfileModal = () => {
  const { hideModal } = useModal();
  const { user, loading } = useUserInfo();
  const { isDark: isDarkMode } = useTheme();

  return (
    <Modal onClose={hideModal}>
      <motion.div
        {...fadeToBottomVariant}
        className="bg-white dark:bg-dark shadow-2xl rounded-md pt-5 overflow-hidden space-y-4"
      >
        <div className="grid place-content-center text-center space-y-2">
          <div
            className={`size-20 rounded-full overflow-hidden mx-auto relative ${
              !user && !isDarkMode ? "animate-skeleton" : "animate-skeleton-dark"
            }`}
          >
            {user && (
              <Image
                src={`${user?.profilePicture}`}
                width={100}
                height={100}
                alt="profile"
                className="w-full h-full object-cover absolute top-0 left-0"
              />
            )}
          </div>

          <p className="text-xs text-gray-500 dark:text-gray-200">{user?.email}</p>
        </div>

        <ul className="grid grid-cols-2 dark:border-white/10 border-t">
          <li className="py-2 cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-[#3d3d3d] flex items-center gap-1 justify-center text-gray-500 dark:text-gray-200 text-center dark:border-white/10 border-r">
            <span>Setting</span>
            <CgProfile />
          </li>
          <div>
            <li className="py-2 cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-[#3d3d3d] flex items-center gap-1 justify-center text-gray-500 dark:text-gray-200 text-center">
              <span>Home</span>
              <CgHome />
            </li>
          </div>
          <li
            className="py-2 cursor-pointer duration-300 hover:bg-gray-100 dark:hover:bg-[#3d3d3d] flex items-center gap-1 justify-center text-gray-500 dark:text-gray-200 text-center col-span-2 dark:border-white/10 border-t"
            onClick={() => signOut()}
          >
            <span>Logout</span>
            <IoIosLogOut />
          </li>
        </ul>
      </motion.div>
    </Modal>
  );
};

export default NavProfileModal;
