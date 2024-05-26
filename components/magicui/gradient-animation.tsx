"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const GradientAnimation = ({
    firstColor = "18, 113, 255",
    secondColor = "221, 74, 255",
    thirdColor = "48, 255, 255",
    fourthColor = "28, 21, 255",
    fifthColor = "0, 0, 0",
    pointerColor = "140, 100, 255",
    size = "80%",
    blendingValue = "hard-light",
    children,
    className,
    containerClassName,
}: {
    gradientBackgroundStart?: string;
    gradientBackgroundEnd?: string;
    firstColor?: string;
    secondColor?: string;
    thirdColor?: string;
    fourthColor?: string;
    fifthColor?: string;
    pointerColor?: string;
    size?: string;
    blendingValue?: string;
    children?: React.ReactNode;
    className?: string;
    containerClassName?: string;
}) => {

    useEffect(() => {
        document.body.style.setProperty("--first-color", firstColor);
        document.body.style.setProperty("--second-color", secondColor);
        document.body.style.setProperty("--third-color", thirdColor);
        document.body.style.setProperty("--fourth-color", fourthColor);
        document.body.style.setProperty("--fifth-color", fifthColor);
        document.body.style.setProperty("--pointer-color", pointerColor);
        document.body.style.setProperty("--size", size);
        document.body.style.setProperty("--blending-value", blendingValue);
    }, [firstColor, secondColor, thirdColor, fourthColor, fifthColor, pointerColor, size, blendingValue]);

    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);

    const targetRef = useRef<any>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end center"],
    });

    const opacityThird = useTransform(scrollYProgress, [0.2, 0.8], [1, 0.2]);
    const xThird = useTransform(scrollYProgress, [0, 1], [10, -100]);
    const yThird = useTransform(scrollYProgress, [0, 1], [500, -200]);
    const scaleThird = useTransform(scrollYProgress, [0, 1], [0.4, 1]);
    const backgroundColorThird = useTransform(scrollYProgress, [0, 1], [`rgba(${thirdColor}, 0.8)`, `rgba(${fifthColor}, 0.7)`]);

    const opacityFourth = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
    const xFourth = useTransform(scrollYProgress, [0, 1], [-100, 0]);
    const yFourth = useTransform(scrollYProgress, [0, 1], [-100, 0]);

    return (
        <div
            ref={targetRef}
            className={cn(
                "h-[600px] w-screen relative overflow-hidden top-0 left-0",
                containerClassName
            )}
        >
            <svg className="hidden">
                <defs>
                    <filter id="blurMe">
                        <feGaussianBlur
                            in="SourceGraphic"
                            stdDeviation="10"
                            result="blur"
                        />
                        <feColorMatrix
                            in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
                            result="goo"
                        />
                        <feBlend in="SourceGraphic" in2="goo" />
                    </filter>
                </defs>
            </svg>
            <div className={cn("", className)}>{children}</div>
            <div
                id="main"
                className={cn(
                    "gradients-container h-full w-full blur-lg",
                    isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
                )}
            >
                <motion.div
                    id="third"
                    style={{
                        x: xThird,
                        y: yThird,
                        opacity: opacityThird,
                        scale: scaleThird,
                        backgroundColor: backgroundColorThird,
                    }}
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+400px)]`,
                        `animate-third`,
                        `opacity-100`,
                        'rounded-full'
                    )}
                ></motion.div>

                <motion.div
                    style={{
                        x: xFourth,
                        y: yFourth,
                        opacity: opacityFourth,
                    }}
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-fourth`,
                        `opacity-70`
                    )}
                ></motion.div>
            </div>
        </div>
    );
};
