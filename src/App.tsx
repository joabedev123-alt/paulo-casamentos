import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits"; // Why
import { EmotionalSection } from "@/components/EmotionalSection";
import { ModelsSection } from "@/components/About"; // Refactored About
import { HowItWorks } from "@/components/HowItWorks";
import { Differentials } from "@/components/Differentials";
import { ServiceArea } from "@/components/ServiceArea";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <main className="min-h-screen bg-cinematic-black font-sans text-foreground antialiased selection:bg-cinematic-yellow selection:text-black">
      <Header />
      <Hero />
      <Benefits />
      <EmotionalSection />
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
