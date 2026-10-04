const quotes = [
  { text: 'Em quatro meses saí do “hello” travado para uma reunião inteira em inglês. As turmas pequenas fazem toda a diferença.', name: 'Rafaela M.', meta: 'Inglês · Designer', rot: '-1.5deg' },
  { text: 'Viajei para a Itália e consegui pedir, perguntar e até conversar com o dono do hotel. Valeu cada aula.', name: 'Bruno T.', meta: 'Italiano · Engenheiro', rot: '1deg' },
  { text: 'Os horários flexíveis salvaram minha rotina. E a professora corrige sem me deixar com vergonha.', name: 'Carolina S.', meta: 'Espanhol · Advogada', rot: '-0.5deg' },
]

export default function Testimonials() {
  return (
    <section aria-labelledby="dep-t" className="mx-auto max-w-[1280px] px-6 py-16 md:py-30">
      <div className="mb-4 text-sm tracking-[0.2em] text-muted">05 / DEPOIMENTOS</div>
      <h2 id="dep-t" className="m-0 mb-14 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
        Cartões de quem já embarcou
      </h2>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,300px),1fr))] gap-10">
        {quotes.map((q) => (
          <figure
            key={q.name}
            className="lift reveal m-0 flex flex-col justify-between gap-6 bg-card p-8 shadow-[0_14px_30px_rgba(50,30,10,.14)]"
            style={{ rotate: q.rot }}
          >
            <blockquote className="m-0 font-hand text-[28px] leading-[1.2] text-[#1F2A44]">“{q.text}”</blockquote>
            <figcaption className="border-t-2 border-dashed border-[#B9AE9C] pt-4 text-sm text-body">
              <strong className="font-bold text-ink">{q.name}</strong> · {q.meta}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
