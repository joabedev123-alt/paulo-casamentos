import { Camera, Printer, StarFill, Whatsapp } from "react-bootstrap-icons";

export function Hero() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento para a Cabine Megamix.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="home" className="relative bg-cinematic-black text-white py-20 px-4 md:py-32 overflow-hidden min-h-screen flex items-center justify-center">
            {/* Imagem de Fundo Cinematic */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop"
                    alt="Celebração de Casamento"
                    className="w-full h-full object-cover opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cinematic-black via-cinematic-black/50 to-transparent" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0)_0%,rgba(5,5,5,0.8)_100%)]" />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto text-center space-y-10">
                {/* Selo */}
                <div className="inline-flex items-center gap-2 bg-cinematic-glass backdrop-blur-md px-5 py-2 rounded-full text-sm font-medium border border-white/10 animate-fade-in-up">
                    <StarFill className="w-3 h-3 text-cinematic-yellow" />
                    <span className="tracking-widest uppercase text-xs text-gray-300">Entretenimento Premium</span>
                </div>

                {/* Título Principal */}
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight animate-fade-in-up delay-100 drop-shadow-2xl">
                    Momentos únicos merecem <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        lembranças inesquecíveis
                    </span>
                </h1>

                {/* Subtítulo */}
                <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto animate-fade-in-up delay-200 font-light leading-relaxed">
                    Cabine de fotos premium para casamentos e eventos. <br className="hidden md:block" />
                    Impressão instantânea, diversão e memórias que ficam para sempre.
                </p>

                {/* Botão de Ação */}
                <div className="pt-6 animate-fade-in-up delay-300 flex flex-col md:flex-row items-center justify-center gap-6">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-cinematic-yellow hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-full text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(255,215,0,0.4)]"
                    >
                        <Whatsapp className="w-6 h-6" />
                        Solicitar orçamento agora
                    </a>
                </div>

                {/* Ícones de Destaque */}
                <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto animate-fade-in-up delay-500">
                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-cinematic-glass transition-colors">
                        <Camera className="w-8 h-8 text-cinematic-yellow" />
                        <span className="font-medium text-gray-200">Fotos Ilimitadas</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-cinematic-glass transition-colors">
                        <Printer className="w-8 h-8 text-cinematic-yellow" />
                        <span className="font-medium text-gray-200">Impressão na Hora</span>
                    </div>
                    <div className="flex flex-col items-center gap-3 p-4 rounded-xl hover:bg-cinematic-glass transition-colors">
                        <StarFill className="w-8 h-8 text-cinematic-yellow" />
                        <span className="font-medium text-gray-200">Experiência Premium</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
