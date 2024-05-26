'use client'

import React from 'react'
import Image from 'next/image';

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import { Section, Container } from "@/components/craft";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import Meteors from './magicui/meteors';

import { motion } from "framer-motion";

const WhyInvest = () => {
  const image = 'https://utfs.io/f/b4d1c9da-be41-4d0d-923d-42f09bd30965-m4lolg.png'

  return (

    <Container>
      <div className='h-full w-full bg-white'>
        {/* HEADING */}
        <div className='relative h-full w-full'>
          <Image
            src={image}
            alt="bg"
            width={1920}
            height={1080}
            className='h-full w-full'
          />
          <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end p-6">
            <div className='text-black text-3xl md:text-6xl font-light'>
              <h1 >
                WHY
              </h1>
              <h1 className="pl-8">
                INVEST?
              </h1>

            </div>
            <p className='text-black text-md md:text-xl max-w-prose text-center'>
              Putting your money in land may provide for better yield and returns making for a steady investment strategy.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className='grid md:grid-cols-2 gap-6 p-4 md:p-12'>
          <div className='flex flex-col gap-6'>
            <InvestCards1 />
            <InvestCards3 />
          </div>
          <div className='flex flex-col gap-6 md:pt-12'>
            <InvestCards2 />
            <InvestCards4 />
          </div>
        </div>


      </div>
    </Container>

  )
}

export default WhyInvest


function Icon2() {
  return (
    <div>
      icon1
    </div>
  )
}

function Icon3() {
  return (
    <div>
      icon1
    </div>
  )
}

function Icon4() {
  return (
    <div>
      icon1
    </div>
  )
}


function InvestCards1() {
  const icon1img1 = {
    initial: { y: 10, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  const icon1img2 = {
    initial: { y: 20, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  const icon1img3 = {
    initial: { y: 50, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <Card
        shadow='none'
        className="flex flex-col gap-12  group bg-[#F9F8F6] hover:bg-[#F5F3EB] hover:drop-shadow-2xl p-8 hover:scale-105 transition duration-700 ease-in-out">

        <CardHeader className=" text-black">
          <div className='h-full w-full'>
            <motion.svg id='icon2svg' width="120" height="100" viewBox="0 0 120 100" fill="none">
              <motion.rect variants={icon1img1} id='icon2' x="4" y="75" width="30" height="25" fill="black" />
              <motion.rect variants={icon1img2} id='icon2' x="42" y="50" width="30" height="50" fill="black" />
              <motion.rect variants={icon1img3} id='icon2' x="80" width="29" height="100" fill="#AEA584" />
            </motion.svg>
          </div>
        </CardHeader>

        <CardBody className='text-black text-xl'>
          <p>The demand for land investments <span className='font-bold'>has never been higher.</span> </p>
        </CardBody>

        <CardFooter>
          <p className='text-[#65604A]'>
            As a collateral impact of Covid-19, weekend homes or a place to escape the bustle of the city are expanding rapidly.
          </p>
        </CardFooter>

      </Card>
    </motion.div>
  )
}

function InvestCards2() {

  const icon2img1 = {
    initial: { y: 0, opacity: 1 },
    animate: { y: [-10, 0], opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  const icon2img2 = {
    initial: { y: 5, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  const icon2img3 = {
    initial: { y: 10, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }
  const icon2img4 = {
    initial: { y: 20, opacity: 1 },
    animate: { y: 0, opacity: 1, transition: { duration: 0.5, spring: true } }
  }

  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <Card
        shadow='none'
        className="flex flex-col gap-12 group  bg-[#F9F8F6] hover:bg-[#F5F3EB] hover:drop-shadow-2xl p-8 hover:scale-105 transition duration-700 ease-in-out">

        <CardHeader className=" text-black">
          <div className='h-full w-full'>
            <motion.svg width="120" height="100" viewBox="0 0 120 100" fill="none" >
              <motion.path variants={icon2img1} d="M60 89L85.1147 92.75H34.8853L60 89Z" fill="black" />
              <motion.path variants={icon2img2} d="M60 79L85.1147 86.5H34.8853L60 79Z" fill="#AEA584" />
              <motion.path variants={icon2img3} d="M60 63L85.1147 75H34.8853L60 63Z" fill="#AEA584" />
              <motion.path variants={icon2img4} d="M60 38L85.1147 56.75H34.8853L60 38Z" fill="#AEA584" />
            </motion.svg>
          </div>
        </CardHeader>

        <CardBody className='text-black text-xl'>
          <p><span className='font-bold'>Prime Land Investment</span> is Your Time-Tested Path to Enduring Prosperity</p>
        </CardBody>

        <CardFooter>
          <p className='text-[#65604A]'>
            Seize the moment with a strategic investment choice — prime land. Historically valued for its enduring worth, land investment beckons as a cornerstone of prosperity.
          </p>
        </CardFooter>

      </Card>
    </motion.div>
  )
}

function InvestCards3() {
  const icon3img1 = {
    initial: { x: 0, opacity: 1 },
    animate: { x: 30, opacity: 0, transition: { duration: 0.5, spring: true } }
  }
  const icon3img2 = {
    initial: { x: 0, opacity: 1 },
    animate: { x: 5, opacity: 0, transition: { duration: 0.2, spring: true } }
  }


  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"
    >
      <Card
        shadow='none'
        className="flex flex-col gap-12  bg-[#F9F8F6] hover:bg-[#F5F3EB] hover:drop-shadow-2xl p-8 hover:scale-105 transition duration-700 ease-in-out">

        <CardHeader className=" text-black">
          <div className='h-full w-full'>
            <svg width="130" height="120" viewBox="0 0 130 120" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g id="Frame 4">
                <motion.path  variants={icon3img1}  d="M60 59.5L30 79.8516L30 39.1484L60 59.5Z" fill="#AEA584" />
                <g id="Group 1">
                  <rect id="Rectangle 889" x="71" y="28" width="40" height="60" fill="black" />
                  <path id="Polygon 2" d="M81 39.5L111 28.5V88L81 79V39.5Z" fill="#AEA584" />
                </g>
                <motion.rect variants={icon3img2} id="Rectangle 890" x="71" y="28" width="40" height="60" fill="#AEA584" />
              </g>
            </svg>

          </div>
        </CardHeader>

        <CardBody className='text-black text-xl'>
          <p><span className='font-bold'>Unlock Tax Benefits</span> with Smart Agricultural Land Investments.</p>
        </CardBody>

        <CardFooter>
          <p className='text-[#65604A]'>
            Gains from selling agricultural land in rural India is subject to tax exemption. Now is the time to seize the opportunity to invest in rural agricultural land and reap the benefits of tax advantages.
          </p>
        </CardFooter>

      </Card>
    </motion.div>
  )
}

function InvestCards4() {
  const icon4img1 = {
    initial: { y: 0, opacity: 1 },
    animate: { y: -7, opacity: 1, transition: { duration: 0.2, delay: 0.4, spring: true } }
  }
  const icon4img2 = {
    initial: { y: 0, opacity: 1 },
    animate: { y: -7, opacity: 1, transition: { duration: 0.2, delay: 0.2, spring: true } }
  }
  const icon4img3 = {
    initial: { y: 0, opacity: 1 },
    animate: { y: -7, opacity: 1, transition: { duration: 0.2, delay: 0.6, spring: true } }
  }
  return (
    <motion.div
      initial="initial"
      animate="initial"
      whileHover="animate"

    >
      <Card
        shadow='none'
        className="flex flex-col gap-12  bg-[#F9F8F6] hover:bg-[#F5F3EB] hover:drop-shadow-2xl p-8 hover:scale-105 transition duration-700 ease-in-out">

        <CardHeader className=" text-black">
          <div className='h-full w-full'>
            <svg width="130" height="120" viewBox="0 0 130 120" fill="none">
              <g id="Frame 4">
                <g id="Group 1">
                  <path id="Polygon 1" d="M65.3183 70H101L101 50H65.3183L45 59.4592L65.3183 70Z" fill="#AEA584" />
                  <motion.path variants={icon4img1} id="Polygon 2" d="M64.6817 50L29 50L29 70L64.6817 70L85 60.5408L64.6817 50Z" fill="#AEA584" />
                </g>
                <path id="Polygon 3" d="M29 83H101L101 103H29V83Z" fill="black" />
                <motion.path variants={icon4img2} d="M45.3899 83L63 103H29.225L29.225 83H45.3899Z" fill="black" />
                <g id="Group 2">
                  <rect id="Rectangle 889" x="65" y="20" width="36" height="20" fill="#AEA584" />
                  <motion.rect variants={icon4img3} x="29" y="20" width="36" height="20" fill="#AEA584" />
                </g>
              </g>
            </svg>
          </div>
        </CardHeader>

        <CardBody className='text-black text-xl'>
          <p>Own plots along the thriving <span className='font-bold'>Delhi-Bombay Expressway</span></p>
        </CardBody>

        <CardFooter>
          <p className='text-[#65604A]'>
            The Delhi NCR & Sohna have established themselves as crucial real estate markets. The Delhi-Mumbai Expressway is expected to provide a solid push to real estate development in areas towards Rajasthan, boosting demand for land, residential & commercial properties.
          </p>
        </CardFooter>

      </Card>
    </motion.div>
  )
}

