import { createFileRoute, Link } from "@tanstack/react-router";
import { meta, totals, dailySeries } from "@/lib/productivity-data";

export const Route = createFileRoute("/pedidos")({
  head: () => ({ meta: [{ title: "Volume de Entregas — Produtividade R3" }] }),
  component: PedidosPage,
});

function fmtNum(n: number) {
  return n.toLocaleString("pt-BR");
}
function fmtBRL(n: number) {
  return n.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function PedidosPage() {
  // Agrega por mês para dar uma leitura de tendência que o resumo diário não dá
  const porMes = new Map<string, { entregas: number; fatura: number; dias: number }>();
  for (const d of dailySeries) {
    const mes = d.data.slice(0, 7);
    const atual = porMes.get(mes) ?? { entregas: 0, fatura: 0, dias: 0 };
    atual.entregas += d.entregas;
    atual.fatura += d.fatura;
    atual.dias += 1;
    porMes.set(mes, atual);
  }
  const meses = [...porMes.entries()].sort((a, b) => b[0].localeCompare(a[0]));
  const maxEntregas = Math.max(...meses.map(([, v]) => v.entregas), 1);

  const mediaDiaria = Math.round(totals.entregas / meta.totalDias);
  const ticket = totals.entregas ? totals.fatura / totals.entregas : 0;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Volume de Entregas</h1>
        <p className="text-sm text-muted-foreground">
          {fmtNum(totals.entregas)} entregas em {meta.totalDias} dias ·{" "}
          {meta.periodoInicio.split("-").reverse().join("/")} a {meta.periodoFim.split("-").reverse().join("/")}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Média diária</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{fmtNum(mediaDiaria)}</p>
          <p className="mt-1 text-xs text-muted-foreground">entregas por dia</p>
        </div>
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Ticket médio</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">
            {ticket.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">faturado por entrega</p>
        </div>
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Motoristas</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{fmtNum(meta.totalMotoristas)}</p>
          <p className="mt-1 text-xs text-muted-foreground">no período</p>
        </div>
      </div>

      <div className="rounded-xl border border-border/60 p-5">
        <h2 className="text-base font-semibold text-foreground">Entregas por mês</h2>
        <div className="mt-4 space-y-2">
          {meses.map(([mes, v]) => {
            const [ano, m] = mes.split("-");
            const nome = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"][Number(m) - 1];
            return (
              <div key={mes} className="flex items-center gap-3 text-sm">
                <span className="w-16 shrink-0 text-muted-foreground">{nome}/{ano.slice(2)}</span>
                <div className="h-6 flex-1 overflow-hidden rounded bg-muted/30">
                  <div
                    className="h-full rounded bg-blue-500/70"
                    style={{ width: `${(v.entregas / maxEntregas) * 100}%` }}
                  />
                </div>
                <span className="w-20 shrink-0 text-right tabular-nums text-foreground">{fmtNum(v.entregas)}</span>
                <span className="w-24 shrink-0 text-right tabular-nums text-muted-foreground">{fmtBRL(v.fatura)}</span>
              </div>
            );
          })}
        </div>
      </div>

      <Link to="/" className="inline-block text-sm text-blue-400 underline hover:text-blue-300">
        ← Dashboard completo
      </Link>
    </div>
  );
}
