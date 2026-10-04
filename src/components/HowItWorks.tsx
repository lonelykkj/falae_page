const steps = [
  { n: '01', title: 'Faça o teste de nível', text: 'Um teste rápido online mostra de onde você parte. Sem prova chata, sem pressão.', bg: 'bg-accent', fg: 'text-cream', rot: '-rotate-6' },
  { n: '02', title: 'Monte seu roteiro', text: 'Escolha idioma, horário e formato: turma ao vivo, aula particular ou os dois.', bg: 'bg-[#F5D33F]', fg: 'text-ink', rot: 'rotate-5' },
  { n: '03', title: 'Embarque', text: 'Aulas em turmas pequenas, conversação desde o primeiro dia e um certificado a cada nível concluído.', bg: 'bg-[#2F4B7C]', fg: 'text-cream', rot: '-rotate-3' },
]

export default function HowItWorks() {
  return (
    <section aria-labelledby="como-t" className="mx-auto max-w-[1280px] px-6 pb-16 md:pb-30 pt-12 md:pt-25">
      <div className="mb-4 text-sm tracking-[0.2em] text-muted">02 / COMO FUNCIONA</div>
      <h2 id="como-t" className="m-0 mb-14 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
        Três carimbos até a fluência
      </h2>
      <ol className="m-0 grid list-none grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))] gap-10 p-0">
        {steps.map((s) => (
          <li key={s.n} className="flex flex-col gap-[18px]">
            <div
              aria-hidden="true"
              className={`wobble reveal perf-lg h-40 w-[132px] p-[9px] drop-shadow-[0_8px_12px_rgba(40,25,10,.2)] ${s.rot}`}
            >
              <div className={`flex size-full items-center justify-center border-4 border-stamp font-display text-[56px] font-extrabold ${s.bg} ${s.fg}`}>
                {s.n}
              </div>
            </div>
            <h3 className="m-0 font-display text-[26px] font-bold">{s.title}</h3>
            <p className="m-0 text-[15px] leading-[1.6] text-body">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
