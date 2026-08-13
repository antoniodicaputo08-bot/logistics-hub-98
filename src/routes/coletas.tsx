import { createFileRoute, Link } from "@tanstack/react-router";
import { coletas } from "@/lib/data/coletas";

export const Route = createFileRoute("/coletas")({
  head: () => ({ meta: [{ title: "Coletas — Produtividade R3" }] }),
  component: ColetasPage,
});

function pct(parte: number, total: number) {
  return total ? Math.round((parte / total) * 100) : 0;
}

// Nomes vêm como "MRJG1013- ENDERSON NUNES DA SILVA" — o código atrapalha a leitura
function semCodigo(nome: string) {
  return nome.replace(/^MRJG[\s-]*\d+[\s-]*/i, "").trim() || nome;
}

function ColetasPage() {
  const { resumo, cobertura, sobrecarregados, dispersos, semCadastro, regioes, gerado } = coletas;

  if (!resumo.coletas) {
    return (
      <div className="p-6 lg:p-8">
        <h1 className="text-2xl font-semibold text-foreground">Coletas</h1>
        <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/5 p-5 text-sm text-muted-foreground">
          A análise ainda não foi gerada. Ela roda automaticamente todo dia às 8h.
        </div>
        <Link to="/" className="mt-4 inline-block text-sm text-blue-400 underline">← Dashboard</Link>
      </div>
    );
  }

  const pctVeiculo = pct(cobertura.veiculo, cobertura.total);

  return (
    <div className="p-6 lg:p-8 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Coletas</h1>
        <p className="text-sm text-muted-foreground">
          {resumo.coletas.toLocaleString("pt-BR")} coletas · {resumo.motoristas} motoristas ·
          mediana {resumo.medianaColetas} por motorista
          {gerado && ` · atualizado ${new Date(gerado).toLocaleString("pt-BR", { dateStyle: "short", timeStyle: "short" })}`}
        </p>
      </div>

      {/* Indicadores */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
          <p className="text-xs uppercase tracking-wider text-amber-400">Sobrecarregados</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{resumo.sobrecarregados}</p>
          <p className="mt-1 text-xs text-muted-foreground">acima de 3× a mediana</p>
        </div>
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Ociosos</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{resumo.ociosos}</p>
          <p className="mt-1 text-xs text-muted-foreground">2 coletas ou menos</p>
        </div>
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Dispersão alta</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{resumo.dispersos}</p>
          <p className="mt-1 text-xs text-muted-foreground">muitos bairros, poucas coletas</p>
        </div>
        <div className="rounded-xl border border-border/60 p-5">
          <p className="text-xs uppercase tracking-wider text-muted-foreground">Sem cadastro</p>
          <p className="mt-1 text-3xl font-semibold text-foreground">{resumo.semCadastro}</p>
          <p className="mt-1 text-xs text-muted-foreground">não constam em PORTADORES</p>
        </div>
      </div>

      {/* Sobrecarga */}
      {sobrecarregados.length > 0 && (
        <div className="rounded-xl border border-border/60 p-5">
          <h2 className="text-base font-semibold text-foreground">Carga concentrada</h2>
          <p className="text-xs text-muted-foreground">Motoristas com volume muito acima da mediana</p>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/60 text-[10px] uppercase tracking-wider text-muted-foreground">
                  <th className="pb-2 text-left font-medium">Motorista</th>
                  <th className="pb-2 text-left font-medium">Veículo</th>
                  <th className="pb-2 text-right font-medium">Coletas</th>
                  <th className="pb-2 text-right font-medium">× mediana</th>
                </tr>
              </thead>
              <tbody>
                {sobrecarregados.slice(0, 12).map((m) => (
                  <tr key={m.nome} className="border-b border-border/30">
                    <td className="py-2 text-foreground">{semCodigo(m.nome).slice(0, 34)}</td>
                    <td className="py-2 text-muted-foreground">{m.veiculo ?? "—"}</td>
                    <td className="py-2 text-right tabular-nums text-foreground">{m.coletas}</td>
                    <td className="py-2 text-right tabular-nums text-amber-400">{m.vezesMediana}×</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Dispersão */}
      {dispersos.length > 0 && (
        <div className="rounded-xl border border-border/60 p-5">
          <h2 className="text-base font-semibold text-foreground">Rotas espalhadas</h2>
          <p className="text-xs text-muted-foreground">
            Muitos bairros diferentes para poucas coletas — indica rota pouco otimizada
          </p>
          <div className="mt-4 space-y-2">
            {dispersos.slice(0, 10).map((m) => (
              <div key={m.codigo} className="flex items-center gap-3 text-sm">
                <span className="flex-1 text-foreground">{semCodigo(m.nome).slice(0, 32)}</span>
                <span className="text-muted-foreground">{m.veiculo ?? "—"}</span>
                <span className="w-32 text-right tabular-nums text-muted-foreground">
                  {m.cepsDistintos} bairros / {m.coletas} coletas
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Regiões */}
      <div className="rounded-xl border border-border/60 p-5">
        <h2 className="text-base font-semibold text-foreground">Por região</h2>
        <div className="mt-4 space-y-2">
          {regioes.map((r) => {
            const max = Math.max(...regioes.map((x) => x.coletas), 1);
            return (
              <div key={r.nome} className="flex items-center gap-3 text-sm">
                <span className="w-32 shrink-0 text-muted-foreground">{r.nome}</span>
                <div className="h-6 flex-1 overflow-hidden rounded bg-muted/30">
                  <div className="h-full rounded bg-blue-500/70" style={{ width: `${(r.coletas / max) * 100}%` }} />
                </div>
                <span className="w-16 shrink-0 text-right tabular-nums text-foreground">{r.coletas}</span>
                <span className="w-28 shrink-0 text-right text-xs text-muted-foreground">
                  {r.motoristas} motoristas · {r.mediaPorMotorista}/un
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Qualidade dos dados — deixa explícito o que falta */}
      <div className="rounded-xl border border-border/60 p-5">
        <h2 className="text-base font-semibold text-foreground">Cobertura dos dados</h2>
        <p className="text-xs text-muted-foreground">
          Quanto de cada informação está preenchido na planilha de origem
        </p>
        <div className="mt-4 grid gap-3 sm:grid-cols-4">
          {[
            ["Veículo", cobertura.veiculo],
            ["CEP", cobertura.cep],
            ["Horário", cobertura.horario],
            ["Corte", cobertura.corte],
          ].map(([rotulo, valor]) => {
            const p = pct(valor as number, cobertura.total);
            const cor = p >= 80 ? "bg-green-500/70" : p >= 50 ? "bg-amber-500/70" : "bg-red-500/70";
            return (
              <div key={rotulo as string}>
                <div className="flex justify-between text-xs">
                  <span className="text-muted-foreground">{rotulo}</span>
                  <span className="tabular-nums text-foreground">{p}%</span>
                </div>
                <div className="mt-1 h-2 overflow-hidden rounded bg-muted/30">
                  <div className={`h-full rounded ${cor}`} style={{ width: `${p}%` }} />
                </div>
              </div>
            );
          })}
        </div>
        {pctVeiculo < 80 && (
          <p className="mt-3 text-xs text-amber-400">
            {resumo.semCadastro} motoristas não constam na aba PORTADORES — sem isso não dá para
            saber o veículo de parte das coletas.
          </p>
        )}
      </div>

      <Link to="/" className="inline-block text-sm text-blue-400 underline hover:text-blue-300">
        ← Dashboard completo
      </Link>
    </div>
  );
}
