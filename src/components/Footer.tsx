import { Instagram, Whatsapp, GeoAlt } from "react-bootstrap-icons";

export function Footer() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const instagramLink = "https://instagram.com/cabinemegamix";

    const currentYear = new Date().getFullYear();

    return (
        <footer id="contato" className="bg-black text-white pt-20 pb-10 px-4 border-t border-white/10">
            <div className="container mx-auto max-w-7xl">
                {/* Seção Principal de CTA (Topo) */}
                <div className="text-center mb-20 space-y-8 border-b border-white/10 pb-20">
                    <h2 className="text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                        Seu evento não acontece duas vezes.<br />
                        <span className="text-cinematic-yellow">As memórias sim.</span>
                    </h2>

                    <div className="flex flex-col items-center gap-6">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-cinematic-yellow hover:bg-yellow-400 text-black font-bold px-12 py-5 rounded-full text-xl transition-all transform hover:scale-105 shadow-[0_0_40px_rgba(255,215,0,0.3)]"
                        >
                            <Whatsapp className="w-6 h-6" />
                            Solicitar orçamento pelo WhatsApp
                        </a>
                        <p className="text-gray-400 text-lg flex items-center gap-2 font-light">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                            Atendimento imediato: 44 98445-8180
                        </p>
                    </div>
                </div>

                {/* Conteúdo Multi-colunas (Meio) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Coluna 1: Marca */}
                    <div className="space-y-6">
                        <div className="mb-4">
                            <img
                                src="/logo-megamix.png"
                                alt="Cabine Megamix Logo"
                                className="h-20 w-auto object-contain brightness-0 invert opacity-90"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Especialistas em eternizar sorrisos. A melhor experiência em cabines de foto para casamentos e eventos premium.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-cinematic-yellow hover:text-black transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-green-500 hover:text-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <Whatsapp className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Navegação */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-cinematic-yellow pl-3">Navegação</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li><a href="#home" className="hover:text-cinematic-yellow transition-colors block py-1">Início</a></li>
                            <li><a href="#como-funciona" className="hover:text-cinematic-yellow transition-colors block py-1">Como Funciona</a></li>
                            <li><a href="#beneficios" className="hover:text-cinematic-yellow transition-colors block py-1">Benefícios</a></li>
                            <li><a href="#area-atuacao" className="hover:text-cinematic-yellow transition-colors block py-1">Onde Atendemos</a></li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-cinematic-yellow pl-3">Contato</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <Whatsapp className="w-5 h-5 text-cinematic-yellow flex-shrink-0 mt-0.5" />
                                <span>(44) 98445-8180</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <GeoAlt className="w-5 h-5 text-cinematic-yellow flex-shrink-0 mt-0.5" />
                                <span>Maringá e toda região Oeste/Noroeste do PR</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Eventos */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6 border-l-4 border-cinematic-yellow pl-3">Tipos de Evento</h4>
                        <ul className="space-y-3 text-gray-400 text-sm">
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full" />
                                Casamentos
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full" />
                                15 Anos
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full" />
                                Formaturas
                            </li>
                            <li className="flex items-center gap-2">
                                <span className="w-1.5 h-1.5 bg-cinematic-yellow rounded-full" />
                                Eventos Corporativos
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rodapé (Copyright) */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {currentYear} Cabine Megamix. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-1 opacity-50 hover:opacity-100 transition-opacity">
                        Design Premium &cinematic
                    </p>
                </div>
            </div>
        </footer>
    );
}
