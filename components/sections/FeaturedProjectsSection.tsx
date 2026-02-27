"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { X } from "lucide-react";

/* ─────────────────────────────────────────
   Project data
───────────────────────────────────────── */
const PROJECTS = [
    {
        title: "Tobacco Control Advocacy",
        tag: "Policy Reform",
        tagColor: "#E8B400",
        image: "/5.png",
        excerpt:
            "Launched Pakistan's first digital and policy advocacy campaign on tobacco control, engaging directly with the Prime Minister and shifting national policy.",
        full: [
            "It started with a staggering number — 450 lives lost every day to tobacco use in Pakistan. For Shariq M Khan, that wasn't just a statistic. It was a call to action.",
            "Through Chromatic, he launched Pakistan's first digital and policy advocacy campaign on tobacco control — an initiative bold enough to engage directly with the then-sitting Prime Minister, and strategic enough to shift national policy.",
            "Over the years, the campaign didn't just raise awareness, it rewrote the rules. A 153% increase in tobacco tax. The elimination of third-tier loopholes. Provincial bans in schools. Even World No Tobacco Day became a nationally recognised event.",
            "Backed by Bloomberg Philanthropies, Chromatic's work has helped reduce tobacco consumption by 36% — a testament to what happens when media, mobilisation, and mission align.",
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
            "In Pakistan, textbooks have long been overlooked as tools of influence — quietly shaping worldviews, reinforcing divides, and, at times, fuelling intolerance.",
            "Chromatic launched a pioneering initiative to examine and transform Pakistan's curriculum, bringing together policymakers, educators, religious leaders, and civil society to build a new foundation for peace. The campaign didn't just challenge content; it challenged assumptions.",
            "Backed by the European Union and UNODC, and in partnership with NACTA, the initiative focused on curriculum reform, capacity building, and the development of positive narratives. Its goal: to nurture resilience, social cohesion, and a generation of students who learn not just facts — but empathy, tolerance, and critical thinking.",
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
            "What followed was more than a rebrand — it was a reinvention. Within a compressed timeline, Shariq led the creation of a dedicated podcast studio, launched an inaugural series, and introduced a bold new identity for 2021. The initiative extended far beyond the studio walls: a redesigned website, a multi-platform social media strategy, and a renewed sense of relevance for a public institution long overdue for revival.",
            "The impact was immediate. Commendations from the President, Prime Minister, and senior ministers recognised the effort not just as a media upgrade, but as a strategic leap forward in public broadcasting.",
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
            "In 2016, the Pakistan Air Force was ready for a shift — not in its mission, but in its message. For decades, its image had been shaped by tradition: stoic, static, and steeped in legacy. But the world was changing, and so was the audience.",
            "Shariq stepped in to lead a communications overhaul that would reposition the PAF as a dynamic, digitally fluent institution. Through Incision, he introduced a bold new strategy — one that traded conventional formats for cinematic storytelling, influencer partnerships, and emotionally resonant content.",
            "Music videos featuring popular artists. Animated features that brought the JF-17 to life. Documentaries that didn't just inform — they inspired. Engagement soared. Perception shifted. And the Air Chief Marshal himself awarded Certificates of Appreciation to the team, recognising their role in reshaping how the nation sees its air force.",
        ],
    },
];

/* ─────────────────────────────────────────
   Individual project row
───────────────────────────────────────── */
function ProjectRow({
    project,
    index,
    onOpen,
}: {
    project: (typeof PROJECTS)[0];
    index: number;
    onOpen: () => void;
}) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-80px" });
    const isEven = index % 2 === 0;

    const rowVariants = {
        hidden: { opacity: 0, y: 48 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.75, ease: [0.25, 0.1, 0.25, 1] as const },
        },
    };

    return (
        <>
            {/* Divider */}
            {index > 0 && (
                <div className="w-full h-px bg-white/[0.07]" />
            )}

            <motion.div
                ref={ref}
                variants={rowVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className={`flex flex-col ${isEven ? "md:flex-row" : "md:flex-row-reverse"} gap-0 min-h-[480px] sm:min-h-[520px]`}
            >
                {/* ── Text column ── */}
                <div className="flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 md:py-20 md:w-1/2 lg:w-[48%]">
                    {/* Tag */}
                    <p
                        className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-5"
                        style={{ color: project.tagColor }}
                    >
                        {project.tag}
                    </p>

                    {/* Title */}
                    <h3 className="text-4xl sm:text-5xl lg:text-[52px] font-bold leading-[0.95] tracking-tight text-white mb-6 uppercase">
                        {project.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-[15px] sm:text-[16px] text-white/50 leading-[1.75] max-w-md mb-10">
                        {project.excerpt}
                    </p>

                    {/* View More pill button */}
                    <motion.button
                        onClick={onOpen}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.97 }}
                        transition={{ type: "spring", stiffness: 400, damping: 20 }}
                        className="self-start px-7 py-3 rounded-full border border-white/20 text-[11px] uppercase tracking-[0.18em] font-semibold text-white hover:bg-white hover:text-[#050505] hover:border-white transition-colors duration-300 cursor-pointer"
                    >
                        View More
                    </motion.button>
                </div>

                {/* ── Image column ── */}
                <div className="relative md:w-1/2 lg:w-[52%] min-h-[320px] md:min-h-0 overflow-hidden">
                    {/* Inner padding wrapper to give rounded-corner "framed" image effect */}
                    <div className="absolute inset-4 sm:inset-6 md:inset-8 rounded-2xl overflow-hidden">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                            sizes="(max-width: 768px) 100vw, 52vw"
                        />
                        {/* Subtle gradient overlay at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/30 via-transparent to-transparent" />
                    </div>
                </div>
            </motion.div>
        </>
    );
}

/* ─────────────────────────────────────────
   Modal
───────────────────────────────────────── */
function ProjectModal({
    project,
    onClose,
}: {
    project: (typeof PROJECTS)[0];
    onClose: () => void;
}) {
    return (
        <AnimatePresence>
            {/* Backdrop */}
            <motion.div
                key="backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Panel */}
            <motion.div
                key="panel"
                initial={{ opacity: 0, scale: 0.92, y: 32 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 32 }}
                transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2
                           w-[90vw] max-w-[1300px] max-h-[90vh]
                           bg-[#0d0d0d] border border-white/[0.08]
                           rounded-[32px] overflow-hidden flex flex-col"
                style={{ boxShadow: "0 32px 80px rgba(0,0,0,0.7)" }}
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-20 flex items-center justify-center
                               w-10 h-10 rounded-full border border-white/15 text-white/50
                               hover:text-white hover:border-white/40 transition-colors duration-200 cursor-pointer"
                    aria-label="Close"
                >
                    <X className="w-4 h-4" />
                </button>

                {/* Scrollable content */}
                <div className="overflow-y-auto flex-1">
                    {/* Hero image */}
                    <div className="relative w-full aspect-[16/7] flex-shrink-0">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="90vw"
                        />
                        {/* Gradient fade at bottom */}
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/20 to-transparent" />
                    </div>

                    {/* Text content */}
                    <div className="px-8 sm:px-12 lg:px-16 pb-14 -mt-10 relative z-10">
                        {/* Tag */}
                        <p
                            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-4"
                            style={{ color: project.tagColor }}
                        >
                            {project.tag}
                        </p>

                        {/* Title */}
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-8 uppercase">
                            {project.title}
                        </h2>

                        {/* Accent line */}
                        <div
                            className="w-12 h-0.5 mb-10 rounded-full"
                            style={{ backgroundColor: project.tagColor }}
                        />

                        {/* Body paragraphs */}
                        <div className="space-y-5 max-w-3xl">
                            {project.full.map((para, idx) => (
                                <p
                                    key={idx}
                                    className="text-[15px] sm:text-[16px] text-white/55 leading-[1.85]"
                                >
                                    {para}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}

/* ─────────────────────────────────────────
   Main Section
───────────────────────────────────────── */
export default function FeaturedProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<
        (typeof PROJECTS)[0] | null
    >(null);

    const headerRef = useRef<HTMLDivElement>(null);
    const headerInView = useInView(headerRef, { once: true, margin: "-60px" });

    return (
        <section
            id="projects"
            className="relative bg-[#050505] py-20 sm:py-28 overflow-hidden"
        >
            {/* Subtle top border line */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="mx-auto max-w-7xl px-6 sm:px-10">
                {/* ── Section header ── */}
                <motion.div
                    ref={headerRef}
                    initial={{ opacity: 0, y: 36 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="mb-16 sm:mb-20"
                >
                    <p className="text-[10px] text-white/20 mb-3 tracking-[0.25em] uppercase">
                        ( 03 )
                    </p>
                    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                            FEATURED
                            <br />
                            <span className="text-white/25">PROJECTS</span>
                        </h2>
                        <p className="text-[13px] text-white/30 max-w-xs sm:text-right leading-relaxed">
                            Highlights of campaigns, initiatives &amp; reforms led by Shariq M. Khan
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* ── Project rows (full-width, no max-w constraint) ── */}
            <div className="mx-auto max-w-7xl px-0 sm:px-4">
                {PROJECTS.map((project, i) => (
                    <ProjectRow
                        key={project.title}
                        project={project}
                        index={i}
                        onOpen={() => setSelectedProject(project)}
                    />
                ))}
            </div>

            {/* Subtle bottom border line */}
            <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            {/* ── Modal ── */}
            <AnimatePresence>
                {selectedProject && (
                    <ProjectModal
                        project={selectedProject}
                        onClose={() => setSelectedProject(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
}
