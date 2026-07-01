import { createFileRoute } from "@tanstack/react-router";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Store, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { stores } from "@/lib/productivity-data";

export const Route = createFileRoute("/lojas")({
  head: () => ({ meta: [{ title: "Lojas — Produtividade R3" }] }),
  component: LojasPage,
});

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

const chartData = stores.map((s) => ({ loja: s.nome, margem: s.margem }));

function LojasPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-foreground">Lojas</h1>
        <p className="text-sm text-muted-foreground">Desempenho por loja/cliente — {stores.length} lojas no período</p>
      </div>
      <Card className="border-border/60 shadow-sm">
        <CardHeader><CardTitle className="text-base">Margem por Loja</CardTitle></CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={chartData} margin={{ left: -10, right: 8, top: 8 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border)" vertical={false} />
              <XAxis dataKey="loja" stroke="var(--color-muted-foreground)" fontSize={10} tickLine={false} axisLine={false} angle={-25} textAnchor="end" height={60} />
              <YAxis stroke="var(--color-muted-foreground)" fontSize={11} tickLine={false} axisLine={false} />
              <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 8, fontSize: 12 }} />
              <Bar dataKey="margem" fill="var(--color-primary)" radius={[6, 6, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {stores.map((s) => (
          <Card key={s.nome} className="border-border/60 shadow-sm">
            <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
              <div className="flex items-center gap-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary"><Store className="h-4 w-4" /></div>
                <CardTitle className="text-sm">{s.nome}</CardTitle>
              </div>
              <Badge variant="outline" className="border-success/30 bg-success/10 text-success">
                <TrendingUp className="mr-1 h-3 w-3" />{((s.margem / s.fatura) * 100).toFixed(0)}%
              </Badge>
            </CardHeader>
            <CardContent className="space-y-3 pt-2">
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div><p className="text-xs text-muted-foreground">Entregas</p><p className="font-semibold text-foreground tabular-nums">{s.entregas.toLocaleString("pt-BR")}</p></div>
                <div className="flex items-center gap-1"><Users className="h-3.5 w-3.5 text-muted-foreground" /><div><p className="text-xs text-muted-foreground">Entregadores</p><p className="font-semibold text-foreground tabular-nums">{s.numEntregadores}</p></div></div>
                <div><p className="text-xs text-muted-foreground">Faturamento</p><p className="font-semibold text-foreground tabular-nums">{fmt(s.fatura)}</p></div>
                <div><p className="text-xs text-muted-foreground">Custo</p><p className="font-semibold text-foreground tabular-nums">{fmt(s.custo)}</p></div>
              </div>
              <div className="border-t border-border/60 pt-2"><p className="text-xs text-muted-foreground">Margem</p><p className="font-semibold text-success tabular-nums">{fmt(s.margem)}</p></div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
