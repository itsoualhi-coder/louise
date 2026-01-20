"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-4 overflow-hidden">
            <div className="container max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="inline-flex items-center gap-2 px-3 py-1 mb-8 text-xs font-semibold tracking-wider uppercase bg-white/50 border border-text-main/10 rounded-full backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Available for new clients
                    </motion.div>

                    <h1 className="font-serif text-5xl lg:text-7xl leading-[1.1] text-text-main mb-6">
                        Running your business solo is heroic... <br />
                        <span className="text-text-main/60 italic">but also a bit chaotic!</span>
                    </h1>

                    <p className="text-lg text-text-main/70 max-w-md leading-relaxed mb-10">
                        Here's your permission slip (📝) to stop doing it all yourself. I take the boring (but essential) tasks off your plate so you get more time, brain space, and sanity.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <Link href="#contact" passHref>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-text-main text-white font-medium rounded-2xl shadow-xl hover:shadow-2xl hover:bg-black transition-all"
                            >
                                Summon Your Genie
                            </motion.button>
                        </Link>
                        <Link href="#services" passHref>
                            <motion.button
                                whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.8)" }}
                                whileTap={{ scale: 0.98 }}
                                className="px-8 py-4 bg-white/60 backdrop-blur-md border border-text-main/10 text-text-main font-medium rounded-2xl hover:border-text-main/20 transition-all"
                            >
                                View Services
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Image Content */}
                <div className="relative mx-auto lg:mr-0 lg:ml-auto w-full max-w-md aspect-[3/4]">
                    {/* Decorative blobs */}
                    <div className="absolute -top-20 -right-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl mix-blend-multiply filter opacity-50 animate-blob" />
                    <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-300/30 rounded-full blur-3xl mix-blend-multiply filter opacity-50 animate-blob animation-delay-2000" />

                    <motion.div
                        style={{ y, rotate }}
                        className="relative w-full h-full"
                    >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden border-[8px] border-white shadow-2xl shadow-stone-400/50">
                            <div className="relative w-full h-full bg-stone-200">
                                {/* Placeholder for actual image if missing, or use Next Image */}
                                <Image
                                    src="/louise.jpg"
                                    alt="Louise"
                                    fill
                                    className="object-cover"
                                    priority
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                            </div>
                        </div>

                        {/* Floating Tag */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            className="absolute bottom-8 -left-12 bg-white/30 backdrop-blur-xl border border-white/40 p-4 rounded-2xl shadow-lg flex items-center gap-3 max-w-[200px]"
                        >
                            <div className="w-10 h-10 rounded-full bg-text-main text-white flex items-center justify-center font-serif text-lg">L</div>
                            <div>
                                <p className="text-xs font-bold text-text-main">Louise 🏴</p>
                                <p className="text-[10px] text-text-main/80 uppercase tracking-wide">Executive Partner</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
