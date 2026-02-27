"use client";

import AnimatedSection from "@/components/AnimatedSection";

const PILLARS = [
    {
        title: "Tobacco Control.",
        body: "Pakistan's first digital advocacy campaign. A 153% tax increase, school bans, and a 36% drop in consumption—backed by Bloomberg Philanthropies.",
        num: "01",
    },
    {
        title: "Pathways to Peace.",
        body: "A curriculum reform initiative backed by the EU and UNODC, nurturing resilience and social cohesion in Pakistani classrooms.",
        num: "02",
    },
    {
        title: "Radio Pakistan.",
        body: "Reinvented a national institution—podcast studio, new identity, multi-platform strategy—commended by the President and Prime Minister.",
        num: "03",
    },
    {
        title: "PAF Media.",
        body: "Repositioned the Air Force through cinematic storytelling, influencer content, and animated films. Engagement soared. Perception shifted.",
        num: "04",
    },
    {
        title: "Training & Mentorship.",
        body: "High-impact workshops across Pakistan and South Asia—partnered with Johns Hopkins, UNODC, GIZ, and The Asia Foundation.",
        num: "05",
    },
];

export default function CampaignImpactSection() {
    return (
        <section className="relative bg-[#f2f2ed] py-14 sm:py-24 px-6 sm:px-10 overflow-hidden">
            <div className="mx-auto max-w-7xl">

                {/* ── Top bar: section number + tag ── */}
                <AnimatedSection>
                    <div className="flex items-start justify-between mb-14">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-background/30">Selected Impact</span>
                        <span className="text-[11px] uppercase tracking-[0.2em] text-background/30 hidden sm:block">
                            &#9679; Strategic. Impactful. Lasting.
                        </span>
                    </div>
                </AnimatedSection>

                {/* ── Big centered heading ── */}
                <AnimatedSection delay={0.05}>
                    <div className="text-center mb-16">
                        <h2
                            className="font-bold text-background leading-none tracking-[-0.04em] uppercase select-none"
                            style={{ fontSize: "clamp(48px, 9vw, 120px)" }}
                        >
                            THE WORK
                        </h2>
                    </div>
                </AnimatedSection>

                {/* ── 5 Columns ── */}
                <AnimatedSection delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-background/8 mt-8">
                        {PILLARS.map((pillar) => (
                            <div
                                key={pillar.num}
                                className="group flex flex-col justify-between gap-10 px-6 py-8 sm:py-0 sm:px-8 sm:first:pl-0 sm:last:pr-0"
                            >
                                {/* Top: title + body */}
                                <div>
                                    <h3 className="text-[18px] sm:text-[17px] lg:text-[19px] font-semibold text-background leading-[1.2] tracking-tight mb-4">
                                        {pillar.title}
                                    </h3>
                                    <p className="text-[12.5px] text-background/45 leading-[1.8]">
                                        {pillar.body}
                                    </p>
                                </div>

                                {/* Bottom: large faded number */}
                                <p
                                    className="font-bold leading-none tracking-[-0.05em] text-background/10 select-none mt-auto"
                                    style={{ fontSize: "clamp(36px, 4vw, 56px)" }}
                                >
                                    {pillar.num}
                                </p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

            </div>
        </section>
    );
}
