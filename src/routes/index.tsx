import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { CheckCircle2, Clock, Package, TrendingUp, Truck } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useProductivityData } from "@/lib/productivity-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão Geral — Produtividade R3" },
      { name: "description", content: "KPIs de entregas, custo e faturamento por loja e por entregador." },
    ],
  }),
  component: DashboardPage,
});

function monthLabel(dateStr: string) {
  const [y, m] = dateStr.split("-");
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
  return `${meses[Number(m) - 1]}/${y.slice(2)}`;
}

function DashboardPage() {
  const { data, loading, error } = useProductivityData();

  if (loading) return <div className="flex items-center justify-center h-64 text-muted-foreground">Carregando dados...</div>;
  if (error || !data) return <div className="flex items-center justify-center h-64 text-destructive">Erro ao carregar dados.</div>;

  const { totals, meta, dailySeries, stores, entregadores } = data;

  const kpis = [
    { label: "Total de Entregas", value: totals.totalEntregas.toLocaleString("pt-BR"), icon: Truck, hint: `acumulado em ${meta.totalDias} dias` },
    { label: "Faturamento", value: totals.totalFatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }), icon: CheckCircle2, hint: "acumulado no período" },
    { label: "Custo Operacional", value: totals.totalCusto.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }), icon: Clock, hint: "pago a entregadores" },
    { label: "Margem", value: totals.margem.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 }), icon: TrendingUp, hint: "faturamento - custo" },
  ];

  const monthlyMap = new Map<string, { mes: string; entregas: number; custo: number; fatura: number }>();
  for (const d of dailySeries) {
    const key = d.data.slice(0, 7);
    if (!monthlyMap.has(key)) monthlyMap.set(key, { mes: monthLabel(d.data), entregas: 0, custo: 0, fatura: 0 });
    const m = monthlyMap.get(key)!;
    m.entregas += d.entregas;
    m.custo += d.custo;
    m.fatura += d.fatura;
  }
  const monthlyData = Array.from(monthlyMap.values());
  const storeChartData = stores.map((s) => ({ loja: s.nome, entregas: s.entregas }));
  const topEntregadores = entregadores.slice(0, 6);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">Visão Geral</h1>
          <p className="text-sm text-muted-foreground">
            Produtividade R3 — dados reais de {meta.periodoInicio.split("-").reverse().join("/")} a {meta.periodoFim.split("-").reverse().join("/")}
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse" />
          Última atualização: {meta.periodoFim.split("-").reverse().join("/")}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <Card key={kpi.label} className="border-border/60 shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <div className="mt-4">
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">{kpi.label}</p>
                  <p className="mt-1 font-display text-3xl font-semibold text-foreground">{kpi.value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{kpi.hint}</p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Entregas e Custo por Mês</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Série completa do período disponível</p>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={monthlyData} margin={{ left: -20, right: 8, top: 8 }}>
                <defs>
                  <linearGradient id="gEntregue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gCusto" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-2)" stopOpacity={0.35} />
                    <stop offset="100%" stopColor="var(--color-chart-2)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="mes" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
                <Area type="monotone" dataKey="entregas" name="Entregas" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#gEntregue)" />
                <Area type="monotone" dataKey="custo" name="Custo (R$)" stroke="var(--color-chart-2)" strokeWidth={2} fill="url(#gCusto)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Entregas por Loja</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Total acumulado no período</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={storeChartData} margin={{ left: -10, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="loja" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} angle={-25} textAnchor="end" height={60} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
                <Bar dataKey="entregas" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Faturamento por Loja</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Total acumulado no período</p>
            </div>
            <Link to="/lojas" className="text-xs font-medium text-primary hover:underline">Ver todas</Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Loja</th>
                    <th className="px-5 py-3 font-medium">Entregas</th>
                    <th className="px-5 py-3 font-medium">Faturamento</th>
                    <th className="px-5 py-3 font-medium">Margem</th>
                  </tr>
                </thead>
                <tbody>
                  {stores.map((s) => (
                    <tr key={s.nome} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 font-medium text-foreground">{s.nome}</td>
                      <td className="px-5 py-4 text-muted-foreground tabular-nums">{s.entregas.toLocaleString("pt-BR")}</td>
                      <td className="px-5 py-4 text-muted-foreground tabular-nums">{s.fatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}</td>
                      <td className="px-5 py-4 text-muted-foreground tabular-nums">{s.margem.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Top Entregadores</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">Ranking por quantidade de entregas</p>
            </div>
            <Link to="/entregadores" className="text-xs font-medium text-primary hover:underline">Ver todos</Link>
          </CardHeader>
          <CardContent className="space-y-4">
            {topEntregadores.map((item) => (
              <div key={item.nome}>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <Package className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-medium text-foreground truncate">{item.nome}</span>
                  </div>
                  <span className="font-semibold tabular-nums text-foreground shrink-0">{item.entregas}</span>
                </div>
                <Progress value={(item.entregas / topEntregadores[0].entregas) * 100} className="mt-2 h-2" />
                <p className="mt-1 text-xs text-muted-foreground">{item.lojas.join(", ")}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
