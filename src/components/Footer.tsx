import { Instagram, Whatsapp, Envelope } from "react-bootstrap-icons";

export function Footer() {
    return (
        <footer className="bg-cinematic-black border-t border-white/10 pt-16 md:pt-24 pb-8 md:pb-12">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 mb-12 md:mb-20">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h2 className="text-2xl font-bold text-white mb-4 md:mb-6 tracking-tighter">MEGAMIX<span className="text-cinematic-yellow">.</span></h2>
                        <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                            Locação premium de cabines fotográficas para eventos inesquecíveis. Tecnologia, design e sofisticação.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-xs">Menu</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
                            <li><a href="#experiencia" className="hover:text-cinematic-yellow transition-colors">Experiência</a></li>
                            <li><a href="#modelos" className="hover:text-cinematic-yellow transition-colors">Nossos Modelos</a></li>
                            <li><a href="#diferenciais" className="hover:text-cinematic-yellow transition-colors">Diferenciais</a></li>
                            <li><a href="#contato" className="hover:text-cinematic-yellow transition-colors">Orçamento</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-xs">Fale Conosco</h3>
                        <ul className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-400">
                            <li className="flex items-center gap-3">
                                <Whatsapp className="text-cinematic-yellow flex-shrink-0" />
                                <span>(44) 98445-8180</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Envelope className="text-cinematic-yellow flex-shrink-0" />
                                <span>contato@cabinemegamix.com.br</span>
                            </li>
                            <li>
                                <a
                                    href="https://instagram.com/cabinemegamix"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 mt-2 text-white hover:text-cinematic-yellow transition-colors"
                                >
                                    <Instagram />
                                    <span>@cabinemegamix</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* CTA Final */}
                    <div className="md:col-span-1">
                        <h3 className="text-white font-bold mb-4 md:mb-6 uppercase tracking-wider text-xs">Vamos Conversar?</h3>
                        <p className="text-gray-500 text-sm md:text-base mb-4 md:mb-6">
                            Verifique a disponibilidade para a data do seu evento agora mesmo.
                        </p>
                        <a
                            href="https://wa.me/5544984458180"
                            target="_blank"
                            className="block w-full text-center bg-white text-black font-bold py-3 md:py-4 text-sm md:text-base hover:bg-cinematic-yellow transition-colors min-h-[48px]"
                        >
                            Chamar no WhatsApp
                        </a>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
                    <p>&copy; 2024 Cabine Megamix. Todos os direitos reservados.</p>
                    <p>Designed for Impact.</p>
                </div>
            </div>
        </footer>
    );
}
