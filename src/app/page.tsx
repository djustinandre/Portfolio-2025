import { Header } from "@/sections/Header";
import { SocialLinks } from '@/components/SocialLinks';
import { HeroSection} from "@/sections/Hero";
import { SkillsSection } from "@/sections/Skills";
import { ProjectsSection } from "@/sections/Projects";
import Contact from "@/sections/Contact";
import { Footer } from "@/sections/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <SocialLinks />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <Contact />
      <Footer />
    </div>
  );
}
