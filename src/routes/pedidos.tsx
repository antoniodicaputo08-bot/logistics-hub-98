import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Package, AlertCircle, Search } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { loadProductivityData } from "@/lib/productivity-data";

export const Route = createFileRoute("/pedidos")({
  head: () => ({
    meta: [
      { title: "Pedidos iFood — Produtividade R3" },
      { name: "description", content: "Pedidos individuais recebidos via integração iFood (Ferro Barra Pizzaria)." },
    ],
  }),
  loader: () => loadProductivityData(),
  component: PedidosPage,
});

const statusVariant: Record<string, string> = {
  Finalizado: "border-success/30 bg-success/10 text-success",
  Cancelado: "border-destructive/30 bg-destructive/10 text-destructive",
};

function PedidosPage() {
  const { meta, pedidosIfood, registroEntregas } = Route.useLoaderData();
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toUpperCase();
    if (!q) return pedidosIfood;
    return pedidosIfood.filter((p) => p.codigo.toUpperCase().includes(q) || p.entregador.toUpperCase().includes(q));
  }, [query, pedidosIfood]);

  const totalKmRegistro = registroEntregas.reduce((acc, r) => acc + r.km, 0);
  const totalValorRegistro = registroEntregas.reduce((acc, r) => acc + r.valor, 0);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="font-display text-2xl font-semibold text-foreground">Pedidos iFood</h1>
        <p className="text-sm text-muted-foreground">
          Pedidos individuais da aba "Base Original" — {meta.totalPedidosIfood} pedidos registrados (Ferro Barra Pizzaria)
        </p>
      </div>

      <Card className="border-warning/30 bg-warning/5 shadow-sm">
        <CardContent className="flex items-start gap-3 p-4">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0 text-warning-foreground" />
          <p className="text-xs text-muted-foreground">
            Esta aba da planilha só contém pedidos de um único cliente (Ferro Barra Pizzaria, via API iFood). As demais
            lojas não têm pedido-a-pedido detalhado, apenas o resumo por turno — ver página <strong>Lojas</strong>.
          </p>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader className="flex flex-row items-end justify-between gap-3 space-y-0">
          <div>
            <CardTitle className="text-base">Pedidos ({filtered.length})</CardTitle>
            <p className="mt-1 text-xs text-muted-foreground">Todos os {meta.totalPedidosIfood} pedidos da planilha</p>
          </div>
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por código ou entregador..."
              className="pl-9"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto max-h-[70vh]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-card">
                <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Código</th>
                  <th className="px-5 py-3 font-medium">Entregador</th>
                  <th className="px-5 py-3 font-medium">Distância</th>
                  <th className="px-5 py-3 font-medium">Entrada</th>
                  <th className="px-5 py-3 font-medium">Finalizado</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Valor Cliente</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p, i) => (
                  <tr key={`${p.codigo}-${i}`} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 font-mono text-xs font-semibold text-foreground">{p.codigo}</td>
                    <td className="px-5 py-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Package className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                        <span className="truncate max-w-[220px]">{p.entregador}</span>
                      </div>
                    </td>
                    <td className="px-5 py-3 text-muted-foreground tabular-nums">{p.distancia}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{p.entrada}</td>
                    <td className="px-5 py-3 text-xs text-muted-foreground">{p.finalizou}</td>
                    <td className="px-5 py-3">
                      <Badge variant="outline" className={statusVariant[p.status] ?? ""}>
                        {p.status}
                      </Badge>
                    </td>
                    <td className="px-5 py-3 font-medium text-foreground tabular-nums">
                      {p.valorCliente.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-8 text-center text-muted-foreground">
                      Nenhum pedido encontrado para "{query}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      <Card className="border-border/60 shadow-sm">
        <CardHeader>
          <CardTitle className="text-base">Registro de Entregas — Ferro e Farinha</CardTitle>
          <p className="mt-1 text-xs text-muted-foreground">
            {registroEntregas.length} entregas individuais — {totalKmRegistro.toLocaleString("pt-BR")} km rodados, {totalValorRegistro.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })} pagos
          </p>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto max-h-[50vh]">
            <table className="w-full text-sm">
              <thead className="sticky top-0 bg-card">
                <tr className="border-b border-border bg-muted/40 text-left text-xs uppercase tracking-wider text-muted-foreground">
                  <th className="px-5 py-3 font-medium">Data</th>
                  <th className="px-5 py-3 font-medium">Entregador</th>
                  <th className="px-5 py-3 font-medium">KM</th>
                  <th className="px-5 py-3 font-medium">Valor</th>
                </tr>
              </thead>
              <tbody>
                {registroEntregas.map((r, i) => (
                  <tr key={i} className="border-b border-border/60 last:border-0 hover:bg-muted/30 transition-colors">
                    <td className="px-5 py-3 text-xs text-muted-foreground">{r.data}</td>
                    <td className="px-5 py-3 text-muted-foreground truncate max-w-[260px]">{r.entregador}</td>
                    <td className="px-5 py-3 tabular-nums text-foreground">{r.km}</td>
                    <td className="px-5 py-3 tabular-nums text-foreground">
                      {r.valor.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </td>
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
