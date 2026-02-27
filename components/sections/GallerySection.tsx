"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const IMAGES = [
    { src: "/10.png", position: "object-top" },
    { src: "/1.png", position: "object-top" },
    { src: "/2.png", position: "object-top" },
    { src: "/3.png", position: "object-top" },
    { src: "/7.png", position: "object-top" },
    { src: "/4.png", position: "object-center" },
    { src: "/8.png", position: "object-top" },
];

const AUTOPLAY_INTERVAL = 5000;
const THUMB_VISIBLE = 6; // how many thumbs before arrows appear

export default function GallerySection() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(0);
    const [thumbOffset, setThumbOffset] = useState(0);
    const autoplayRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const dragStartX = useRef(0);
    const dragging = useRef(false);

    const total = IMAGES.length;
    const showThumbArrows = total > THUMB_VISIBLE;
    const maxThumbOffset = Math.max(0, total - THUMB_VISIBLE);

    const goTo = useCallback(
        (idx: number, dir?: number) => {
            const n = (idx + total) % total;
            setDirection(dir ?? (n > current ? 1 : -1));
            setCurrent(n);
        },
        [current, total]
    );

    const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);
    const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);

    /* Auto-scroll thumbnails to keep active in view */
    useEffect(() => {
        if (!showThumbArrows) return;
        if (current < thumbOffset) setThumbOffset(current);
        else if (current >= thumbOffset + THUMB_VISIBLE)
            setThumbOffset(current - THUMB_VISIBLE + 1);
    }, [current, thumbOffset, showThumbArrows]);

    /* Autoplay */
    useEffect(() => {
        if (autoplayRef.current) clearTimeout(autoplayRef.current);
        autoplayRef.current = setTimeout(next, AUTOPLAY_INTERVAL);
        return () => { if (autoplayRef.current) clearTimeout(autoplayRef.current); };
    }, [current, next]);

    /* Keyboard */
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev();
            if (e.key === "ArrowRight") next();
        };
        window.addEventListener("keydown", handler);
        return () => window.removeEventListener("keydown", handler);
    }, [prev, next]);

    /* Drag / swipe on main image */
    const onPointerDown = (e: React.PointerEvent) => {
        dragging.current = true;
        dragStartX.current = e.clientX;
    };
    const onPointerUp = (e: React.PointerEvent) => {
        if (!dragging.current) return;
        dragging.current = false;
        const delta = e.clientX - dragStartX.current;
        if (Math.abs(delta) < 10) return;
        if (delta < -50) next();
        else if (delta > 50) prev();
    };

    const variants = {
        enter: (d: number) => ({ opacity: 0, x: d * 48, scale: 0.97 }),
        center: { opacity: 1, x: 0, scale: 1 },
        exit: (d: number) => ({ opacity: 0, x: d * -48, scale: 0.97 }),
    };

    const prevIdx = (current - 1 + total) % total;
    const nextIdx = (current + 1) % total;

    return (
        <section id="gallery" className="relative bg-[#f2f2ed] py-20 sm:py-28">
            <div className="mx-auto max-w-7xl px-6 sm:px-10">

                {/* Header */}
                <AnimatedSection>
                    <p className="text-[10px] text-background/30 mb-3 tracking-[0.25em] uppercase">
                        ( 05 )
                    </p>
                    <div className="flex items-end justify-between mb-12 sm:mb-16">
                        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-background leading-[0.95] tracking-tight">
                            GALLERY
                        </h2>
                        <p className="text-[12px] text-background/35 tracking-wide hidden sm:block">
                            Selected moments &amp; campaigns
                        </p>
                    </div>
                </AnimatedSection>

                {/* ── Carousel track with peek ── */}
                <AnimatedSection delay={0.1}>
                    <div className="relative flex items-center justify-center gap-3 sm:gap-4">

                        {/* Prev peek */}
                        <div
                            className="relative hidden sm:block shrink-0 rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                width: "clamp(80px, 10vw, 140px)",
                                height: "clamp(120px, 16vw, 220px)",
                                opacity: 0.35,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                            onClick={prev}
                            aria-label="Previous"
                        >
                            <Image
                                src={IMAGES[prevIdx].src}
                                alt="Previous"
                                fill
                                className={`object-cover ${IMAGES[prevIdx].position}`}
                                sizes="140px"
                            />
                            <div className="absolute inset-0 bg-[#f2f2ed]/40" />
                        </div>

                        {/* Main slide */}
                        <div
                            className="relative w-[90%] max-w-[820px] overflow-hidden rounded-2xl cursor-grab active:cursor-grabbing select-none"

                            style={{
                                height: "clamp(220px, 45vw, 500px)",
                                boxShadow: "0 12px 48px rgba(0,0,0,0.12)",
                            }}
                            onPointerDown={onPointerDown}
                            onPointerUp={onPointerUp}
                            onPointerLeave={() => { dragging.current = false; }}
                            aria-roledescription="carousel"
                            aria-label="Gallery"
                        >
                            <AnimatePresence initial={false} custom={direction} mode="wait">
                                <motion.div
                                    key={current}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{
                                        opacity: { duration: 0.3, ease: "easeInOut" },
                                        x: { type: "spring", stiffness: 300, damping: 32, mass: 0.8 },
                                        scale: { duration: 0.3 },
                                    }}
                                    className="absolute inset-0"
                                >
                                    <Image
                                        src={IMAGES[current].src}
                                        alt={`Gallery ${current + 1}`}
                                        fill
                                        draggable={false}
                                        className={`object-cover ${IMAGES[current].position}`}
                                        sizes="(max-width: 768px) 95vw, 900px"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>

                            {/* Arrows on main image */}
                            <button
                                onClick={(e) => { e.stopPropagation(); prev(); }}
                                aria-label="Previous"
                                className="absolute left-3 top-1/2 -translate-y-1/2 z-10
                                           flex items-center justify-center w-9 h-9 rounded-full
                                           bg-white/65 backdrop-blur-sm border border-white/30
                                           text-background/60 hover:text-background hover:bg-white/90
                                           transition-all duration-200 cursor-pointer"
                            >
                                <ArrowLeft className="w-4 h-4" />
                            </button>
                            <button
                                onClick={(e) => { e.stopPropagation(); next(); }}
                                aria-label="Next"
                                className="absolute right-3 top-1/2 -translate-y-1/2 z-10
                                           flex items-center justify-center w-9 h-9 rounded-full
                                           bg-white/65 backdrop-blur-sm border border-white/30
                                           text-background/60 hover:text-background hover:bg-white/90
                                           transition-all duration-200 cursor-pointer"
                            >
                                <ArrowRight className="w-4 h-4" />
                            </button>

                            {/* Counter */}
                            <div className="absolute bottom-3 right-3 z-10 px-3 py-1 rounded-full bg-black/25 backdrop-blur-sm">
                                <span className="text-[11px] text-white/80 tabular-nums tracking-widest">
                                    {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
                                </span>
                            </div>
                        </div>

                        {/* Next peek */}
                        <div
                            className="relative hidden sm:block shrink-0 rounded-xl overflow-hidden cursor-pointer"
                            style={{
                                width: "clamp(80px, 10vw, 140px)",
                                height: "clamp(120px, 16vw, 220px)",
                                opacity: 0.35,
                                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                            }}
                            onClick={next}
                            aria-label="Next"
                        >
                            <Image
                                src={IMAGES[nextIdx].src}
                                alt="Next"
                                fill
                                className={`object-cover ${IMAGES[nextIdx].position}`}
                                sizes="140px"
                            />
                            <div className="absolute inset-0 bg-[#f2f2ed]/40" />
                        </div>
                    </div>

                    {/* ── Thumbnail strip with overflow arrows ── */}
                    <div className="mt-5 flex items-center justify-center gap-2 max-w-[900px] mx-auto">

                        {/* Thumb prev arrow */}
                        {showThumbArrows && (
                            <button
                                onClick={() => setThumbOffset((o) => Math.max(0, o - 1))}
                                disabled={thumbOffset === 0}
                                aria-label="Scroll thumbnails left"
                                className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full
                                           border border-background/15 text-background/40
                                           hover:text-background hover:border-background/30
                                           disabled:opacity-20 disabled:cursor-not-allowed
                                           transition-all duration-200 cursor-pointer"
                            >
                                <ChevronLeft className="w-3.5 h-3.5" />
                            </button>
                        )}

                        {/* Thumbnails */}
                        <div className="flex gap-2 overflow-hidden" style={{ maxWidth: `${THUMB_VISIBLE * 84}px` }}>
                            <motion.div
                                className="flex gap-2"
                                animate={{ x: -(thumbOffset * 84) }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            >
                                {IMAGES.map((img, i) => (
                                    <button
                                        key={img.src + i}
                                        onClick={() => goTo(i, i > current ? 1 : -1)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className="relative shrink-0 rounded-lg overflow-hidden cursor-pointer focus:outline-none transition-all duration-300"
                                        style={{
                                            width: "76px",
                                            height: "52px",
                                            opacity: i === current ? 1 : 0.42,
                                            boxShadow: i === current
                                                ? "0 0 0 2px rgba(0,0,0,0.55)"
                                                : "0 0 0 1px rgba(0,0,0,0.07)",
                                            transform: i === current ? "scale(1.06)" : "scale(1)",
                                        }}
                                    >
                                        <Image
                                            src={img.src}
                                            alt={`Thumbnail ${i + 1}`}
                                            fill
                                            draggable={false}
                                            className={`object-cover ${img.position}`}
                                            sizes="76px"
                                        />
                                    </button>
                                ))}
                            </motion.div>
                        </div>

                        {/* Thumb next arrow */}
                        {showThumbArrows && (
                            <button
                                onClick={() => setThumbOffset((o) => Math.min(maxThumbOffset, o + 1))}
                                disabled={thumbOffset >= maxThumbOffset}
                                aria-label="Scroll thumbnails right"
                                className="shrink-0 flex items-center justify-center w-7 h-7 rounded-full
                                           border border-background/15 text-background/40
                                           hover:text-background hover:border-background/30
                                           disabled:opacity-20 disabled:cursor-not-allowed
                                           transition-all duration-200 cursor-pointer"
                            >
                                <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        )}
                    </div>

                </AnimatedSection>
            </div>
        </section>
    );
}