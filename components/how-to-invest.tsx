'use client'

import React, { useState } from 'react';
import { MoveRight, Plus } from "lucide-react";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from '@nextui-org/button';
import Image from 'next/image';

const HowToInvest = () => {
    const defaultContent = "Investing in private markets facilitates portfolio diversification, mitigating risks associated with public markets.";
    const [selectedValue, setSelectedValue] = useState("item-1");

    const handleAccordionChange = (value:any) => {
        setSelectedValue(value);
    };

    return (
        <div className='grid md:grid-cols-2 gap-4 w-full p-6 mb-24 bg-white text-black'>
            <div className='flex flex-col gap-12 h-full w-full '>
                <div className='text-4xl md:text-6xl '>
                    <h1>
                        How to <br />
                    </h1>
                    <h1 className='flex gap-4 items-center italic pl-12'>
                        Invest<MoveRight />
                    </h1>
                </div>

                <Accordion type="single" collapsible onValueChange={handleAccordionChange} >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            <h1 className='text-lg font-semibold'>
                                Create Account
                            </h1>
                        </AccordionTrigger>
                        <AccordionContent>
                            <div className='flex flex-col gap-4'>
                                <p>{defaultContent}</p>
                                <div>
                                    <Button radius="none" endContent={<MoveRight />} className='bg-white border border-black text-black'>
                                        Start Now
                                    </Button>
                                </div>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            <h1 className='text-lg font-semibold'>
                                Discover Opportunities
                            </h1>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>{defaultContent}</p>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>
                            <h1 className='text-lg font-semibold'>
                                Invest with Flexibility
                            </h1>
                        </AccordionTrigger>
                        <AccordionContent>
                            <p>{defaultContent}</p>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className='md:p-20'>
            {selectedValue === "" && (
                    <div className='flex items-center justify-center p-12'>
                        <div className='relative w-full h-full' key={'1'}>
                            <Image
                                src='https://utfs.io/f/ea47b087-def9-4c6a-b86c-afd8bcbcb314-ljete2.png'
                                alt='Create Account Image'
                                width={600}
                                height={500}
                                className='h-full w-full'
                            />
                            <div className='absolute -top-16 -right-16'>
                                <Image
                                    src='https://utfs.io/f/05b19396-8d46-44ef-925f-f743013f4f3b-6t1cit.png'
                                    alt='Create Account Image Overlay'
                                    width={600}
                                    height={500}
                                    className='h-full w-full'
                                />
                            </div>
                        </div>
                    </div>
                )}
                {selectedValue === "item-1" && (
                    <div className='flex items-center justify-center p-12'>
                        <div className='relative w-full h-full' key={'1'}>
                            <Image
                                src='https://utfs.io/f/ea47b087-def9-4c6a-b86c-afd8bcbcb314-ljete2.png'
                                alt='Create Account Image'
                                width={600}
                                height={500}
                                className='h-full w-full'
                            />
                            <div className='absolute -top-16 -right-16'>
                                <Image
                                    src='https://utfs.io/f/05b19396-8d46-44ef-925f-f743013f4f3b-6t1cit.png'
                                    alt='Create Account Image Overlay'
                                    width={600}
                                    height={500}
                                    className='h-full w-full'
                                />
                            </div>
                        </div>
                    </div>
                )}
                {selectedValue === "item-2" && (
                    <div className='flex items-center justify-center p-12'>
                        <div className='w-full h-full'>
                            <Image
                                src='https://utfs.io/f/5977b604-8300-405f-8bab-afa44b7d52c7-ljete1.png'
                                alt='Discover Opportunities Image'
                                width={1000}
                                height={500}
                                className='h-full w-full'
                            />
                        </div>
                    </div>
                )}
                {selectedValue === "item-3" && (
                    <div className='flex items-center justify-center p-12'>
                        <div className='relative w-full h-full'>
                            <Image
                                src='https://utfs.io/f/745242d5-db77-4355-b15b-df0bef87da3b-ljete0.png'
                                alt='Invest with Flexibility Image'
                                width={1000}
                                height={500}
                                className='h-full w-full'
                            />
                            <div className='absolute top-10 -right-4 z-10'>
                                <Image
                                    src='https://utfs.io/f/ba543f19-bbfe-40c2-bfe7-ec96c1a17830-f1fk8u.png'
                                    alt='Invest with Flexibility Image Overlay'
                                    width={600}
                                    height={500}
                                    className='h-full w-full'
                                />
                            </div>
                            <div className='absolute top-0 -right-16'>
                                <Image
                                    src='https://utfs.io/f/b35e015d-bfc8-4d5d-b9d7-a0eb6a94ee14-f1fk8t.png'
                                    alt='Invest with Flexibility Image Overlay 2'
                                    width={600}
                                    height={500}
                                    className='h-full w-full'
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default HowToInvest;
