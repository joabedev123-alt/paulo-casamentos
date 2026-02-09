import { StarFill } from "react-bootstrap-icons";

export function WhoWeAre() {
    return (
        <section id="quem-somos" className="relative py-16 md:py-24 bg-cinematic-black overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6 max-w-7xl relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-16 items-center">

                    {/* Content */}
                    <div className="space-y-6 md:space-y-8 animate-fade-in-right">
                        <div className="inline-flex items-center gap-2 text-cinematic-yellow border border-cinematic-yellow/20 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase bg-cinematic-yellow/5">
                            <StarFill className="w-3 h-3" />
                            <span>Desde 2014</span>
                        </div>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                            Criatividade e Inovação <br />
                            <span className="text-gray-500">em cada detalhe.</span>
                        </h2>

                        <div className="space-y-4 md:space-y-6 text-gray-400 text-base md:text-lg font-light leading-relaxed">
                            <p>
                                <strong className="text-white font-medium">Somos uma Cabine Megamix.</strong> Desde 2014 no mercado de entretenimento em eventos. Sempre antenados em novidades para levar até você o que existe de mais criativo e inovador.
                            </p>
                            <p className="border-l-2 border-cinematic-yellow pl-6">
                                São mais de <strong className="text-cinematic-yellow">500 ativações</strong> em casamentos, aniversários e eventos corporativos. Transformamos momentos em experiências memoráveis.
                            </p>
                            <p>
                                Pode contar sempre com nossa equipe de atendimento que entende perfeitamente que seu evento é único e merece ser especial em cada detalhe.
                            </p>
                        </div>

                        <div className="pt-4 flex flex-wrap gap-8">
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white">500+</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Eventos Realizados</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-4xl font-bold text-white">10</span>
                                <span className="text-xs uppercase tracking-widest text-gray-500 mt-1">Anos de Mercado</span>
                            </div>
                        </div>
                    </div>

                    {/* Image / Visual */}
                    <div className="relative">
                        <div className="relative z-10 rounded-sm overflow-hidden border border-white/10 group">
                            <div className="absolute inset-0 bg-cinematic-yellow/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-700" />
                            <img
                                src="https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2069&auto=format&fit=crop"
                                alt="Event Team at Work"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                            />
                        </div>
                        {/* Decorative Graphic Elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-cinematic-yellow/20 rounded-full blur-2xl" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-cinematic-yellow/10 rounded-full blur-3xl" />
                    </div>
                </div>
            </div>
        </section>
    );
}
