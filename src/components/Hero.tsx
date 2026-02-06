import { Camera, Lightning, Heart, Whatsapp } from "react-bootstrap-icons";
import heroVideo from "@/assets/videohero/hero-bg.mp4";

export function Hero() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento para a Cabine Megamix.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="home" className="relative w-full bg-cinematic-black flex flex-col items-center justify-center py-20 pb-40">
            {/* Video Container - Centered, Constrained & No Overlay */}
            <div className="relative w-full max-w-3xl aspect-video overflow-hidden rounded-2xl shadow-2xl border border-white/10 z-10 mb-12 bg-black">
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover brightness-105"
                >
                    <source src={heroVideo} type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 text-center">
                <div className="inline-block mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                    <span className="py-2 px-4 border border-white/20 rounded-full text-xs font-medium tracking-[0.2em] text-gray-300 uppercase bg-white/5 backdrop-blur-sm">
                        Premium Photo Booths
                    </span>
                </div>

                {/* Título Principal */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-none mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
                    ENTRETENIMENTO <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cinematic-yellow to-white bg-[200%_auto] animate-shine">
                        INOVADOR
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 font-light mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                    Elevamos o nível do seu evento. Tecnologia e experiências imersivas para casamentos, festas e eventos corporativos.
                </p>

                <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-4 bg-cinematic-yellow text-black px-8 py-4 text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 group"
                    >
                        <Whatsapp className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        Reservar Data
                    </a>
                </div>
            </div>

            {/* ConfigFooter (Icons) */}
            <div className="absolute bottom-12 left-0 right-0 container mx-auto px-6 z-20">
                <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <Camera className="w-6 h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">4K Quality</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <Lightning className="w-6 h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Instant Print</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 group cursor-default">
                        <Heart className="w-6 h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors">Lifetime Memory</span>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cinematic-black to-transparent z-10" />
        </section>
    );
}
