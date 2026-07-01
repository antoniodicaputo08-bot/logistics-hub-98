import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Users } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useProductivityData } from "@/lib/productivity-data";

export const Route = createFileRoute("/entregadores")({
  head: () => ({
    meta: [
      { title: "Entregadores — Produtividade R3" },
      { name: "description", content: "Ranking completo de entregadores por quantidade de entregas, custo e faturamento." },
    ],
  }),
  component: EntregadoresPage,
});

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}

function EntregadoresPage() {
  const { data, loading, error } = useProductivityData();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    if (!data) return [];
    const q = query.trim().toUpperCase();
    if (!q) return data.entregadores;
    return data.entregadores.filter((e) => e.nome.includes(q) || e.lojas.some((l) => l.toUpperCase().includes(q)));
  }, [query, data]);

  if (loading) return <div className="flex items-center justify-center h-64 text-muted-foreground">Carregando dados...</div>;
  if (error || !data) return <div className="flex items-center justify-center h-64 text-destructive">Erro ao carregar dados.</div>;

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-semibold text-foreground">Entregadores</h1>
          <p className="text-sm text-muted-foreground">{data.entregadores.length} entregadores com registro no período</p>
        </div>
        <div className="relative w-full sm:w-72">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Buscar por nome ou loja..."
            className="pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Ranking Completo</CardTitle>
          <p className="mt-1 text-xs text-muted-foreground">Ordenado por quantidade de entregas</p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-card">
                <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 font-medium">#</th>
                  <th className="px-5 py-3 font-medium">Entregador</th>
                  <th className="px-5 py-3 font-medium">Loja(s)</th>
                  <th className="px-5 py-3 font-medium">Entregas</th>
                  <th className="px-5 py-3 font-medium">Custo</th>
                  <th className="px-5 py-3 font-medium">Faturamento</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((e, i) => (
                  <tr key={e.nome} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 text-xs text-muted-foreground tabular-nums">{i + 1}</td>
                    <td className="px-5 py-3">
                      <div className="flex items-center gap-2">
                        <Users className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span className="font-medium text-foreground">{e.nome}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground">{e.lojas.join(", ")}</td>
                    <td className="px-5 py-3 font-semibold text-foreground tabular-nums">{e.entregas.toLocaleString("pt-BR")}</td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{fmt(e.custo)}</td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{fmt(e.fatura)}</td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={6} className="px-5 py-8 text-center text-muted-foreground">
                      Nenhum entregador encontrado para "{query}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
