import { useState, useEffect } from "react";
import { List, X, Whatsapp } from "react-bootstrap-icons";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        setIsMenuOpen(false);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    const navItems = [
        { label: "Início", id: "home" },
        { label: "Como Funciona", id: "como-funciona" },
        { label: "Benefícios", id: "beneficios" },
        { label: "Área de Atendimento", id: "area-atuacao" },
        { label: "Contato", id: "contato" },
    ];

    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "py-3 bg-cinematic-black/90 backdrop-blur-md shadow-lg border-b border-white/5" : "py-6 bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <img
                        src="/logo-megamix.png"
                        alt="Cabine Megamix Logo"
                        className={`transition-all duration-300 ${isScrolled ? "h-12" : "h-16"} w-auto object-contain`}
                    />
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-300 hover:text-cinematic-yellow font-medium transition-colors text-sm uppercase tracking-wide"
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
                        className="flex items-center gap-2 bg-cinematic-yellow hover:bg-yellow-400 text-black font-bold px-6 py-2.5 rounded-full text-sm transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(255,215,0,0.3)]"
                    >
                        <Whatsapp className="w-4 h-4" />
                        Solicitar Orçamento
                    </a>
                </div>

                {/* Botão Menu Mobile */}
                <button
                    className="md:hidden text-white p-2"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X className="w-8 h-8" /> : <List className="w-8 h-8" />}
                </button>
            </div>

            {/* Overlay Menu Mobile */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-cinematic-black/95 backdrop-blur-xl border-t border-white/10 p-4 shadow-2xl animate-fade-in-down">
                    <nav className="flex flex-col gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => scrollToSection(item.id)}
                                className="text-left text-gray-300 hover:text-cinematic-yellow font-medium py-3 transition-colors border-b border-white/5 last:border-0 text-lg"
                            >
                                {item.label}
                            </button>
                        ))}
                        <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 bg-cinematic-yellow text-black font-bold py-4 rounded-xl mt-4 text-lg"
                        >
                            <Whatsapp className="w-5 h-5" />
                            Solicitar Orçamento
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
