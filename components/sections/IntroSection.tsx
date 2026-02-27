"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";

export default function IntroSection() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative bg-[#0a0a0a] overflow-hidden">

            {/* ════════════════════════════════
                ROW 1 — three panels
            ════════════════════════════════ */}
            <div className="grid grid-cols-1 md:grid-cols-12">

                {/* Panel 1 — Dark quote panel */}
                <AnimatedSection className="md:col-span-4 bg-[#0a0a0a] border-b border-r border-white/[0.06] p-10 sm:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                    <span className="text-[#E8B400] text-4xl font-serif leading-none select-none">&ldquo;</span>
                    <div>
                        <p className="text-lg sm:text-xl font-medium text-white leading-[1.5] tracking-tight mt-4">
                            When you tell a story with purpose, you don&rsquo;t just inform, you inspire minds to think; to take some kind of action. Whether you&rsquo;re behind the camera or a keyboard, or leading from the front, your narrative becomes a medium for change, shaping perception and driving impact.
                        </p>
                        <p className="mt-6 text-[11px] uppercase tracking-[0.2em] text-white/25">
                            — Shariq M. Khan
                        </p>
                    </div>
                </AnimatedSection>

                {/* Panel 2 — Giant number + text */}
                <AnimatedSection delay={0.08} className="md:col-span-4 bg-[#f2f2ed] border-b border-r border-[#050505]/[0.08] p-10 sm:p-12 flex flex-col justify-between min-h-[280px] sm:min-h-[320px]">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-[#050505]/30">
                        IN A CAREER SPANNING
                    </p>
                    <div>
                        <p className="text-[100px] sm:text-[130px] font-bold leading-none tracking-tighter text-[#050505] select-none">
                            20
                            <span className="text-[#E8B400]">+</span>
                        </p>
                        <p className="text-[13px] text-[#050505]/50 leading-[1.7] mt-2 max-w-xs">
                            Years of shaping Pakistan&rsquo;s media landscape, influencing public policy, and
                            building institutions that define national narratives.
                        </p>
                    </div>
                </AnimatedSection>

                {/* Panel 3 — Photo + bold word overlay */}
                <AnimatedSection delay={0.14} className="md:col-span-4 relative overflow-hidden border-b border-white/[0.06] min-h-[280px] sm:min-h-[320px]">
                    <Image
                        src="/2.png"
                        alt="Shariq M. Khan"
                        fill
                        className="object-cover object-top grayscale opacity-60"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/80 via-transparent to-transparent" />
                    {/* Big overlaid words — editorial style */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8">
                        <p className="text-[52px] sm:text-[68px] font-bold leading-[0.85] tracking-[-0.03em] text-white select-none">
                            VISION.
                            <br />
                            <span className="text-white/30">IMPACT.</span>
                        </p>
                    </div>
                    {/* Colored top accent */}
                    <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#E8B400] to-[#E8B400]/0" />
                </AnimatedSection>
            </div>

            {/* ════════════════════════════════
                ROW 2 — four panels
            ════════════════════════════════ */}
            <div className="grid grid-cols-1 md:grid-cols-12">

                {/* Panel 4 — Bold headline + body */}
                <AnimatedSection delay={0.06} className="md:col-span-5 bg-[#f2f2ed] border-b border-r border-[#050505]/[0.08] p-10 sm:p-12 flex flex-col justify-between min-h-[300px]">
                    <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-[#050505]/30 mb-6">Get to know</p>
                        <h2 className="text-4xl sm:text-5xl font-bold text-[#050505] leading-[0.95] tracking-tight">
                            SHARIQ
                            <br />
                            M.
                            <br />
                            <span className="text-[#E8B400]">KHAN</span>
                        </h2>
                    </div>
                    <p className="text-[13px] text-[#050505]/50 leading-[1.8] mt-6">
                        Shariq is a strategic communicator, policy advocate and media visionary with nearly two decades of experience at the intersection of media, public policy, and strategic advocacy.
                    </p>
                </AnimatedSection>

                {/* Panel 5 — Dark "Are you ready" style question block */}
                <AnimatedSection delay={0.1} className="md:col-span-3 bg-[#111] border-b border-r border-white/[0.06] p-10 sm:p-12 flex flex-col justify-between min-h-[300px]">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-white/20">What he delivers</p>
                    <div>
                        <p className="text-sm text-white/30 leading-relaxed mb-4">
                            Shaping narratives that influence legislation, elevate public discourse, and drive sustainable development.
                        </p>
                        <p className="text-2xl sm:text-3xl font-bold text-white leading-tight tracking-tight">
                            ARE YOU READY TO BUILD SOMETHING LASTING?
                        </p>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button
                            onClick={() => scrollTo("#training")}
                            className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] cursor-pointer relative overflow-hidden group"
                            style={{ background: "linear-gradient(135deg, #E8B400, #C99A00)", color: "#fff" }}
                        >
                            Invite to Speak
                        </button>
                        <button
                            onClick={() => scrollTo("#projects")}
                            className="px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.15em] border border-white/15 text-white/50 hover:border-white/30 hover:text-white/80 transition-all cursor-pointer"
                        >
                            Explore Work
                        </button>
                    </div>
                </AnimatedSection>

                {/* Panel 6 — Second portrait photo */}
                <AnimatedSection delay={0.16} className="md:col-span-4 relative overflow-hidden border-b border-white/[0.06] min-h-[300px]">
                    <Image
                        src="/4.png"
                        alt="Shariq M. Khan"
                        fill
                        className="object-cover grayscale opacity-50"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-[#050505]/60 to-transparent" />
                </AnimatedSection>
            </div>
        </section>
    );
}
