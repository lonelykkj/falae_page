import { useLeadForm } from '@/lib/useLeadForm'

export default function Club() {
  const { status, onSubmit } = useLeadForm('clube')

  return (
    <section id="clube" aria-labelledby="clube-t" className="mx-auto flex max-w-[1280px] flex-wrap items-center gap-14 px-6 py-16 md:py-30">
      <div className="min-w-0 flex-[1_1_480px]">
        <div className="mb-4 text-sm tracking-[0.2em] text-muted">08 / CLUBE</div>
        <h2 id="clube-t" className="m-0 mb-6 font-display text-[clamp(40px,5vw,72px)] font-bold leading-[0.95] tracking-[-0.04em] text-accent">
          Um cartão-postal por semana
        </h2>
        <p className="m-0 mb-8 max-w-[520px] text-base leading-[1.7] text-body">
          Toda segunda, uma expressão nova de algum canto do mundo, com pronúncia e contexto. Direto no seu e-mail.
        </p>
        <form onSubmit={onSubmit} className="flex max-w-[560px] flex-wrap gap-3">
          <label htmlFor="email" className="sr-only">Seu e-mail</label>
          <input
            id="email"
            name="email"
            required
            autoComplete="email"
            type="email"
            placeholder="seu@email.com"
            className="min-h-[54px] flex-[1_1_260px] rounded-full border-2 border-ink bg-transparent px-5 font-[inherit] text-base text-ink"
          />
          <button
            type="submit"
            disabled={status === 'sending'}
            className="min-h-[54px] cursor-pointer rounded-full border-0 bg-accent px-7 font-[inherit] text-base font-bold text-ink disabled:opacity-60"
          >
            {status === 'sending' ? 'Enviando…' : 'Entrar no clube'}
          </button>
        </form>
        <p role="status" aria-live="polite" className="m-0 mt-4 min-h-6 text-sm text-body">
          {status === 'done' && 'Você está dentro! O primeiro cartão-postal chega na próxima segunda.'}
          {status === 'error' && 'Não conseguimos cadastrar agora. Tente de novo em instantes.'}
        </p>
      </div>
      <div aria-hidden="true" className="flex min-w-0 flex-[1_1_380px] justify-center">
        <div className="lift reveal flex aspect-[3/2] w-[min(100%,460px)] gap-5 bg-card p-6 shadow-[0_18px_36px_rgba(50,30,10,.2)]" style={{ rotate: '3deg' }}>
          <div className="flex flex-1 flex-col justify-center gap-2.5 font-hand text-[30px] leading-[1.1] text-[#1F2A44]">
            <span>“Saudade”</span>
            <span className="font-sans text-[13px] text-muted">esta semana: palavras que não têm tradução</span>
          </div>
          <div className="flex w-[42%] flex-col items-end justify-between border-l-2 border-[#D8CFC2] pl-5">
            <div className="perf-sm h-[78px] w-16 p-[5px]">
              <div className="flex size-full items-center justify-center bg-accent font-serif text-[30px] text-cream">ã</div>
            </div>
            <div className="flex w-full flex-col gap-3.5">
              {[0, 1, 2].map((i) => (
                <div key={i} className="h-3.5 border-b-[1.5px] border-[#CFC5B7]" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
