import AuthProvider from "@/lib/providers/auth-provider";
import DashboardWrapper from "@/lib/providers/dashboard-wrapper";
import { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    nocache: true,
    follow: false,
    noarchive: true,
  },
  title: {
    default: "Admin Dashboard",
    template: `%s | CareBridge`,
  },
};

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <DashboardWrapper>{children}</DashboardWrapper>
    </AuthProvider>
  );
};

export default Layout;
