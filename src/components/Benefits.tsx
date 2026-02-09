import { People, HeartFill, CameraFill, Gem } from "react-bootstrap-icons";

const benefits = [
    {
        icon: People,
        title: "Entretenimento que Encanta",
        description: "Uma atração que movimenta a festa, gera interação e diverte convidados de todas as idades.",
    },
    {
        icon: HeartFill,
        title: "Memória Afetiva Instantânea",
        description: "Mais que uma foto, um presente. Seus convidados levam para casa uma lembrança física emocionante.",
    },
    {
        icon: CameraFill,
        title: "Qualidade de Estúdio",
        description: "Câmeras profissionais e iluminação de ponta para garantir que todos saiam incríveis na foto.",
    },
    {
        icon: Gem,
        title: "Estrutura de Luxo",
        description: "Design sofisticado que agrega valor à decoração do seu casamento, sem poluição visual.",
    },
];

export function Benefits() {
    return (
        <section id="beneficios" className="bg-cinematic-black text-white py-16 md:py-24 px-4">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-12 md:mb-16 space-y-3 md:space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                        Por que a <span className="text-cinematic-yellow">Cabine Megamix?</span>
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">
                        Elevamos o nível do entretenimento no seu evento. Veja o que torna nossa experiência única.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-cinematic-yellow/50 hover:bg-cinematic-glass-hover transition-all duration-500 hover:-translate-y-2 flex flex-col items-start gap-6"
                        >
                            <div className="p-4 rounded-xl bg-cinematic-yellow/10 text-cinematic-yellow group-hover:bg-cinematic-yellow group-hover:text-black transition-all duration-500 shadow-[0_0_20px_rgba(255,215,0,0.1)] group-hover:shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                                <benefit.icon className="w-8 h-8" />
                            </div>

                            <div className="space-y-3">
                                <h3 className="text-xl font-bold text-white group-hover:text-cinematic-yellow transition-colors">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
