import type { Metadata } from "next";
import "../public/globals.css";
import { dmSans, karla } from "@/lib/utils/fonts";
import Providers from "@/lib/providers";

export const metadata: Metadata = {
  title: {
    default: "CareBridge",
    template: `%s | CareBridge`,
  },
  description: "CareBridge is a platform that connects caregivers with patients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} dark:text-[#f9ffff] dark:bg-dark bg-offWhite text-dark`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
