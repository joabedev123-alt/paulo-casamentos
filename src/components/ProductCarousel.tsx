import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { WhatsAppIcon } from "./WhatsAppIcon"

// Definir a estrutura para os slides de produtos
export type ProductSlide = {
    title: string
    description: string
    features: string[]
    image: string
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
        <div className="relative">
            <div className="overflow-hidden p-4 -m-4" ref={emblaRef}>
                <div className="flex -ml-4">
                    {slides.map((slide, index) => {
                        const whatsappMessage = encodeURIComponent(`Olá! Gostaria de um orçamento para: ${slide.title}`);
                        const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

                        return (
                            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.33%] min-w-0 pl-4">
                                <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                                    {/* Seção da Imagem */}
                                    <div className="relative h-64 overflow-hidden group">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />

                                        {slide.Badge && (
                                            <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                                                {slide.Badge}
                                            </div>
                                        )}
                                    </div>

                                    {/* Seção de Conteúdo */}
                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{slide.title}</h3>

                                        <p className="text-gray-600 leading-relaxed text-sm mb-6 line-clamp-3">
                                            {slide.description}
                                        </p>

                                        <ul className="space-y-2 mb-6 flex-grow">
                                            {slide.features.map((feature, idx) => (
                                                <li key={idx} className="flex items-start gap-2 text-gray-700 text-sm">
                                                    <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full flex-shrink-0 mt-1.5" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-auto pt-4 border-t border-gray-100">
                                            <a
                                                href={whatsappLink}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center justify-center gap-2 w-full bg-black hover:bg-yellow-500 hover:text-black text-white font-bold py-3 rounded-xl transition-all duration-300 group"
                                            >
                                                <WhatsAppIcon className="w-4 h-4" />
                                                Solicitar Orçamento
                                            </a>
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
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all z-10 hidden md:block"
                onClick={scrollPrev}
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all z-10 hidden md:block"
                onClick={scrollNext}
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Pontos de Paginação */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-yellow-500 w-8' : 'bg-gray-400 hover:bg-gray-300'
                            }`}
                        onClick={() => scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}
