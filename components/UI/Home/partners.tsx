"use client";

import Image from "next/image";

const Partners = () => {
  return (
    <>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319" className="lg:-mt-80 md:-mt-56 sm:-mt-48 -mt-24">
        <path
          fill="#000"
          fillOpacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,192C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
        ></path>
      </svg> */}
      <section className="">
        <div className="container space-y-8 py-10">
          <h4 className="text-center md:text-4xl text-2xl text-primary font-extrabold">Our Partners</h4>

          <div className="sm:flex grid grid-cols-3 items-center gap-14 flex-wrap justify-center">
            {Array.from({ length: 8 }).map((_, id) => (
              <Image src={`/images/partners/partner${id + 1}.png`} alt="partner" key={id} width={200} height={200} />
            ))}
          </div>
        </div>
      </section>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 319">
        <path
          fill="#000"
          fill-opacity="1"
          d="M0,160L120,165.3C240,171,480,181,720,192C960,203,1200,213,1320,218.7L1440,224L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg> */}
    </>
  );
};

export default Partners;
