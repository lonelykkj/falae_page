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
    <section aria-hidden="true" className="overflow-hidden bg-accent px-6 pb-16 pt-6 text-center text-cream">
      <div aria-hidden="true" className="-mx-6 overflow-hidden border-y-2 border-cream py-2.5">
        <div className="ticker flex w-max whitespace-nowrap font-hand text-[34px] font-bold leading-[1.2]">
          <Row />
          <Row />
        </div>
      </div>
    </section>
  )
}
