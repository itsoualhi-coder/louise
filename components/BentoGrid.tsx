"use client";

import { motion } from "motion/react";
import { CheckCircle2, Calendar, Instagram, ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    };

    return (
        <section id="services" className="py-24 px-4 bg-white/30">
            <div className="container max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif text-4xl lg:text-5xl text-text-main mb-4">From Chaos to Calm</h2>
                    <p className="text-text-main/60 text-lg max-w-2xl mx-auto">
                        Most business owners don’t need more hours in the day... they just need someone to take the spinning plates out of their hands!
                    </p>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-6"
                >
                    {/* Admin Card */}
                    <motion.div variants={itemVariants} className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-6 w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-600">
                                <CheckCircle2 size={24} />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold mb-2">Admin & Systems</h3>
                            <p className="text-sm text-text-main/70 mb-8 flex-grow">
                                Organising emails + calendars so you breathe again. Sorting invoicing, documents, data entry, and the admin you hate.
                            </p>

                            {/* Animation Demo */}
                            <div className="space-y-3 p-4 bg-white/50 rounded-xl border border-white/30">
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex items-center gap-2 text-xs"
                                >
                                    <div className="w-4 h-4 rounded border border-green-500 bg-green-100 flex items-center justify-center"><div className="w-2 h-2 bg-green-500 rounded-full" /></div>
                                    <span className="line-through text-black/40">Inbox (0) Reached</span>
                                </motion.div>
                                <motion.div
                                    initial={{ x: -10, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="flex items-center gap-2 text-xs"
                                >
                                    <div className="w-4 h-4 rounded border border-green-500 bg-green-100 flex items-center justify-center"><div className="w-2 h-2 bg-green-500 rounded-full" /></div>
                                    <span className="line-through text-black/40">Invoices Sorted</span>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Social Media Card */}
                    <motion.div variants={itemVariants} className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-6 w-12 h-12 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600">
                                <Instagram size={24} />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold mb-2">Social Control</h3>
                            <p className="text-sm text-text-main/70 mb-8 flex-grow">
                                Keeping your socials moving. Content ideas, captions, scheduling, and engagement (without the overwhelm).
                            </p>

                            {/* Animation Demo */}
                            <div className="relative mx-auto w-32 h-40 bg-black rounded-[20px] p-1 shadow-xl border-4 border-stone-800">
                                <div className="h-full w-full bg-white rounded-[16px] overflow-hidden relative">
                                    <div className="absolute top-2 left-2 right-2 flex gap-1">
                                        <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 2 }} className="w-full h-16 bg-stone-200 rounded-md" />
                                    </div>
                                    <div className="absolute bottom-2 left-2 right-2 grid grid-cols-3 gap-1">
                                        <div className="aspect-square bg-stone-200 rounded-xs" />
                                        <div className="aspect-square bg-stone-200 rounded-xs" />
                                        <div className="aspect-square bg-stone-200 rounded-xs" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Executive Card */}
                    <motion.div variants={itemVariants} className="group relative p-8 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/40 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="relative z-10 h-full flex flex-col">
                            <div className="mb-6 w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                                <Calendar size={24} />
                            </div>
                            <h3 className="font-serif text-2xl font-semibold mb-2">Life & Travel</h3>
                            <p className="text-sm text-text-main/70 mb-8 flex-grow">
                                Planning travel, bookings, itineraries, and those personal life bits you never have time for.
                            </p>

                            {/* Animation Demo */}
                            <div className="flex flex-col gap-2 relative h-20 overflow-hidden">
                                <motion.div
                                    animate={{ y: [20, 0], opacity: [0, 1] }}
                                    transition={{ duration: 0.5, delay: 1, repeat: Infinity, repeatDelay: 3 }}
                                    className="p-2 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs font-semibold text-blue-700"
                                >
                                    Weekend Trip Booked
                                </motion.div>
                                <div className="p-2 bg-white/50 border border-white/20 rounded-lg text-xs text-stone-400">
                                    Itinerary Sent
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
