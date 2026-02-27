"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const GALLERY_IMAGES = [
    { src: "/1.png", alt: "Gallery image 1" },
    { src: "/2.png", alt: "Gallery image 2" },
    { src: "/3.png", alt: "Gallery image 3" },
    { src: "/4.png", alt: "Gallery image 4" },
    { src: "/5.png", alt: "Gallery image 5" },
    { src: "/6.png", alt: "Gallery image 6" },
    { src: "/7.png", alt: "Gallery image 7" },
    { src: "/8.png", alt: "Gallery image 8" },
    { src: "/9.png", alt: "Gallery image 9" },
    { src: "/10.png", alt: "Gallery image 10" },
];

// Subtle accent colors for hover rings
const ACCENT_COLORS = ["#E8B400", "#7E9E8B", "#8B8BAE", "#C97676", "#E8B400", "#7E9E8B", "#8B8BAE", "#C97676", "#E8B400", "#7E9E8B"];

export default function GallerySection() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const prev = () => {
        if (lightboxIdx !== null && lightboxIdx > 0) setLightboxIdx(lightboxIdx - 1);
    };
    const next = () => {
        if (lightboxIdx !== null && lightboxIdx < GALLERY_IMAGES.length - 1) setLightboxIdx(lightboxIdx + 1);
    };

    return (
        <section id="gallery" className="relative bg-[#f2f2ed] py-28 sm:py-36 px-6 sm:px-10 overflow-hidden">
            {/* Subtle top accent border */}
            <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-[#7E9E8B]/0 via-[#7E9E8B]/40 to-[#7E9E8B]/0" />

            <div className="mx-auto max-w-7xl">
                <AnimatedSection>
                    <p className="text-xs text-[#050505]/30 mb-3 tracking-wide">( 05 )</p>
                    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-[#050505] leading-[0.95] tracking-tight mb-4">
                        GALLERY
                    </h2>
                    <div className="h-0.5 w-12 bg-gradient-to-r from-[#7E9E8B] to-transparent mb-16" />
                </AnimatedSection>

                {/* Masonry-style grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                    {GALLERY_IMAGES.map((img, i) => (
                        <AnimatedSection key={i} delay={i * 0.04}>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ type: "spring", stiffness: 300 }}
                                className="break-inside-avoid cursor-pointer overflow-hidden group"
                                onClick={() => setLightboxIdx(i)}
                            >
                                <div
                                    className="relative w-full overflow-hidden bg-[#e8e8e3] transition-all duration-300"
                                    style={{
                                        aspectRatio: i % 3 === 0 ? "3/4" : i % 3 === 1 ? "4/3" : "1/1",
                                    }}
                                >
                                    <Image
                                        src={img.src}
                                        alt={img.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                                    />
                                    {/* Colored hover overlay */}
                                    <div
                                        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                                        style={{ backgroundColor: ACCENT_COLORS[i] }}
                                    />
                                    {/* Bottom accent line on hover */}
                                    <div
                                        className="absolute bottom-0 inset-x-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        style={{ backgroundColor: ACCENT_COLORS[i] }}
                                    />
                                </div>
                            </motion.div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>

            {/* ── Lightbox ── */}
            <AnimatePresence>
                {lightboxIdx !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl flex items-center justify-center"
                        onClick={() => setLightboxIdx(null)}
                    >
                        {/* Colored accent bar at top */}
                        <div
                            className="absolute top-0 inset-x-0 h-0.5"
                            style={{ backgroundColor: ACCENT_COLORS[lightboxIdx] }}
                        />

                        {/* Close */}
                        <button
                            onClick={() => setLightboxIdx(null)}
                            className="absolute right-6 top-6 z-50 p-2 text-white/40 hover:text-white transition-colors cursor-pointer"
                            aria-label="Close"
                        >
                            <X className="h-6 w-6" />
                        </button>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-[85vw] h-[80vh] max-w-5xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={GALLERY_IMAGES[lightboxIdx].src}
                                alt={GALLERY_IMAGES[lightboxIdx].alt}
                                fill
                                className="object-contain"
                                sizes="85vw"
                            />
                        </motion.div>

                        {/* Prev */}
                        {lightboxIdx > 0 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/30 hover:text-white transition-colors cursor-pointer"
                                aria-label="Previous"
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </button>
                        )}

                        {/* Next */}
                        {lightboxIdx < GALLERY_IMAGES.length - 1 && (
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/30 hover:text-white transition-colors cursor-pointer"
                                aria-label="Next"
                            >
                                <ChevronRight className="h-8 w-8" />
                            </button>
                        )}

                        {/* Counter */}
                        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest">
                            {lightboxIdx + 1} / {GALLERY_IMAGES.length}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
