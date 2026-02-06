import { Whatsapp, CalendarCheck, Tools, EmojiSmileFill } from "react-bootstrap-icons";

export function HowItWorks() {
    const steps = [
        { icon: Whatsapp, label: "Contato", desc: "Verifique sua data" },
        { icon: CalendarCheck, label: "Planejamento", desc: "Personalize sua arte" },
        { icon: Tools, label: "Montagem", desc: "Equipe especializada" },
        { icon: EmojiSmileFill, label: "Diversão", desc: "Fotos ilimitadas" },
    ];

    return (
        <section className="py-32 bg-cinematic-black overflow-hidden relative">
            <div className="container mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-4">Fluxo do <span className="text-cinematic-yellow">Evento</span></h2>
                    <div className="w-24 h-1 bg-cinematic-yellow mx-auto" />
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden md:block absolute top-[40px] left-10 right-10 h-[2px] bg-white/10">
                        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-r from-transparent via-cinematic-yellow to-transparent opacity-50" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
                        {steps.map((step, index) => (
                            <div key={index} className="relative group">
                                <div className="w-20 h-20 mx-auto bg-black border-2 border-white/20 rounded-full flex items-center justify-center mb-8 relative z-10 group-hover:border-cinematic-yellow transition-colors duration-500">
                                    <step.icon className="w-8 h-8 text-gray-400 group-hover:text-cinematic-yellow transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">{step.label}</h3>
                                <p className="text-gray-500 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
