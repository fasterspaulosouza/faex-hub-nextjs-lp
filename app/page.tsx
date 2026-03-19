import Footer from "@/components/landing/Footer";
import HeroBanner from "@/components/landing/HeroBanner";
import Header from "@/components/landing/Header";
import AppSection from "@/components/landing/AppSection";
import WebSection from "@/components/landing/WebSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <AppSection />
      <WebSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
