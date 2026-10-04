import { abs } from '@/lib/abs'
import { Drop, Polaroid, Stamp } from './primitives'

const hand = "'Caveat', cursive"
const display = "'Archivo', sans-serif"

export default function Hero() {
  return (
    <section id="topo" aria-label="Destaque" className="relative">
      <div className="mx-auto max-w-[1280px] px-6 pb-2 pt-2 text-center">
        <p className="m-0 mx-auto max-w-[900px] text-[clamp(20px,2.6vw,32px)] leading-[1.35] text-ink">
          <strong className="font-bold">Fale com o mundo.</strong> Aprenda um idioma como quem viaja, em turmas ao vivo de até 8 alunos.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <a href="#nivel" className="btn inline-flex min-h-[52px] items-center rounded-full bg-accent px-7 text-base font-bold text-ink no-underline hover:text-ink">
            Fazer teste de nível
          </a>
          <a href="#cursos" className="btn inline-flex min-h-[52px] items-center rounded-full border-2 border-ink px-7 text-base font-bold text-ink no-underline hover:text-ink">
            Ver cursos →
          </a>
        </div>
      </div>
      <div className="relative mx-auto max-w-[1280px] aspect-[1280/980] [container-type:inline-size]">
        <div aria-hidden="true" className="absolute bottom-0 left-[calc(50%-50vw)] z-0 h-[33%] w-screen bg-accent" />

        {/* A · Bonjour */}
        <Polaroid d=".55s" f="7s" left="22%" top="1%" width={35} side={1.1} bottom={2.6} rotate="-6deg" shadow={0.22} z={1}
          photoHeight={22} photoBg="#A9C8D6" caption="Nº 03 — FRANCÊS · Paris" captionLeft={1.4} captionBottom={0.7} captionSize={1} captionTilt="-1deg">
          <div style={abs({ right: '4cqw', top: '2.6cqw', width: '5cqw', height: '5cqw', borderRadius: '50%', background: '#F2C14E' })} />
          <div style={abs({ left: 0, right: 0, bottom: 0, display: 'flex', alignItems: 'flex-end', gap: '0.4cqw', padding: '0 1cqw' })}>
            {[[1, 7, '#6B7B88'], [1.4, 10, '#56677A'], [0.6, 15, '#3F4E60'], [1.2, 8, '#6B7B88'], [1, 11, '#56677A'], [1.3, 6.5, '#6B7B88']].map(([flex, h, bg], i) => (
              <div key={i} style={{ flex: flex as number, height: `${h}cqw`, background: bg as string }} />
            ))}
          </div>
          <div style={abs({ left: '2.2cqw', top: '1.4cqw', fontFamily: hand, fontWeight: 700, fontSize: '6cqw', color: '#1F2A44' })}>Bonjour!</div>
        </Polaroid>

        {/* B · Guten Tag */}
        <Polaroid d=".7s" f="8s" left="5%" top="37%" width={29} side={1} bottom={2.4} rotate="-9deg" shadow={0.22} z={1} bg="#F2EDE2"
          photoHeight={20} photoBg="#C9C0B1" caption="Nº 05 — ALEMÃO · Berlim" captionBottom={0.6}>
          <div style={abs({ left: '3cqw', bottom: 0, width: '10cqw', height: '15cqw', background: 'repeating-linear-gradient(90deg, #6F675C 0 1.2cqw, #8C8376 1.2cqw 2cqw)' })} />
          <div style={abs({ left: '12cqw', bottom: 0, width: 0, height: 0, borderLeft: '5cqw solid transparent', borderRight: '5cqw solid transparent', borderBottom: '19cqw solid #5A5248' })} />
          <div style={abs({ right: '2cqw', bottom: 0, width: '9cqw', height: '11cqw', background: 'repeating-linear-gradient(0deg, #7D7468 0 1cqw, #9A9184 1cqw 1.6cqw)' })} />
          <div style={abs({ right: '2cqw', top: '1.2cqw', fontFamily: hand, fontWeight: 700, fontSize: '4.6cqw', color: '#2A241E' })}>Guten Tag</div>
        </Polaroid>

        {/* Wordmark */}
        <h1
          aria-label="Falaê"
          className="absolute inset-x-0 top-[12%] z-10 m-0 pointer-events-none whitespace-nowrap text-center font-display font-bold leading-[0.8] tracking-[-0.05em] text-accent text-[32cqw]"
        >
          {['F', 'A', 'L', 'A', 'Ê'].map((ch, i) => (
            <span key={i} className="rise" aria-hidden="true" style={{ ['--d' as string]: `${0.05 + i * 0.09}s` }}>
              {ch}
            </span>
          ))}
        </h1>

        <Stamp d=".85s" f="6s" left="81%" top="2%" width={9.5} ratio="4 / 5" rotate="13deg" z={1} bg="#3D63B8" ink="#F6F1E6"
          label="JAPONÊS" glyph="あ" glyphSize={5} price="R$ 2" labelSize={0.85} outline={{ color: '#2A4A92', width: 0.12, offset: -0.8 }} />

        {/* C · Hello */}
        <Polaroid d=".95s" f="7.5s" left="37%" top="31%" width={21} side={1} bottom={2.6} rotate="14deg" shadow={0.26} z={3}
          photoHeight={28} photoBg="#2F4B7C" caption="Nº 01 — INGLÊS · Londres">
          <div style={abs({ left: '50%', bottom: 0, transform: 'translateX(-50%)', width: '6cqw', height: '22cqw', background: '#22385F' })} />
          <div style={abs({ left: '50%', top: '7cqw', transform: 'translateX(-50%)', width: '4.6cqw', height: '4.6cqw', borderRadius: '50%', background: '#F1E6C8', border: '0.4cqw solid #C9A85A' })} />
          <div style={abs({ left: '50%', top: '2.6cqw', transform: 'translateX(-50%)', width: 0, height: 0, borderLeft: '3cqw solid transparent', borderRight: '3cqw solid transparent', borderBottom: '4.6cqw solid #22385F' })} />
          <div style={abs({ left: '1.4cqw', bottom: '1.4cqw', fontFamily: hand, fontWeight: 700, fontSize: '4.6cqw', lineHeight: 0.9, color: '#F1E6C8' })}>Hello<br />there!</div>
        </Polaroid>

        {/* E · Japonês */}
        <Polaroid d="1.05s" f="8.5s" left="64%" top="33%" width={31} side={1} bottom={2.4} rotate="-3deg" shadow={0.24} z={3}
          photoHeight={18} photoBg="#EBC8A2" caption="Nº 06 — JAPONÊS · Quioto" captionBottom={0.6}>
          <div style={abs({ left: '3cqw', bottom: 0, width: 0, height: 0, borderLeft: '11cqw solid transparent', borderRight: '11cqw solid transparent', borderBottom: '11cqw solid #6E7FA0' })} />
          <div style={abs({ left: '10.7cqw', bottom: '7.5cqw', width: 0, height: 0, borderLeft: '3.4cqw solid transparent', borderRight: '3.4cqw solid transparent', borderBottom: '3.5cqw solid #F6F1E6' })} />
          <div style={abs({ left: 0, right: 0, bottom: 0, height: '3cqw', background: '#B6402C' })} />
          <div style={abs({ right: '2cqw', top: '1cqw', writingMode: 'vertical-rl', fontFamily: 'serif', fontWeight: 700, fontSize: '3.6cqw', color: '#8C2A1C', letterSpacing: '0.1em' })}>こんにちは</div>
        </Polaroid>

        <Stamp d="1.15s" f="6.5s" left="89%" top="27%" width={8.5} ratio="4 / 5" rotate="7deg" z={4} bg="#3E7C5E" ink="#F6F1E6"
          label="ALEMÃO" glyph="ß" glyphSize={4.6} price="R$ 1" />

        {/* D · HOLA */}
        <Drop d="1.25s" f="7s" style={{ left: '49%', top: '46%', width: '27cqw', height: '19cqw', background: '#F5D33F', rotate: '4deg', boxShadow: '0 1.2cqw 2.6cqw rgba(50,30,10,.24)', zIndex: 4, overflow: 'hidden' }}>
          <div style={abs({ left: '2.4cqw', top: '3cqw', width: '8cqw', height: '6.4cqw', background: '#3E8E7E', border: '0.6cqw solid #F6F1E6', transform: 'rotate(-30deg)' })} />
          <div style={abs({ left: '10.5cqw', top: '1.4cqw', width: '7.4cqw', height: '7.6cqw', background: '#E2553A', border: '0.6cqw solid #F6F1E6' })} />
          <div style={abs({ left: '18.6cqw', top: '3.4cqw', width: '7cqw', height: '6.4cqw', background: '#4E7FB8', border: '0.6cqw solid #F6F1E6', transform: 'rotate(32deg)' })} />
          <div style={abs({ left: 0, right: 0, bottom: '2.2cqw', textAlign: 'center', fontFamily: display, fontWeight: 800, fontSize: '3.4cqw', letterSpacing: '0.9em', paddingLeft: '0.9em', color: '#D23A20' })}>HOLA</div>
        </Drop>

        <Stamp d="1.35s" f="6s" left="3%" top="60%" width={10} ratio="5 / 6" rotate="-12deg" z={4} bg="#F4B8AE" ink="#A22E1E"
          label="ESPANHOL" glyph="Ñ" glyphSize={5.4} price="R$ 1" labelSize={0.85} vPad={1} outline={{ color: '#C2412F', width: 0.15, offset: -0.9 }} />

        {/* Ticket */}
        <Drop d="1.45s" f="8s" style={{ left: '13%', top: '74%', width: '31cqw', display: 'flex', background: '#F5F0E5', rotate: '-5deg', boxShadow: '0 1.2cqw 2.6cqw rgba(50,30,10,.26)', zIndex: 5 }}>
          <div style={{ flex: 1, padding: '1.6cqw 1.8cqw', borderRight: '0.2cqw dashed #B9AE9C', display: 'flex', flexDirection: 'column', gap: '0.8cqw' }}>
            <div style={{ fontSize: '0.9cqw', letterSpacing: '0.2em', color: '#8A7E6E' }}>PASSAPORTE DE IDIOMAS</div>
            <div style={{ display: 'flex', gap: '2cqw', alignItems: 'flex-end' }}>
              <div>
                <div style={{ fontSize: '0.8cqw', color: '#8A7E6E' }}>DE</div>
                <div style={{ fontFamily: display, fontWeight: 800, fontSize: '3cqw', color: '#1E1814' }}>PT</div>
              </div>
              <div className="text-accent" style={{ fontSize: '2cqw', paddingBottom: '0.4cqw' }}>→</div>
              <div>
                <div style={{ fontSize: '0.8cqw', color: '#8A7E6E' }}>PARA</div>
                <div className="text-accent" style={{ fontFamily: display, fontWeight: 800, fontSize: '3cqw' }}>O MUNDO</div>
              </div>
            </div>
            <div style={{ fontSize: '0.85cqw', color: '#4A4038' }}>EMBARQUE: quando quiser · ASSENTO: turma pequena</div>
          </div>
          <div style={{ width: '6cqw', background: 'repeating-linear-gradient(0deg, #1E1814 0 0.25cqw, transparent 0.25cqw 0.5cqw, #1E1814 0.5cqw 0.6cqw, transparent 0.6cqw 0.95cqw)', margin: '1.6cqw 1.2cqw' }} />
        </Drop>

        {/* F · Ciao */}
        <Polaroid d="1.55s" f="7.2s" left="72%" top="55%" width={22} side={1} bottom={2.6} rotate="5deg" shadow={0.26} z={4}
          photoHeight={28} photoBg="#EAD9B8" caption="Nº 04 — ITALIANO · Cinque Terre">
          <div style={abs({ left: '2cqw', top: '2cqw', width: '4cqw', height: '4cqw', borderRadius: '50%', background: '#F2A33C' })} />
          <div style={abs({ left: 0, right: 0, bottom: '7cqw', display: 'flex', alignItems: 'flex-end', gap: '0.3cqw', padding: '0 0.6cqw' })}>
            {[[8, '#E8A33C'], [11, '#D9603B'], [9, '#F0D27A'], [12.5, '#C66B7A'], [7.5, '#E58C5A']].map(([h, bg], i) => (
              <div key={i} style={{ flex: 1, height: `${h}cqw`, background: bg as string }} />
            ))}
          </div>
          <div style={abs({ left: 0, right: 0, bottom: 0, height: '7cqw', background: '#2E8C93' })} />
          <div style={abs({ right: '1.6cqw', top: '1.4cqw', fontFamily: hand, fontWeight: 700, fontSize: '5.6cqw', color: '#1F3D52' })}>Ciao!</div>
        </Polaroid>

        <Stamp d="1.7s" f="5.5s" left="47%" top="80%" width={8.5} ratio="4 / 5" rotate="16deg" z={6} bg="#6A4C93" ink="#F6F1E6"
          label="FRANCÊS" glyph="Ç" glyphSize={4.6} price="R$ 3" />
      </div>
    </section>
  )
}
