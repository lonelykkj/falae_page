export default function Header() {
  return (
    <header className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-7">
      <a href="#topo" aria-label="Falaê — início" className="flex items-center gap-2.5 text-accent no-underline hover:text-accent">
        <svg width="56" height="44" viewBox="0 0 56 44" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 20c0-9 8-15 19-15s19 6 19 15-8 15-19 15c-3 0-6-.4-8.5-1.3L7 39l3.5-9C9 27.2 8 23.7 8 20z" />
          <path d="M20 20h14" />
        </svg>
      </a>
      <nav aria-label="Principal" className="flex flex-wrap items-center gap-x-10 gap-y-3 text-[17px]">
        <a href="#cursos" className="no-underline">Cursos</a>
        <a href="#planos" className="no-underline">Planos</a>
        <a href="#clube" className="no-underline">Entrar no clube</a>
        <button
          type="button"
          aria-label="Idioma do site: Português"
          className="flex min-h-11 cursor-pointer items-center gap-2.5 rounded-full border-2 border-link bg-transparent px-3.5 py-2 font-[inherit] text-sm text-link"
        >
          Português
          <svg width="12" height="8" viewBox="0 0 12 8" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M1 1l5 5 5-5" />
          </svg>
        </button>
      </nav>
    </header>
  )
}
