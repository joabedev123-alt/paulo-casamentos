import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { ServiceArea } from "@/components/ServiceArea";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

function App() {
  return (
    <main className="min-h-screen bg-black font-sans text-foreground antialiased selection:bg-yellow-500 selection:text-black">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <Benefits />
      <ServiceArea />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

export default App;
