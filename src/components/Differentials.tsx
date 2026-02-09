import { Speedometer, PrinterFill, HouseDoorFill, PersonBadge, CpuFill, LayersFill } from "react-bootstrap-icons";

const items = [
    { icon: Speedometer, title: "Velocidade", desc: "Impressão em 12s" },
    { icon: PrinterFill, title: "Qualidade", desc: "Papel fotográfico Lab" },
    { icon: HouseDoorFill, title: "Estrutura", desc: "Cabines espaçosas" },
    { icon: PersonBadge, title: "Equipe", desc: "Operadores uniformizados" },
    { icon: CpuFill, title: "Tecnologia", desc: "Software de última geração" },
    { icon: LayersFill, title: "Acabamento", desc: "Layouts personalizados" },
];

export function Differentials() {
    return (
        <section id="diferenciais" className="py-16 md:py-24 bg-cinematic-black border-t border-white/5 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[url('/grid-pattern.png')] opacity-5 pointer-events-none" />

            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-12 md:mb-16 flex flex-col md:flex-row items-start md:items-end justify-between border-b border-white/10 pb-6 md:pb-8 gap-4">
                    <div>
                        <span className="text-cinematic-yellow uppercase tracking-widest text-xs font-bold">Specs</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Diferenciais <br />Técnicos</h2>
                    </div>
                    <div className="hidden md:block text-right text-gray-500 text-sm">
                        <p>Excelência em cada detalhe.</p>
                        <p>Garantia de satisfação.</p>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-white/10 border border-white/10">
                    {items.map((item, index) => (
                        <div key={index} className="bg-cinematic-black p-8 hover:bg-[#111] transition-colors group aspect-square flex flex-col items-center justify-center text-center">
                            <item.icon className="w-8 h-8 text-gray-600 group-hover:text-cinematic-yellow transition-colors mb-4" />
                            <h3 className="text-white font-bold text-lg mb-1">{item.title}</h3>
                            <p className="text-gray-500 text-xs">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
