import { IntroSection } from "@components/IntroSection";
import { AboutMe } from "@components/AboutMe";
import { SkillsSection } from "@components/SkillsSection";
import { ExperienceSection } from "@components/ExperienceSection";
import { ContactSection } from "@components/ContactSection";

export default function Home() {
  return (
    <div className="max-w-4xl bg-background mx-auto font-sans flex flex-col gap-12">
      <IntroSection />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}
