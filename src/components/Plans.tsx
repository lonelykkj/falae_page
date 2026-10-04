interface Plan {
  name: string
  unit: string
  items: string[]
  cta: string
  badge?: string
  dark?: boolean
  rot: string
}

const plans: Plan[] = [
  { name: 'BILHETE AVULSO', unit: '/aula', items: ['Aula particular de 50 min', 'Horário flexível', 'Qualquer idioma'], cta: 'Comprar bilhete', rot: '-2deg' },
  { name: 'PASSE MENSAL', unit: '/mês', items: ['2 aulas ao vivo por semana', 'Clube de conversação', 'Material digital incluso'], cta: 'Começar agora', badge: 'MAIS ESCOLHIDO', dark: true, rot: '1.5deg' },
  { name: 'PASSAPORTE ANUAL', unit: '/ano', items: ['Tudo do passe mensal', 'Troque de idioma quando quiser', 'Certificado por nível'], cta: 'Garantir passaporte', rot: '-1deg' },
]

export default function Plans() {
  return (
    <section id="planos" aria-labelledby="planos-t" className="bg-accent px-6 pb-32 pt-[110px]">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-4 text-sm tracking-[0.2em] text-cream">03 / PLANOS</div>
        <h2 id="planos-t" className="m-0 mb-14 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-cream">
          Escolha sua passagem
        </h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,320px),1fr))] items-start gap-8">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`lift reveal flex flex-col gap-5 p-8 ${
                p.dark
                  ? 'bg-ink text-cream shadow-[0_16px_34px_rgba(60,20,0,.3)]'
                  : 'bg-card text-ink shadow-[0_16px_34px_rgba(60,20,0,.25)]'
              }`}
              style={{ rotate: p.rot }}
            >
              <div className="flex items-center justify-between gap-3">
                <span className={`text-[13px] tracking-[0.2em] ${p.dark ? 'text-[#D8CFC2]' : 'text-muted'}`}>{p.name}</span>
                {p.badge && (
                  <span className="rounded-full bg-[#F5D33F] px-2.5 py-1.5 text-xs font-bold text-ink">{p.badge}</span>
                )}
              </div>
              <div className="font-display text-[44px] font-extrabold tracking-[-0.03em]">
                [PREÇO]
                <span className="font-sans text-[15px] font-normal tracking-normal"> {p.unit}</span>
              </div>
              <div className={`border-t-2 border-dashed ${p.dark ? 'border-[#5A4F44]' : 'border-[#B9AE9C]'}`} />
              <ul className="m-0 pl-[18px] text-[15px] leading-[1.9]">
                {p.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <a
                href="#nivel"
                className={`inline-flex min-h-[52px] items-center justify-center rounded-full font-bold no-underline ${
                  p.dark
                    ? 'bg-cream text-ink hover:text-ink'
                    : 'border-2 border-ink text-ink hover:text-ink'
                }`}
              >
                {p.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
