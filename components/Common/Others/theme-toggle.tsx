"use client";

import { useTheme } from "@/lib/store/global.store";
import { CgMoon, CgSun } from "react-icons/cg";

const ThemeToggle = () => {
  const { updateDarkMode, isDark: isDarkMode } = useTheme();

  return (
    <div className="size-8 border border-gray-500/40 rounded-full grid place-content-center duration-300 hover:bg-gray-300 dark:hover:bg-white/10">
      {isDarkMode ? (
        <CgSun
          className="cursor-pointer dark:text-white text-black duration-300"
          onClick={() => updateDarkMode(false)}
        />
      ) : (
        <CgMoon
          className="cursor-pointer dark:text-white text-black duration-300"
          onClick={() => updateDarkMode(true)}
        />
      )}
    </div>
  );
};

export default ThemeToggle;
