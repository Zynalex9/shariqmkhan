"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const IMAGES = [
    { src: "/10.png", height: "h-[340px]", position: "object-top" },
    { src: "/1.png", height: "h-[620px]", position: "object-top" },
    { src: "/2.png", height: "h-[420px]", position: "object-top" },

    { src: "/3.png", height: "h-[380px]", position: "object-top" },

    { src: "/7.png", height: "h-[300px]", position: "object-top" },
    { src: "/4.png", height: "h-[240px]", position: "object-center" },
    { src: "/8.png", height: "h-[360px]", position: "object-top" },
];


export default function GallerySection() {
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const prev = () => { if (lightboxIdx !== null && lightboxIdx > 0) setLightboxIdx(lightboxIdx - 1); };
    const next = () => { if (lightboxIdx !== null && lightboxIdx < IMAGES.length - 1) setLightboxIdx(lightboxIdx + 1); };

    return (
        <section id="gallery" className="relative bg-[#f2f2ed] py-20 sm:py-28 px-6 sm:px-10">
            <div className="mx-auto max-w-7xl">

                {/* Header */}
                <AnimatedSection>
                    <p className="text-[10px] text-background/30 mb-3 tracking-[0.25em] uppercase">( 05 )</p>
                    <div className="flex items-end justify-between mb-12 sm:mb-16">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background leading-[0.95] tracking-tight">
                            GALLERY
                        </h2>
                        <p className="text-[12px] text-background/35 tracking-wide hidden sm:block">
                            Selected moments &amp; campaigns
                        </p>
                    </div>
                </AnimatedSection>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {IMAGES.map((img, i) => (
                        <motion.div
                            key={img.src}
                            className={`break-inside-avoid ${img.height} relative overflow-hidden rounded-2xl cursor-pointer`}
                            style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.07)" }}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-40px" }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
                            whileHover={{ scale: 1.02, boxShadow: "0 8px 32px rgba(0,0,0,0.12)" }}
                            onClick={() => setLightboxIdx(i)}
                        >
                            <Image
                                src={img.src}
                                alt={`Gallery ${i + 1}`}
                                fill
                                className={`object-cover ${img.position} transition-transform duration-500`}

                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 28vw"
                            />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            <AnimatePresence>
                {lightboxIdx !== null && (
                    <>
                        <motion.div
                            key="backdrop"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
                            onClick={() => setLightboxIdx(null)}
                        />

                        <motion.div
                            key="panel"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 26, stiffness: 320 }}
                            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none"
                        >
                            {/* Close */}
                            <button
                                onClick={() => setLightboxIdx(null)}
                                className="pointer-events-auto absolute right-6 top-6 flex items-center justify-center w-10 h-10 rounded-full border border-white/15 text-white/50 hover:text-white hover:border-white/40 transition-colors cursor-pointer"
                                aria-label="Close"
                            >
                                <X className="h-4 w-4" />
                            </button>

                            <div
                                className="pointer-events-auto relative w-[85vw] h-[80vh] max-w-5xl"
                                onClick={(e) => e.stopPropagation()}
                            >
                                <Image
                                    src={IMAGES[lightboxIdx].src}
                                    alt={`Gallery ${lightboxIdx + 1}`}
                                    fill
                                    className="object-contain rounded-xl"
                                    sizes="85vw"
                                />
                            </div>

                            {/* Prev */}
                            {lightboxIdx > 0 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); prev(); }}
                                    className="pointer-events-auto absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 text-white/30 hover:text-white transition-colors cursor-pointer"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft className="h-8 w-8" />
                                </button>
                            )}

                            {/* Next */}
                            {lightboxIdx < IMAGES.length - 1 && (
                                <button
                                    onClick={(e) => { e.stopPropagation(); next(); }}
                                    className="pointer-events-auto absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 text-white/30 hover:text-white transition-colors cursor-pointer"
                                    aria-label="Next"
                                >
                                    <ChevronRight className="h-8 w-8" />
                                </button>
                            )}

                            {/* Counter */}
                            <div className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 text-white/30 text-xs tracking-widest">
                                {lightboxIdx + 1} / {IMAGES.length}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </section>
    );
}
