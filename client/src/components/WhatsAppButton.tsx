import { MessageCircle } from 'lucide-react';

// 07037785676 in international format for wa.me (Nigeria +234, drop leading 0)
const WHATSAPP_NUMBER = '2347037785676';
const PREFILLED_MESSAGE = "Hello ESPEFAWIS, I'd like to make an enquiry.";

export default function WhatsAppButton() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(PREFILLED_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-200"
    >
      <MessageCircle size={28} fill="currentColor" className="text-white" />
    </a>
  );
}
