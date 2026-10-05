import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import SystemInteraction from "./SystemInteraction";
import Products from "./Products";
import Contact from "./Contact";

export default function MainPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-surface text-background">
      <Hero />
      <About />
      <Projects />
      <SystemInteraction />
      <Products />
      <Contact />
    </main>
  );
}
