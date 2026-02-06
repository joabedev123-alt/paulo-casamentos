import { Whatsapp } from "react-bootstrap-icons";

export function WhatsAppButton() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-3 md:p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-green-500/30 flex items-center justify-center animate-bounce-slow min-w-[56px] min-h-[56px]"
            aria-label="Falar no WhatsApp"
        >
            <Whatsapp className="w-6 h-6 md:w-8 md:h-8" />
        </a>
    );
}
