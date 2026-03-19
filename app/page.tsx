import Footer from "@/components/landing/Footer";
import HeroBanner from "@/components/landing/HeroBanner";
import Header from "@/components/landing/Header";
import AppSection from "@/components/landing/AppSection";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroBanner />
      <AppSection />
      <Footer />
    </main>
  );
}
