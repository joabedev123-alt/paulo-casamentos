import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useCallback, useEffect, useState } from 'react'

type MediaItem = {
    type: 'video' | 'image'
    src: string
}

type MediaCarouselProps = {
    media: MediaItem[]
    altTitle: string
}

export function MediaCarousel({ media, altTitle }: MediaCarouselProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        Autoplay({ delay: 4000, stopOnInteraction: false })
    ])
    const [selectedIndex, setSelectedIndex] = useState(0)

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

    return (
        <div className="relative group/carousel h-full w-full">
            <div className="overflow-hidden h-full w-full" ref={emblaRef}>
                <div className="flex h-full">
                    {media.map((item, index) => (
                        <div key={index} className="flex-[0_0_100%] min-w-0 relative h-full">
                            {item.type === 'video' ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={item.src} type="video/mp4" />
                                </video>
                            ) : (
                                <img
                                    src={item.src}
                                    alt={`${altTitle} ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            )}
                            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-transparent to-transparent opacity-60" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {media.map((_, index) => (
                    <button
                        key={index}
                        className={`h-1.5 rounded-full transition-all duration-300 ${index === selectedIndex ? 'bg-cinematic-yellow w-6' : 'bg-white/50 w-1.5 hover:bg-white'
                            }`}
                        onClick={() => emblaApi && emblaApi.scrollTo(index)}
                    />
                ))}
            </div>
        </div>
    )
}
