import { StarFill } from "react-bootstrap-icons";
import heroVideo from "@/assets/videohero/hero-bg.mp4";

export function VisualImpact() {
    return (
        <section className="relative py-24 bg-cinematic-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinematic-yellow/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 order-2 md:order-1">
                        <div className="inline-flex items-center gap-2 text-cinematic-yellow/80 border border-cinematic-yellow/20 px-4 py-1 rounded-full text-xs tracking-widest uppercase">
                            <StarFill className="w-3 h-3" />
                            <span>Experiência Exclusiva</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Não é apenas uma foto. <br />
                            <span className="text-gray-500">É uma obra de arte.</span>
                        </h2>

                        <p className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-cinematic-yellow pl-6">
                            Nossa tecnologia de iluminação e captura foi desenvolvida para fazer cada convidado sentir uma estrela de cinema. Tratamento de imagem em tempo real e impressão com qualidade de laboratório fotográfico.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-end order-1 md:order-2">
                        <div className="relative w-full max-w-xs rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="w-full h-auto"
                            >
                                <source src={heroVideo} type="video/mp4" />
                            </video>

                            {/* Decorative Frame */}
                            <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
