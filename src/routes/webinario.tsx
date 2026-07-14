import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";


export const Route = createFileRoute("/webinario")({
  head: () => ({
    meta: [
      { title: "Webinário Gratuito | Fascite Plantar — Dra. Sylvia" },
      { name: "description", content: "Descubra em 60 minutos por que sua fascite plantar continua voltando — mesmo depois de tudo que você já tentou." },
      { property: "og:title", content: "Webinário Gratuito — Fascite Plantar" },
      { property: "og:description", content: "60 minutos com a Dra. Sylvia sobre o verdadeiro motivo da dor na primeira pisada." },
      { property: "og:url", content: "/webinario" },
    ],
    links: [{ rel: "canonical", href: "/webinario" }],
  }),
  component: CapturaPage,
});

const Check = () => (
  <svg className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

function CapturaPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ nome: "", email: "", whatsapp: "" });
  const [sent, setSent] = useState(false);


  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <header className="relative overflow-hidden surface-forest">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_bottom_right,color-mix(in_oklab,var(--gold)_25%,transparent),transparent_60%)]" />
        <div className="relative mx-auto max-w-6xl px-6 py-16 md:py-24 grid gap-12 md:grid-cols-[1.15fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[color:var(--gold)]/20 border border-[color:var(--gold)]/40 px-4 py-1.5 text-xs md:text-sm font-medium text-[color:var(--gold)]">
              ⏰ Vagas abertas para o webinário HOJE
            </span>
            <h1 className="mt-6 font-display text-3xl md:text-5xl leading-[1.1] text-[color:var(--sand)]">
              Descubra por que sua <em className="italic text-[color:var(--gold)]">fascite plantar</em> continua voltando (mesmo depois de tudo que tentou)
            </h1>
            <p className="mt-6 text-base md:text-lg text-white/85 leading-relaxed">
              Em 60 minutos, você vai entender o verdadeiro motivo da dor na primeira pisada da manhã e conhecer o método que já ajudou centenas de pessoas a recuperar a liberdade de caminhar — sem depender apenas de remédios.
            </p>
            <div className="mt-8 flex flex-wrap gap-6 text-sm text-white/70">
              <div><span className="block text-2xl font-display text-[color:var(--gold)]">60min</span>Aula ao vivo</div>
              <div><span className="block text-2xl font-display text-[color:var(--gold)]">100%</span>Gratuito</div>
              <div><span className="block text-2xl font-display text-[color:var(--gold)]">Hoje</span>Vagas limitadas</div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-6 md:p-8 shadow-2xl">
            {!sent ? (
              <>
                <h2 className="font-display text-2xl text-[color:var(--forest)]">Reserve sua vaga gratuita</h2>
                <p className="mt-2 text-sm text-foreground/70">Preencha seus dados para receber o link.</p>
                <form
                  onSubmit={(e) => { e.preventDefault(); setSent(true); setTimeout(() => navigate({ to: "/obrigado" }), 900); }}
                  className="mt-6 space-y-4"

                >
                  <div>
                    <label className="text-xs font-medium text-[color:var(--forest)]">Nome completo</label>
                    <input required value={form.nome} onChange={(e) => setForm({ ...form, nome: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[color:var(--forest)]">E-mail</label>
                    <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
                  </div>
                  <div>
                    <label className="text-xs font-medium text-[color:var(--forest)]">WhatsApp</label>
                    <input required value={form.whatsapp} onChange={(e) => setForm({ ...form, whatsapp: e.target.value })}
                      placeholder="(00) 00000-0000"
                      className="mt-1 w-full rounded-lg border border-input bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-[color:var(--gold)]" />
                  </div>
                  <button type="submit" className="btn-primary btn-primary-hover w-full">
                    Quero minha vaga gratuita →
                  </button>
                  <p className="text-center text-xs text-foreground/60">Você receberá o link por e-mail e WhatsApp.</p>
                </form>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="mx-auto h-14 w-14 rounded-full surface-sand flex items-center justify-center text-[color:var(--forest)] text-2xl">✓</div>
                <h3 className="mt-4 font-display text-2xl text-[color:var(--forest)]">Vaga reservada!</h3>
                <p className="mt-2 text-sm text-foreground/70">Redirecionando para o WhatsApp…</p>
                <a href="/obrigado" className="mt-6 inline-block btn-primary btn-primary-hover">Continuar →</a>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Sobre a aula */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24">
        <p className="text-lg leading-relaxed text-foreground/85">
          Você acorda todos os dias com aquela fisgada no calcanhar. Já tentou alongamentos, palmilhas, anti-inflamatórios. A dor alivia por alguns dias, mas sempre volta.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          O que ninguém te explicou até agora é que <strong className="text-[color:var(--forest)]">o problema não está apenas no seu pé</strong>.
        </p>
        <p className="mt-5 text-lg leading-relaxed text-foreground/85">
          Neste webinário, a <strong>Dra. Sylvia</strong> — que passou mais de 23 anos estudando a dor e ajudando pessoas exatamente como você — vai revelar os 5 segredos que separam quem consegue se livrar da fascite plantar de quem continua preso nesse ciclo.
        </p>
      </section>

      {/* O que você vai descobrir */}
      <section className="surface-sand">
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-24">
          <h2 className="font-display text-3xl md:text-4xl text-[color:var(--forest)] text-center">O que você vai descobrir</h2>
          <ul className="mt-10 grid gap-4 md:grid-cols-2">
            {[
              "Por que tratar apenas a inflamação pode não ser suficiente para resolver a fascite plantar.",
              "O erro silencioso que faz a dor voltar mesmo após períodos de melhora.",
              "Como o sistema nervoso influencia a dor da primeira pisada da manhã.",
              "O que a maioria das pessoas faz errado ao tentar aliviar a dor no calcanhar.",
              "Como ajudar seu corpo a reaprender padrões mais saudáveis de movimento e recuperação.",
              "O papel da distribuição de carga na recuperação real.",
            ].map((t) => (
              <li key={t} className="flex gap-3 rounded-xl bg-white p-5 border border-[color:var(--forest)]/10">
                <Check /><span className="text-foreground/85">{t}</span>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-center text-foreground/80 max-w-2xl mx-auto">
            E ao final, você conhecerá o <strong>Guia Sensorial</strong> — um método prático de 14 dias que mostra passo a passo como aplicar esses princípios no seu dia a dia.
          </p>
        </div>
      </section>

      {/* Sobre a Dra */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-24 text-center">
        <div className="mx-auto h-24 w-24 rounded-full surface-forest flex items-center justify-center font-display text-3xl text-[color:var(--gold)]">S</div>
        <h2 className="mt-6 font-display text-3xl md:text-4xl text-[color:var(--forest)]">Dra. Sylvia</h2>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
          {[
            "23+ anos na saúde",
            "27+ anos estudando a dor",
            "Criadora do Método de Reintrodução Sensorial da Pisada®",
            "Centenas de pessoas ajudadas",
          ].map((b) => (
            <span key={b} className="rounded-full border border-[color:var(--forest)]/20 px-4 py-1.5 text-[color:var(--forest)] bg-white">{b}</span>
          ))}
        </div>

        <figure className="mt-12 mx-auto max-w-2xl rounded-2xl surface-sand p-8">
          <blockquote className="italic text-[color:var(--forest)] text-lg">
            “Melhorei na primeira semana. Acordei sem aquela dor horrível no calcanhar e consegui caminhar o dia inteiro sem medo de piorar.”
          </blockquote>
          <figcaption className="mt-4 text-sm text-[color:var(--forest)]/70">— Clientes do método</figcaption>
        </figure>
      </section>

      {/* CTA final */}
      <section className="surface-forest">
        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20 text-center">
          <h2 className="font-display text-3xl md:text-4xl text-[color:var(--sand)]">Reserve sua vaga para o webinário de hoje</h2>
          <p className="mt-4 text-white/80">Sua participação é 100% gratuita. Você receberá o link de acesso por e-mail e WhatsApp.</p>
          <div className="mt-8 flex justify-center">
            <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="btn-primary btn-primary-hover">
              Quero minha vaga →
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-xs text-white/60">
            <span>Selo de garantia</span><span>·</span><span>Centenas de alunos</span><span>·</span><span>Certificações</span>
          </div>
        </div>
      </section>
    </div>
  );
}
