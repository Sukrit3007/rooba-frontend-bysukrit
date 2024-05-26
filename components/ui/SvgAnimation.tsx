'use client'
import React from 'react'
import { motion } from "framer-motion";

const SvgAnimation = () => {
    const transition = { duration: 1.5, yoyo: Infinity, ease: "easeInOut" }
    return (
        <motion.svg id='main' width="full" height="full" viewBox="0 0 130 120" fill="none" className='overflow-visible'>
            <g id='group'>

                {/* Circle 1 */}
                <motion.g
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 20, opacity: 0 }}
                    transition={{ duration: 3, delay: 3, staggerChildren: 0.4, ease: 'linear', }}
                >
                    <motion.circle id="Ellipse 1" cx="65.5" cy="57.5" r="42" stroke="#4375FB" stroke-width="0.1"
                        initial={{ pathLength: 0, }} animate={{ pathLength: 1, }} transition={{ duration: 2, delay: 1, ease: 'easeInOut' }} />
                </motion.g>

                {/* Circle 2 */}
                <motion.g
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 20, opacity: 0 }}
                    transition={{ duration: 2.5, delay: 3.3, staggerChildren: 0.4, ease: 'linear', }}
                >
                    <motion.circle id="Ellipse 2" cx="65.5" cy="57.5" r="42" stroke="#4375FB" stroke-width="0.1"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, ease: 'easeInOut' }} />

                </motion.g>

                {/* Circle 3 */}
                <motion.g
                    initial={{ scale: 1, opacity: 1 }}
                    animate={{ scale: 20, opacity: 0 }}
                    transition={{ duration: 2.5, delay: 3.6, staggerChildren: 0.4, ease: 'linear', }}
                >
                    <motion.circle id="Ellipse 3" cx="65.5" cy="57.5" r="42" stroke="#4375FB" stroke-width="0.1"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 1, ease: 'easeInOut' }} />
                </motion.g>


                <motion.g
                    initial={{ x: 0, opacity: 1 }}
                    animate={{ x: 1000, opacity: 0 }}
                    transition={{ duration: 2.5, delay: 1.5, ease: 'linear' }}
                    className=''
                >
                    <motion.line id="Line 1" x1="52" y1="55.5" x2="85" y2="55.5" stroke="#4375FB" stroke-width="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transition} />
                    <motion.line id="Line 2" x1="80.4797" y1="59.7476" x2="84.8311" y2="55.6166" stroke="#4375FB" stroke-width="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transition} />
                    <motion.line id="Line 3" x1="81.2729" y1="51.5411" x2="85.4451" y2="55.853" stroke="#4375FB" stroke-width="0.3" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={transition} />
                </motion.g>
            </g>
        </motion.svg>
    )
}

export default SvgAnimation
