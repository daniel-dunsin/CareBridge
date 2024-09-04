import AuthProvider from "@/lib/providers/auth-provider";
import DashboardWrapper from "@/lib/providers/dashboard-wrapper";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <AuthProvider>
      <DashboardWrapper>{children}</DashboardWrapper>
    </AuthProvider>
  );
};

export default Layout;
