import { useState } from "react";
import { MediaCarousel } from "./MediaCarousel";
import { Whatsapp, ChevronDown, ChevronUp } from "react-bootstrap-icons";

// Images & Videos
import cabineImg from "@/assets/cabine/cabine-main.jpeg";
import espelhoImg from "@/assets/espelho/espelho magico 01.jpeg";
import espelhoVideo from "@/assets/espelho/espelho-main.mp4";
import espelhoVideo2 from "@/assets/espelho/espelho-2.mp4";
import espelhoImg3 from "@/assets/espelho/espelho-3.jpeg";
import totemRetroVideo from "@/assets/totenretro/totem-retro-main.mp4";
import totemRetroVideo2 from "@/assets/totenretro/totem-retro-2.mp4";
import totemRetroImgExtra from "@/assets/totenretro/totem-retro-3.jpeg";
import totemImg from "@/assets/toten/totem-self-1.jpeg";
import totemImg2 from "@/assets/toten/totem-self-2.jpeg";
import totemImg3 from "@/assets/toten/totem-self-3.jpeg";
import totemRetroImg from "@/assets/totenretro/WhatsApp Image 2026-02-05 at 16.32.45.jpeg";
import foneRetroImg from "@/assets/foneretro/fone-retro-1.jpeg";
import foneRetroImg2 from "@/assets/foneretro/fone-retro-2.jpeg";

export type ProductSlide = {
    title: string
    description: string
    features: string[]
    image: string
    video?: string
    mediaList?: { type: 'video' | 'image', src: string }[]
    Badge?: string
}

const slides: ProductSlide[] = [
    {
        title: "Cabine de Fotos",
        Badge: "O Clássico",
        description: "A verdadeira experiência da cabine fotográfica. Fechada, privativa e com aquela nostalgia que todo mundo ama.",
        image: cabineImg,
        features: [
            "Privacidade total",
            "Fotos ilimitadas",
            "Acessórios divertidos"
        ]
    },

    {
        title: "Espelho Mágico", // Magic Mirror
        Badge: "Novidade Exclusiva", // Exclusive New
        description: "Interatividade e elegância. O convidado se vê no espelho, interage com animações e leva a foto impressa.",
        image: espelhoImg,
        mediaList: [
            { type: 'video', src: espelhoVideo },
            { type: 'video', src: espelhoVideo2 },
            { type: 'image', src: espelhoImg3 },
        ],
        features: [
            "Design sofisticado",
            "Animações interativas",
            "Fotos de corpo inteiro"
        ]
    },
    {
        title: "Totem do Eu", // Totem Self
        Badge: "Compacto e Moderno", // Compact and Modern
        description: "Estrutura aberta e moderna, ocupa pouco espaço e permite fotos com mais pessoas aparecendo no cenário.",
        image: totemImg,
        mediaList: [
            { type: 'image', src: totemImg },
            { type: 'image', src: totemImg2 },
            { type: 'image', src: totemImg3 },
        ],
        features: [
            "Design fino e elegante",
            "Iluminação profissional (Ring Light)",
            "Ideal para espaços compactos"
        ]
    },
    {
        title: "Fone Retrô", // Retro Phone
        Badge: "Livro de visitas em áudio", // Audio Guestbook
        description: "Uma nova tendência para casamentos. Substitua o livro de assinaturas tradicional por mensagens de voz emocionantes dos seus convidados.",
        image: foneRetroImg,
        mediaList: [
            { type: 'image', src: foneRetroImg },
            { type: 'image', src: foneRetroImg2 },
        ],
        features: [
            "Mensagens de voz gravadas",
            "Telefone estilo vintage",
            "Memórias em áudio para sempre"
        ]
    }
];

function ModelCard({ slide, whatsappNumber }: { slide: ProductSlide, whatsappNumber: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const whatsappMessage = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${slide.title}`);
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <div className="h-full flex flex-col bg-cinematic-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-cinematic-yellow/50 transition-all duration-500 group/card">
            {/* Media Section (Carousel, Video or Image) */}
            <div className="relative h-72 overflow-hidden flex-shrink-0">
                {slide.mediaList ? (
                    <MediaCarousel media={slide.mediaList} altTitle={slide.title} />
                ) : slide.video ? (
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    >
                        <source src={slide.video} type="video/mp4" />
                    </video>
                ) : (
                    <img
                        src={slide.image}
                        alt={slide.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-80 pointer-events-none" />

                {slide.Badge && (
                    <div className="absolute top-4 right-4 bg-cinematic-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg z-20">
                        {slide.Badge}
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow relative bg-cinematic-black">
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />

                <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover/card:text-cinematic-yellow transition-colors">{slide.title}</h3>

                    {/* Toggle Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex items-center gap-2 text-cinematic-yellow text-sm font-bold uppercase tracking-wide mb-4 hover:text-white transition-colors self-start"
                    >
                        {isOpen ? "Menos Detalhes" : "Veja Mais"}
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {/* Collapsible Content */}
                    <div className={`transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100 mb-6' : 'max-h-0 opacity-0'}`}>
                        <p className="text-gray-400 leading-relaxed text-sm mb-6">
                            {slide.description}
                        </p>

                        <ul className="space-y-3">
                            {slide.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                    <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full flex-shrink-0 mt-1.5 shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Spacer to push CTA when expanded, or keep it consistent */}
                    {!isOpen && <div className="flex-grow" />}

                    <div className={`mt-auto pt-6 border-t border-white/10 w-full transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-100'}`}> {/* Keeping CTA always visible */}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-cinematic-yellow hover:text-black text-white font-bold py-4 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent group/btn shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,215,0,0.23)]"
                        >
                            <Whatsapp className="w-4 h-4" />
                            Solicitar Orçamento
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function ModelsSection() {
    const whatsappNumber = "5544984458180";

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

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 items-start justify-items-center">
                        {slides.map((slide, index) => (
                            <ModelCard key={index} slide={slide} whatsappNumber={whatsappNumber} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
