import { useEffect, useState } from 'react'

const links = [
  { href: '#cursos', label: 'Cursos' },
  { href: '#planos', label: 'Planos' },
  { href: '#professores', label: 'Professores' },
  { href: '#faq', label: 'Dúvidas' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.matchMedia('(min-width: 768px)').matches && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-paper/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-6 py-4 md:py-6">
        <a href="#topo" onClick={close} aria-label="Falaê — início" className="flex items-center gap-2.5 text-accent no-underline hover:text-accent">
          <svg className="h-9 w-auto md:h-11" width="56" height="44" viewBox="0 0 56 44" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 20c0-9 8-15 19-15s19 6 19 15-8 15-19 15c-3 0-6-.4-8.5-1.3L7 39l3.5-9C9 27.2 8 23.7 8 20z" />
            <path d="M20 20h14" />
          </svg>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-x-6 text-[17px] md:flex lg:gap-x-10">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="no-underline">{l.label}</a>
          ))}
          <a href="#nivel" className="inline-flex min-h-11 items-center rounded-full bg-accent px-5 text-sm font-bold text-ink no-underline hover:text-ink">
            Teste de nível
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((o) => !o)}
          className="flex size-11 cursor-pointer items-center justify-center rounded-full border-2 border-ink bg-transparent text-ink md:hidden"
        >
          <svg width="20" height="14" viewBox="0 0 20 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M3 1l14 12M17 1L3 13" /> : <path d="M1 1h18M1 7h18M1 13h18" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" aria-label="Menu mobile" className="border-t-2 border-ink bg-paper px-6 pb-6 pt-2 md:hidden">
          <ul className="m-0 flex list-none flex-col p-0">
            {links.map((l) => (
              <li key={l.href} className="border-b border-[#B9AE9C]">
                <a href={l.href} onClick={close} className="flex min-h-14 items-center font-display text-xl font-bold no-underline">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a href="#nivel" onClick={close} className="mt-5 flex min-h-[52px] items-center justify-center rounded-full bg-accent text-base font-bold text-ink no-underline hover:text-ink">
            Fazer teste de nível
          </a>
        </nav>
      )}
    </header>
  )
}
