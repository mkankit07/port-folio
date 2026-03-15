import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  const dateTime = new Date()
  const date = dateTime.getFullYear();

  return (
    <main>
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <footer style={{
        background: '#1a1a2e', color: '#8888aa',
        textAlign: 'center', padding: '24px 5vw',
        fontSize: '13px', fontWeight: 600,
      }}>
        © {date} Ankit Maurya
      </footer>
    </main>
  );
}
