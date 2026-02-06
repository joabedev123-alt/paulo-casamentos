import { HeartFill, Whatsapp } from "react-bootstrap-icons";

export function EmotionalSection() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Quero transformar meu casamento em uma experiência inesquecível!");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="relative py-32 px-4 overflow-hidden">
            {/* Background Image with Blur */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1511285560982-1351cdeb9821?q=80&w=1974&auto=format&fit=crop"
                    alt="Casamento Emocionante"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-cinematic-black/80 backdrop-blur-sm" />
                <div className="absolute inset-0 bg-gradient-to-r from-cinematic-black via-transparent to-cinematic-black" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
                <div className="inline-flex items-center gap-2 text-cinematic-yellow mb-4 animate-pulse">
                    <HeartFill className="w-5 h-5" />
                    <span className="uppercase tracking-widest text-sm font-bold">Amor em cada detalhe</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white drop-shadow-xl">
                    Transforme seu casamento em uma <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cinematic-yellow to-yellow-200">
                        experiência inesquecível
                    </span>
                </h2>

                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto font-light">
                    O dia mais importante da sua vida passa rápido, mas as memórias podem durar para sempre.
                    Nossa cabine não entrega apenas fotos, ela captura sorrisos, abraços e a alegria espontânea de quem você ama.
                </p>

                <div className="pt-8">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-white hover:bg-cinematic-yellow hover:text-black text-black font-bold px-10 py-5 rounded-full text-lg transition-all transform hover:scale-105 shadow-2xl"
                    >
                        <Whatsapp className="w-5 h-5" />
                        Quero essa experiência no meu evento
                    </a>
                </div>
            </div>
        </section>
    );
}
