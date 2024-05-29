'use client'

import Graph from "@/components/graph";
import WhyInvest from "@/components/why-invest";
import HowToInvest from "@/components/how-to-invest";
import Gradient from "@/components/gradient";
import Hero from "@/components/hero";
import { useEffect } from "react";
import Main from "@/components/main";

export default function Home() {
  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();
      }
    )()
  }, [])

  return (
    <section className="flex flex-col items-center justify-center gap-6 ">


      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">

        <div className="flex flex-col gap-24 py-8 md:py-10">
          <Main/>
          {/* <Hero /> */}
          <Graph />
          <Gradient />
        </div>
      </div>

      <div className="w-full bg-white">
        <WhyInvest />
        <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          <div className="py-8 md:py-10">
            <HowToInvest />
          </div>
        </div>
      </div>

    </section>
  );
}
