import { courses } from '@/data/courses'

export default function Courses() {
  return (
    <section id="cursos" aria-labelledby="cursos-t" className="mx-auto max-w-[1280px] px-6 pb-10 pt-16 md:pt-30">
      <div className="mb-14 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-4 text-sm tracking-[0.2em] text-muted">01 / CURSOS</div>
          <h2 id="cursos-t" className="m-0 font-display text-[clamp(48px,8vw,112px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
            Escolha seu destino
          </h2>
        </div>
        <p className="m-0 max-w-[360px] text-base leading-[1.6] text-body">
          Cada idioma é uma viagem. Do primeiro “olá” à conversa fluente, com turmas ao vivo e material próprio.
        </p>
      </div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,340px),1fr))] gap-x-10 gap-y-12">
        {courses.map((c) => (
          <article
            key={c.lang}
            className="lift reveal flex flex-col gap-[18px] bg-card px-3.5 pb-[22px] pt-3.5 shadow-[0_14px_30px_rgba(50,30,10,.14)]"
            style={{ rotate: c.tilt }}
          >
            <div className="relative h-[220px] overflow-hidden" style={{ background: c.photo }}>
              <div className="absolute right-[22px] top-[22px] size-[70px] rounded-full" style={{ background: c.sun }} />
              <div className="absolute inset-x-0 bottom-0 h-16" style={{ background: c.ground }} />
              <div className="absolute bottom-[74px] left-[22px] font-hand text-[56px] font-bold leading-none" style={{ color: c.ink }}>
                {c.greet}
              </div>
            </div>
            <div className="flex flex-col gap-2.5 px-1.5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="m-0 font-display text-[32px] font-bold tracking-[-0.02em] text-ink">{c.lang}</h3>
                <span className="text-[13px] text-muted">{c.no}</span>
              </div>
              <p className="m-0 text-sm leading-[1.6] text-body">
                Níveis {c.levels} · módulo de {c.duration}
                <br />
                Turmas de até {c.classSize} alunos
              </p>
              <a href="#planos" className="inline-flex min-h-11 items-center text-[15px] font-bold">
                Ver turmas →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
