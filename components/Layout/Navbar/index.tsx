"use client";
import Button from "@/components/Common/Button";
import navLinks from "@/lib/data/navbar";
import { dmSans } from "@/lib/utils/fonts";
import Link from "next/link";
import { BiHealth } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className={`bg-white ${dmSans.className}`}>
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center gap-16">
          <div className="flex items-center gap-1 text-black">
            <BiHealth size={20} className="text-primary" />
            <span className="font-bold text-lg">CareBridge</span>
          </div>

          <ul className="flex items-center gap-8 font-semibold text-xs uppercase">
            {navLinks.map(({ href, label }, index) => (
              <li key={index} className="tracking-[0.15rem]">
                <Link href={href}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Button className="uppercase" variant="filled">
            Login
          </Button>
          {/* <button className="px-8 py-2 rounded-full bg-gradient-to-b from-blue-500 to-blue-600 text-white focus:ring-2 focus:ring-blue-400 hover:shadow-xl transition duration-200">
            Login
          </button> */}
          {/* <div className="button-container-2">
            <span className="mas">MASK2</span>
            <button type="button" name="Hover">
              MASK2
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
