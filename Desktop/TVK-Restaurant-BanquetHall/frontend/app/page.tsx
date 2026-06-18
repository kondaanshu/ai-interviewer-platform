import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Banquet from "../components/Banquet";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>

      <Navbar />

      <Hero />

      <About />

      <Menu />

      <Banquet />

      <Gallery />
       
      <Contact />

      <Footer />
    </>
  );
}