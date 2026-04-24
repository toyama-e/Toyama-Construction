import Header from "@/components/common/Header";
import Hero from "@/components/recruit/Hero";
import Promise from "@/components/recruit/Promise";
import DailySchedule from "@/components/recruit/DailySchedule";
import CareerPath from "@/components/recruit/CareerPath";
import Message from "@/components/recruit/Message";
import JobSpec from "@/components/recruit/JobSpec";
import Faq from "@/components/recruit/Faq";
import Apply from "@/components/recruit/Apply";
import Footer from "@/components/common/Footer";

export default function RecruitPage() {
  return (
    <div className="min-h-dvh bg-offwhite text-ink">
      <Header page="recruit" />
      <main>
        <Hero />
        <Promise />
        <DailySchedule />
        <CareerPath />
        <Message />
        <JobSpec />
        <Faq />
        <Apply />
      </main>
      <Footer page="recruit" />
    </div>
  );
}
