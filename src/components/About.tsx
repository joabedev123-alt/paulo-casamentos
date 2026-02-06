import { ProductCarousel } from "./ProductCarousel";
import type { ProductSlide } from "./ProductCarousel";

// Images
import espelhoImg from "@/assets/espelho/espelho magico 01.jpeg";
import totemImg from "@/assets/toten/WhatsApp Image 2026-02-05 at 16.32.06.jpeg";
import totemRetroImg from "@/assets/totenretro/WhatsApp Image 2026-02-05 at 16.32.45.jpeg";
import foneRetroImg from "@/assets/foneretro/WhatsApp Image 2026-02-05 at 16.33.22.jpeg";

const slides: ProductSlide[] = [
    {
        title: "Cabine de Fotos", // Photo Booth
        Badge: "O Clássico", // The Classic
        description: "A clássica cabine fechada que garante privacidade e diversão. Ideal para grupos de amigos se soltarem nas poses!",
        image: "https://images.unsplash.com/photo-1544136423-f36696d54238?q=80&w=2070&auto=format&fit=crop",
        features: [
            "Cabine fechada com cortina",
            "Acessórios divertidos inclusos",
            "Impressão ilimitada em tirinhas"
        ]
    },
    {
        title: "Totem Retrô", // Retro Totem
        Badge: "Estilo Vintage", // Vintage Style
        description: "Charme e tecnologia. Design em madeira que combina perfeitamente com decorações rústicas e ativações de marca com estilo.",
        image: totemRetroImg,
        features: [
            "Design em madeira rústica",
            "Visual Instagramável",
            "Ideal para ações de marketing"
        ]
    },
    {
        title: "Espelho Mágico", // Magic Mirror
        Badge: "Novidade Exclusiva", // Exclusive New
        description: "Interatividade e elegância. O convidado se vê no espelho, interage com animações e leva a foto impressa.",
        image: espelhoImg,
        features: [
            "Design sofisticado",
            "Animações interativas",
            "Fotos de corpo inteiro"
        ]
    },
    {
        title: "Totem Self", // Selfie Totem
        Badge: "Compacto e Moderno", // Compact and Modern
        description: "Estrutura aberta e moderna, ocupa pouco espaço e permite fotos com mais pessoas aparecendo no cenário.",
        image: totemImg,
        features: [
            "Design slim e elegante",
            "Iluminação profissional (Ring Light)",
            "Ideal para espaços compactos"
        ]
    },
    {
        title: "Fone Retrô", // Retro Phone
        Badge: "Audio Guestbook", // Audio Guestbook
        description: "A nova tendência para casamentos. Substitua o livro de assinaturas tradicional por mensagens de voz emocionantes dos seus convidados.",
        image: foneRetroImg,
        features: [
            "Mensagens de voz gravadas",
            "Telefone estilo vintage",
            "Memórias em áudio para sempre"
        ]
    }
];

export function ModelsSection() {
    return (
        <section id="modelos" className="bg-cinematic-black text-white py-24 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white">
                        Nossos <span className="text-cinematic-yellow">Modelos</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Escolha a opção perfeita para o estilo do seu evento.
                    </p>
                </div>

                <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cinematic-yellow/5 rounded-full blur-3xl -z-0" />
                    <ProductCarousel slides={slides} />
                </div>
            </div>
        </section>
    );
}
