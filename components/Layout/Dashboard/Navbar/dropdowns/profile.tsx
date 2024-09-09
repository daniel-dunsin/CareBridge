import NavProfileModal from "@/components/Layout/Navbar/modal/nav-profile-modal";
import useUserInfo from "@/lib/hooks/useUserInfo";
import { useModal } from "@/lib/providers/modal-provider";
import { useTheme } from "@/lib/store/global.store";
import Image from "next/image";

const ProfileDrop = () => {
  const { user, loading } = useUserInfo();

  const { isDark: isDarkMode } = useTheme();

  const { showModal } = useModal();

  const show = () => showModal(<NavProfileModal />);

  return (
    <div className="relative">
      <div
        className={`size-8 rounded-full dark:border-white/10 border grid place-content-center ring-[2px] hover:ring-primary ring-transparent duration-300 cursor-pointer relative overflow-hidden ${
          !user ? (loading && !isDarkMode ? "animate-skeleton" : "animate-skeleton-dark") : ""
        }`}
        onClick={show}
      >
        {user && (
          <Image
            src={`${user.profilePicture}`}
            width={100}
            height={100}
            alt="profile"
            className="w-full h-full object-cover absolute top-0 left-0"
          />
        )}
      </div>
    </div>
  );
};

export default ProfileDrop;
