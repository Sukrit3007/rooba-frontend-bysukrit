'use client'

import React, { useEffect, useRef } from 'react';
import { Button } from "@nextui-org/button";
import gsap from "gsap";
import { animate, delay, motion, useScroll } from "framer-motion";
import WordAnimation from './ui/WordAnimation';
import SvgAnimation from './ui/SvgAnimation';



const Hero = () => {
 
  return (
    <div id="hero" className="grid md:grid-cols-2 gap-4  md:p-6 h-[50vh]">

        <div className="relative flex ">
          <div className='absolute inset-0 z-10'>
            <WordAnimation/>
          </div>
          <div className='absolute inset-0'>
            <SvgAnimation/>
          </div>
        </div>


        <div className="flex items-center justify-center  ">
          <div className="flex flex-col gap-6 p-4">
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


