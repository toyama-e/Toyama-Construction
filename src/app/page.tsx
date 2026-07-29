import Header from "@/components/common/Header";
import Hero from "@/components/lp/Hero";
import Services from "@/components/lp/Services";
import CompanyIntro from "@/components/lp/CompanyIntro";
import RecruitIntro from "@/components/lp/RecruitIntro";
import Contact from "@/components/lp/Contact";
import Footer from "@/components/common/Footer";

export default function Home() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header page="lp" alwaysVisible />
      <main>
        <Hero />
        <Services />
        <CompanyIntro />
        <RecruitIntro />
        <Contact />
      </main>
      <Footer page="lp" />
    </div>
  );
}
