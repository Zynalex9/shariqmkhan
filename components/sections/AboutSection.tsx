"use client";

import AnimatedSection from "@/components/AnimatedSection";

const CARDS = [
    {
        tag: "Media & Production",
        heading: "360° Media Architecture",
        body: "Founded Incision in 2008, producing 300+ campaigns for Netflix, global conglomerates, and governments. First Pakistani director to collaborate with Ridley Scott Associates.",
    },
    {
        tag: "Governance",
        heading: "Policy & Broadcasting Reform",
        body: "As Advisor to the Ministry of Information & Broadcasting, he launched Radio Pakistan's podcast, digitized national archives, and laid the groundwork for PTV's HD transformation.",
    },
    {
        tag: "Defense Communications",
        heading: "National Defense Narrative",
        body: "Led landmark campaigns including the acclaimed JF-17 Thunder initiative, reshaping Pakistan's global defense image and strengthening national morale.",
    },
    {
        tag: "Advocacy",
        heading: "Policy Impact at Scale",
        body: "Through Chromatic Trust, led Pakistan's first digital tobacco control campaign, securing four major policy reforms and advancing twelve UN Sustainable Development Goals.",
    },
    {
        tag: "Global Networks",
        heading: "International Partnerships",
        body: "An influential network spanning Europe, North America, GCC, and Asia. Focused on unlocking Pakistan–GCC opportunities across trade, culture, media, and bilateral cooperation.",
    },
    {
        tag: "Education",
        heading: "Building the Next Generation",
        body: "Established media departments at leading universities and launched five national TV channels, nurturing Pakistan's modern creative ecosystem.",
    },
];

export default function AboutSection() {
    return (
        <section id="about" className="bg-white py-20 sm:py-28 px-6 sm:px-10">
            <div className="mx-auto max-w-7xl">

                {/* ── Top: Large heading left | description right ── */}
                <AnimatedSection>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 mb-16 lg:mb-20">
                        {/* Big heading */}
                        <div className="lg:col-span-7">
                            <p className="text-[11px] uppercase tracking-[0.25em] text-[#050505]/30 mb-4">( 01 ) About</p>
                            <h2 className="text-[36px] sm:text-[44px] lg:text-[52px] font-bold text-[#050505] leading-[1.1] tracking-tight">
                                Almost two decades of{" "}
                                <span className="text-[#E8B400]">shaping Pakistan&rsquo;s</span>{" "}
                                media and strategic landscape.
                            </h2>
                        </div>

                        {/* Right: small description + intro text */}
                        <div className="lg:col-span-5 flex flex-col justify-end">
                            <p className="text-[13px] text-[#050505]/45 leading-[1.9]">
                                Shariq is a visionary entrepreneur, media architect, and strategic advisor whose
                                work sits at the intersection of governance, defense communications, global
                                advocacy, and creative excellence. Recognized nationally and internationally,
                                his work is guided by bold vision and an unwavering commitment to elevating
                                Pakistan&rsquo;s presence on the global stage.
                            </p>
                        </div>
                    </div>
                </AnimatedSection>

                {/* ── Card Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {CARDS.map((card, i) => (
                        <AnimatedSection key={i} delay={i * 0.06}>
                            <div className="group rounded-2xl border border-[#050505]/[0.08] bg-white hover:border-[#050505]/[0.16] hover:shadow-sm transition-all duration-300 p-7 h-full flex flex-col gap-6">
                                {/* Tag chip */}
                                <span className="inline-block self-start text-[10px] uppercase tracking-[0.2em] text-[#050505]/40 border border-[#050505]/10 rounded-full px-3 py-1">
                                    {card.tag}
                                </span>

                                {/* Heading */}
                                <h3 className="text-[20px] font-semibold text-[#050505] leading-[1.25] tracking-tight">
                                    {card.heading}
                                </h3>

                                {/* Body */}
                                <p className="text-[13px] text-[#050505]/50 leading-[1.75] mt-auto">
                                    {card.body}
                                </p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>

            </div>
        </section>
    );
}
