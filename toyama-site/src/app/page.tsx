import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Whyus from "@/components/Whyus";
import Services from "@/components/Services";
import License from "@/components/License";
import About from "@/components/About";
import Recruit from "@/components/Recruit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header />
      <main>
        <Hero />
        <Whyus />
        <Services />
        <License />
        <About />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
