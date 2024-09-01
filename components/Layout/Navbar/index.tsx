"use client";
import Button from "@/components/Common/Button";
import navLinks from "@/lib/data/navbar";
import { useTheme } from "@/lib/store/global.store";
import { dmSans } from "@/lib/utils/fonts";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BiHealth } from "react-icons/bi";

const Navbar = () => {
  const ref = useRef<HTMLElement>(null);

  const asideRef = useRef<HTMLElement>(null);

  // const { data: session } = useSession();

  const [passed, setPassed] = useState(false);

  useEffect(() => {
    let prev = window.scrollY;

    const handleScroll = () => {
      let current = window.scrollY;

      if (!ref.current) return;

      if (current > prev) {
        ref.current.style.opacity = "0%";
      } else {
        ref.current.style.opacity = "100%";
      }

      prev = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { isDark: isDarkMode, updateDarkMode } = useTheme();

  const openMenu = () => {
    gsap.context(() => {
      gsap.timeline().to(asideRef.current, { height: "100%" }).to(".nav_link_child", { y: "0%", stagger: 0.2 });
    }, asideRef.current as Element);
  };

  const closeMenu = () => {
    gsap.context(() => {
      gsap.timeline().to(".nav_link_child", { y: "100%", stagger: 0.2 }).to(asideRef.current, { height: "0%" });
    }, asideRef.current as Element);
  };

  return (
    <nav
      className={`bg-white duration-300 ${dmSans.className} fixed top-0 left-0 w-full z-[1000] ${
        passed ? "opacity-0" : "opacity-100"
      }`}
      ref={ref}
    >
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
