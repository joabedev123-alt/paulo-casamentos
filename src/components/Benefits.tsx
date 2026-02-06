import { Heart, Camera, Sparkles, Users } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

const benefits = [
    {
        icon: Users,
        title: "Torna o casamento mais interativo",
        description: "Uma atração que movimenta a festa e diverte convidados de todas as idades.",
    },
    {
        icon: Heart,
        title: "Cria memórias afetivas",
        description: "Cada foto é uma lembrança física que seus amigos e familiares guardam com carinho.",
    },
    {
        icon: Camera,
        title: "Fotos personalizadas",
        description: "Layout exclusivo com a identidade visual do seu casamento.",
    },
    {
        icon: Sparkles,
        title: "Visual Elegante",
        description: "Estrutura moderna que combina perfeitamente com a decoração do seu evento.",
    },
];

export function Benefits() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Quero essa experiência no meu evento. Pode me passar um orçamento?");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section id="beneficios" className="bg-white py-12 px-4 md:py-32">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Lado do Conteúdo */}
                    <div className="space-y-10 order-2 lg:order-1">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Benefícios para <br />
                                <span className="text-yellow-500">seu casamento</span>
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                                Mais do que fotos, nós entregamos uma experiência. Veja por que ter a Cabine Megamix no seu grande dia:
                            </p>
                        </div>

                        <div className="grid gap-8">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-5 group">
                                    <div className="flex-shrink-0 w-14 h-14 bg-yellow-50 rounded-2xl flex items-center justify-center group-hover:bg-yellow-500 transition-colors duration-300">
                                        <benefit.icon className="w-7 h-7 text-yellow-600 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="pt-6">
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-black hover:bg-yellow-500 hover:text-black text-white font-bold px-8 py-4 rounded-xl text-lg transition-all transform hover:scale-105 shadow-lg"
                            >
                                <WhatsAppIcon className="w-6 h-6" />
                                Quero essa experiência no meu evento
                            </a>
                        </div>
                    </div>

                    {/* Lado da Imagem */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src="https://images.unsplash.com/photo-1545622783-b3e89f493b66?q=80&w=1974&auto=format&fit=crop"
                                alt="Convidados se divertindo na cabine de fotos"
                                className="w-full h-[400px] md:h-[600px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />

                            {/* Selo Flutuante */}
                            <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                                <p className="font-heading text-xl font-bold text-center text-gray-900">
                                    "Foi o ponto alto da festa! Todo mundo amou levar as fotos de lembrança."
                                </p>
                                <div className="flex justify-center gap-1 mt-3">
                                    {[...Array(5)].map((_, i) => (
                                        <Heart key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Elemento Decorativo */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-yellow-500/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
                    </div>
                </div>
            </div >
        </section >
    );
}
