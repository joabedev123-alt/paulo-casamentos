import { Speedometer2, PrinterFill, HouseDoorFill, PersonBadgeFill } from "react-bootstrap-icons";

const differentials = [
    {
        icon: Speedometer2,
        title: "Alta Performance",
        description: "Equipamentos de última geração para captura e impressão em segundos."
    },
    {
        icon: PrinterFill,
        title: "Impressão Premium",
        description: "Papel fotográfico de alta qualidade, resistente a água e com durabilidade de anos."
    },
    {
        icon: HouseDoorFill,
        title: "Cabine Espaçosa",
        description: "Estrutura confortável que comporta grupos, garantindo a diversão de todos."
    },
    {
        icon: PersonBadgeFill,
        title: "Operador Especializado",
        description: "Profissional treinado para auxiliar os convidados durante todo o evento."
    },
];

export function Differentials() {
    return (
        <section className="bg-cinematic-black text-white py-24 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Tecnologia e <span className="text-cinematic-yellow">Qualidade</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        Diferenciais que garantem o sucesso do seu evento.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {differentials.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center p-6 border border-white/5 rounded-2xl hover:bg-white/5 transition-colors">
                            <div className="mb-6 p-4 bg-cinematic-yellow/10 rounded-full text-cinematic-yellow">
                                <item.icon className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold mb-2 text-white">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
