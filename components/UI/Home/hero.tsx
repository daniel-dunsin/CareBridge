"use client";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { montserrat } from "@/lib/utils/fonts";

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap
        .timeline()
        .from(".hero-up", { opacity: 0, y: "100%", stagger: 0.2 })
        .from(".hero-img", { opacity: 0, y: "10%" }, 0.4);
    },
    { scope: ref }
  );

  return (
    <header className="relative">
      <div className="sm:min-h-screen md:mt-4 mt-10 grid md:grid-cols-2 gap-8 md:gap-0 container">
        <div className="flex items-center h-screen sm:h-auto">
          <div className="space-y-7">
            <p
              className={`lg:text-7xl leading-[1.1] sm:leading-normal ${montserrat.className} text-6xl font-extrabold`}
            >
              Find The Best <span className="text-primary">Medical</span> Service for you
              <span className="text-primary">.</span>
            </p>

            <p className="leading-relaxed text-gray-500 max-w-xl">
              CareBridge bridges the gap between medical services and AI integration, enhancing healthcare delivery.
            </p>

            <div className="w-fit">
              <Link href={"/account/register"}>
                <Button icon={<LuChevronRight />} variant="black" size="medium">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
