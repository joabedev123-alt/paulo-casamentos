import { WhatsAppIcon } from "./WhatsAppIcon";

export function WhatsAppButton() {
    const whatsappNumber = "5544984458180";
    const whatsappMessage = encodeURIComponent("Olá! Vim pelo site e gostaria de um orçamento.");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-400 text-white p-4 rounded-full shadow-lg transition-all hover:scale-110 hover:shadow-green-500/30 flex items-center justify-center"
            aria-label="Falar no WhatsApp"
        >
            <WhatsAppIcon className="w-8 h-8" />
        </a>
    );
}
