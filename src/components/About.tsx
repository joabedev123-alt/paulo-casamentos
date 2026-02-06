import { Camera, Printer, PartyPopper, Heart } from "lucide-react";
import espelhoImg from "@/assets/espelho/espelho magico 01.jpeg";
import { ProductCarousel } from "./ProductCarousel";
import type { ProductSlide } from "./ProductCarousel";

// Imagens
import totemImg from "@/assets/toten/WhatsApp Image 2026-02-05 at 16.32.06.jpeg";
import totemRetroImg from "@/assets/totenretro/WhatsApp Image 2026-02-05 at 16.32.45.jpeg";
import foneRetroImg from "@/assets/foneretro/WhatsApp Image 2026-02-05 at 16.33.22.jpeg";

const slides: ProductSlide[] = [
    {
        title: "Cabine de Fotos",
        Badge: "O Clássico",
        description: "A clássica cabine fechada que garante privacidade e diversão. Ideal para grupos de amigos se soltarem nas poses!",
        image: "https://images.unsplash.com/photo-1544136423-f36696d54238?q=80&w=2070&auto=format&fit=crop", // Placeholder until we have a real one
        features: [
            "Cabine fechada com cortina",
            "Acessórios divertidos inclusos",
            "Impressão ilimitada em tirinhas"
        ]
    },
    {
        title: "Totem Retrô",
        Badge: "Estilo Vintage",
        description: "Charme e tecnologia. Design em madeira que combina perfeitamente com decorações rústicas e boho e traz um visual instagramável.",
        image: totemRetroImg,
        features: [
            "Design em madeira rústica",
            "Visual Instagramável",
            "Ideal para casamentos ao ar livre"
        ]
    },
    {
        title: "Espelho Mágico",
        Badge: "Novidade Exclusiva",
        description: "Interatividade e elegância. O convidado se vê no espelho, interage com animações e leva a foto impressa.",
        image: espelhoImg,
        features: [
            "Design sofisticado",
            "Animações interativas",
            "Fotos de corpo inteiro"
        ]
    },
    {
        title: "Totem Self",
        Badge: "Compacto e Moderno",
        description: "Estrutura aberta e moderna, ocupa pouco espaço e permite fotos com mais pessoas aparecendo no cenário.",
        image: totemImg,
        features: [
            "Design slim e elegante",
            "Iluminação profissional (Ring Light)",
            "Ideal para espaços compactos"
        ]
    },
    {
        title: "Fone Retrô",
        Badge: "Audio Guestbook",
        description: "A nova tendência para casamentos. Substitua o livro de assinaturas tradicional por mensagens de voz emocionantes dos seus convidados.",
        image: foneRetroImg,
        features: [
            "Mensagens de voz gravadas",
            "Telefone estilo vintage",
            "Memórias em áudio para sempre"
        ]
    }
];

const features = [
    {
        icon: Camera,
        title: "Fotos ilimitadas",
        description: "Seus convidados podem tirar quantas fotos quiserem durante o evento.",
    },
    {
        icon: Printer,
        title: "Impressão instantânea",
        description: "A foto é impressa em segundos, com alta qualidade e durabilidade.",
    },
    {
        icon: PartyPopper,
        title: "Ideal para eventos",
        description: "Perfeito para casamentos, aniversários, formaturas e corporativos.",
    },
    {
        icon: Heart,
        title: "Atendimento premium",
        description: "Equipe uniformizada e preparada para auxiliar seus convidados.",
    },
    {
        icon: Camera,
        title: "Link Digital",
        description: "Todas as fotos digitais são enviadas via link após o evento."
    }
];

export function About() {
    return (
        <section id="sobre" className="bg-white py-12 px-4 md:py-32">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900">
                        Cabine Megamix
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Alugamos cabines de fotos para transformar seu evento em uma experiência divertida, elegante e memorável.
                        Seus convidados levam para casa uma lembrança impressa na hora, com qualidade profissional.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 group"
                        >
                            <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                <feature.icon className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
                            <p className="text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-24">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Nossos Modelos</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Escolha a opção perfeita para o estilo do seu evento.
                        </p>
                    </div>

                    <ProductCarousel slides={slides} />
                </div>
            </div>
        </section>
    );
}
