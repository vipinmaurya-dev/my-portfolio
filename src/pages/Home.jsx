import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Timeline from "../components/TimeLine";
import About from "./About";
import Projects from "./Projects";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Contact />
    </>
  );
}

export default Home;
