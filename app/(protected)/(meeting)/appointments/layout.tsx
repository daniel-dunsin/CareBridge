import StreamVideoProvider from "@/lib/providers/stream-provider";

const Layout = ({ children }: { children: React.ReactNode }) => {
  console.log("from layout...");

  return <StreamVideoProvider>{children}</StreamVideoProvider>;
};

export default Layout;
