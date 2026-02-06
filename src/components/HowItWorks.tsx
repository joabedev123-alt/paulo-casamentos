import { Whatsapp, CalendarEvent, Tools, EmojiSmileFill } from "react-bootstrap-icons";

const steps = [
    {
        icon: Whatsapp,
        title: "Contato via WhatsApp",
        description: "Envie uma mensagem e verifique a disponibilidade para sua data.",
        number: "01"
    },
    {
        icon: CalendarEvent,
        title: "Planejamento",
        description: "Definimos o layout das fotos e os detalhes personalizados.",
        number: "02"
    },
    {
        icon: Tools,
        title: "Montagem no Local",
        description: "Nossa equipe leva e monta toda a estrutura antes do evento.",
        number: "03"
    },
    {
        icon: EmojiSmileFill,
        title: "Diversão e Fotos",
        description: "Seus convidados se divertem e levam as fotos na hora!",
        number: "04"
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-cinematic-black text-white py-24 px-4 border-t border-white/5 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cinematic-yellow/5 rounded-full blur-3xl -z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Como funciona a <span className="text-cinematic-yellow">Experiência</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Processo simples e transparente para você não se preocupar com nada.
                    </p>
                </div>

                <div className="relative">
                    {/* Linha Conectora (Desktop) */}
                    <div className="hidden lg:block absolute top-[60px] left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-cinematic-yellow/30 to-transparent -z-10" />

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center group">
                                <div className="relative mb-8">
                                    <div className="w-24 h-24 bg-cinematic-black border border-cinematic-yellow/30 rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,215,0,0.05)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] group-hover:border-cinematic-yellow transition-all duration-500 z-10">
                                        <step.icon className="w-10 h-10 text-cinematic-yellow transform group-hover:scale-110 transition-transform duration-500" />
                                    </div>
                                    <div className="absolute -top-2 -right-2 bg-cinematic-yellow text-black font-bold text-xs w-8 h-8 flex items-center justify-center rounded-full shadow-lg">
                                        {step.number}
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cinematic-yellow transition-colors">
                                    {step.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
