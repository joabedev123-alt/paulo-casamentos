import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { VisualImpact } from "@/components/VisualImpact";
import { Experience } from "@/components/Experience";
import { ModelsSection } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Differentials } from "@/components/Differentials";
import { ServiceArea } from "@/components/ServiceArea";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <main className="min-h-screen bg-cinematic-black font-sans text-foreground antialiased selection:bg-cinematic-yellow selection:text-black overflow-x-hidden">
      <Header />
      <Hero />
      <VisualImpact />
      <WhoWeAre />
      <Experience />
      <ModelsSection />
      <HowItWorks />
      <Differentials />
      <ServiceArea />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;
