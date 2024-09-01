import Appointment from "@/components/UI/Home/appointment";
import Hero from "@/components/UI/Home/hero";
import Partners from "@/components/UI/Home/partners";
import Reviews from "@/components/UI/Home/reviews";
import Services from "@/components/UI/Home/services";

const Page = () => {
  return (
    <>
      <Hero />
      <Services />
      <Appointment />
      <Partners />
      <Reviews />
    </>
  );
};

export default Page;
