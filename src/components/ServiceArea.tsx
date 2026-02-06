import { GeoAltFill, CheckCircleFill } from "react-bootstrap-icons";

export function ServiceArea() {
    const cities = ["Umuarama", "Cascavel", "Toledo", "Palotina", "Oeste e Noroeste do Paraná"];

    return (
        <section id="area-atuacao" className="bg-cinematic-black text-white py-24 px-4 border-t border-white/5">
            <div className="container mx-auto max-w-4xl text-center">
                <div className="inline-flex items-center justify-center p-4 bg-cinematic-yellow/10 rounded-full mb-8 animate-pulse">
                    <GeoAltFill className="w-8 h-8 text-cinematic-yellow" />
                </div>

                <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                    Onde <span className="text-cinematic-yellow">Atendemos</span>
                </h2>
                <p className="text-gray-400 mb-12 max-w-xl mx-auto">
                    Levamos a Cabine Megamix para onde seu sonho acontecer. Confira nossa região de atuação.
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {cities.map((city, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2 px-6 py-3 bg-white/5 rounded-full border border-white/10 hover:border-cinematic-yellow hover:text-cinematic-yellow transition-all duration-300 cursor-default group"
                        >
                            <CheckCircleFill className="w-4 h-4 text-gray-500 group-hover:text-cinematic-yellow transition-colors" />
                            <span className="font-medium text-lg">{city}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
