import { StarFill } from "react-bootstrap-icons";

export function VisualImpact() {
    return (
        <section className="relative py-24 bg-cinematic-black overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cinematic-yellow/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 text-cinematic-yellow/80 border border-cinematic-yellow/20 px-4 py-1 rounded-full text-xs tracking-widest uppercase">
                            <StarFill className="w-3 h-3" />
                            <span>Experiência Exclusiva</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                            Não é apenas uma foto. <br />
                            <span className="text-gray-500">É uma obra de arte.</span>
                        </h2>

                        <p className="text-gray-400 text-lg font-light leading-relaxed border-l-2 border-cinematic-yellow pl-6">
                            Nossa tecnologia de iluminação e captura foi desenvolvida para fazer cada convidado se sentir uma estrela de cinema. Tratamento de imagem em tempo real e impressão com qualidade de laboratório fotográfico.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <img
                                src="https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1974&auto=format&fit=crop"
                                alt="Festa Luxo"
                                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm mt-12"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1511285560982-1356c11d4606?q=80&w=1974&auto=format&fit=crop"
                                alt="Casamento Elegante"
                                className="w-full h-64 object-cover grayscale hover:grayscale-0 transition-all duration-700 rounded-sm"
                            />
                        </div>
                        {/* Decorative Frame */}
                        <div className="absolute inset-0 border border-white/10 translate-x-4 translate-y-4 -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
}
