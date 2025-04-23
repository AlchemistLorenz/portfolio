import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Bio from "./components/Bio";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="bg-gray-900 text-gray-100 pt-20"> {/* push content below fixed nav */}
        <section id="home"><Intro /></section> 
        <section id="bio"><Bio /></section>
        <section id="about"><About /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
}
