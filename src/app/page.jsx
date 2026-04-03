import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import About from "../components/About";
import Services from "../components/Services";
import HouseSketch from "../components/HouseSketch"
import Projects from "../components/Projects";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <About />
      <Marquee />
      <Services />
      <HouseSketch />
      <Projects />
      <CTA />
    </>
  );
}
