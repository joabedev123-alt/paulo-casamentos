import { Camera, Lightning, Heart, Whatsapp } from "react-bootstrap-icons";
import { motion } from "motion/react";
import Floating, { FloatingElement } from "@/components/ui/parallax-floating";

// Assets for Floating Elements
import cabineImg from "@/assets/cabine/cabine-main.jpeg";
import totemImg from "@/assets/toten/totem-self-1.jpeg";
import espelhoImg from "@/assets/espelho/espelho-3.jpeg";
import totemRetroImg from "@/assets/totenretro/totem-retro-3.jpeg";
import foneImg from "@/assets/foneretro/fone-retro-1.jpeg";

export function Hero() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento para a Cabine Megamix.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="home" className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-cinematic-black">

            {/* Parallax Floating Background */}
            <Floating sensitivity={-0.5} className="z-0 h-full w-full overflow-hidden absolute inset-0 opacity-60">
                <FloatingElement depth={0.5} className="top-[15%] left-[5%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1 }}
                        src={cabineImg}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-2xl border border-white/10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                    />
                </FloatingElement>

                <FloatingElement depth={1} className="top-[10%] left-[80%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        src={totemImg}
                        className="w-20 h-28 md:w-28 md:h-40 object-cover rounded-xl shadow-2xl border border-white/10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                    />
                </FloatingElement>

                <FloatingElement depth={1.5} className="top-[60%] left-[85%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        src={espelhoImg}
                        className="w-32 h-24 md:w-48 md:h-36 object-cover rounded-xl shadow-2xl border border-white/10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                    />
                </FloatingElement>

                <FloatingElement depth={0.8} className="top-[70%] left-[10%]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.7 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        src={totemRetroImg}
                        className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-2xl border border-white/10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 hover:scale-110"
                    />
                </FloatingElement>

                <FloatingElement depth={2} className="top-[30%] left-[60%] blur-[2px]">
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.4 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        src={foneImg}
                        className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-full shadow-2xl border border-white/5 opacity-40 grayscale"
                    />
                </FloatingElement>
            </Floating>

            {/* Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/60 to-cinematic-black/40 z-10 pointer-events-none" />


            {/* Content */}
            <div className="relative z-20 container mx-auto px-4 md:px-6 text-center py-4 md:py-0">
                <div className="inline-block mb-3 md:mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
                    <span className="py-1.5 px-3 md:px-4 border border-white/20 rounded-full text-[10px] md:text-xs font-medium tracking-[0.2em] text-gray-300 uppercase bg-white/5 backdrop-blur-sm">
                        Premium Photo Booths
                    </span>
                </div>

                {/* Logo Principal */}
                <div className="mb-6 md:mb-12 mt-8 md:mt-24 relative z-50">
                    <motion.img
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        src="/logo-megamix.png"
                        alt="Cabine Megamix Logo"
                        className="w-full max-w-xs md:max-w-xl lg:max-w-3xl mx-auto h-auto drop-shadow-2xl"
                    />
                </div>

                <p className="max-w-2xl mx-auto text-sm md:text-lg lg:text-xl text-gray-400 font-light mb-6 md:mb-12 px-4 animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
                    Elevamos o nível do seu evento. Tecnologia e experiências imersivas para casamentos, festas e eventos corporativos.
                </p>

                <div className="animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-3 md:gap-4 bg-cinematic-yellow text-black px-6 py-3 md:px-8 md:py-4 text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-white transition-all duration-300 group min-h-[48px] md:min-h-[56px]"
                    >
                        <Whatsapp className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform flex-shrink-0" />
                        <span>Reservar Data</span>
                    </a>
                </div>
            </div>

            {/* ConfigFooter (Icons) */}
            <div className="absolute bottom-8 md:bottom-12 left-0 right-0 container mx-auto px-4 md:px-6 z-20">
                <div className="grid grid-cols-3 gap-2 md:gap-4 border-t border-white/10 pt-6 md:pt-8 max-w-4xl mx-auto">
                    <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
                        <Camera className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">4K Quality</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
                        <Lightning className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">Instant Print</span>
                    </div>
                    <div className="flex flex-col items-center gap-1 md:gap-2 group cursor-default">
                        <Heart className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                        <span className="text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest text-gray-500 group-hover:text-white transition-colors text-center">Lifetime Memory</span>
                    </div>
                </div>
            </div>

            {/* Gradient Overlay Bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-cinematic-black to-transparent z-10" />
        </section>
    );
}
