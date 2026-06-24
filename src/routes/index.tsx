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
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Package,
  TrendingUp,
  Truck,
  AlertTriangle,
} from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Visão Geral — Cargolux" },
      { name: "description", content: "KPIs de operação, remessas ativas e desempenho da frota em tempo real." },
    ],
  }),
  component: DashboardPage,
});

const kpis = [
  {
    label: "Remessas Ativas",
    value: "1.284",
    delta: "+12,4%",
    trend: "up" as const,
    icon: Truck,
    hint: "vs. semana anterior",
  },
  {
    label: "Entregas no Prazo",
    value: "96,8%",
    delta: "+1,2%",
    trend: "up" as const,
    icon: CheckCircle2,
    hint: "meta: 95%",
  },
  {
    label: "Tempo Médio",
    value: "2,4 dias",
    delta: "-0,3 dias",
    trend: "up" as const,
    icon: Clock,
    hint: "trânsito porta-a-porta",
  },
  {
    label: "Pendências",
    value: "37",
    delta: "+5",
    trend: "down" as const,
    icon: AlertTriangle,
    hint: "exigem ação manual",
  },
];

const volumeData = [
  { dia: "Seg", entregue: 320, transito: 180 },
  { dia: "Ter", entregue: 410, transito: 220 },
  { dia: "Qua", entregue: 380, transito: 260 },
  { dia: "Qui", entregue: 510, transito: 290 },
  { dia: "Sex", entregue: 620, transito: 310 },
  { dia: "Sáb", entregue: 480, transito: 200 },
  { dia: "Dom", entregue: 290, transito: 140 },
];

const regionData = [
  { regiao: "Sudeste", volume: 4820 },
  { regiao: "Sul", volume: 2940 },
  { regiao: "Nordeste", volume: 2310 },
  { regiao: "Centro-O.", volume: 1560 },
  { regiao: "Norte", volume: 980 },
];

const shipments = [
  {
    id: "BR-9821",
    origem: "São Paulo, SP",
    destino: "Curitiba, PR",
    cliente: "Magalu Distribuição",
    status: "Em trânsito",
    eta: "Hoje, 18:40",
    progresso: 72,
  },
  {
    id: "BR-9820",
    origem: "Campinas, SP",
    destino: "Belo Horizonte, MG",
    cliente: "Natura Logística",
    status: "Entregue",
    eta: "Concluído",
    progresso: 100,
  },
  {
    id: "BR-9818",
    origem: "Rio de Janeiro, RJ",
    destino: "Salvador, BA",
    cliente: "B2W",
    status: "Atrasado",
    eta: "Atraso de 6h",
    progresso: 58,
  },
  {
    id: "BR-9815",
    origem: "Porto Alegre, RS",
    destino: "Florianópolis, SC",
    cliente: "Renner",
    status: "Em trânsito",
    eta: "Amanhã, 09:15",
    progresso: 34,
  },
  {
    id: "BR-9812",
    origem: "Recife, PE",
    destino: "Fortaleza, CE",
    cliente: "Boticário",
    status: "Aguardando coleta",
    eta: "Hoje, 22:00",
    progresso: 12,
  },
];

const statusVariant: Record<string, { className: string; label: string }> = {
  "Em trânsito": { className: "bg-info/10 text-info border-info/20", label: "Em trânsito" },
  Entregue: { className: "bg-success/10 text-success border-success/20", label: "Entregue" },
  Atrasado: { className: "bg-destructive/10 text-destructive border-destructive/20", label: "Atrasado" },
  "Aguardando coleta": { className: "bg-warning/15 text-warning-foreground border-warning/30", label: "Aguardando" },
};

function KpiCard({ kpi }: { kpi: (typeof kpis)[number] }) {
  const Icon = kpi.icon;
  const isPositive = kpi.trend === "up";
  return (
    <Card className="border-border/60 shadow-sm">
      <CardContent className="p-5">
        <div className="flex items-start justify-between">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-5 w-5" />
          </div>
          <Badge
            variant="outline"
            className={
              isPositive
                ? "border-success/30 bg-success/10 text-success"
                : "border-destructive/30 bg-destructive/10 text-destructive"
            }
          >
            {isPositive ? (
              <ArrowUpRight className="mr-1 h-3 w-3" />
            ) : (
              <ArrowDownRight className="mr-1 h-3 w-3" />
            )}
            {kpi.delta}
          </Badge>
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
            Acompanhe a operação em tempo real — últimas 24h
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex h-2 w-2 rounded-full bg-success animate-pulse" />
          Sistema operacional · sincronizado há 12s
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
              <CardTitle className="text-base">Volume de Remessas</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Entregas concluídas vs. em trânsito
              </p>
            </div>
            <div className="flex items-center gap-1 text-xs font-medium text-success">
              <TrendingUp className="h-3.5 w-3.5" /> +18,2%
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
                  <linearGradient id="gTransito" x1="0" y1="0" x2="0" y2="1">
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
                <Area type="monotone" dataKey="entregue" stroke="var(--color-chart-1)" strokeWidth={2} fill="url(#gEntregue)" />
                <Area type="monotone" dataKey="transito" stroke="var(--color-chart-2)" strokeWidth={2} fill="url(#gTransito)" />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Volume por Região</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Últimos 30 dias</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={regionData} margin={{ left: -10, right: 8, top: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
                <XAxis dataKey="regiao" stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
                <Tooltip
                  contentStyle={{
                    background: "var(--color-card)",
                    border: "1px solid var(--color-border)",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                />
                <Bar dataKey="volume" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-border/60 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between space-y-0">
            <div>
              <CardTitle className="text-base">Remessas Recentes</CardTitle>
              <p className="mt-1 text-xs text-muted-foreground">
                Últimas atualizações de status
              </p>
            </div>
            <button className="text-xs font-medium text-primary hover:underline">
              Ver todas
            </button>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                    <th className="px-5 py-3 font-medium">Código</th>
                    <th className="px-5 py-3 font-medium">Rota</th>
                    <th className="px-5 py-3 font-medium">Cliente</th>
                    <th className="px-5 py-3 font-medium">Status</th>
                    <th className="px-5 py-3 font-medium">Progresso</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((s) => {
                    const sv = statusVariant[s.status];
                    return (
                      <tr key={s.id} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                        <td className="px-5 py-4 font-mono text-xs font-semibold text-foreground">
                          {s.id}
                        </td>
                        <td className="px-5 py-4">
                          <div className="text-foreground">{s.origem}</div>
                          <div className="text-xs text-muted-foreground">→ {s.destino}</div>
                        </td>
                        <td className="px-5 py-4 text-muted-foreground">{s.cliente}</td>
                        <td className="px-5 py-4">
                          <Badge variant="outline" className={sv.className}>
                            {sv.label}
                          </Badge>
                          <div className="mt-1 text-xs text-muted-foreground">{s.eta}</div>
                        </td>
                        <td className="px-5 py-4 w-48">
                          <div className="flex items-center gap-2">
                            <Progress value={s.progresso} className="h-1.5" />
                            <span className="text-xs font-medium tabular-nums text-muted-foreground w-9 text-right">
                              {s.progresso}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle className="text-base">Capacidade da Frota</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">
              Utilização atual por tipo
            </p>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              { tipo: "Caminhões 3/4", uso: 82, total: "48 veículos", icon: Truck },
              { tipo: "Toco", uso: 64, total: "32 veículos", icon: Truck },
              { tipo: "Carretas", uso: 91, total: "24 veículos", icon: Truck },
              { tipo: "Vans urbanas", uso: 47, total: "76 veículos", icon: Package },
            ].map((item) => (
              <div key={item.tipo}>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium text-foreground">{item.tipo}</span>
                  </div>
                  <span className="font-semibold tabular-nums text-foreground">
                    {item.uso}%
                  </span>
                </div>
                <Progress value={item.uso} className="mt-2 h-2" />
                <p className="mt-1 text-xs text-muted-foreground">{item.total}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
