const words = ['Hello', '¡Hola!', 'Bonjour', 'Ciao', 'Hallo', 'こんにちは', 'Olá', 'Hej', 'Merhaba']

function Row() {
  return (
    <div className="flex gap-12 pr-12">
      {words.map((w) => (
        <span key={w} className="contents">
          <span>{w}</span>
          <span>✳</span>
        </span>
      ))}
    </div>
  )
}

export default function Tagline() {
  return (
    <section aria-label="Chamada" className="overflow-hidden bg-accent px-6 pb-22 pt-6 text-center text-cream">
      <div aria-hidden="true" className="-mx-6 mb-12 overflow-hidden border-y-2 border-cream py-2.5">
        <div className="ticker flex w-max whitespace-nowrap font-hand text-[34px] font-bold leading-[1.2]">
          <Row />
          <Row />
        </div>
      </div>
      <p className="mx-auto max-w-[900px] whitespace-pre-line text-[clamp(22px,3vw,36px)] leading-[1.35]">
        {'Fale com o mundo.\nAprenda um idioma como quem viaja.'}
      </p>
      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <a href="#nivel" className="btn inline-flex min-h-[52px] items-center rounded-full bg-cream px-7 text-base font-bold text-ink no-underline hover:text-ink">
          Fazer teste de nível
        </a>
        <a href="#cursos" className="btn inline-flex min-h-[52px] items-center rounded-full bg-ink px-7 text-base font-bold text-cream no-underline hover:text-cream">
          Ver cursos →
        </a>
      </div>
    </section>
  )
}
