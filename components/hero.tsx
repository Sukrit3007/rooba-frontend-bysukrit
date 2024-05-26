"use client";

import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { animate, delay, motion, useScroll } from "framer-motion";


const Hero = () => {
  const buttonWords = [
    <h1>Create an Account</h1>, 
    <h1 className="font-semibold">Create an Account</h1> 
  ];

  return (
    <div className="grid md:grid-cols-2 gap-4 border border-red-400 md:p-6">

      <div className="relative min-h-96 p-4 overflow-visible">
        
      </div>

      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-6 p-12">
          <h1 className="text-2xl md:text-3xl font-semibold">
            Pave your way to Alpha Gains and make the most of your investments.
          </h1>
          <p className="text-sm text-default-400">Start your journey now.</p>
          <div>
            <motion.div
            
            className="w-fit py-2 px-4 bg-black text-white border border-white font-light"
            >
              <motion.h1
              
              >
                Create an Account
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;


