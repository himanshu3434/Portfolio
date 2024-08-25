import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Links from "./components/Links";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="relative bg-black ">
      <div className=" w-full">
        <Hero />
        <About />
        <div className="hidden sm:block">
          <Links />
        </div>
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
