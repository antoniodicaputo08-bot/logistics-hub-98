import { createFileRoute } from "@tanstack/react-router";
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
import {
  CheckCircle2,
  Clock,
  Package,
  TrendingUp,
  Truck,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão Geral — Produtividade R3" },
      { name: "description", content: "KPIs de entregas, custo e faturamento por loja e por entregador." },
    ],
  }),
  component: DashboardPage,
});

const kpis = [
  {
    label: "Total de Entregas",
    value: "51.128",
    delta: "",
    trend: "up" as const,
    icon: Truck,
    hint: "acumulado no período",
  },
  {
    label: "Faturamento",
    value: "R$ 876.253",
    delta: "",
    trend: "up" as const,
    icon: CheckCircle2,
    hint: "acumulado no período",
  },
  {
    label: "Custo Operacional",
    value: "R$ 591.591",
    delta: "",
    trend: "down" as const,
    icon: Clock,
    hint: "pago a entregadores",
  },
  {
    label: "Margem",
    value: "R$ 284.662",
    delta: "",
    trend: "up" as const,
    icon: TrendingUp,
    hint: "faturamento - custo",
  },
];

const volumeData = [
  { dia: "17/06", entregue: 214, custo: 3283 },
  { dia: "18/06", entregue: 195, custo: 3065 },
  { dia: "19/06", entregue: 629, custo: 6530 },
  { dia: "20/06", entregue: 493, custo: 5853 },
  { dia: "21/06", entregue: 570, custo: 6441 },
  { dia: "22/06", entregue: 160, custo: 2646 },
  { dia: "23/06", entregue: 238, custo: 3373 },
];

const storeData = [
  { loja: "Dominos", entregas: 33617, fatura: 544980 },
  { loja: "Joaquina", entregas: 13679, fatura: 201605 },
  { loja: "Cozi", entregas: 1376, fatura: 27162 },
  { loja: "Ferro e Farinha", entregas: 1182, fatura: 15393 },
  { loja: "Dominos Irajá", entregas: 794, fatura: 41060 },
  { loja: "Artigiano - Anna", entregas: 424, fatura: 7676 },
  { loja: "RJCC", entregas: 43, fatura: 35826 },
  { loja: "Mitsuba", entregas: 13, fatura: 2550 },
];

const topEntregadores = [
  { nome: "Alan Santos Alves", loja: "Joaquina", entregas: 1626 },
  { nome: "Micael Luis Ferreira", loja: "Joaquina", entregas: 1578 },
  { nome: "Salatyel de Souza Martins", loja: "Dominos", entregas: 1307 },
  { nome: "Thiago França de Lima", loja: "Dominos", entregas: 1287 },
  { nome: "Jefferson Antero", loja: "Dominos", entregas: 1170 },
  { nome: "Gabriel Ramos", loja: "Dominos", entregas: 1155 },
  { nome: "Rafael Reis Linhares", loja: "Dominos", entregas: 1106 },
  { nome: "Ronnald Bento Santos", loja: "Dominos", entregas: 1105 },
  { nome: "Francisco Agnaldo Brito", loja: "Cozi", entregas: 983 },
  { nome: "Guilherme Morais", loja: "Dominos", entregas: 958 },
];

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  const Icon = kpi.icon;
  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
        </div>
        <div className="mt-4">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">
            {kpi.label}
          </p>
          <p className="mt-1 font-display text-3xl font-semibold text-foreground">
            {kpi.value}
          </p>
          <p className="mt-1 text-xs text-muted-foreground">{kpi.hint}</p>
        </div>
      </CardContent>
    </Card>
  );
}

function DashboardPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">
            Visão Geral
          </h1>
          <p className="text-sm text-muted-foreground">
            Produtividade R3 — dados reais (planilha PRODUTIVIDADE V2)
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse" />
          Última atualização: 23/06/2026
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {kpis.map((kpi) => (
          <KpiCard key={kpi.label} kpi={kpi} />
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-start justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Entregas e Custo por Dia</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Últimos 7 dias com dados (17/06 a 23/06)
              </p>
            </div>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <AreaChart data={volumeData} margin={{ left: -20, right: 8, top: 8 }}>
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
                <XAxis dataKey="dia" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Area type="monotone" dataKey="entregue" name="Entregas" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#gEntregue)" />
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
              <BarChart data={storeData} margin={{ left: -10, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="loja" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} angle={-25} textAnchor="end" height={60} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
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
              <p className="mt-1 text-xs text-muted-foreground">
                Total acumulado no período
              </p>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Loja</th>
                    <th className="px-5 py-3 font-medium">Entregas</th>
                    <th className="px-5 py-3 font-medium">Faturamento</th>
                  </tr>
                </thead>
                <tbody>
                  {storeData.map((s) => (
                    <tr key={s.loja} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                      <td className="px-5 py-4 font-medium text-foreground">{s.loja}</td>
                      <td className="px-5 py-4 text-muted-foreground tabular-nums">{s.entregas.toLocaleString("pt-BR")}</td>
                      <td className="px-5 py-4 text-muted-foreground tabular-nums">
                        {s.fatura.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Top Entregadores</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              Ranking por quantidade de entregas
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            {topEntregadores.slice(0, 6).map((item) => (
              <div key={item.nome}>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 min-w-0">
                    <Package className="h-4 w-4 shrink-0 text-muted-foreground" />
                    <span className="font-medium text-foreground truncate">{item.nome}</span>
                  </div>
                  <span className="font-semibold tabular-nums text-foreground shrink-0">
                    {item.entregas}
                  </span>
                </div>
                <Progress value={(item.entregas / topEntregadores[0].entregas) * 100} className="mt-2 h-2" />
                <p className="mt-1 text-xs text-muted-foreground">{item.loja}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
