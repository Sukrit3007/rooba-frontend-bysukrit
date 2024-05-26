'use client'

import React from 'react'
import { motion, AnimatePresence } from "framer-motion";

const WordAnimation = () => {
    const text = "Private Markets";
    const gradual = {
        hidden: { opacity: 0, y: -20 },
        visible: { opacity: 1, y: 0 },
    };

    const sentence = "Made";
    const wordVariants = {
        hidden: { opacity: 0 },
        visible: (i: any) => ({ y: 0, opacity: 1, transition: { delay: i * 0.1 } }),
    };
    const words = sentence.split(" ");

    return (
        <div className='relative h-full w-full overflow-hidden'>

            {/* Private Markets */}
            <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -1000, opacity: 1 }}
                transition={{ duration: 2, delay: 3 }}
                className="absolute bottom-12 left-6 flex items-center justify-start "
            >
                <AnimatePresence>
                    {text.split("").map((char, i) => (
                        <motion.h1
                            key={i}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                            variants={gradual}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm  md:leading-[5rem] text-purple-300"
                        >
                            {char === " " ? <span>&nbsp;</span> : char}
                        </motion.h1>
                    ))}
                </AnimatePresence>
            </motion.div>



            {/* Made Accessiible */}
            <motion.div
                initial={{ x: 1000, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 2, delay: 4 }}
                className="absolute left-1/4 bottom-36 flex space-x-2 items-center justify-center "
            >
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] text-purple-200 "
                >
                    {words.map((word, i) => (
                        <motion.span key={word} variants={wordVariants} custom={i}>
                            {word}{" "}
                        </motion.span>
                    ))}
                </motion.h1>
                
                <motion.h1
                    initial={{y:1000, opacity:0.5}}
                    animate={{y:0, opacity:1}}
                    transition={{duration: 3, delay: 4, ease:'easeIn'}}
                    className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:leading-[5rem] inline-block text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 "
                >
                    {/* <span>{" "}</span> */}
                    <motion.span variants={wordVariants}>
                    {" "} Accessible
                    </motion.span>
                </motion.h1>
            </motion.div>
        </div>
    )
}

export default WordAnimation
