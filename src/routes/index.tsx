import { createFileRoute } from "@tanstack/react-router";
import draSylviaGreen from "@/assets/dra-sylvia-green.jpg.asset.json";
import draSylviaPortrait from "@/assets/dra-sylvia-portrait.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Sylvia | Guia Sensorial da Fascite Plantar em 14 dias" },
      { name: "description", content: "Descubra o Método de Reintrodução Sensorial da Pisada® e reduza a dor da primeira pisada em até 14 dias." },
      { property: "og:title", content: "Dra. Sylvia | Guia Sensorial da Fascite Plantar" },
      { property: "og:description", content: "Método de Reintrodução Sensorial da Pisada®: reduza a dor da primeira pisada em até 14 dias." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: SalesPage,
});

const CTA = ({ children = "Quero começar meus 14 dias", small = false }: { children?: string; small?: boolean }) => (
  <a
    href="#oferta"
    className={`btn-primary btn-primary-hover whitespace-nowrap ${small ? "text-sm px-6 py-3" : "text-base md:text-lg"}`}
  >
    <span>{children}</span>
    <span aria-hidden className="ml-1">→</span>
  </a>
);

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center gap-2 text-[11px] md:text-xs uppercase tracking-[0.28em] font-semibold text-[color:var(--gold)]">
    <span className="h-px w-8 bg-[color:var(--gold)]" /> {children}
  </span>
);

const Check = () => (
  <svg className="h-5 w-5 shrink-0 text-[color:var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

// Playfair digits (Codec trial has no numerals)
const Num = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`font-display ${className}`}>{children}</span>
);

function SalesPage() {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      {/* Topbar */}
      <div className="surface-forest text-center text-xs md:text-sm py-2 px-4">
        Dra. Sylvia, mais de <Num>23</Num> anos ajudando pessoas a recuperarem a liberdade de caminhar
      </div>

      {/* HERO — full-width com foto integrada */}
      <header className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Background photo, full-bleed */}
        <div className="absolute inset-0 -z-10">
          <img
            src={draSylviaGreen.url}
            alt="Dra. Sylvia, fisioterapeuta e podóloga"
            className="w-full h-full object-cover object-[55%_center] md:object-[70%_center]"
          />
          {/* Gradient overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--forest)] via-[color:var(--forest)]/80 to-transparent md:from-[color:var(--forest)]/95 md:via-[color:var(--forest)]/65 md:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--forest)]/80 via-transparent to-[color:var(--forest)]/30" />
        </div>

        <div className="mx-auto max-w-6xl w-full px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <Eyebrow>Método Sensorial da Pisada®</Eyebrow>
            <h1
              className="mt-6 font-display text-[2.4rem] leading-[1.05] md:text-6xl md:leading-[1.02] text-[color:var(--sand)]"
              style={{ textShadow: "0 2px 24px rgba(0,0,0,0.35)" }}
            >
              Sua <em className="italic text-[color:var(--gold)]">fascite plantar</em> não é só inflamação.
              <span className="block mt-3 font-display italic text-2xl md:text-3xl text-white/85">
                É um ciclo, e ele pode ser interrompido.
              </span>
            </h1>
            <p
              className="mt-7 max-w-xl text-base md:text-lg text-white/90 leading-relaxed"
              style={{ textShadow: "0 1px 16px rgba(0,0,0,0.35)" }}
            >
              Reduza a dor da primeira pisada em até{" "}
              <strong className="text-[color:var(--gold)]"><Num>14</Num> dias</strong>, com o método que ajudou centenas de pessoas a caminharem de novo, sem medo e sem remédio contínuo.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row sm:items-center gap-4">
              <CTA />
              <div className="text-xs text-white/70 leading-relaxed">
                Acesso imediato · Garantia de <Num>7</Num> dias<br />Conteúdo digital vitalício
              </div>
            </div>

            {/* trust row */}
            <div className="mt-12 flex items-center gap-6 text-sm">
              <div>
                <div className="font-display text-3xl text-[color:var(--gold)] leading-none"><Num>23+</Num></div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-white/70">anos de prática</div>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div>
                <div className="font-display text-3xl text-[color:var(--gold)] leading-none"><Num>14</Num></div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-white/70">dias de método</div>
              </div>
              <div className="h-10 w-px bg-white/25" />
              <div>
                <div className="font-display text-3xl text-[color:var(--gold)] leading-none"><Num>100%</Num></div>
                <div className="mt-2 text-[10px] uppercase tracking-widest text-white/70">em casa</div>
              </div>
            </div>
          </div>
        </div>

        {/* floating name badge, bottom-right on desktop */}
        <div className="hidden md:flex absolute bottom-8 right-8 items-center gap-3 rounded-full bg-white/95 backdrop-blur px-5 py-3 shadow-xl">
          <div className="h-2 w-2 rounded-full bg-[color:var(--gold)]" />
          <div>
            <div className="font-display text-base text-[color:var(--forest)] leading-tight">Dra. Sylvia</div>
            <div className="text-[10px] uppercase tracking-widest text-[color:var(--forest)]/70">Fisio · Podóloga</div>
          </div>
        </div>
      </header>

      {/* PROBLEMA */}
      <section className="relative py-20 md:py-28">
        <div className="absolute right-[-8%] top-10 -z-10 h-72 w-72 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>Você reconhece?</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--forest)]">
              A primeira pisada do dia, <em className="italic text-[color:var(--gold)]">e o medo que vem junto</em>
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {[
              { n: "01", t: "A fisgada matinal", d: "Você coloca o pé no chão e trava. Espera. Tenta de novo. A dor está lá, igual à de ontem." },
              { n: "02", t: "Rotina interrompida", d: "Menos caminhadas, menos passeios, mais anti-inflamatório só pra funcionar." },
              { n: "03", t: "O ciclo que volta", d: "Palmilha, alongamento, descanso. Melhora dias. Volta sempre. E a pergunta: “vou viver assim?”" },
            ].map((c) => (
              <div key={c.t} className="relative rounded-2xl border border-[color:var(--forest)]/10 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
                <Num className="text-4xl text-[color:var(--gold)]/70 italic">{c.n}</Num>
                <div className="mt-2 font-display text-xl text-[color:var(--forest)]">{c.t}</div>
                <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAUSA */}
      <section className="surface-forest relative overflow-hidden">
        <div className="absolute -left-24 -top-24 h-96 w-96 rounded-full bg-[color:var(--gold)]/10 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-[color:var(--gold)]/5 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 py-20 md:py-28 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>A causa real</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--sand)]">
              Não é só inflamação. É <em className="italic text-[color:var(--gold)]">proteção</em>.
            </h2>
            <p className="mt-6 text-white/80 leading-relaxed">
              Seu sistema nervoso aprendeu a proteger o pé que dói. Ele muda sua pisada, cria tensões compensatórias, e o ciclo se mantém, mesmo sem inflamação.
            </p>
            <p className="mt-4 text-white/80 leading-relaxed">
              Por isso remédio, palmilha e descanso melhoram, <strong className="text-[color:var(--gold)]">mas nunca resolvem</strong>.
            </p>
          </div>
          <div className="relative">
            <div className="rounded-2xl border border-[color:var(--gold)]/30 bg-white/5 backdrop-blur p-6 md:p-8">
              <div className="text-[11px] uppercase tracking-widest text-[color:var(--gold)] font-semibold">O ciclo que ninguém te explicou</div>
              <ul className="mt-6 space-y-5 text-white/90 text-sm">
                {["Dor repetida", "Corpo protege", "Padrão de pisada muda", "Tensões compensatórias", "Dor continua"].map((s, i) => (
                  <li key={s} className="flex items-center gap-5">
                    <Num className="text-3xl md:text-4xl italic text-[color:var(--gold)] leading-none w-10 shrink-0">
                      {`0${i + 1}`}
                    </Num>
                    <span className="flex-1 font-medium text-base">{s}</span>
                    {i < 4 && <span className="text-[color:var(--gold)]/50 text-lg">↓</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* MÉTODO */}
      <section className="relative py-20 md:py-28">
        <div className="absolute left-[-10%] top-20 -z-10 h-80 w-80 rounded-full bg-[color:var(--sand)]/60 blur-3xl" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Eyebrow>Conheça</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--forest)]">
            Método de Reintrodução<br />Sensorial da Pisada<sup className="text-xl">®</sup>
          </h2>
          <p className="mt-6 text-lg text-foreground/75 leading-relaxed max-w-2xl mx-auto">
            Não é mais um alongamento. Não é palmilha. É uma abordagem que atua na <strong className="text-[color:var(--forest)]">causa funcional</strong>, para o corpo sair do modo proteção.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3 text-left">
            {[
              { n: "01", t: "Vivências sensoriais", d: "Estímulos guiados que reeducam a percepção da pisada." },
              { n: "02", t: "Carga progressiva", d: "Retorno gradual à caminhada, sem sobrecarga e sem medo." },
              { n: "03", t: "Reorganização", d: "Novos padrões de movimento que se sustentam no tempo." },
            ].map((s) => (
              <div key={s.n} className="rounded-2xl bg-white border border-[color:var(--forest)]/10 p-6 hover:border-[color:var(--gold)]/50 transition-colors">
                <Num className="text-3xl italic text-[color:var(--gold)]">{s.n}</Num>
                <div className="mt-2 font-display text-lg text-[color:var(--forest)]">{s.t}</div>
                <p className="mt-2 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DRA SYLVIA */}
      <section className="relative">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] items-center rounded-3xl bg-gradient-to-br from-[color:var(--sand)]/70 to-[color:var(--sand)]/30 p-6 md:p-12 border border-[color:var(--forest)]/10">
            <div className="relative">
              <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-[color:var(--forest)] to-[color:var(--gold)]/50 blur-2xl opacity-40" />
              <img
                src={draSylviaPortrait.url}
                alt="Dra. Sylvia"
                loading="lazy"
                className="w-full rounded-2xl object-cover aspect-[4/5] shadow-xl"
              />
            </div>
            <div>
              <Eyebrow>Quem cuida de você</Eyebrow>
              <h2 className="mt-4 font-display text-3xl md:text-4xl text-[color:var(--forest)]">
                Dra. Sylvia
              </h2>
              <p className="mt-3 text-[color:var(--forest)]/70">Fisioterapeuta e Podóloga · Criadora do Método</p>

              <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-[color:var(--forest)]/85">
                <li className="flex items-center gap-3 text-sm"><Check /><span><strong><Num>23+</Num> anos</strong> de clínica</span></li>
                <li className="flex items-center gap-3 text-sm"><Check /><span><strong>Centenas</strong> de pacientes</span></li>
                <li className="flex items-center gap-3 text-sm"><Check /><span>Metodologia própria</span></li>
                <li className="flex items-center gap-3 text-sm"><Check /><span>Prática real, não teoria</span></li>
              </ul>

              <figure className="mt-8 rounded-2xl bg-white p-6 border border-[color:var(--forest)]/10 shadow-sm">
                <div className="text-4xl font-display text-[color:var(--gold)] leading-none">“</div>
                <blockquote className="mt-2 italic text-[color:var(--forest)] leading-relaxed">
                  Melhorei na primeira semana. Acordei sem aquela dor horrível e consegui caminhar o dia inteiro sem medo.
                </blockquote>
                <figcaption className="mt-3 text-xs uppercase tracking-widest text-[color:var(--forest)]/60">Aluna do método</figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-20 top-20 -z-10 h-96 w-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
        <div className="absolute -left-20 bottom-20 -z-10 h-96 w-96 rounded-full bg-[color:var(--forest)]/10 blur-3xl" />
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <Eyebrow>O programa</Eyebrow>
            <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--forest)]">
              Guia Sensorial da Fascite Plantar
            </h2>
            <p className="mt-4 text-lg text-foreground/70">Método completo de <Num>14</Num> dias, aplicável em casa</p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {[
              { t: "E-book O Guia Sensorial", d: "O método passo a passo, aplicado na prática clínica." },
              { t: "Módulo: Entendendo a Fascite", d: "O que realmente acontece no seu corpo." },
              { t: "6 vivências sensoriais", d: "Reintrodução guiada da pisada." },
              { t: "Guia de calçados e hábitos", d: "Evite os erros que mantêm a dor ativa." },
              { t: "Plano de 14 dias", d: "Cronograma simples, sem perder o ritmo." },
              { t: "Acesso vitalício", d: "No seu ritmo, quantas vezes precisar." },
            ].map((i) => (
              <div key={i.t} className="flex items-start gap-4 rounded-2xl bg-white border border-[color:var(--forest)]/10 p-5">
                <div className="pt-1"><Check /></div>
                <div>
                  <div className="font-display text-lg text-[color:var(--forest)]">{i.t}</div>
                  <p className="text-sm text-foreground/70 mt-1">{i.d}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bônus */}
          <div className="mt-20">
            <div className="text-center">
              <Eyebrow>Bônus exclusivos</Eyebrow>
              <h3 className="mt-3 font-display text-2xl md:text-3xl text-[color:var(--forest)]">Liberados só nesta campanha</h3>
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                { n: "01", t: "Checklist diário", d: "O que fazer em cada etapa, sem dúvida." },
                { n: "02", t: "Erros que agravam", d: "O que evitar desde o dia 1." },
                { n: "03", t: "Voltar a caminhar", d: "Aula: recuperar confiança sem risco." },
              ].map((b) => (
                <div key={b.t} className="relative rounded-2xl border-2 border-[color:var(--gold)]/40 bg-gradient-to-b from-white to-[color:var(--sand)]/30 p-6">
                  <div className="absolute -top-3 left-6 rounded-full bg-[color:var(--gold)] text-[color:var(--forest)] text-[10px] font-bold uppercase tracking-widest px-3 py-1">
                    Bônus <Num>{b.n}</Num>
                  </div>
                  <div className="mt-2 font-display text-lg text-[color:var(--forest)]">{b.t}</div>
                  <p className="mt-2 text-sm text-foreground/70">{b.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Preço */}
          <div className="mt-16 relative rounded-3xl border border-[color:var(--forest)]/15 bg-white p-8 md:p-12 shadow-xl overflow-hidden">
            <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-[color:var(--gold)]/20 blur-2xl" />
            <div className="relative text-center">
              <Eyebrow>Investimento</Eyebrow>
              <div className="mt-6 flex items-baseline justify-center gap-1">
                <span className="text-2xl text-foreground/50 font-display">R$</span>
                <Num className="text-6xl md:text-8xl text-[color:var(--forest)] leading-none">168</Num>
                <Num className="text-2xl text-[color:var(--forest)]/70">,00</Num>
              </div>
              <p className="mt-2 text-sm text-foreground/60">ou parcelado no cartão</p>
              <div className="mt-8 flex justify-center"><CTA>Quero começar meus 14 dias</CTA></div>
              <p className="mt-4 text-xs text-foreground/60">Acesso imediato após confirmação</p>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="surface-forest relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_50%)]" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
          <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-4 border-[color:var(--gold)] bg-[color:var(--forest)] shadow-2xl">
            <div>
              <Num className="text-4xl text-[color:var(--gold)] leading-none block">7</Num>
              <div className="mt-1 text-[10px] uppercase tracking-widest text-[color:var(--gold)]">dias</div>
            </div>
          </div>
          <h2 className="mt-8 font-display text-3xl md:text-4xl text-[color:var(--sand)]">Garantia incondicional</h2>
          <p className="mt-5 text-white/85 leading-relaxed max-w-xl mx-auto">
            Acesse tudo. Aplique as primeiras vivências. Se não for pra você, devolvemos <strong className="text-[color:var(--gold)]"><Num>100%</Num></strong>, sem perguntas, sem burocracia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <div className="text-center">
          <Eyebrow>Dúvidas frequentes</Eyebrow>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--forest)]">Tudo o que você precisa saber</h2>
        </div>
        <div className="mt-12 space-y-3">
          {[
            { q: "Funciona pra quem tem fascite há muito tempo?", a: "Sim. Independentemente do tempo, o corpo mantém capacidade de adaptação com os estímulos certos." },
            { q: "Preciso de equipamentos?", a: "Não. Tudo é aplicável em casa, sem materiais especiais." },
            { q: "Quanto tempo por dia?", a: "Pequenas práticas progressivas, feitas pra caber na rotina real." },
            { q: "Substitui médico?", a: "Não. É material educativo que complementa (não substitui) acompanhamento profissional." },
            { q: "E se eu atrasar o cronograma?", a: "Acesso vitalício. Segue no seu ritmo, retoma de onde parou." },
            { q: "A garantia vale mesmo acessando tudo?", a: "Sim. Incondicional em 7 dias, sem burocracia." },
          ].map((f) => (
            <details key={f.q} className="group rounded-2xl border border-[color:var(--forest)]/15 bg-white p-5 open:shadow-md transition-shadow">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-medium text-[color:var(--forest)]">
                <span className="flex-1">{f.q}</span>
                <span className="text-[color:var(--gold)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="surface-sand relative overflow-hidden">
        <div className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-[color:var(--gold)]/20 blur-3xl" />
        <div className="absolute -right-16 -bottom-16 h-72 w-72 rounded-full bg-[color:var(--forest)]/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[color:var(--forest)] leading-tight">
            Você não precisa <em className="italic text-[color:var(--gold)]">aprender a conviver</em> com essa dor.
          </h2>
          <p className="mt-6 text-lg text-[color:var(--forest)]/80 leading-relaxed max-w-xl mx-auto">
            Seu corpo pode reaprender. Existe um caminho simples, seguro e acessível, pra sair do ciclo.
          </p>
          <div className="mt-10 flex justify-center"><CTA /></div>
        </div>
      </section>

      <footer className="surface-forest">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-xs md:text-sm text-white/70 leading-relaxed">
          © Dra. Sylvia · Guia Sensorial da Fascite Plantar<br />
          Garantia de <Num>7</Num> dias · Acesso imediato · Conteúdo digital vitalício
        </div>
      </footer>
    </div>
  );
}
