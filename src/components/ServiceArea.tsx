import { MapPin } from "lucide-react";

export function ServiceArea() {
    const cities = ["Umuarama", "Cascavel", "Toledo", "Palotina", "Oeste e Noroeste do Paraná"];

    return (
        <section id="area-atuacao" className="bg-gray-900 text-white py-20 px-4 md:py-32">
            <div className="max-w-4xl mx-auto text-center">
                <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
                <h2 className="text-3xl md:text-4xl font-bold mb-12">Área de Atendimento</h2>

                <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                    {cities.map((city, index) => (
                        <span
                            key={index}
                            className="px-6 py-3 bg-white/10 rounded-full border border-white/20 text-lg hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 cursor-default"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </div>
        </section>
    );
}
