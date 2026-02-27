"use client";

import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const DISCIPLINES = [
    { name: "Strategic Communication & Branding", color: "#E8B400" },
    { name: "Social & Traditional Media Engagement", color: "#7E9E8B" },
    { name: "Audio-Visual Production & Podcasting", color: "#8B8BAE" },
    { name: "Campaign Design & Evaluation", color: "#C97676" },
    { name: "AI-Integrated Messaging Solutions", color: "#E8B400" },
    { name: "Development Sector Communication", color: "#7E9E8B" },
];

export default function TrainingSection() {
    const scrollTo = (id: string) => {
        document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="training" className="relative bg-[#0a0a0a] py-28 sm:py-36 px-6 sm:px-10 overflow-hidden">
            {/* Subtle purple glow */}
            <div
                className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-[0.04] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, #8B8BAE 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                    {/* Left: heading */}
                    <div className="lg:col-span-5">
                        <AnimatedSection>
                            <p className="text-xs text-white/30 mb-3 tracking-wide">( 04 )</p>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                                TRAINING &amp;
                                <br />
                                MENTORSHIP
                            </h2>
                            {/* Accent line */}
                            <div className="mt-8 h-0.5 w-16 bg-gradient-to-r from-[#8B8BAE] to-transparent" />
                        </AnimatedSection>
                    </div>

                    {/* Right: content */}
                    <div className="lg:col-span-7">
                        <AnimatedSection delay={0.1}>
                            <p className="text-base text-white/50 italic font-light mb-8 leading-relaxed">
                                Empowering communicators to lead with clarity, creativity, and impact.
                            </p>
                        </AnimatedSection>

                        <AnimatedSection delay={0.15}>
                            <div className="space-y-5 mb-12">
                                <p className="text-[13px] text-white/40 leading-[1.9]">
                                    Beyond campaigns and strategy, Shariq M Khan is deeply committed to nurturing
                                    the next generation of storytellers, strategists, and advocates. As a mentor
                                    and trainer, he has led high-impact workshops across Pakistan and South Asia,
                                    equipping civil society, government officials, educators, and development
                                    professionals with the tools to communicate with purpose.
                                </p>
                                <p className="text-[13px] text-white/40 leading-[1.9]">
                                    Through Chromatic Trust, Shariq has partnered with leading institutions
                                    including Johns Hopkins Bloomberg School of Public Health, UNODC, NACTA, The
                                    Asia Foundation, GIZ, and Campaign for Tobacco-Free Kids. His sessions blend
                                    hands-on learning with strategic insight, covering everything from podcasting
                                    and media production to AI-integrated messaging and campaign evaluation.
                                </p>
                                <p className="text-[13px] text-white/40 leading-[1.9]">
                                    Participants leave not only with new skills, but with a renewed sense of
                                    mission, ready to shape narratives that drive reform, resilience, and
                                    innovation.
                                </p>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.2}>
                            <h3 className="text-xs uppercase tracking-[0.2em] text-white/25 mb-5">
                                Disciplines Covered
                            </h3>
                            <ul className="space-y-3 mb-12">
                                {DISCIPLINES.map((d, i) => (
                                    <motion.li
                                        key={i}
                                        className="flex items-center gap-4 text-sm text-white/50 group cursor-default"
                                        whileHover={{ x: 6 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <span
                                            className="w-5 h-px transition-all group-hover:w-8"
                                            style={{ backgroundColor: d.color, opacity: 0.7 }}
                                        />
                                        <span className="group-hover:text-white/75 transition-colors">{d.name}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </AnimatedSection>

                        <AnimatedSection delay={0.25}>
                            <button
                                onClick={() => scrollTo("#connect")}
                                className="px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all cursor-pointer relative overflow-hidden group"
                                style={{ background: "linear-gradient(135deg, #8B8BAE, #6a6a8e)", color: "#fff" }}
                            >
                                <span className="relative z-10">Partner for Training Sessions</span>
                                <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </button>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </section>
    );
}
