import Hero from "@/components/UI/Shop/hero";
import MedicinesDisplay from "@/components/UI/Shop/products";
import React from "react";

const Page = () => {
  return (
    <>
      <Hero />
      <main>
        <MedicinesDisplay />
      </main>
    </>
  );
};

export default Page;
