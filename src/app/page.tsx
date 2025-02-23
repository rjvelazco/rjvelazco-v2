import { IntroSection } from "@components/IntroSection";
import { AboutMe } from "@components/AboutMe";
import { SkillsSection } from "@components/SkillsSection";
import { ExperienceSection } from "@components/ExperienceSection";
import { ContactSection } from "@components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-4xl bg-background min-h-screen mx-auto font-sans">
      <IntroSection />
      {/* <AboutMe /> */}
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
