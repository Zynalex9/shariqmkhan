"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation, type Variants } from "framer-motion";

/* ── Small floating text blocks around the photo ── */
function FloatingLabel({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] as const }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export default function HeroSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const controls = useAnimation();

    useEffect(() => {
        if (isInView) controls.start("visible");
    }, [isInView, controls]);

    /* Stagger variants for the big name letters */
    const nameVariants: Variants = {
        hidden: {},
        visible: {
            transition: { staggerChildren: 0.04, delayChildren: 0.3 },
        },
    };

    const letterVariants: Variants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    const firstName = "Shariq";
    const lastName = "Khan";

    return (
        <section
            ref={sectionRef}
            id="home"
            className="relative w-full h-[calc(100vh-64px)] flex flex-col justify-end overflow-hidden"
            style={{ background: "#050505" }}
        >
            {/* ── Subtle background image (faded cityscape / texture) ── */}
            <div className="absolute inset-0 z-0">
                {/* REPLACE_WITH_BACKGROUND_IMAGE: Use a faded cityscape or dark ambient photo */}
                <Image
                    src="/10.png"
                    alt="Background"
                    fill
                    className="object-cover opacity-[0.07]"
                    sizes="100vw"
                    priority
                />
                {/* Dark gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]/60" />
            </div>

            {/* ── Top bar: small credential text ── */}
            <div className="absolute top-0 left-0 right-0 z-20 px-6 sm:px-10 py-6 flex justify-between items-start">
                <FloatingLabel delay={1.2}>
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50 leading-relaxed">
                        Strategic Communication
                        <br />
                        & Policy Advocacy
                    </p>
                </FloatingLabel>

                <FloatingLabel delay={1.4} className="text-right">
                    <p className="text-[10px] pl-10 sm:text-xs uppercase tracking-[0.2em] text-white/50 leading-relaxed">
                        Media Production
                        <br />
                        Digital Strategy
                    </p>
                </FloatingLabel>

                <FloatingLabel delay={1.6} className="hidden sm:block text-right">
                    <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-white/50">
                        2025
                    </p>
                </FloatingLabel>
            </div>

            {/* ── Main content area ── */}
            <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 pb-6 sm:pb-10">
                {/* The photo + floating labels + giant name stack */}
                <div className="relative flex flex-col items-center">

                    {/* ── Floating credential labels (positioned around the photo) ── */}
                    <div className="relative w-full max-w-7xl mx-auto">

                        {/* Portrait photo — centered */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] as const }}
                            className="relative mx-auto w-[160px] sm:w-[200px] md:w-[240px] lg:w-[270px] z-20"
                        >
                            <div className="relative aspect-[3/4] w-full overflow-hidden">
                                {/* REPLACE_WITH_HERO_PHOTO: Main portrait of Shariq */}
                                <Image
                                    src="/1.png"
                                    alt="Shariq M. Khan — Strategic Communicator & Media Visionary"
                                    fill
                                    className="object-cover grayscale"
                                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 320px, 360px"
                                    priority
                                />
                            </div>
                        </motion.div>

                        {/* ── Floating labels around the photo ── */}
                        {/* Left side */}
                        <FloatingLabel
                            delay={1.0}
                            className="absolute left-0 sm:left-4 lg:left-8 top-[30%] sm:top-[35%] z-10 max-w-[140px] sm:max-w-[180px]"
                        >
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/40 leading-relaxed">
                                Strategic Communicator
                                <br />
                                Policy Advocate
                                <br />
                                Media Visionary
                            </p>
                        </FloatingLabel>

                        {/* Right side */}
                        <FloatingLabel
                            delay={1.1}
                            className="absolute right-0 sm:right-4 lg:right-8 top-[25%] sm:top-[30%] z-10 text-right max-w-[140px] sm:max-w-[180px]"
                        >
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/40 leading-relaxed">
                                Former Advisor
                                <br />
                                Ministry of Information
                                <br />
                                & Broadcasting
                            </p>
                        </FloatingLabel>

                        {/* Bottom right */}
                        <FloatingLabel
                            delay={1.3}
                            className="absolute right-0 sm:right-4 lg:right-8 bottom-[5%] sm:bottom-[10%] z-10 text-right"
                        >
                            <p className="text-[10px] sm:text-xs uppercase tracking-[0.15em] text-white/40 leading-relaxed">
                                Founder, Incision
                                <br />
                                Founder, Chromatic
                            </p>
                        </FloatingLabel>
                    </div>

                    {/* ── Giant Name Typography ── */}
                    {/* The name overlaps the bottom of the photo, creating the editorial effect */}
                    <motion.div
                        variants={nameVariants}
                        initial="hidden"
                        animate={controls}
                        className="relative z-30 -mt-[40px] sm:-mt-[55px] md:-mt-[65px] lg:-mt-[75px] w-full"
                    >
                        {/* First name row */}
                        <div className="flex justify-center items-end overflow-hidden">
                            <motion.h1
                                className="text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-bold leading-[0.85] tracking-[-0.04em] text-white select-none whitespace-nowrap"
                                style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
                            >
                                {firstName.split("").map((char, i) => (
                                    <motion.span
                                        key={`first-${i}`}
                                        variants={letterVariants}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>

                        {/* Last name row — with "M." between */}
                        <div className="flex justify-center items-end overflow-hidden -mt-1 sm:-mt-2">
                            <motion.h1
                                className="text-[14vw] sm:text-[12vw] md:text-[11vw] lg:text-[10vw] font-bold leading-[0.85] tracking-[-0.04em] text-white select-none whitespace-nowrap"
                                style={{ fontFamily: "var(--font-geist-sans), system-ui, sans-serif" }}
                            >
                                {/* Small "M." spacer */}
                                <motion.span
                                    variants={letterVariants}
                                    className="inline-block text-[4.5vw] sm:text-[3.8vw] md:text-[3.2vw] text-white/30 mr-[1vw] align-baseline relative bottom-[1vw]"
                                >
                                    M.
                                </motion.span>
                                {lastName.split("").map((char, i) => (
                                    <motion.span
                                        key={`last-${i}`}
                                        variants={letterVariants}
                                        className="inline-block"
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.h1>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
