import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppIcon } from "./WhatsAppIcon";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "Home", id: "home" },
        { label: "Sobre", id: "sobre" },
        { label: "Como Funciona", id: "como-funciona" },
        { label: "Benefícios", id: "beneficios" },
        { label: "Área de Atuação", id: "area-atuacao" },
        { label: "Contato", id: "contato" },
    ];

    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <header className="absolute top-0 left-0 right-0 z-50 py-6 bg-transparent">
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <img
                        src="/logo-megamix.png"
                        alt="Cabine Megamix Logo"
                        className="h-16 w-auto object-contain"
                    />
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-300 hover:text-yellow-500 font-medium transition-colors text-sm uppercase tracking-wide"
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>

                {/* CTA Desktop */}
                <div className="hidden md:block">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all transform hover:scale-105"
                    >
                        <WhatsAppIcon className="w-4 h-4" />
                        Orçamento
                    </a>
                </div>

                {/* Botão Menu Mobile */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Overlay Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-md border-t border-white/10 p-4 shadow-xl">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-gray-300 hover:text-yellow-500 font-medium py-2 transition-colors border-b border-white/5 last:border-0"
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-yellow-500 text-black font-bold py-3 rounded-xl mt-4"
                        >
                            <WhatsAppIcon className="w-5 h-5" />
                            Solicitar Orçamento
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
