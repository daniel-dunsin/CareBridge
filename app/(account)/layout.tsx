import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Account",
    template: `%s | CareBridge`,
  },
  description: "",
};

const Layout = async ({ children }: { children: React.ReactNode }) => {
  return <main>{children}</main>;
};

export default Layout;
