import { MessageSquare, FileText, Settings, Smile } from "lucide-react";

const steps = [
    {
        icon: MessageSquare,
        title: "Você entra em contato",
        description: "Fale conosco pelo WhatsApp e verifique a disponibilidade para sua data.",
    },
    {
        icon: FileText,
        title: "Proposta ideal",
        description: "Montamos um pacote personalizado que atende perfeitamente seu evento.",
    },
    {
        icon: Settings,
        title: "Montagem no local",
        description: "Levamos, montamos e operamos a cabine com todo suporte necessário.",
    },
    {
        icon: Smile,
        title: "Diversão garantida",
        description: "Seus convidados se divertem e levam lembranças incríveis impresas na hora.",
    },
];

export function HowItWorks() {
    return (
        <section id="como-funciona" className="bg-gray-50 py-20 px-4 md:py-32 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
                        Como funciona
                    </h2>
                    <p className="text-gray-600">
                        Processo simples e transparente para garantir sua tranquilidade.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                    {/* Linha Conectora (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-gray-200 -z-0 transform -translate-y-1/2" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10 bg-gray-50 md:bg-transparent">
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-6 shadow-lg transform transition-transform hover:-translate-y-1">
                                    <div className="text-yellow-400 font-bold absolute top-1 right-1 text-xs">
                                        {index + 1}
                                    </div>
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed max-w-[200px]">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
