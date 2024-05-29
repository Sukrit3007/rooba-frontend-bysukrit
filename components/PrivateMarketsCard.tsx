'use client'
import { Button, Card, CardBody, CardFooter } from "@nextui-org/react";
import SvgAnimation from "./ui/SvgAnimation";
import { motion } from "framer-motion";

export default function PrivateMarketsCard() {
    return (
        <Card className=" bg-black mt-16">
            <CardBody >
                <motion.h1                 
                    className="pointer-events-non whitespace-pre-wrap z-10 bg-gradient-to-b from-[#4e54ff] via-[#eb7aff] to-[#e0e0e0] bg-clip-text text-right text-2xl lg:text-4xl font-bold leading-none tracking-tighter text-transparent">
                    Private Markets<br/><span className="text-2xl  lg:text-5xl">Made Accessible</span>
                </motion.h1>
                <div className="absolute inset-0">
                    <SvgAnimation />
                </div>
            </CardBody>
        </Card>
    )
}