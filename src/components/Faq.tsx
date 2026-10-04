import { whatsappLink } from '@/data/site'

const faqs = [
  { q: 'Preciso saber algo do idioma para começar?', a: 'Não. Existe turma de A1 para quem nunca estudou. Se já tem alguma base, o teste de nível indica a turma certa.' },
  { q: 'Como funcionam as aulas?', a: 'São ao vivo, online, em turmas de até 8 alunos, com conversação desde o primeiro dia. As gravações ficam disponíveis para rever.' },
  { q: 'Posso trocar de horário ou de idioma?', a: 'O horário você ajusta mensalmente. A troca de idioma a qualquer momento está inclusa no Passaporte Anual.' },
  { q: 'Tem certificado?', a: 'Sim, um certificado a cada nível concluído, nos planos Passe Mensal e Passaporte Anual.' },
  { q: 'Como cancelo?', a: 'Sem multa. O Passe Mensal pode ser cancelado quando quiser, e o cancelamento vale a partir do ciclo seguinte.' },
]

export default function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-t" className="mx-auto max-w-[900px] px-6 pb-16 md:pb-30 pt-10">
      <div className="mb-4 text-sm tracking-[0.2em] text-muted">07 / PERGUNTAS FREQUENTES</div>
      <h2 id="faq-t" className="m-0 mb-12 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
        Antes de embarcar
      </h2>
      <div className="border-t-2 border-ink">
        {faqs.map((f) => (
          <details key={f.q} className="group border-b-2 border-ink">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-xl font-bold text-ink [&::-webkit-details-marker]:hidden">
              {f.q}
              <span aria-hidden="true" className="text-2xl text-accent transition-transform group-open:rotate-45">+</span>
            </summary>
            <p className="m-0 max-w-[680px] pb-6 text-[15px] leading-[1.7] text-body">{f.a}</p>
          </details>
        ))}
      </div>
      <p className="mt-8 text-base text-body">
        Ficou com outra dúvida?{' '}
        <a href={whatsappLink('Olá! Tenho uma dúvida sobre os cursos.')} target="_blank" rel="noreferrer" className="font-bold">
          Chame a gente no WhatsApp →
        </a>
      </p>
    </section>
  )
}
