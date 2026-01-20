"use client";

import { motion } from "motion/react";
import { Send, Instagram } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-stone-100 -z-10 rounded-l-[50px] transform translate-x-1/3" />

            <div className="container max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white/30 backdrop-blur-xl border border-white/50 rounded-[40px] p-8 lg:p-16 shadow-2xl relative"
                >
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="flex-1">
                            <h2 className="font-serif text-5xl text-text-main mb-6">Support shouldn't be a luxury...</h2>
                            <p className="text-lg text-text-main/70 mb-8">
                                It should feel like 'Why didn't I do this sooner?' Let's swap the chaos for calm and get your business running like the dream version you imagined.
                            </p>

                            <div className="flex items-center gap-4 text-text-main/80 hover:text-accent transition-colors cursor-pointer">
                                <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center">
                                    <Instagram size={20} />
                                </div>
                                <a href="https://instagram.com/louluxecollective" target="_blank" rel="noopener noreferrer" className="font-medium">
                                    @louluxecollective
                                </a>
                            </div>
                        </div>

                        <div className="flex-1">
                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border border-transparent focus:border-accent/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-text-main/30"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border border-transparent focus:border-accent/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-text-main/30"
                                    />
                                </div>
                                <div>
                                    <textarea
                                        rows={4}
                                        placeholder="How can I help you?"
                                        className="w-full px-6 py-4 rounded-xl bg-white/50 border border-transparent focus:border-accent/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent/10 transition-all placeholder:text-text-main/30 resize-none"
                                    />
                                </div>
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full py-4 bg-text-main text-white font-medium rounded-xl shadow-lg flex items-center justify-center gap-2 hover:bg-black transition-colors"
                                >
                                    Send Request <Send size={18} />
                                </motion.button>
                            </form>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-20 text-center text-text-main/40 text-sm">
                    <p>&copy; {new Date().getFullYear()} LouLuxe Collective. All rights reserved.</p>
                </div>
            </div>
        </section>
    );
}
