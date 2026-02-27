"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ORGS = [
    {
        name: "Chromatic",
        tagline: "Strategic Advocacy | Policy Reform | Social Impact",
        subtitle: "A strategic advocacy powerhouse driving policy reform through communication.",
        paragraphs: [
            "Founded in 2019, Chromatic is Pakistan's leading digital policy advocacy platform, driving legislative change through strategic communication and stakeholder engagement. Under Shariq M. Khan's leadership, Chromatic has achieved four major legislative victories, advancing reforms in child labor, education, and counter-violent extremism.",
            "Through data-driven campaigns, community mobilization, and creative media, Chromatic has become a recognized force in inclusive development—partnering with global institutions and contributing to 12 UN Sustainable Development Goals.",
        ],
        link: "https://www.trustchromatic.com",
    },
    {
        name: "Incision",
        tagline: "Multimedia Production | Strategic Storytelling | Creative & Effective Solutions",
        subtitle: "One of Pakistan's leading multimedia agencies, crafting stories that influence, inspire, and ignite change.",
        paragraphs: [
            "Incision is a 360° multimedia agency founded by Shariq to craft compelling stories that influence, inspire, and ignite change. With an experienced team of seasoned and award-winning creatives, Incision specializes in developing marketing strategy, concepts, scripts and stories, production, and post, delivering high-impact content across corporate, social, and government sectors.",
            "From branding and marketing solutions to event management, Incision's work has been recognized internationally for its cinematic excellence and strategic depth, serving clients across Pakistan, Qatar, the United Arab Emirates and the United States.",
        ],
        link: "www.incision-films.com",
    },
];

export default function OrganizationsSection() {
    return (
        <section id="organizations" className="relative bg-[#050505] py-28 sm:py-36 px-6 sm:px-10">
            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <p className="text-xs text-white/30 mb-3 tracking-wide">( 02 )</p>
                    <h2 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight mb-20">
                        ORGANIZATIONS
                    </h2>
                </AnimatedSection>

                <div className="space-y-24">
                    {ORGS.map((org, i) => (
                        <AnimatedSection key={org.name} delay={i * 0.1}>
                            <motion.div
                                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 group"
                            >
                                {/* Name + tagline */}
                                <div className="lg:col-span-4">
                                    <h3 className="text-3xl sm:text-4xl font-bold text-white mb-3 tracking-tight">
                                        {org.name}
                                    </h3>
                                    <p className="text-[11px] uppercase tracking-[0.15em] text-white/30 leading-relaxed">
                                        {org.tagline}
                                    </p>
                                </div>

                                {/* Description + link */}
                                <div className="lg:col-span-8">
                                    <p className="text-base text-white/60 font-light mb-6 leading-relaxed">
                                        {org.subtitle}
                                    </p>
                                    {org.paragraphs.map((p, idx) => (
                                        <p key={idx} className="text-[13px] text-white/35 leading-[1.9] mb-4">
                                            {p}
                                        </p>
                                    ))}
                                    <a
                                        href={org.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 mt-4 text-sm text-white/50 hover:text-white transition-colors group/link"
                                    >
                                        <span className="border-b border-white/20 group-hover/link:border-white/60 transition-colors pb-0.5">
                                            Visit Website
                                        </span>
                                        <ArrowUpRight className="h-3.5 w-3.5" />
                                    </a>
                                </div>
                            </motion.div>

                            {/* Divider */}
                            {i < ORGS.length - 1 && (
                                <div className="h-px bg-white/5 mt-24" />
                            )}
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
