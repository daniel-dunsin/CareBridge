"use client";

import Modal from "@/components/Common/Modal";
import { useModal } from "@/lib/providers/modal-provider";
import { IoIosLogOut } from "react-icons/io";
import { fadeToBottomVariant } from "@/lib/utils/variants";
import Image from "next/image";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { motion } from "framer-motion";
import { useTheme } from "@/lib/store/global.store";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { IoIosCloseCircle } from "react-icons/io";
import { signOut } from "next-auth/react";

const NavProfileModal = () => {
  const { hideModal } = useModal();
  const { user, loading } = useUserInfo();
  const { isDark: isDarkMode } = useTheme();

  return (
    <Modal onClose={hideModal}>
      <motion.div
        {...fadeToBottomVariant}
        className="bg-white dark:bg-darkGray shadow-2xl rounded-2xl py-8 overflow-hidden space-y-6"
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

          <div className="leading-tight">
            <p>
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-200">{user?.email}</p>
            <div className="flex items-center justify-center">
              {user?.emailVerified ? (
                <div className="flex items-center justify-center text-xs gap-[2px] py-[2px] px-1 rounded-full bg-primary/20 text-primary font-bold">
                  <RiVerifiedBadgeFill />
                  <span>Verified</span>
                </div>
              ) : (
                <div className="flex items-center justify-center text-xs gap-[2px] py-[2px] px-1 rounded-full bg-red-500/20 text-red-500 font-bold">
                  <IoIosCloseCircle />
                  <span>Unverified</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <button
            className="flex items-center gap-2 dark:text-[#919191] dark:hover:text-red-500 duration-200"
            onClick={() => signOut()}
          >
            <IoIosLogOut />
            <span>Logout</span>
          </button>
        </div>
      </motion.div>
    </Modal>
  );
};

export default NavProfileModal;
