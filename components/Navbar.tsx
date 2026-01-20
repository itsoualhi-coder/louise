"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4"
        >
            <div className="flex items-center justify-between w-full max-w-5xl px-6 py-3 bg-white/20 backdrop-blur-xl border border-white/20 rounded-full shadow-lg shadow-black/5">
                <Link href="/" className="font-serif text-xl font-bold tracking-tight text-text-main">
                    LouLuxe Collective
                </Link>

                <div className="flex items-center gap-6">
                    <Link href="#services" className="hidden md:block text-sm font-medium text-text-main/80 hover:text-text-main transition-colors">
                        Services
                    </Link>
                    <Link href="#about" className="hidden md:block text-sm font-medium text-text-main/80 hover:text-text-main transition-colors">
                        About
                    </Link>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative px-5 py-2.5 text-sm font-semibold text-white bg-accent rounded-full overflow-hidden group shadow-lg shadow-accent/20"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Book a Call <ArrowRight className="w-4 h-4" />
                        </span>
                        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <div className="absolute inset-0 rounded-full ring-2 ring-white/50 animate-pulse" />
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
}
