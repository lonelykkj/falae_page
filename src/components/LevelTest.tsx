import { courses } from '@/data/courses'
import { whatsappLink } from '@/data/site'
import { useLeadForm } from '@/lib/useLeadForm'

const input =
  'min-h-[54px] w-full rounded-lg border-2 border-ink bg-cream px-4 font-[inherit] text-base text-ink'
const label = 'mb-2 block text-sm tracking-[0.1em] text-muted'

export default function LevelTest() {
  const { status, onSubmit } = useLeadForm('nivel')

  return (
    <section id="nivel" aria-labelledby="nivel-t" className="mx-auto flex max-w-[1280px] flex-wrap gap-14 px-6 py-16 md:py-30">
      <div className="min-w-0 flex-[1_1_380px]">
        <div className="mb-4 text-sm tracking-[0.2em] text-muted">06 / TESTE DE NÍVEL</div>
        <h2 id="nivel-t" className="m-0 mb-6 font-display text-[clamp(44px,6vw,88px)] font-bold leading-[0.9] tracking-[-0.04em] text-accent">
          Descubra de onde você parte
        </h2>
        <p className="m-0 max-w-[460px] text-base leading-[1.7] text-body">
          Deixe seus dados e a gente envia o teste online, de uns 15 minutos, junto com a sugestão de turma. Sem custo e sem compromisso.
        </p>
      </div>
      <form
        onSubmit={onSubmit}
        className="flex min-w-0 flex-[1_1_420px] flex-col gap-5 bg-card p-8 shadow-[0_14px_30px_rgba(50,30,10,.14)]"
      >
        <div>
          <label htmlFor="nivel-nome" className={label}>Nome</label>
          <input id="nivel-nome" name="nome" type="text" required autoComplete="name" className={input} />
        </div>
        <div>
          <label htmlFor="nivel-email" className={label}>E-mail</label>
          <input id="nivel-email" name="email" type="email" required autoComplete="email" placeholder="seu@email.com" className={input} />
        </div>
        <div>
          <label htmlFor="nivel-whats" className={label}>WhatsApp</label>
          <input id="nivel-whats" name="whatsapp" type="tel" required autoComplete="tel" placeholder="(11) 91234-5678" className={input} />
        </div>
        <div>
          <label htmlFor="nivel-idioma" className={label}>Idioma</label>
          <select id="nivel-idioma" name="idioma" required defaultValue="" className={input}>
            <option value="" disabled>Escolha um idioma</option>
            {courses.map((c) => (
              <option key={c.lang} value={c.lang}>{c.lang}</option>
            ))}
          </select>
        </div>
        <button
          type="submit"
          disabled={status === 'sending'}
          className="min-h-[54px] cursor-pointer rounded-full border-0 bg-accent px-7 font-[inherit] text-base font-bold text-ink disabled:opacity-60"
        >
          {status === 'sending' ? 'Enviando…' : 'Quero fazer o teste'}
        </button>
        <p role="status" aria-live="polite" className="m-0 min-h-6 text-sm text-body">
          {status === 'done' && 'Recebido! Vamos te chamar no WhatsApp com o link do teste.'}
          {status === 'error' && (
            <>
              Não conseguimos enviar agora.{' '}
              <a href={whatsappLink('Olá! Quero fazer o teste de nível.')}>Fale com a gente no WhatsApp</a>.
            </>
          )}
        </p>
      </form>
    </section>
  )
}
