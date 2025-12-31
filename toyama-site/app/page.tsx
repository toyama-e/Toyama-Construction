import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Works from "@/components/Works";
import Company from "@/components/Company";
import Recruit from "@/components/Recruit";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-white text-slate-900">
      <Header />
      <main>
        <Hero />
        <Services />
        <Works />
        <Company />
        <Recruit />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
