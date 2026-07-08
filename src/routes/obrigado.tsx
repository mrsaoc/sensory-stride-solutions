import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/obrigado")({
  head: () => ({
    meta: [
      { title: "Sua vaga está confirmada! | Dra. Sylvia" },
      { name: "description", content: "Entre no grupo do WhatsApp e garanta seu acesso à aula ao vivo." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "Sua vaga está confirmada!" },
      { property: "og:url", content: "/obrigado" },
    ],
    links: [{ rel: "canonical", href: "/obrigado" }],
  }),
  component: ObrigadoPage,
});

function ObrigadoPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="surface-forest text-center text-xs md:text-sm py-2 px-4">
        Dra. Sylvia · Método de Reintrodução Sensorial da Pisada®
      </div>

      <main className="mx-auto max-w-3xl px-6 py-16 md:py-24">
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full surface-sand">
            <svg viewBox="0 0 24 24" className="h-10 w-10 text-[color:var(--forest)]" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </div>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[color:var(--gold)]">Sua vaga está confirmada!</p>
          <h1 className="mt-4 font-display text-3xl md:text-5xl text-[color:var(--forest)] leading-tight">
            Você está a um passo de descobrir por que sua fascite plantar continua voltando
          </h1>
          <p className="mt-6 text-lg text-foreground/80">
            Fizemos uma reserva da sua vaga na aula ao vivo. Agora você precisa tomar uma ação rápida para não perder esse acesso exclusivo.
          </p>
        </div>

        <div className="mt-12 rounded-3xl border border-[color:var(--forest)]/15 bg-white p-8 md:p-10 shadow-xl">
          <h2 className="font-display text-2xl md:text-3xl text-[color:var(--forest)] text-center">
            Entre no grupo do WhatsApp agora e receba:
          </h2>
          <ul className="mt-6 space-y-3 text-foreground/85">
            {[
              "Aviso instantâneo quando a aula começar",
              "O vídeo de boas-vindas da Dra. Sylvia",
              "Um guia rápido sobre os 5 erros que agravam a fascite plantar",
              "Acesso exclusivo aos materiais compartilhados durante a aula",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-1 text-[color:var(--gold)]">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10 flex justify-center">
            <a href="#" className="btn-primary btn-primary-hover text-base md:text-lg">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor"><path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.5 0 .2 5.3.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.86 11.86 0 0 0 5.66 1.44h.01c6.56 0 11.86-5.3 11.86-11.86 0-3.17-1.23-6.15-3.4-8.42ZM12.07 21.5h-.01a9.63 9.63 0 0 1-4.91-1.35l-.35-.21-3.8 1 1.01-3.7-.23-.38a9.6 9.6 0 0 1-1.47-5.13c0-5.31 4.32-9.63 9.63-9.63a9.6 9.6 0 0 1 6.82 2.83 9.6 9.6 0 0 1 2.82 6.82c0 5.31-4.32 9.63-9.63 9.63Zm5.28-7.22c-.29-.14-1.71-.84-1.98-.94-.27-.1-.46-.14-.66.15-.19.29-.75.94-.92 1.13-.17.19-.34.22-.63.07-.29-.14-1.22-.45-2.32-1.44-.86-.77-1.44-1.72-1.61-2.01-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5l-.56-.01c-.19 0-.51.07-.78.36-.27.29-1.02 1-1.02 2.44 0 1.44 1.05 2.83 1.2 3.03.14.19 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.61.7.22 1.34.19 1.85.11.56-.08 1.71-.7 1.95-1.37.24-.67.24-1.25.17-1.37-.07-.12-.26-.19-.55-.34Z"/></svg>
              Entrar no Grupo do WhatsApp Agora →
            </a>
          </div>
        </div>

        <div className="mt-10 rounded-2xl surface-sand p-6 text-[color:var(--forest)]">
          <p className="text-sm md:text-base leading-relaxed">
            Depois de confirmar sua presença no WhatsApp, responda uma pergunta simples:
            <strong> qual é o seu maior desafio com a dor no calcanhar agora?</strong>
            {" "}Isso nos ajuda a personalizar a aula para suas necessidades específicas.
          </p>
        </div>

        <p className="mt-10 text-center text-xs text-foreground/60">
          Recebeu por engano? Você pode sair do grupo a qualquer momento.<br />
          A aula ao vivo acontece em <strong>[DATA E HORA]</strong>. Não perca.
        </p>
      </main>
    </div>
  );
}
