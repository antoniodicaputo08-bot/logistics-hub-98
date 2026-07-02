import { createFileRoute, Link } from "@tanstack/react-router";
import { meta } from "@/lib/productivity-data";

export const Route = createFileRoute("/pedidos")({
  head: () => ({ meta: [{ title: "Pedidos iFood — Produtividade R3" }] }),
  component: PedidosPage,
});

function PedidosPage() {
  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Pedidos iFood</h1>
        <p className="text-sm text-muted-foreground">
          {meta.totalPedidosIfood} pedidos no período · {meta.totalRegistroEntregas} registros de entrega
        </p>
      </div>
      <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-sm text-muted-foreground">
        Os dados detalhados de pedidos iFood e registros de entrega estão disponíveis no dashboard principal.
        <br />
        <Link to="/" className="text-blue-400 hover:text-blue-300 underline mt-2 inline-block">
          ← Acessar Dashboard Completo
        </Link>
      </div>
    </div>
  );
}
