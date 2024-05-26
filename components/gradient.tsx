'use client'

import React, { useEffect, useRef } from 'react'
import { Section, Container } from "@/components/craft";
import { Button } from '@nextui-org/button';
import TextRevealByWord from './magicui/text-reveal';
import { GradientAnimation } from './magicui/gradient-animation';


const Gradient = () => {

  return (
    <Section>
      <Container className='relatice'>
        <div className='sticky top-0 flex flex-col gap-4 md:p-24'>

          <div className='flex items-center justify-center'>
            <GradientAnimation />
          </div>

          <div className='w-full flex items-center justify-center'>
            <TextRevealByWord
              text='Empower your financing strategies with tomorrow’s revolutionary technology. Our user-friendly platform will give your investors the power to unlock de-fi capabilities hence boosting the liquidity of your fund by large margins. '
            />
          </div>

          <div className='w-full  flex flex-col items-start justify-center gap-4'>
            <p className='text-xs font-normal text-default-400'>
              How would you want to start {" "}
              <span className='underline'>
                creating your financial instrument?
              </span>
            </p>
            <div className='flex flex-wrap gap-2'>
              <Button radius='none' className='bg-[#4375FB] text-white'>
                Talk to Us
              </Button>
              <Button radius='none' className='bg-black text-white border border-white'>
                Book a Demo
              </Button>
            </div>
          </div>


        </div>
      </Container>
    </Section>
  )
}

export default Gradient

