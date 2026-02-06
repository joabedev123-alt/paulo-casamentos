import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight, Whatsapp } from "react-bootstrap-icons";

// Definir a estrutura para os slides de produtos
export type ProductSlide = {
    title: string
    description: string
    features: string[]
    image: string
    video?: string
    Badge?: string
}

type ProductCarouselProps = {
    slides: ProductSlide[]
}

export function ProductCarousel({ slides }: ProductCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 5000, stopOnInteraction: false })
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
    const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

    const onSelect = useCallback(() => {
        if (!emblaApi) return
        setSelectedIndex(emblaApi.selectedScrollSnap())
    }, [emblaApi])

    useEffect(() => {
        if (!emblaApi) return
        onSelect()
        emblaApi.on('select', onSelect)
        emblaApi.on('reInit', onSelect)
    }, [emblaApi, onSelect])

    const whatsappNumber = "5544984458180";

    return (
        <div className="relative group/carousel">
            <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
                <div className="flex -ml-4">
                    {slides.map((slide, index) => {
                        const whatsappMessage = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${slide.title}`);
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

                        return (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                                <div className="h-full flex flex-col bg-cinematic-black border border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-cinematic-yellow/50 transition-all duration-500 group/card">
                                    {/* Seção da Mídia (Vídeo ou Imagem) */}
                                    <div className="relative h-72 overflow-hidden">
                                        {slide.video ? (
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
                                        <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-80" />

                                        {slide.Badge && (
                                            <div className="absolute top-4 right-4 bg-cinematic-yellow text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                {slide.Badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Seção de Conteúdo */}
                                    <div className="p-8 flex flex-col flex-grow relative bg-cinematic-black">
                                        {/* Overlay de gradiente sutil para profundidade */}
                                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/5 pointer-events-none" />

                                        <div className="relative z-10 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-white mb-3 group-hover/card:text-cinematic-yellow transition-colors">{slide.title}</h3>

                                            <p className="text-gray-400 leading-relaxed text-sm mb-6 line-clamp-3">
                                                {slide.description}
                                            </p>

                                            <ul className="space-y-3 mb-8 flex-grow">
                                                {slide.features.map((feature, idx) => (
                                                    <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm">
                                                        <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full flex-shrink-0 mt-1.5 shadow-[0_0_8px_rgba(255,215,0,0.5)]" />
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-auto pt-6 border-t border-white/10 w-full">
                                                <a
                                                    href={whatsappLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-cinematic-yellow hover:text-black text-white font-bold py-4 rounded-xl transition-all duration-300 border border-white/10 hover:border-transparent group/btn"
                                                >
                                                    <Whatsapp className="w-4 h-4" />
                                                    Solicitar Orçamento
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Botões de Navegação */}
            <button
                className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-cinematic-black/80 hover:bg-cinematic-yellow hover:text-black text-white p-3 rounded-full border border-white/10 hidden md:flex items-center justify-center transition-all duration-300 z-10 group/nav"
                onClick={scrollPrev}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-cinematic-black/80 hover:bg-cinematic-yellow hover:text-black text-white p-3 rounded-full border border-white/10 hidden md:flex items-center justify-center transition-all duration-300 z-10 group/nav"
                onClick={scrollNext}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pontos de Paginação */}
            <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-cinematic-yellow w-8' : 'bg-gray-700 w-2 hover:bg-gray-500'
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}
