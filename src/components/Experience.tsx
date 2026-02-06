import { People, HeartFill, CameraFill, Gem } from "react-bootstrap-icons";

const experiences = [
    {
        icon: People,
        title: "Entretenimento",
        description: "A atração principal da sua festa. Diverte convidados de todas as idades em casamentos, corporativos e aniversários.",
    },
    {
        icon: HeartFill,
        title: "Memória da Marca",
        description: "Mais que uma foto, uma conexão. Personalize com sua marca ou identidade visual do evento.",
    },
    {
        icon: CameraFill,
        title: "Qualidade Studio",
        description: "Câmeras DSLR profissionais e iluminação de cinema. Todos saem incríveis na foto.",
    },
    {
        icon: Gem,
        title: "Design de Luxo",
        description: "Estruturas sofisticadas que compõem a decoração do seu evento, sem poluição visual.",
    },
];

export function Experience() {
    return (
        <section id="experiencia" className="py-24 bg-cinematic-black relative">
            <div className="container mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        A Experiência <span className="text-cinematic-yellow">Megamix</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light">
                        Elevamos o padrão do entretenimento. Detalhes pensados para impressionar.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {experiences.map((item, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#1A1A1A] p-8 rounded-sm hover:-translate-y-2 transition-all duration-500 border border-white/5 hover:border-cinematic-yellow/50"
                        >
                            {/* Inner Glow */}
                            <div className="absolute inset-0 bg-gradient-to-b from-cinematic-yellow/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10 flex flex-col items-start gap-6">
                                <item.icon className="w-10 h-10 text-gray-500 group-hover:text-cinematic-yellow transition-colors duration-500" />

                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cinematic-yellow transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed border-l border-white/10 pl-4 group-hover:border-cinematic-yellow transition-colors">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
