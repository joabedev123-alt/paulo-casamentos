import { GeoAltFill } from "react-bootstrap-icons";

const cities = ["Umuarama", "Cascavel", "Toledo", "Palotina", "Maringá", "Londrina", "Cianorte"];

export function ServiceArea() {
    return (
        <section className="py-24 bg-[#080808] border-t border-white/5">
            <div className="container mx-auto px-6 text-center">
                <div className="inline-block p-4 rounded-full bg-white/5 mb-8">
                    <GeoAltFill className="w-6 h-6 text-cinematic-yellow" />
                </div>

                <h2 className="text-3xl font-bold text-white mb-12">
                    Atendemos em todo o <span className="text-cinematic-yellow">Paraná</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
                    {cities.map((city, index) => (
                        <span
                            key={index}
                            className="px-6 py-3 rounded-full bg-cinematic-black border border-white/10 text-gray-400 hover:text-white hover:border-cinematic-yellow transition-all cursor-default text-lg"
                        >
                            {city}
                        </span>
                    ))}
                    <span className="px-6 py-3 rounded-full bg-cinematic-yellow text-black font-bold border border-cinematic-yellow">
                        + Região
                    </span>
                </div>
            </div>
        </section>
    );
}
