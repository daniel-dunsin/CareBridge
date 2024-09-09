"use client";

import { ReactNode, useEffect } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster as SonnerToaster } from "sonner";
import { SessionProvider } from "next-auth/react";
import { useTheme } from "../store/global.store";
import { Leva } from "leva";
import { ModalProvider } from "./modal-provider";

export const queryClient = new QueryClient();

const isProduction = process.env.NODE_ENV === "production";

const toastOptions = {
  backgroundColor: "#fff",
  color: "black",
  fontSize: "14px",
  borderColor: "#686868",
};

const toastOptionsDark = {
  backgroundColor: "#282828",
  color: "white",
  fontSize: "14px",
  borderColor: "#686868",
};

const Providers = ({ children }: { children: ReactNode }) => {
  const { isDark: isDarkMode } = useTheme();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <SonnerToaster
          toastOptions={{
            style: !isDarkMode ? toastOptions : toastOptionsDark,
          }}
        />
        <ModalProvider>{children}</ModalProvider>
        {/* <Leva hidden={isProduction} /> */}
        <ReactQueryDevtools />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export default Providers;
