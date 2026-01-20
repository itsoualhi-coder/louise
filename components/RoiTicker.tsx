"use client";

import { motion } from "motion/react";

export default function RoiTicker() {
    const items = [
        "Zone of Genius",
        "•",
        "Inbox Zero",
        "•",
        "Chaos to Calm",
        "•",
        "Behind-the-Scenes Bestie",
        "•",
        "100% Confidential",
        "•",
    ];

    return (
        <div className="w-full py-8 bg-text-main text-white overflow-hidden flex whitespace-nowrap relative z-20 transform -skew-y-1 origin-top-left">
            <div className="absolute inset-0 bg-white/5" />
            <motion.div
                className="flex gap-8 items-center font-serif text-2xl md:text-3xl"
                animate={{ x: [0, -1000] }}
                transition={{
                    repeat: Infinity,
                    ease: "linear",
                    duration: 20,
                }}
            >
                {items.map((item, i) => (
                    <span key={i} className="tracking-wide">{item}</span>
                ))}
                {/* Duplicate for seamless loop */}
                {items.map((item, i) => (
                    <span key={`dup-${i}`} className="tracking-wide">{item}</span>
                ))}
                {items.map((item, i) => (
                    <span key={`dup2-${i}`} className="tracking-wide">{item}</span>
                ))}
            </motion.div>
        </div>
    );
}
