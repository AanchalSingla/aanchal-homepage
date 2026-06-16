import Nav from "../components/Nav";
import Hero from "../components/Hero";
import VinesDivider from "../components/VinesDivider";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Cookie from "../components/Cookie";
import Interests from "../components/Interests";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-charcoal">
      <Nav />
      <main>
        <Hero />
        <VinesDivider />
        <About />
        <VinesDivider />
        <Education />
        <VinesDivider />
        <Experience />
        <VinesDivider />
        <Cookie />
        <VinesDivider />
        <Interests />
        <VinesDivider />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}
