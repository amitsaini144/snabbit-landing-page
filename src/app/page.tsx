import HeroSection from "@/components/HeroSection";
import Services from "@/components/Services";
import DownloadSection from "@/components/DownloadSection";
import RecordSection from "@/components/RecordSection";
import ContactSection from "@/components/ContactSection";
import FaqSection from "@/components/FaqSection";

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
