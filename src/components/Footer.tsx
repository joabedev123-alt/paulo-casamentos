import { Instagram } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Footer() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    const instagramLink = "https://instagram.com/cabinemegamix";

    return (
        <footer id="contato" className="bg-black text-white pt-12 pb-10 px-4 border-t border-gray-800">
            <div className="max-w-7xl mx-auto">
                {/* Seção Principal de CTA (Topo) */}
                <div className="text-center mb-24 space-y-8 border-b border-gray-800/50 pb-20">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                        Seu evento merece mais do que fotos.<br />
                        <span className="text-yellow-500">Merece memórias.</span>
                    </h2>

                    <div className="flex flex-col items-center gap-4">
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-10 py-5 rounded-full text-xl transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(234,179,8,0.4)]"
                        >
                            <WhatsAppIcon className="w-7 h-7" />
                            Solicitar orçamento agora
                        </a>
                        <p className="text-gray-400 text-lg flex items-center gap-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            Atendimento via WhatsApp: 44 98445-8180
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
                                className="h-20 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Transformamos eventos em experiências inesquecíveis.
                            Tecnologia de ponta, equipamentos modernos e o melhor atendimento para o seu grande dia.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href={instagramLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-yellow-500 hover:text-black text-white p-3 rounded-xl transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-gray-800 hover:bg-green-500 hover:text-white text-white p-3 rounded-xl transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <WhatsAppIcon className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Coluna 2: Links Rápidos */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Navegação</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li>
                                <a href="#home" className="hover:text-yellow-500 transition-colors block py-1">Home</a>
                            </li>
                            <li>
                                <a href="#sobre" className="hover:text-yellow-500 transition-colors block py-1">Modelos</a>
                            </li>
                            <li>
                                <a href="#como-funciona" className="hover:text-yellow-500 transition-colors block py-1">Como Funciona</a>
                            </li>
                            <li>
                                <a href="#beneficios" className="hover:text-yellow-500 transition-colors block py-1">Benefícios</a>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 3: Contato */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Contato</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <WhatsAppIcon className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                                <span>(44) 98445-8180</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                                <span>Atendemos Casamentos, 15 anos e Corporativos</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                                <span>Maringá e Região</span>
                            </li>
                        </ul>
                    </div>

                    {/* Coluna 4: Resumo de Horários */}
                    <div>
                        <h4 className="text-lg font-bold text-white mb-6">Horário</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                                <span>Segunda a Sexta: 09h às 18h</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2" />
                                <span>Eventos: Todos os dias (24h)</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Rodapé (Copyright) */}
                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
                    <p>© {new Date().getFullYear()} Cabine Megamix. Todos os direitos reservados.</p>
                    <p className="flex items-center gap-2">
                        Produzida com <span className="text-green-500 text-sm">💚</span> por <a href="https://camaly.com.br/" target="_blank" rel="noopener noreferrer" className="font-bold hover:text-green-500 transition-colors">CAMALY</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
