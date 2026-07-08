import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dra. Sylvia | Guia Sensorial da Fascite Plantar — 14 dias" },
      { name: "description", content: "Descubra o Método de Reintrodução Sensorial da Pisada® e reduza a dor da primeira pisada em até 14 dias." },
      { property: "og:title", content: "Guia Sensorial da Fascite Plantar" },
      { property: "og:description", content: "Método completo de 14 dias criado por Dra. Sylvia — mais de 23 anos ajudando pessoas a caminhar sem dor." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: SalesPage,
});

const CTA = ({ children = "Quero acessar o Guia Sensorial agora e começar meus 14 dias" }: { children?: string }) => (
  <a href="#oferta" className="btn-primary btn-primary-hover text-base md:text-lg">
    {children} <span aria-hidden>→</span>
  </a>
);

const Check = () => (
  <svg className="mt-1 h-5 w-5 shrink-0 text-[color:var(--gold)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
);

function SalesPage() {
  return (
    <div className="bg-background text-foreground">
      {/* Topbar */}
      <div className="surface-forest text-center text-xs md:text-sm py-2 px-4">
        Dra. Sylvia · Mais de 23 anos ajudando pessoas a recuperarem a liberdade de caminhar
      </div>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 surface-sand opacity-70" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--gold)_18%,transparent),transparent_60%)]" />
        <div className="mx-auto max-w-5xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 text-center">
          <span className="inline-block rounded-full border border-[color:var(--forest)]/20 bg-white/60 px-4 py-1.5 text-xs md:text-sm font-medium text-[color:var(--forest)]">
            Método de Reintrodução Sensorial da Pisada®
          </span>
          <h1 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05] text-[color:var(--forest)]">
            Por que sua <em className="italic text-[color:var(--gold)]">fascite plantar</em> continua voltando — mesmo depois de alongamentos, remédios e palmilhas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-[color:var(--forest)]/80">
            Descubra como ajudar seu corpo a reduzir a dor da primeira pisada em até <strong>14 dias</strong>, mesmo que você já tenha tentado de tudo sem resultado duradouro.
          </p>
          <div className="mt-8 flex justify-center">
            <CTA />
          </div>
          <p className="mt-4 text-xs text-[color:var(--forest)]/60">Acesso imediato · Garantia de 7 dias · Conteúdo digital vitalício</p>
        </div>
      </header>

      {/* Reconhece essa cena */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl text-[color:var(--forest)]">Você reconhece essa cena?</h2>
        <div className="mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>O alarme toca. Você tenta colocar o pé no chão — e vem aquela fisgada no calcanhar. Como se estivesse pisando em um prego. Você segura a respiração, espera um pouco, tenta de novo. A dor está lá. Igual à de ontem. Igual à da semana passada. Igual à do mês passado.</p>
          <p>Durante o dia você evita caminhar mais do que o necessário. Para diversas vezes para descansar. Deixa de ir ao passeio com a família. Abre mão da caminhada matinal. Depende de anti-inflamatório só para funcionar.</p>
          <p>E no fim do dia, a sensação mais pesada não é a do pé — é saber que amanhã vai começar tudo de novo.</p>
          <p>Você já tentou palmilhas sem orientação adequada. Já fez alongamentos do YouTube. Já tomou anti-inflamatório até enjoar. Já descansou por semanas. Já trocou de tênis diversas vezes. A dor melhora por alguns dias — e volta. Sempre volta.</p>
          <p className="text-[color:var(--forest)] font-medium">E a cada vez que volta, bate aquela sensação horrível: <em>"Será que eu vou ter que viver assim para sempre?"</em></p>
        </div>
      </section>

      {/* O problema não está onde você imagina */}
      <section className="surface-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="font-display text-3xl md:text-5xl text-[color:var(--sand)]">O problema não está onde você imagina</h2>
          <div className="mt-8 space-y-5 text-lg leading-relaxed text-white/85">
            <p>A maioria das pessoas trata a fascite plantar como se fosse apenas uma inflamação no pé. Toma remédio para inflamação. Descansa o pé. Usa palmilha para absorver impacto. E melhora — por um tempo.</p>
            <p>Mas a dor volta. Por quê?</p>
            <p>Porque o que mantém a fascite plantar ativa na maior parte dos casos não é só a inflamação. É o <strong className="text-[color:var(--gold)]">ciclo de proteção</strong> que o seu sistema nervoso criou ao longo do tempo.</p>
            <p>Quando você sente dor repetidamente, seu corpo aprende a proteger aquela região. Muda a forma como você pisa. Altera a distribuição de carga. Cria tensões compensatórias. E esse padrão se perpetua — mesmo quando a inflamação já foi embora.</p>
            <p>Ninguém te explicou isso. E é por isso que os tratamentos convencionais resolvem o sintoma, mas não interrompem o ciclo.</p>
          </div>
        </div>
      </section>

      {/* Método */}
      <section className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">Conheça</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-[color:var(--forest)]">
            Método de Reintrodução Sensorial da Pisada<sup className="text-xl">®</sup>
          </h2>
        </div>
        <div className="mt-10 space-y-5 text-lg leading-relaxed text-foreground/85">
          <p>Desenvolvido pela Dra. Sylvia após mais de 23 anos de experiência clínica, o método não trata apenas a inflamação — ele atua na causa funcional que mantém a dor ativa.</p>
          <p>Através de <strong>vivências sensoriais guiadas</strong>, <strong>adaptação progressiva da carga</strong> e <strong>reorganização da forma como seu corpo percebe o movimento</strong>, o método ajuda o sistema nervoso a sair do estado de proteção e permitir que você caminhe novamente sem medo e sem dor.</p>
          <p>Não é mais um protocolo de alongamento. Não é mais uma palmilha. É uma abordagem diferente — porque o problema é diferente do que te contaram.</p>
        </div>
      </section>

      {/* Dra Sylvia */}
      <section className="surface-sand">
        <div className="mx-auto max-w-5xl px-6 py-20 md:py-24">
          <div className="grid gap-10 md:grid-cols-[1fr_1.4fr] items-center">
            <div className="mx-auto aspect-[3/4] w-full max-w-xs rounded-2xl bg-gradient-to-br from-[color:var(--forest)] to-[color:var(--forest)]/70 flex items-end p-6 shadow-xl">
              <div className="text-[color:var(--sand)]">
                <div className="font-display text-2xl">Dra. Sylvia</div>
                <div className="text-sm opacity-80">Fisioterapeuta & Podóloga</div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--forest)]">Quem está por trás deste método</h2>
              <ul className="mt-6 space-y-3 text-[color:var(--forest)]/85 text-lg">
                <li className="flex gap-3"><Check /><span>Mais de <strong>23 anos</strong> de experiência clínica</span></li>
                <li className="flex gap-3"><Check /><span><strong>Centenas de pacientes</strong> atendidos</span></li>
                <li className="flex gap-3"><Check /><span>Metodologia própria baseada em prática real</span></li>
                <li className="flex gap-3"><Check /><span>Criadora do Método de Reintrodução Sensorial da Pisada®</span></li>
              </ul>

              <figure className="mt-8 rounded-xl bg-white/70 p-6 border border-[color:var(--forest)]/10">
                <blockquote className="italic text-[color:var(--forest)]">
                  “Melhorei na primeira semana. Acordei sem aquela dor horrível no calcanhar e consegui caminhar o dia inteiro sem medo de piorar.”
                </blockquote>
                <figcaption className="mt-3 text-sm text-[color:var(--forest)]/70">— Cliente do método</figcaption>
              </figure>
            </div>
          </div>
          <div className="mt-12 flex justify-center"><CTA /></div>
        </div>
      </section>

      {/* Oferta */}
      <section id="oferta" className="mx-auto max-w-4xl px-6 py-20 md:py-28">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.25em] text-[color:var(--gold)] font-semibold">O Programa</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl text-[color:var(--forest)]">
            O Guia Sensorial da Fascite Plantar
          </h2>
          <p className="mt-3 text-lg text-foreground/70">Método completo de 14 dias</p>
        </div>

        <p className="mt-8 text-lg leading-relaxed text-foreground/85">
          Um programa prático, progressivo e acessível para você entender a origem da sua dor, reduzir a sobrecarga que mantém o problema ativo e recuperar mais conforto e confiança ao caminhar — tudo no conforto da sua casa, sem equipamentos ou consultas presenciais.
        </p>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {[
            "E-book completo \"O Guia Sensorial\" — o método passo a passo aplicado na prática clínica",
            "Módulo: Entendendo a Fascite Plantar — o que realmente acontece no seu corpo",
            "Método de Reintrodução Sensorial da Pisada — 6 vivências sensoriais guiadas",
            "Guia de Calçados e Hábitos Diários — evite os erros que mantêm a dor ativa",
            "Plano de Aplicação de 14 Dias — cronograma simples para implementar sem perder o ritmo",
            "Orientações sobre adaptação da carga e recuperação dos tecidos",
            "Acesso vitalício ao conteúdo digital",
          ].map((item) => (
            <li key={item} className="flex gap-3 rounded-xl border border-[color:var(--forest)]/10 bg-white p-4">
              <Check /><span className="text-foreground/85">{item}</span>
            </li>
          ))}
        </ul>

        {/* Bônus */}
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl text-[color:var(--forest)] text-center">Bônus exclusivos</h3>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              { t: "Bônus 1 — Checklist Diário de Recuperação", d: "Um guia diário simples que mostra exatamente o que fazer em cada etapa do método, sem espaço para dúvidas." },
              { t: "Bônus 2 — Erros que Agravam a Fascite Plantar", d: "Os comportamentos mais comuns que sabotam a recuperação e como evitá-los desde o primeiro dia." },
              { t: "Bônus 3 — Aula: Voltar a Caminhar com Segurança", d: "Como recuperar a confiança nos movimentos de forma gradual e sem risco." },
            ].map((b) => (
              <div key={b.t} className="rounded-2xl border border-[color:var(--gold)]/40 bg-gradient-to-b from-[color:var(--sand)]/50 to-white p-6">
                <div className="text-2xl">🎁</div>
                <div className="mt-3 font-display text-lg text-[color:var(--forest)]">{b.t}</div>
                <p className="mt-2 text-sm text-foreground/75">{b.d}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Preço */}
        <div className="mt-16 rounded-3xl border border-[color:var(--forest)]/15 bg-white p-8 md:p-12 shadow-xl text-center">
          <p className="text-sm uppercase tracking-widest text-[color:var(--gold)] font-semibold">Investimento</p>
          <div className="mt-4 flex items-baseline justify-center gap-2">
            <span className="font-display text-6xl md:text-7xl text-[color:var(--forest)]">R$ 168</span>
            <span className="text-2xl text-[color:var(--forest)]/70">,00</span>
          </div>
          <p className="mt-2 text-sm text-foreground/60">ou em parcelas no cartão de crédito</p>

          <div className="mt-8 flex justify-center"><CTA /></div>
          <p className="mt-4 text-xs text-foreground/60">Acesso imediato após a confirmação do pagamento</p>
        </div>

        {/* Valor percebido */}
        <div className="mt-16">
          <h3 className="font-display text-2xl md:text-3xl text-[color:var(--forest)] text-center">Quanto vale recuperar a liberdade de caminhar?</h3>
          <ul className="mt-8 mx-auto max-w-2xl space-y-2 text-foreground/85">
            <li className="flex justify-between border-b border-dashed py-2"><span>Consulta com fisioterapeuta especializado</span><span className="font-medium">R$ 250 – 500</span></li>
            <li className="flex justify-between border-b border-dashed py-2"><span>Avaliação biomecânica</span><span className="font-medium">R$ 200 – 600</span></li>
            <li className="flex justify-between border-b border-dashed py-2"><span>Consulta podológica</span><span className="font-medium">R$ 150 – 300</span></li>
            <li className="flex justify-between border-b border-dashed py-2"><span>Orientação sobre calçados adequados</span><span className="font-medium">R$ 100 – 300</span></li>
            <li className="flex justify-between border-b border-dashed py-2"><span>Estratégias de recuperação funcional</span><span className="font-medium">23+ anos de prática</span></li>
            <li className="flex justify-between py-3 text-[color:var(--forest)] font-semibold text-lg"><span>Valor percebido total</span><span>&gt; R$ 1.000</span></li>
          </ul>
        </div>
      </section>

      {/* Garantia */}
      <section className="surface-forest">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-24 text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-[color:var(--gold)]">
            <span className="font-display text-3xl text-[color:var(--gold)]">7</span>
          </div>
          <h2 className="mt-6 font-display text-3xl md:text-4xl text-[color:var(--sand)]">Garantia incondicional de 7 dias</h2>
          <p className="mt-6 text-lg text-white/85 leading-relaxed">
            Acesse todo o conteúdo. Analise cada módulo. Aplique as primeiras vivências. Se por qualquer motivo você concluir que o programa não é para você, basta enviar uma mensagem dentro de 7 dias após a compra e receberá <strong>100% do valor de volta</strong>. Sem questionamentos. Sem burocracia.
          </p>
          <div className="mt-8 rounded-xl border border-[color:var(--gold)]/40 bg-[color:var(--gold)]/10 p-5 text-sm text-white/90 text-left">
            ⚠️ Esta condição especial está disponível apenas durante o período do webinário. Após o encerramento da campanha, o acesso retorna ao preço regular. Os bônus exclusivos são liberados somente para quem adquirir durante este período.
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <h2 className="font-display text-3xl md:text-5xl text-[color:var(--forest)] text-center">Perguntas frequentes</h2>
        <div className="mt-10 space-y-4">
          {[
            { q: "O método funciona para quem já tem fascite plantar há muito tempo?", a: "Sim. Independentemente do tempo de dor, o corpo mantém capacidade de adaptação quando recebe os estímulos corretos. O método foi desenvolvido justamente para pessoas que já tentaram outras abordagens sem resultado duradouro." },
            { q: "Preciso de equipamentos ou materiais especiais?", a: "Não. O método é aplicável em casa, sem equipamentos específicos. Tudo o que você precisa está explicado no guia." },
            { q: "Quanto tempo por dia preciso dedicar?", a: "O programa foi desenvolvido para ser aplicado na rotina diária sem exigir horas de dedicação. Pequenas práticas progressivas ao longo dos 14 dias." },
            { q: "O guia substitui o acompanhamento médico?", a: "O Guia Sensorial é um material educativo e de autocuidado baseado em prática clínica real. Ele não substitui avaliação ou acompanhamento profissional, mas complementa e aprofunda o entendimento sobre a sua condição." },
            { q: "E se eu não conseguir seguir o cronograma de 14 dias?", a: "Você tem acesso vitalício ao conteúdo. Pode seguir no seu ritmo, revisitar os módulos quantas vezes precisar e retomar de onde parou sem perder nada." },
            { q: "Tenho 7 dias de garantia mesmo acessando o conteúdo?", a: "Sim. A garantia é incondicional. Você pode acessar todo o material e, caso não esteja satisfeito, solicitar o reembolso dentro do prazo de 7 dias." },
          ].map((f) => (
            <details key={f.q} className="group rounded-xl border border-[color:var(--forest)]/15 bg-white p-5">
              <summary className="cursor-pointer list-none flex items-start justify-between gap-4 font-medium text-[color:var(--forest)]">
                <span className="flex-1">{f.q}</span>
                <span className="text-[color:var(--gold)] transition-transform group-open:rotate-45 text-2xl leading-none">+</span>
              </summary>
              <p className="mt-3 text-foreground/80 leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Fechamento */}
      <section className="surface-sand">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28 text-center">
          <h2 className="font-display text-3xl md:text-5xl text-[color:var(--forest)]">Você não precisa aprender a conviver com essa dor.</h2>
          <div className="mt-6 space-y-4 text-lg text-[color:var(--forest)]/85 leading-relaxed">
            <p>Você não precisa começar cada manhã com medo de colocar o pé no chão. E você não precisa depender para sempre de remédios que apenas mascaram o problema.</p>
            <p>Seu corpo pode reaprender a caminhar.</p>
            <p>Existe um caminho para sair desse ciclo — e ele começa com entender o que está realmente acontecendo. O Guia Sensorial foi criado para mostrar esse caminho, de forma simples, segura e acessível.</p>
          </div>
          <div className="mt-10 flex justify-center"><CTA /></div>
        </div>
      </section>

      <footer className="surface-forest">
        <div className="mx-auto max-w-5xl px-6 py-10 text-center text-sm text-white/70">
          © Dra. Sylvia · Guia Sensorial da Fascite Plantar · Todos os direitos reservados<br />
          Garantia de 7 dias · Acesso imediato após a confirmação do pagamento · Conteúdo digital — acesso vitalício
        </div>
      </footer>
    </div>
  );
}
