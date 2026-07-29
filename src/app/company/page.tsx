import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Hero from "@/components/company/Hero";
import WhyUs from "@/components/lp/WhyUs";
import About from "@/components/lp/About";
import License from "@/components/lp/License";
import Contact from "@/components/lp/Contact";

export default function CompanyPage() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header page="company" alwaysVisible />
      <main>
        <Hero />
        <WhyUs />
        <About />
        <License />
        <Contact />
      </main>
      <Footer page="company" />
    </div>
  );
}
