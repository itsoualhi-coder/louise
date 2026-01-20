import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import RoiTicker from "@/components/RoiTicker";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-bg overflow-x-hidden selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <BentoGrid />
      <RoiTicker />
      <Contact />
    </main>
  );
}
