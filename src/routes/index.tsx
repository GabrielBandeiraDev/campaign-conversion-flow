import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home, Lightbulb, Megaphone, Gift, Users, Search, ShoppingCart, BarChart3,
  ShieldCheck, RotateCcw, Info, X, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZEUSS 2.0 — Marketing com IA" },
      { name: "description", content: "Crie campanhas inteligentes de conversão, valor, retenção e recuperação." },
      { property: "og:title", content: "ZEUSS 2.0 — Marketing com IA" },
      { property: "og:description", content: "Crie campanhas inteligentes com IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: Index,
});

const nav = [
  { label: "Início", icon: Home },
  { label: "Oportunidades", icon: Lightbulb },
  { label: "Campanhas", icon: Megaphone, active: true },
  { label: "Minhas campanhas", icon: Gift },
  { label: "Tipo de clientes", icon: Users },
];

const objectives = [
  { label: "Conversão", icon: ShoppingCart, soft: "bg-brand-soft", fg: "text-brand-ink" },
  { label: "Desenvolvimento de valor", icon: BarChart3, soft: "bg-info-soft", fg: "text-info" },
  { label: "Retenção preventiva", icon: ShieldCheck, soft: "bg-violet-soft", fg: "text-violet" },
  { label: "Recuperação", icon: RotateCcw, soft: "bg-amber-soft", fg: "text-amber" },
];

const conversionCols = [
  ["Oferta ou recomendação personalizada", "Cupom individual, cashback ou SuperCashback", "Compre X e leve Y, combos e mecânicas patrocinadas"],
  ["Carrinho abandonado e alertas de disponibilidade ou oportunidade", "Comunicação baseada em afinidade, propensão e momento de compra"],
];

const proposals = [
  { tag: "FREQUÊNCIA", tagCls: "bg-info-soft text-info", title: "Clientes frequentes vieram 18% menos este mês", name: "“Compra do mês”", desc: "Push + e-mail · desconto progressivo", value: "R$ 31.200" },
  { tag: "TICKET", tagCls: "bg-amber-soft text-amber", title: "Hortifrúti aparece pouco na cesta de quem compra muito", name: "“Benefício na categoria”", desc: "App + cartaz na loja · leve mais por menos", value: "R$ 22.900" },
];

function Logo() {
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="font-display text-4xl font-bold text-brand">Z</span>
        <span className="font-display text-3xl font-semibold tracking-[0.15em] text-primary-foreground">ZEUSS</span>
        <span className="font-display text-base font-bold text-brand">2.0</span>
      </div>
      <p className="mt-2 text-sm text-primary-foreground/70">Transformando dados em decisões</p>
    </div>
  );
}

function Index() {
  const [step, setStep] = useState<"objective" | "conversion">("objective");
  const [modal, setModal] = useState<string | null>(null);

  return (
    <div className="flex min-h-screen bg-secondary font-sans">
      <aside className="w-[280px] shrink-0 bg-navy px-3 py-5">
        <div className="px-3"><Logo /></div>
        <nav className="mt-16 space-y-2">
          {nav.map((n) => (
            <button
              key={n.label}
              onClick={() => n.active && setStep("objective")}
              className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 text-base transition-colors ${
                n.active ? "bg-primary-foreground/10 text-primary-foreground" : "text-primary-foreground/70 hover:bg-primary-foreground/5"
              }`}
            >
              <n.icon className={`h-5 w-5 ${n.active ? "text-brand" : ""}`} />
              {n.label}
            </button>
          ))}
        </nav>
      </aside>

      <div className="flex flex-1 flex-col">
        <header className="flex h-[70px] items-center gap-24 border-b bg-background px-10">
          <div className="flex items-center gap-2 text-sm">
            <span className="text-muted-foreground">ZEUSS 2.0</span>
            <ChevronRight className="h-3 w-3 text-muted-foreground" />
            <span className="font-medium text-foreground">Marketing com IA</span>
          </div>
          <div className="flex h-12 max-w-4xl flex-1 items-center gap-3 rounded-lg border bg-secondary px-5 text-sm text-muted-foreground">
            <Search className="h-4 w-4" /> Buscar campanhas, clientes, produtos...
          </div>
        </header>

        <main className="flex-1 px-10 py-10">
          {step === "objective" ? (
            <div className="flex min-h-[70vh] flex-col items-center justify-center text-center">
              <p className="font-display text-sm font-semibold uppercase tracking-wider text-muted-foreground">Nova campanha</p>
              <h1 className="mt-4 font-display text-3xl font-semibold text-foreground">Qual o objetivo principal desta campanha?</h1>
              <p className="mt-3 font-display text-lg text-muted-foreground">Escolha o tipo de campanha. Passe o mouse no ícone para ver mais detalhes</p>
              <div className="mt-16 grid w-full max-w-6xl grid-cols-2 gap-12 xl:grid-cols-4">
                {objectives.map((o) => (
                  <button
                    key={o.label}
                    onClick={() => o.label === "Conversão" && setStep("conversion")}
                    className="flex items-center gap-4 rounded-xl bg-card p-5 text-left shadow-sm transition hover:shadow-md"
                  >
                    <span className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${o.soft}`}>
                      <o.icon className={`h-6 w-6 ${o.fg}`} />
                    </span>
                    <span className="flex-1 font-display text-base font-semibold leading-tight text-foreground/80">{o.label}</span>
                    <Info className={`h-6 w-6 ${o.fg}`} />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <h1 className="font-display text-2xl font-semibold">
                <button onClick={() => setStep("objective")} className="text-muted-foreground/70 hover:text-foreground">Campanhas</button>
                <span className="mx-3 text-foreground">|</span>
                <span className="text-foreground">Conversão</span>
              </h1>
              <div className="mt-12 grid max-w-6xl grid-cols-2 items-start gap-12">
                {conversionCols.map((col, i) => (
                  <div key={i} className="space-y-12">
                    {col.map((t) => (
                      <div key={t} className="rounded-2xl border-[3px] border-brand bg-card p-7">
                        <span className="rounded-md bg-brand-soft px-3 py-1 text-xs font-medium tracking-widest text-brand-ink">CONVERSÃO</span>
                        <h3 className="mt-5 font-display text-xl font-semibold leading-snug text-foreground">{t}</h3>
                        <button onClick={() => setModal(t)} className="mt-5 h-12 w-full rounded-lg bg-navy text-sm font-medium text-primary-foreground hover:opacity-90">
                          Criar campanha
                        </button>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </main>
      </div>

      {modal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 p-6" onClick={() => setModal(null)}>
          <div className="w-full max-w-6xl overflow-hidden rounded-2xl bg-secondary" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex h-16 items-center justify-center bg-navy">
              <span className="absolute left-6 top-0 font-display text-6xl font-bold leading-none text-brand">Z</span>
              <h2 className="font-display text-2xl font-semibold text-primary-foreground">{modal}</h2>
              <button onClick={() => setModal(null)} className="absolute right-6 text-primary-foreground"><X className="h-6 w-6" /></button>
            </div>
            <div className="h-2 bg-brand" />
            <div className="space-y-5 p-5">
              <div className="grid grid-cols-2 gap-6">
                {proposals.map((p) => (
                  <div key={p.title} className="rounded-2xl bg-card p-6 shadow-sm">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-md px-3 py-1 text-xs font-medium tracking-widest ${p.tagCls}`}>{p.tag}</span>
                      <span className="text-sm text-muted-foreground">Prioridade média</span>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{p.title}</h3>
                    <div className="mt-5 rounded-xl bg-secondary p-4">
                      <p className="text-xs font-medium tracking-widest text-muted-foreground">CAMPANHA SUGERIDA</p>
                      <p className="mt-1 font-display text-base font-semibold text-foreground">{p.name}</p>
                      <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Venda extra estimada</span>
                      <span className="text-lg font-bold text-brand-ink">{p.value}</span>
                    </div>
                    <div className="mt-4 flex gap-3">
                      <button className="h-12 flex-1 rounded-lg bg-navy text-sm font-medium text-primary-foreground">Ver proposta</button>
                      <button className="h-12 rounded-lg border bg-card px-6 text-sm text-foreground">Ignorar</button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="h-72 rounded-2xl bg-card" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
