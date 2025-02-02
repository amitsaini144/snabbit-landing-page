import HeroSection from "@/components/hero-section";
import Services from "@/components/services";
import DownloadSection from "@/components/download-section";
import RecordSection from "@/components/record-section";
import ContactSection from "@/components/contact-section";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="flex flex-col items-center w-full min-w-[320px] min-h-screen bg-white">
      <div className="w-full">
        <HeroSection />
        <Services />
        <DownloadSection />
        <RecordSection />
        <ContactSection />
        <FaqSection />
      </div>
    </div>
  );
}
