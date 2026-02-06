import { HeartFill } from "react-bootstrap-icons";

export function EmotionalSection() {
    const whatsappLink = "https://wa.me/5544984458180?text=Olá! Quero meu casamento inesquecível.";

    return (
        <section className="relative py-40 flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070&auto=format&fit=crop"
                    alt="Wedding Emotion"
                    className="w-full h-full object-cover grayscale opacity-40"
                />
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            </div>

            <div className="relative z-10 text-center max-w-4xl px-6">
                <HeartFill className="w-12 h-12 text-cinematic-yellow mx-auto mb-8 animate-pulse-slow" />

                <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-8">
                    "O que fica no final <br />
                    são as <span className="text-cinematic-yellow italic">memórias</span>."
                </h2>

                <p className="text-xl text-gray-300 font-light mb-12">
                    Não deixe seus convidados saírem apenas com a lembrança do jantar. <br />
                    Entregue a eles um pedaço da felicidade desse dia.
                </p>

                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-white text-white hover:bg-white hover:text-black px-10 py-4 uppercase tracking-widest transition-all duration-300 font-bold"
                >
                    Eternizar meu Casamento
                </a>
            </div>
        </section>
    );
}
