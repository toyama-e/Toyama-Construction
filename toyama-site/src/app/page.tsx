import Header from "@/components/common/Header";
import Hero from "@/components/lp/Hero";
import Services from "@/components/lp/Services";
import WhyUs from "@/components/lp/WhyUs";
import License from "@/components/lp/License";
import About from "@/components/lp/About";
import Contact from "@/components/lp/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header page="lp" alwaysVisible />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <License />
        <About />
        <Contact />
      </main>
      <Footer page="lp" />
    </div>
  );
}
