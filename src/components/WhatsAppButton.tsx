import { whatsappLink } from '@/data/site'

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappLink('Olá! Vim pelo site da Falaê e gostaria de saber mais.')}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a Falaê no WhatsApp"
      className="btn fixed bottom-5 right-5 z-50 inline-flex min-h-[52px] items-center gap-2 rounded-full bg-[#25D366] px-4 text-base sm:px-5 font-bold text-ink no-underline shadow-[0_8px_20px_rgba(0,0,0,.25)] hover:text-ink"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2zm5.2 13.9c-.2.6-1.300 1.200-1.800 1.200-.5.1-1 .2-3.300-.7-2.800-1.100-4.600-4-4.700-4.200-.1-.2-1.100-1.500-1.100-2.800s.7-2 1-2.300c.2-.3.500-.3.700-.3h.5c.2 0 .4 0 .6.500l.8 1.900c.1.200.1.400 0 .5l-.4.600c-.1.200-.3.300-.1.600.2.300.8 1.300 1.700 2.100 1.100 1 2.100 1.300 2.400 1.500.3.100.5.100.6-.1l.9-1.100c.2-.3.400-.2.600-.1l1.800.9c.3.100.5.200.5.300.1.200.1.800-.1 1.400z" />
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  )
}
