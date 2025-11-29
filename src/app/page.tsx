import CanvasBackground from "@/components/CanvasBackground";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CanvasBackground />
      <Navigation />
      <main className="relative z-10 max-w-4xl mx-auto px-6">
        <HeroSection />
        <SkillsSection />
        <ProjectsSection />
        <AboutSection />
        <Footer />
      </main>
    </>
  );
}
