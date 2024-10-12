import BlendProjects from "@/sections/BlenderProjects";
import { Hero } from "@/sections/Hero";
import  Skills from "@/sections/Skills";
import Profiles from "@/sections/CPProfiles";
import Projects from "@/sections/Projects";



export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <Skills />
      <Profiles />
      <Projects />
      <BlendProjects />
    </>
  );
}
