import { whatsappLink } from '@/data/site'

export default function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] border-t-2 border-ink px-6 pt-10 pb-0">
      <div className="flex flex-wrap justify-between gap-6 text-sm text-body">
        <span>© 2026 Falaê · Escola de Idiomas</span>
        <nav aria-label="Rodapé" className="flex flex-wrap gap-x-7 gap-y-3">
          <a href="#cursos">Cursos</a>
          <a href="#planos">Planos</a>
          <a href="#clube">Clube</a>
          <a href="#faq">Dúvidas</a>
          <a href={whatsappLink('Olá! Vim pelo site da Falaê.')} target="_blank" rel="noreferrer">WhatsApp</a>
        </nav>
      </div>
      <div
        aria-hidden="true"
        className="mt-8 translate-y-[12%] whitespace-nowrap text-center font-display text-[min(31vw,420px)] font-bold leading-[0.78] tracking-[-0.05em] text-accent"
      >
        FALAÊ
      </div>
    </footer>
  )
}
