import Divider from "@/components/Divider";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import { HeroScrollDemo } from "@/components/HeroScrollDemo";
import HeroSlider from "@/components/HeroSlider";
import NewArrival from "@/components/new-arrival";
import { ProjectsSlider } from "@/components/Projects-slider";

export default function Home() {
  return (
    <main>
      <HeroSlider />
      <Divider />
      <HeroParallaxDemo />
      <HeroScrollDemo />
      <ProjectsSlider />
      <NewArrival />
    </main>
  );
}
