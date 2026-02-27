"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Organizations", href: "#organizations" },
    { label: "Featured Projects", href: "#projects" },
    { label: "Training & Mentoring", href: "#training" },
    { label: "Gallery", href: "#gallery" },
    { label: "Connect", href: "#connect" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 80);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [mobileOpen]);

    const handleNavClick = (href: string) => {
        setMobileOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                        ? "bg-[#050505]/90 backdrop-blur-md border-b border-white/5"
                        : "bg-transparent"
                    }`}
            >
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 sm:px-10">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick("#home"); }}
                        className="text-sm font-medium tracking-widest uppercase text-white/90 hover:text-white transition-colors"
                    >
                        Shariq M. Khan
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden lg:flex items-center gap-1">
                        {NAV_LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                className="px-3 py-2 text-[11px] uppercase tracking-[0.15em] text-white/40 hover:text-white transition-colors duration-300"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Mobile hamburger */}
                    <button
                        onClick={() => setMobileOpen(true)}
                        className="lg:hidden p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                        aria-label="Open menu"
                    >
                        <Menu className="h-5 w-5" />
                    </button>
                </nav>
            </header>

            {/* ── Mobile Fullscreen Menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        {/* Overlay */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 z-50 bg-[#050505]/95 backdrop-blur-xl"
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setMobileOpen(false)}
                                className="absolute top-5 right-6 p-2 text-white/60 hover:text-white transition-colors cursor-pointer"
                                aria-label="Close menu"
                            >
                                <X className="h-6 w-6" />
                            </button>

                            {/* Links */}
                            <div className="flex flex-col items-center justify-center h-full gap-1">
                                {NAV_LINKS.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ delay: i * 0.05, duration: 0.3 }}
                                        className="text-2xl font-light text-white/70 hover:text-white transition-colors py-3"
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
