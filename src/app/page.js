import ArchitectureFeatures from "@/components/ArchitectureFeatures";
import Divider from "@/components/Divider";
import Experience from "@/components/experience ";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import HeroSlider from "@/components/HeroSlider";
import NewArrival from "@/components/new-arrival";
import { ProjectsSlider } from "@/components/Projects-slider";
import { TabsDemo } from "@/components/TabsDemo";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Divider />
      <HeroParallaxDemo />
      <HeroScrollDemo />
      <ProjectsSlider />
      <Experience />
      <TabsDemo />
      <NewArrival />
      <ArchitectureFeatures />
    </main>
  );
}
