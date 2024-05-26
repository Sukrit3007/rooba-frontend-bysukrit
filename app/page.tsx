import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import Graph from "@/components/graph";
import WhyInvest from "@/components/why-invest";
import HowToInvest from "@/components/how-to-invest";
import Gradient from "@/components/gradient";
import Hero from "@/components/hero";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-6 ">

      <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <div className="flex flex-col gap-24 py-8 md:py-10">
          <Hero/>
          <Graph/> 
          <Gradient/>
        </div>
      </div>

     <div className="w-full bg-white">
        <WhyInvest/>
        <div className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
          <div className="py-8 md:py-10">
            <HowToInvest/>
          </div>
        </div>
     </div>
     
    </section>
  );
}
