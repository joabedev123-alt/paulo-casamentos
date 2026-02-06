import { Star } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Hero() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento para a Cabine Megamix.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="home" className="relative bg-black text-white py-12 px-4 md:py-32 overflow-hidden min-h-[500px] md:min-h-[600px] flex items-center">
            {/* Imagem de Fundo */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Celebração de Casamento"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                {/* Selo */}
                <div className="inline-flex items-center gap-2 bg-yellow-500/10 text-yellow-500 px-4 py-1.5 rounded-full text-sm font-medium border border-yellow-500/20 animate-fade-in-up">
                    <Star className="w-4 h-4 fill-yellow-500" />
                    <span>Entretenimento premium para eventos</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight animate-fade-in-up delay-100">
                    Momentos especiais merecem <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-200">
                        lembranças inesquecíveis
                    </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto animate-fade-in-up delay-200">
                    Aluguel de cabine de fotos para casamentos e eventos. Fotos criativas impressas na hora para encantar seus convidados e eternizar a diversão.
                </p>

                {/* Botão de Ação */}
                <div className="pt-4 animate-fade-in-up delay-300">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-full text-lg transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(234,179,8,0.3)]"
                    >
                        <WhatsAppIcon className="w-6 h-6" />
                        Solicitar orçamento no WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
