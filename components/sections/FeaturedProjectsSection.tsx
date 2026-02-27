"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const PROJECTS = [
    {
        title: "Tobacco Control Advocacy",
        tag: "Policy Reform",
        tagColor: "#E8B400",
        image: "/5.png",
        excerpt:
            "Launched Pakistan's first digital and policy advocacy campaign on tobacco control, engaging directly with the Prime Minister and shifting national policy.",
        full: [
            "It started with a staggering number, 450 lives lost every day to tobacco use in Pakistan. For Shariq M Khan, that wasn't just a statistic. It was a call to action.",
            "Through Chromatic, he launched Pakistan's first digital and policy advocacy campaign on tobacco control—an initiative bold enough to engage directly with the then sitting Prime Minister, and strategic enough to shift national policy.",
            "Over the years, the campaign didn't just raise awareness, it rewrote the rules. A 153% increase in tobacco tax. The elimination of third-tier loopholes. Provincial bans in schools. Even World No Tobacco Day became a nationally recognized event.",
            "Backed by Bloomberg Philanthropies, Chromatic's work has helped reduce tobacco consumption by 36%—a testament to what happens when media, mobilization, and mission align.",
        ],
    },
    {
        title: "Educational Pathways to Peace",
        tag: "Social Reform",
        tagColor: "#7E9E8B",
        image: "/6.png",
        excerpt:
            "A pioneering initiative to examine and transform Pakistan's curriculum, building new foundations for peace through education and policy reform.",
        full: [
            "In Pakistan, textbooks have long been overlooked as tools of influence—quietly shaping worldviews, reinforcing divides, and, at times, fueling intolerance.",
            "Chromatic launched a pioneering initiative to examine and transform Pakistan's curriculum, bringing together policymakers, educators, religious leaders, and civil society to build a new foundation for peace. The campaign didn't just challenge content; it challenged assumptions.",
            "Backed by the European Union and UNODC, and in partnership with NACTA, the initiative focused on curriculum reform, capacity building, and the development of positive narratives. Its goal: to nurture resilience, social cohesion, and a generation of students who learn not just facts—but empathy, tolerance, and critical thinking.",
        ],
    },
    {
        title: "Radio Pakistan Revamp",
        tag: "Public Broadcasting",
        tagColor: "#8B8BAE",
        image: "/7.png",
        excerpt:
            "Led the reinvention of Radio Pakistan with a new brand identity, podcast studio, redesigned website, and multi-platform social media strategy.",
        full: [
            "For decades, Radio Pakistan stood as a symbol of national voice. Historic, revered, but fading into the background of a rapidly evolving media landscape. When the Ministry of Information and Broadcasting sought transformation, they turned to Shariq.",
            "What followed was more than a rebrand, it was a reinvention. Within a compressed timeline, Shariq led the creation of a dedicated podcast studio, launched an inaugural series, and introduced a bold new identity for 2021. The initiative extended far beyond the studio walls: a redesigned website, a multi-platform social media strategy, and a renewed sense of relevance for a public institution long overdue for revival.",
            "The impact was immediate. Commendations from the President, Prime Minister, and senior ministers recognized the effort not just as a media upgrade, but as a strategic leap forward in public broadcasting.",
        ],
    },
    {
        title: "PAF Media Strategy",
        tag: "Defense Comms",
        tagColor: "#C97676",
        image: "/8.png",
        excerpt:
            "Repositioned the Pakistan Air Force as a dynamic, digitally fluent institution through cinematic storytelling and emotionally resonant content.",
        full: [
            "In 2016, the Pakistan Air Force was ready for a shift; not in its mission, but in its message. For decades, its image had been shaped by tradition: stoic, static, and steeped in legacy. But the world was changing, and so was the audience.",
            "Shariq stepped in to lead a communications overhaul that would reposition the PAF as a dynamic, digitally fluent institution. Through Incision, he introduced a bold new strategy, one that traded conventional formats for cinematic storytelling, influencer partnerships, and emotionally resonant content.",
            "Music videos featuring popular artists. Animated features that brought the JF-17 to life. Documentaries that didn't just inform, they inspired. Engagement soared. Perception shifted. And the Air Chief Marshal himself awarded Certificates of Appreciation to the team, recognizing their role in reshaping how the nation sees its air force.",
        ],
    },
];

export default function FeaturedProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<(typeof PROJECTS)[0] | null>(null);

    return (
        <section id="projects" className="relative bg-[#f2f2ed] py-16 sm:py-24 px-6 sm:px-10 overflow-hidden">
            {/* Subtle top accent border */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#E8B400]/0 via-[#E8B400]/50 to-[#E8B400]/0" />

            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <p className="text-xs text-[#050505]/30 mb-3 tracking-wide">( 03 )</p>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
                        <div>
                            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#050505] leading-[0.95] tracking-tight mb-4">
                                FEATURED
                                <br />
                                PROJECTS
                            </h2>
                            <p className="text-sm text-[#050505]/40 max-w-md">
                                Highlights of projects, campaigns and initiatives led by Shariq
                            </p>
                        </div>
                        {/* Color legend */}
                        <div className="flex flex-wrap gap-3 sm:flex-col">
                            {PROJECTS.map((p) => (
                                <div key={p.title} className="flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: p.tagColor }} />
                                    <span className="text-[10px] uppercase tracking-[0.15em] text-[#050505]/40">{p.tag}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* 2×2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {PROJECTS.map((project, i) => (
                        <AnimatedSection key={project.title} delay={i * 0.08}>
                            <motion.div
                                whileHover={{ scale: 1.015 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="group cursor-pointer bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                                onClick={() => setSelectedProject(project)}
                            >
                                {/* Image */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 90vw, 45vw"
                                    />
                                    {/* Color tag overlay */}
                                    <div
                                        className="absolute top-4 left-4 px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-white"
                                        style={{ backgroundColor: project.tagColor }}
                                    >
                                        {project.tag}
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="p-6 sm:p-8 border-t-2" style={{ borderColor: project.tagColor + "40" }}>
                                    <h3 className="text-lg font-semibold text-[#050505] mb-2 tracking-tight">
                                        {project.title}
                                    </h3>
                                    <p className="text-[13px] text-[#050505]/50 leading-[1.7] mb-4">
                                        {project.excerpt}
                                    </p>
                                    <span
                                        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] transition-colors"
                                        style={{ color: project.tagColor }}
                                    >
                                        Read More <ArrowRight className="h-3 w-3" />
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* ── Project Detail Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
                            onClick={() => setSelectedProject(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 40 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="fixed left-1/2 top-1/2 z-50 w-[92vw] max-w-2xl -translate-x-1/2 -translate-y-1/2 bg-[#f5f5f0] overflow-y-auto max-h-[85vh] shadow-2xl"
                        >
                            {/* Colored top stripe */}
                            <div className="h-1 w-full" style={{ backgroundColor: selectedProject.tagColor }} />

                            {/* Close */}
                            <button
                                onClick={() => setSelectedProject(null)}
                                className="absolute right-4 top-5 z-10 p-2 text-[#050505]/40 hover:text-[#050505] transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="h-5 w-5" />
                            </button>

                            {/* Image */}
                            <div className="relative aspect-video w-full overflow-hidden">
                                <Image
                                    src={selectedProject.image}
                                    alt={selectedProject.title}
                                    fill
                                    className="object-cover"
                                    sizes="90vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-8 sm:p-10">
                                <div className="flex items-center gap-3 mb-4">
                                    <span
                                        className="px-2.5 py-1 text-[10px] uppercase tracking-[0.15em] font-semibold text-white"
                                        style={{ backgroundColor: selectedProject.tagColor }}
                                    >
                                        {selectedProject.tag}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-bold text-[#050505] mb-6 tracking-tight">
                                    {selectedProject.title}
                                </h3>
                                {selectedProject.full.map((para, idx) => (
                                    <p key={idx} className="text-[13px] text-[#050505]/60 leading-[1.9] mb-4">
                                        {para}
                                    </p>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
