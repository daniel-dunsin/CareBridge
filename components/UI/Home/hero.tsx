"use client";
import Button from "@/components/Common/Button";
import Link from "next/link";
import { LuChevronRight } from "react-icons/lu";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { montserrat } from "@/lib/utils/fonts";
import ThreeDotsLoader from "@/components/Common/Loaders/three-dots";
import dynamic from "next/dynamic";
import useDimension from "@/lib/hooks/useDimension";

const EarthModelView = dynamic(() => import("@/components/Common/Models/earth"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full border-8 flex items-center justify-center">
      <ThreeDotsLoader />
    </div>
  ),
});

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.timeline().from(".hero-up", { opacity: 0, y: "100%", stagger: 0.2 });
    },
    { scope: ref }
  );

  const { width } = useDimension();

  return (
    <header className="relative">
      <div className="sm:min-h-screen mt-10 grid md:grid-cols-2 gap-8 md:gap-0 container">
        <div className="flex items-center h-screen sm:h-auto">
          <div className="space-y-7">
            <p
              className={`lg:text-7xl leading-[1.1] sm:leading-normal ${montserrat.className} text-6xl font-extrabold`}
            >
              Find The Best <span className="text-primary">Medical</span> Service for you
              <span className="text-primary">.</span>
              {/* AI-Driven Healthcare: Find the Right Care for You. */}
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

        {width > 768 && <EarthModelView />}
      </div>
    </header>
  );
};

export default Hero;
