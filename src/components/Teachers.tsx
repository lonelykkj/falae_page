const teachers = [
  { name: 'Helena Prado', lang: 'Inglês', bio: 'Dez anos de aulas em Londres e Dublin. Foco em conversação para o trabalho.', bg: 'bg-[#2F4B7C]', rot: '-1.5deg' },
  { name: 'Diego Ferrer', lang: 'Espanhol', bio: 'Madrilenho, professor há oito anos. Sotaques da Espanha e da América Latina.', bg: 'bg-[#E2553A]', rot: '1deg' },
  { name: 'Camille Roux', lang: 'Francês', bio: 'Nascida em Lyon, preparadora para DELF e DALF. Pronúncia sem mistério.', bg: 'bg-[#6A4C93]', rot: '-0.5deg' },
  { name: 'Kenji Okada', lang: 'Japonês', bio: 'De Quioto para São Paulo. Do hiragana à conversa de viagem, passo a passo.', bg: 'bg-[#3E7C5E]', rot: '1.5deg' },
]

export default function Teachers() {
  return (
    <section id="professores" aria-labelledby="prof-t" className="mx-auto max-w-[1280px] px-6 pb-16 md:pb-30 pt-12 md:pt-25">
      <div className="mb-4 text-sm tracking-[0.2em] text-muted">03 / PROFESSORES</div>
      <h2 id="prof-t" className="m-0 mb-14 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
        Quem vai te guiar
      </h2>
      <ul className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-10 p-0">
        {teachers.map((t) => (
          <li
            key={t.name}
            className="lift reveal flex flex-col gap-4 bg-card px-3.5 pb-6 pt-3.5 shadow-[0_14px_30px_rgba(50,30,10,.14)]"
            style={{ rotate: t.rot }}
          >
            <div aria-hidden="true" className={`flex h-[180px] items-center justify-center font-display text-[84px] font-extrabold text-cream ${t.bg}`}>
              {t.name[0]}
            </div>
            <div className="flex flex-col gap-2 px-1.5">
              <h3 className="m-0 font-display text-2xl font-bold text-ink">{t.name}</h3>
              <span className="text-[13px] tracking-[0.1em] text-muted">PROFESSOR(A) DE {t.lang.toUpperCase()}</span>
              <p className="m-0 text-sm leading-[1.6] text-body">{t.bio}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
