"use client";
import { cn } from "@/utils/cn";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)

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
    }, []);



    const [isSafari, setIsSafari] = useState(false);
    useEffect(() => {
        setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
    }, []);


    // ANIMATION
    const first = useRef(null)
    const second = useRef(null)
    const third = useRef(null)
    const fourth = useRef(null)
    const fifth = useRef(null)

    useEffect(() => {
        const el3 = third.current
        const el4 = fourth.current

        gsap.fromTo(el3,{
            x:10,
            y:10,
            opacity:1
        },{
            x:-200,
            y:-200,
            scale:1,
            backgroundColor: `rgba(${fifthColor}, 1)`,
            opacity:0,
            duration:4,
            delay:1,
            scrollTrigger:{
                trigger:'#main',
                start:'top 40%',
                scrub:true
            }
        })

        gsap.fromTo(el4,{
            x:-100,
            y:-100,
            duration:2,
        },{
            x:0,
            y:0,
            opacity:0.5,
            duration:6,
            delay:2,
            scrollTrigger:{
                trigger:'#main',
                start:'top 50%',
                scrub:true
            }
        })
      
    }, [])
    

    return (
        <div
            id="#main"
            className={cn(
                "h-[600px] w-screen relative overflow-hidden top-0 left-0 ",
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
                

                <div
                    id="third"
                    ref={third}
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%+400px)]`,
                        `animate-third`,
                        `opacity-100`
                    )}
                ></div>

                <div
                    ref={fourth}
                    className={cn(
                        `absolute [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat]`,
                        `[mix-blend-mode:var(--blending-value)] w-[var(--size)] h-[var(--size)] top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)]`,
                        `[transform-origin:calc(50%-200px)]`,
                        `animate-fourth`,
                        `opacity-70`
                    )}
                ></div>

            </div>
        </div>
    );
};
