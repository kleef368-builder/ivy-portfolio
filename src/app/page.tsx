import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import CampaignSimulator from "@/components/CampaignSimulator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col">
        <Hero />
        <About />
        <Experience />
        <CampaignSimulator />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
