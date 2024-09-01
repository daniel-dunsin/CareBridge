import type { Metadata } from "next";
import "../public/globals.css";
import { karla } from "@/lib/utils/fonts";

export const metadata: Metadata = {
  title: "CareBridge",
  description: "CareBridge is a platform that connects caregivers with patients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${karla.className} dark:text-[#f9ffff] dark:bg-dark bg-offWhite text-dark`}>{children}</body>
    </html>
  );
}
