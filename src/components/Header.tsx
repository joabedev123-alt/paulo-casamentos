import { useState, useEffect } from "react";
import { List, X, Whatsapp } from "react-bootstrap-icons";

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
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
        { label: "Quem Somos", id: "quem-somos" },
        { label: "Experiência", id: "experiencia" },
        { label: "Modelos", id: "modelos" },
        { label: "Diferenciais", id: "diferenciais" },
        { label: "Contato", id: "contato" },
    ];

    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled
                ? "py-4 bg-cinematic-black/90 backdrop-blur-md border-white/5"
                : "py-6 bg-transparent border-transparent"
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <div
                    className="cursor-pointer"
                    onClick={() => scrollToSection("home")}
                >
                    <img
                        src="/logo-megamix.png"
                        alt="Cabine Megamix"
                        className="h-12 w-auto object-contain brightness-0 invert"
                    />
                </div>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-sm font-medium text-gray-400 hover:text-white transition-colors uppercase tracking-widest relative group"
                        >
                            {item.label}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cinematic-yellow transition-all duration-300 group-hover:w-full" />
                        </button>
                    ))}
                </nav>

                {/* CTA Desktop */}
                <div className="hidden md:block">
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 border border-cinematic-yellow text-cinematic-yellow hover:bg-cinematic-yellow hover:text-black font-semibold px-6 py-2.5 transition-all duration-300 uppercase tracking-wider text-xs"
                    >
                        <Whatsapp className="w-4 h-4" />
                        Orçamento
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

            {/* Menu Mobile Fullscreen */}
            <div className={`fixed inset-0 bg-cinematic-black z-40 flex flex-col items-center justify-center transition-all duration-500 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
                <nav className="flex flex-col gap-8 text-center">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-2xl font-light text-white hover:text-cinematic-yellow transition-colors tracking-widest uppercase"
                        >
                            {item.label}
                        </button>
                    ))}
                    <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-8 flex items-center gap-3 bg-cinematic-yellow text-black font-bold px-8 py-4 rounded-none uppercase tracking-widest text-sm"
                    >
                        <Whatsapp className="w-5 h-5" />
                        Solicitar Orçamento
                    </a>
                </nav>
            </div>
        </header>
    );
}
