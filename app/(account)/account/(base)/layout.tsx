import { getServerSession } from "next-auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import { BiHealth } from "react-icons/bi";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession();

  if (session) redirect("/dashboard");

  return (
    <main>
      <div className="text-black fixed top-3 right-6">
        <Link href="/" className="flex items-center gap-1">
          <BiHealth size={20} className="text-primary" />
          <span className="font-bold text-lg">CareBridge</span>
        </Link>
      </div>

      {children}
    </main>
  );
};

export default Layout;
