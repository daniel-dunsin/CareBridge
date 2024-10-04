import StreamVideoProvider from "@/lib/providers/stream-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};

export default Layout;
