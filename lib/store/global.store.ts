import { create } from "zustand";
import { persist } from "zustand/middleware";

type GlobalStoreState = {
  sidebarOpen: boolean;
  mobileOpen: boolean;
};

type GlobalStoreActions = {
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;

  openMobileMenu: () => void;
  closeMobileMenu: () => void;
  toggleMobileMenu: () => void;
};

type GlobalStore = GlobalStoreState & GlobalStoreActions;

export const useSideBar = create<GlobalStore>()(
  persist(
    (set) => ({
      sidebarOpen: true,
      mobileOpen: false,

      toggleSidebar: () =>
        set((state) => ({ ...state, sidebarOpen: !state.sidebarOpen })),

      closeSidebar: () => set((state) => ({ ...state, sidebarOpen: false })),

      openSidebar: () => set((state) => ({ ...state, sidebarOpen: true })),

      openMobileMenu: () => set((state) => ({ ...state, mobileOpen: true })),

      closeMobileMenu: () => set((state) => ({ ...state, mobileOpen: false })),

      toggleMobileMenu: () =>
        set((state) => ({ ...state, mobileOpen: !state.mobileOpen })),
    }),
    {
      name: "sidebar-state",
    },
  ),
);

// -------------------------
// THEME
// -------------------------
type ThemeStoreState = {
  isDark: boolean;
};

type ThemeStoreActions = {
  updateDarkMode: (state: boolean) => void;
};

type ThemeStore = ThemeStoreState & ThemeStoreActions;

export const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      isDark: false,
      updateDarkMode: (newState) =>
        set((state) => ({ ...state, isDark: newState })),
    }),
    { name: "theme" },
  ),
);
