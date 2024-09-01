import Cursor from "@/components/Common/Cursor";
import Footer from "@/components/Layout/Footer";
import Navbar from "@/components/Layout/Navbar";
import PublicWrapper from "@/lib/providers/public-wrapper";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <PublicWrapper>
      <Cursor />
      <Navbar />
      {children}

      <div className="h-[20rem]"></div>
      <Footer />
    </PublicWrapper>
  );
};

export default Layout;
