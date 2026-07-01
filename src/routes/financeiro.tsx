import { createFileRoute } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Wallet, TrendingUp, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { totals, dailySeries, stores } from "@/lib/productivity-data";

export const Route = createFileRoute("/financeiro")({
  head: () => ({ meta: [{ title: "Financeiro — Produtividade R3" }] }),
  component: FinanceiroPage,
});

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function monthLabel(dateStr: string) {
  const [y, m] = dateStr.split("-");
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return `${meses[Number(m) - 1]}/${y.slice(2)}`;
}

const monthlyMap = new Map<string, { mes: string; custo: number; fatura: number; margem: number }>();
for (const d of dailySeries) {
  const key = d.data.slice(0, 7);
  if (!monthlyMap.has(key)) monthlyMap.set(key, { mes: monthLabel(d.data), custo: 0, fatura: 0, margem: 0 });
  const mo = monthlyMap.get(key)!;
  mo.custo += d.custo; mo.fatura += d.fatura; mo.margem += d.margem;
}
const monthlyData = Array.from(monthlyMap.values());
const margemPct = (totals.margem / totals.totalFatura) * 100;

function FinanceiroPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div><h1 className="font-display text-2xl font-semibold text-foreground">Financeiro</h1><p className="text-sm text-muted-foreground">Custo, faturamento e margem acumulados no período</p></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <Card className="border-border/60 shadow-sm"><CardContent className="p-5"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary"><Wallet className="h-5 w-5" /></div><p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Faturamento Total</p><p className="mt-1 font-display text-3xl font-semibold text-foreground">{fmt(totals.totalFatura)}</p></CardContent></Card>
        <Card className="border-border/60 shadow-sm"><CardContent className="p-5"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-destructive/10 text-destructive"><TrendingDown className="h-5 w-5" /></div><p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Custo Total</p><p className="mt-1 font-display text-3xl font-semibold text-foreground">{fmt(totals.totalCusto)}</p></CardContent></Card>
        <Card className="border-border/60 shadow-sm"><CardContent className="p-5"><div className="flex h-10 w-10 items-center justify-center rounded-lg bg-success/10 text-success"><TrendingUp className="h-5 w-5" /></div><p className="mt-4 text-xs uppercase tracking-wider text-muted-foreground">Margem</p><p className="mt-1 font-display text-3xl font-semibold text-foreground">{fmt(totals.margem)}</p><p className="mt-1 text-xs text-muted-foreground">{margemPct.toFixed(1)}% do faturamento</p></CardContent></Card>
      </div>
      <Card className="border-border/60 shadow-sm">
        <CardHeader><CardTitle className="text-base">Evolução Mensal</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={320}>
            <AreaChart data={monthlyData} margin={{ left: -10, right: 8, top: 8 }}>
              <defs>
                <linearGradient id="gFatura" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.4} /><stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} /></linearGradient>
                <linearGradient id="gCustoF" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.35} /><stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} /></linearGradient>
                <linearGradient id="gMargem" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="var(--color-chart-3)" stopOpacity={0.35} /><stop offset="100%" stopColor="var(--color-chart-3)" stopOpacity={0} /></linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Area type="monotone" dataKey="fatura" name="Faturamento" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#gFatura)" />
              <Area type="monotone" dataKey="custo" name="Custo" stroke="var(--color-chart-2)" strokeWidth={2} fill="url(#gCustoF)" />
              <Area type="monotone" dataKey="margem" name="Margem" stroke="var(--color-chart-3)" strokeWidth={2} fill="url(#gMargem)" />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <Card className="border-border/60 shadow-sm">
        <CardHeader><CardTitle className="text-base">Margem por Loja</CardTitle></CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead><tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground"><th className="px-5 py-3 font-medium">Loja</th><th className="px-5 py-3 font-medium">Faturamento</th><th className="px-5 py-3 font-medium">Custo</th><th className="px-5 py-3 font-medium">Margem</th><th className="px-5 py-3 font-medium">% Margem</th></tr></thead>
              <tbody>
                {stores.map((s) => (
                  <tr key={s.nome} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 font-medium text-foreground">{s.nome}</td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{fmt(s.fatura)}</td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{fmt(s.custo)}</td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{fmt(s.margem)}</td>
                    <td className="px-5 py-3 font-semibold text-success tabular-nums">{((s.margem / s.fatura) * 100).toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
