"use client";

import { useState } from "react";
import { Linkedin, Twitter, Instagram, Mail, ArrowUpRight } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";

const SOCIALS = [
    { label: "Email", icon: Mail, href: "mailto:shariq@shariqmkhan.com", color: "#C97676" },
    { label: "LinkedIn", icon: Linkedin, href: "https://linkedin.com/in/shariqmkhan", color: "#E8B400" },
    { label: "X / Twitter", icon: Twitter, href: "https://x.com/shariqmkhan", color: "#7E9E8B" },
    { label: "Instagram", icon: Instagram, href: "https://instagram.com/shariqmkhan", color: "#8B8BAE" },
];

export default function ConnectSection() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Contact form submitted:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <section id="connect" className="relative bg-[#0a0a0a] py-28 sm:py-36 px-6 sm:px-10 overflow-hidden">
            {/* Warm glow top-left */}
            <div
                className="pointer-events-none absolute -top-20 -left-20 w-[600px] h-[600px] opacity-[0.05] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, #E8B400 0%, transparent 70%)" }}
            />
            {/* Muted purple glow bottom-right */}
            <div
                className="pointer-events-none absolute -bottom-20 -right-20 w-[500px] h-[500px] opacity-[0.04] rounded-full blur-3xl"
                style={{ background: "radial-gradient(circle, #8B8BAE 0%, transparent 70%)" }}
            />

            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">
                    {/* Left: heading + socials */}
                    <div className="lg:col-span-5">
                        <AnimatedSection>
                            <p className="text-xs text-white/30 mb-3 tracking-wide">( 06 )</p>
                            {/* Heading with left color bar */}
                            <div className="flex items-start gap-4 mb-12">
                                <div className="w-0.5 mt-2 h-14 bg-gradient-to-b from-[#E8B400] to-[#E8B400]/20 flex-shrink-0" />
                                <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[0.95] tracking-tight">
                                    CONNECT
                                </h2>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection delay={0.1}>
                            <p className="text-[13px] text-white/35 leading-[1.9] mb-10 max-w-sm">
                                Interested in collaborating, speaking engagements, or partnering on a project?
                                Reach out through any of the channels below.
                            </p>

                            <div className="space-y-2">
                                {SOCIALS.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-between py-3.5 border-b border-white/5 text-white/40 transition-colors group"
                                        whileHover={{ x: 4 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                                    >
                                        <div className="flex items-center gap-3">
                                            <span
                                                className="transition-colors duration-200"
                                                style={{}}
                                            >
                                                <social.icon
                                                    className="h-4 w-4 transition-colors duration-200 group-hover:text-current"
                                                    style={{ color: "inherit" }}
                                                />
                                            </span>
                                            <span
                                                className="text-sm transition-colors duration-200 group-hover:text-white"
                                            >
                                                {social.label}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <span
                                                className="text-[10px] uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium"
                                                style={{ color: social.color }}
                                            >
                                                Connect
                                            </span>
                                            <ArrowUpRight
                                                className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity"
                                                style={{ color: social.color }}
                                            />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </AnimatedSection>
                    </div>

                    {/* Right: contact form */}
                    <div className="lg:col-span-7">
                        <AnimatedSection delay={0.15}>
                            <form onSubmit={handleSubmit} className="space-y-8">
                                <div>
                                    <label htmlFor="name" className="block text-[11px] uppercase tracking-[0.2em] text-white/25 mb-2">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        required
                                        value={formData.name}
                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#E8B400]/40 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-[11px] uppercase tracking-[0.2em] text-white/25 mb-2">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        value={formData.email}
                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#E8B400]/40 transition-colors"
                                        placeholder="your@email.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-[11px] uppercase tracking-[0.2em] text-white/25 mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        className="w-full bg-transparent border-b border-white/10 py-3 text-sm text-white placeholder:text-white/15 focus:outline-none focus:border-[#E8B400]/40 transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all cursor-pointer relative overflow-hidden group"
                                    style={{ background: "linear-gradient(135deg, #E8B400, #C99A00)", color: "#fff" }}
                                >
                                    <span className="relative z-10">{submitted ? "Message Sent ✓" : "Send Message"}</span>
                                    <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </button>
                            </form>
                        </AnimatedSection>
                    </div>
                </div>

                {/* Footer */}
                <AnimatedSection delay={0.25}>
                    <div className="mt-28 pt-8 border-t border-white/5">
                        {/* Rainbow accent strip */}
                        <div className="flex gap-1 mb-6">
                            {["#E8B400", "#7E9E8B", "#8B8BAE", "#C97676"].map((c, i) => (
                                <div key={i} className="h-0.5 flex-1 opacity-30" style={{ backgroundColor: c }} />
                            ))}
                        </div>
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                            <p className="text-[11px] uppercase tracking-[0.15em] text-white/20">
                                &copy; {new Date().getFullYear()} Shariq M. Khan
                            </p>
                            <p className="text-[11px] uppercase tracking-[0.15em] text-white/20">
                                All rights reserved
                            </p>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
