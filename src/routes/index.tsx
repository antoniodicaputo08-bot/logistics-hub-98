import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import {
  DollarSign, TrendingUp, TrendingDown, Package, Users, Percent,
  LayoutDashboard, ChevronRight, Activity, Calendar, Filter
} from "lucide-react";
import { totals, meta, dailySeries, stores, entregadores } from "@/lib/productivity-data";

export const Route = createFileRoute("/")({ component: Dashboard });

// ─── cores por loja ────────────────────────────────────────────────────────
const STORE_COLORS: Record<string, string> = {
  "DOMINOS":        "#3b82f6",
  "JOAQUINA":       "#f97316",
  "COZI":           "#22c55e",
  "FERRO E FARINHA":"#a855f7",
  "DOMINOS IRAJÁ":  "#06b6d4",
  "ARTIGIANO - ANNA":"#eab308",
  "RJCC":           "#ef4444",
  "MITSUBA":        "#ec4899",
};

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function fmtFull(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
}
function pct(a: number, b: number) { return b ? ((a / b) * 100).toFixed(1) + "%" : "—"; }

// ─── dados derivados ────────────────────────────────────────────────────────
const totalMotoristas = entregadores.length;
const margemPct = ((totals.margem / totals.totalFatura) * 100).toFixed(1);
const custoPct  = ((totals.totalCusto / totals.totalFatura) * 100).toFixed(1);

// evolução diária (já vem ordenada)
const dailyChartData = dailySeries.map(d => ({
  data: d.data.slice(5),   // MM-DD
  fatura: d.fatura,
  custo: d.custo,
  margem: d.margem,
  entregas: d.entregas,
}));

// mensal
const monthlyMap = new Map<string, { mes: string; fatura: number; custo: number; margem: number; entregas: number }>();
for (const d of dailySeries) {
  const key = d.data.slice(0, 7);
  const meses = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
  const [,m] = d.data.split("-");
  if (!monthlyMap.has(key)) monthlyMap.set(key, { mes: meses[Number(m)-1], fatura: 0, custo: 0, margem: 0, entregas: 0 });
  const mo = monthlyMap.get(key)!;
  mo.fatura += d.fatura; mo.custo += d.custo; mo.margem += d.margem; mo.entregas += d.entregas;
}
const monthlyData = Array.from(monthlyMap.values());

// pie
const pieData = stores.map(s => ({ name: s.nome, value: s.fatura, color: STORE_COLORS[s.nome] ?? "#64748b" }));

// entregadores enriquecidos com métricas
const entregadoresRich = entregadores.map(e => ({
  ...e,
  custoPct: e.fatura ? (e.custo / e.fatura) * 100 : 0,
  mediaDia: e.entregas / meta.totalDias,
  margemVal: e.fatura - e.custo,
})).sort((a, b) => b.entregas - a.entregas);

// ─── componentes auxiliares ─────────────────────────────────────────────────
function KpiCard({ label, value, sub, icon: Icon, color }: {
  label: string; value: string; sub?: string; icon: React.ElementType; color: string;
}) {
  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between">
        <p className="text-[11px] uppercase tracking-widest text-[#8b949e] font-medium">{label}</p>
        <div className={`p-2 rounded-lg ${color}`}><Icon className="h-4 w-4" /></div>
      </div>
      <p className="text-2xl font-bold text-white leading-none">{value}</p>
      {sub && <p className="text-xs text-[#8b949e]">{sub}</p>}
    </div>
  );
}

function SectionTitle({ title, sub }: { title: string; sub?: string }) {
  return (
    <div className="mb-4">
      <h2 className="text-base font-semibold text-white">{title}</h2>
      {sub && <p className="text-xs text-[#8b949e] mt-0.5">{sub}</p>}
    </div>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="bg-[#1c2128] border border-[#30363d] rounded-lg p-3 text-xs shadow-xl">
      <p className="text-[#8b949e] mb-2">{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color }} className="mb-1">
          {p.name}: <span className="font-semibold text-white">{typeof p.value === 'number' && p.value > 100 ? fmt(p.value) : p.value?.toLocaleString("pt-BR")}</span>
        </p>
      ))}
    </div>
  );
};

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
export default function Dashboard() {
  const [activeStore, setActiveStore] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"visao" | "lojas" | "motoristas" | "evolucao">("visao");
  const [motoristaBusca, setMotoristaBusca] = useState("");
  const [motoristaLoja, setMotoristaLoja] = useState("Todas");
  const [chartMode, setChartMode] = useState<"mensal" | "diario">("mensal");

  const filteredEntregadores = useMemo(() => {
    let list = entregadoresRich;
    if (motoristaLoja !== "Todas") list = list.filter(e => e.lojas.includes(motoristaLoja));
    if (motoristaBusca) list = list.filter(e => e.nome.toLowerCase().includes(motoristaBusca.toLowerCase()));
    return list;
  }, [motoristaBusca, motoristaLoja]);

  const activeStoreData = activeStore ? stores.find(s => s.nome === activeStore) : null;
  const activeStoreEntregadores = activeStore
    ? entregadoresRich.filter(e => e.lojas.includes(activeStore))
    : entregadoresRich;

  // resumo da loja selecionada
  const displayStores = activeStore ? stores.filter(s => s.nome === activeStore) : stores;
  const displayTotals = activeStore && activeStoreData ? {
    totalFatura: activeStoreData.fatura,
    totalCusto: activeStoreData.custo,
    margem: activeStoreData.margem,
    totalEntregas: activeStoreData.entregas,
  } : totals;

  const operacaoSaudavel = (displayTotals.totalCusto / displayTotals.totalFatura) < 0.85;

  return (
    <div className="flex h-screen bg-[#0d1117] text-white overflow-hidden">

      {/* ── SIDEBAR ── */}
      <aside className="w-60 shrink-0 bg-[#161b22] border-r border-[#30363d] flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-[#30363d]">
          <div className="flex items-center gap-2 mb-1">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-xs font-bold">R3</div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">R3 EXPRESS</p>
              <p className="text-[10px] text-[#8b949e]">Dashboard Operacional</p>
            </div>
          </div>
        </div>

        <div className="p-3">
          <p className="text-[10px] uppercase tracking-widest text-[#8b949e] mb-2 px-2">Navegação</p>
          {(["visao","lojas","motoristas","evolucao"] as const).map(tab => (
            <button key={tab} onClick={() => { setActiveTab(tab); setActiveStore(null); }}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${activeTab === tab && !activeStore ? "bg-blue-600/20 text-blue-400" : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"}`}>
              <LayoutDashboard className="h-4 w-4" />
              {tab === "visao" ? "Visão Geral" : tab === "lojas" ? "Lojas" : tab === "motoristas" ? "Motoristas" : "Evolução"}
            </button>
          ))}
        </div>

        <div className="p-3 border-t border-[#30363d]">
          <p className="text-[10px] uppercase tracking-widest text-[#8b949e] mb-2 px-2">Clientes</p>
          <button onClick={() => setActiveStore(null)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${!activeStore ? "bg-blue-600 text-white" : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"}`}>
            <span className="flex items-center gap-2"><LayoutDashboard className="h-3.5 w-3.5" />Todas as lojas</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          {stores.map(s => (
            <button key={s.nome} onClick={() => { setActiveStore(s.nome); setActiveTab("lojas"); }}
              className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${activeStore === s.nome ? "bg-blue-600/20 text-blue-400" : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"}`}>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ background: STORE_COLORS[s.nome] ?? "#64748b" }} />
                <span className="truncate">{s.nome}</span>
              </span>
              <span className="text-[10px] text-[#8b949e]">{s.registros}</span>
            </button>
          ))}
        </div>

        <div className="mt-auto p-4 border-t border-[#30363d]">
          <div className="flex items-center gap-2 text-xs text-[#3fb950]">
            <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />
            Dados atualizados
          </div>
          <p className="text-[10px] text-[#8b949e] mt-1">{meta.periodoInicio} a {meta.periodoFim}</p>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <main className="flex-1 overflow-y-auto">

        {/* header */}
        <div className="sticky top-0 z-10 bg-[#0d1117] border-b border-[#30363d] px-6 py-3 flex items-center justify-between">
          <div>
            <h1 className="text-base font-semibold text-white">
              {activeStore ?? "Visão Geral — Todas as Operações"}
            </h1>
            <p className="text-xs text-[#8b949e]">
              {activeStore ? `${activeStoreData?.registros} registros` : `${stores.length} lojas · ${totalMotoristas} motoristas`}
            </p>
          </div>
          <div className="flex items-center gap-4 text-xs text-[#8b949e]">
            <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{meta.periodoInicio.split("-").reverse().join("/")} a {meta.periodoFim.split("-").reverse().join("/")}</span>
            <span className="flex items-center gap-1.5 text-[#3fb950]"><span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />Ao vivo</span>
          </div>
        </div>

        {/* banner status */}
        <div className={`mx-6 mt-4 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs border ${operacaoSaudavel ? "bg-[#0d4429] border-[#3fb950]/40 text-[#3fb950]" : "bg-[#4d1f1f] border-[#f85149]/40 text-[#f85149]"}`}>
          <span className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5" />
            {operacaoSaudavel ? `Operação saudável: custo em ${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do faturamento` : `Atenção: custo elevado em ${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do faturamento`}
            <span className="text-white/40 mx-2">|</span>
            {displayTotals.totalEntregas.toLocaleString("pt-BR")} entregas · {meta.totalDias} dias
          </span>
          <span className="flex items-center gap-4">
            <span>↗ Receita: <strong className="text-white">{fmtFull(displayTotals.totalFatura)}</strong></span>
            <span>↘ Custo: <strong className="text-white">{fmtFull(displayTotals.totalCusto)}</strong></span>
            <span>Margem: <strong className="text-[#3fb950]">{fmtFull(displayTotals.margem)}</strong></span>
          </span>
        </div>

        <div className="p-6 space-y-6">

          {/* KPI CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-6 gap-3">
            <KpiCard label="Faturamento Total" value={fmt(displayTotals.totalFatura)} sub={activeStore ? undefined : `${meta.totalDias} dias`} icon={DollarSign} color="bg-blue-500/10 text-blue-400" />
            <KpiCard label="Custo Total" value={fmt(displayTotals.totalCusto)} sub={`${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do fatur.`} icon={TrendingDown} color="bg-red-500/10 text-red-400" />
            <KpiCard label="Margem Bruta" value={fmt(displayTotals.margem)} sub={`${pct(displayTotals.margem, displayTotals.totalFatura)} de margem`} icon={TrendingUp} color="bg-green-500/10 text-green-400" />
            <KpiCard label="% Custo / Fatura" value={pct(displayTotals.totalCusto, displayTotals.totalFatura)} sub={operacaoSaudavel ? "Saudável" : "Atenção"} icon={Percent} color={operacaoSaudavel ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"} />
            <KpiCard label="Total de Entregas" value={displayTotals.totalEntregas.toLocaleString("pt-BR")} sub={activeStore ? undefined : `~${Math.round(totals.totalEntregas / meta.totalDias)}/dia`} icon={Package} color="bg-purple-500/10 text-purple-400" />
            <KpiCard label="Motoristas Ativos" value={(activeStore ? activeStoreData?.numEntregadores ?? 0 : totalMotoristas).toString()} sub={activeStore ? `na ${activeStore}` : "no período"} icon={Users} color="bg-cyan-500/10 text-cyan-400" />
          </div>

          {/* RESUMO POR CLIENTE */}
          {!activeStore && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#30363d]">
                <SectionTitle title="Resumo por Cliente" sub="Comparativo financeiro entre todos os clientes no período" />
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-[#30363d] text-[10px] uppercase tracking-widest text-[#8b949e]">
                      {["Cliente","Faturamento","Custo","Margem","% Custo","Entregas","Motoristas"].map(h => (
                        <th key={h} className="px-5 py-3 text-left font-medium">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {stores.map(s => (
                      <tr key={s.nome} onClick={() => { setActiveStore(s.nome); setActiveTab("lojas"); }}
                        className="border-b border-[#21262d] hover:bg-[#21262d] cursor-pointer transition-colors">
                        <td className="px-5 py-3 font-medium">
                          <span className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full" style={{ background: STORE_COLORS[s.nome] ?? "#64748b" }} />
                            {s.nome}
                          </span>
                        </td>
                        <td className="px-5 py-3 text-blue-400 tabular-nums">{fmtFull(s.fatura)}</td>
                        <td className="px-5 py-3 text-red-400 tabular-nums">{fmtFull(s.custo)}</td>
                        <td className={`px-5 py-3 tabular-nums font-medium ${s.margem >= 0 ? "text-green-400" : "text-red-400"}`}>{fmtFull(s.margem)}</td>
                        <td className="px-5 py-3 text-[#8b949e] tabular-nums">{pct(s.custo, s.fatura)}</td>
                        <td className="px-5 py-3 text-white tabular-nums">{s.entregas.toLocaleString("pt-BR")}</td>
                        <td className="px-5 py-3 text-[#8b949e] tabular-nums">{s.numEntregadores}</td>
                      </tr>
                    ))}
                    <tr className="bg-[#21262d] font-semibold text-white">
                      <td className="px-5 py-3">TOTAL GERAL</td>
                      <td className="px-5 py-3 text-blue-400 tabular-nums">{fmtFull(totals.totalFatura)}</td>
                      <td className="px-5 py-3 text-red-400 tabular-nums">{fmtFull(totals.totalCusto)}</td>
                      <td className="px-5 py-3 text-green-400 tabular-nums">{fmtFull(totals.margem)}</td>
                      <td className="px-5 py-3 text-[#8b949e] tabular-nums">{custoPct}%</td>
                      <td className="px-5 py-3 tabular-nums">{totals.totalEntregas.toLocaleString("pt-BR")}</td>
                      <td className="px-5 py-3 text-[#8b949e] tabular-nums">{totalMotoristas}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* GRÁFICOS LADO A LADO */}
          {!activeStore && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Faturamento vs Custo por cliente */}
              <div className="lg:col-span-2 bg-[#161b22] border border-[#30363d] rounded-xl p-5">
                <SectionTitle title="Faturamento vs Custo por Cliente" sub="Comparativo absoluto no período" />
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={stores.map(s => ({ nome: s.nome.split(" ")[0], fatura: s.fatura, custo: s.custo }))} margin={{ left: -10, right: 8 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#21262d" vertical={false} />
                    <XAxis dataKey="nome" stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} />
                    <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend wrapperStyle={{ fontSize: 11, color: "#8b949e" }} />
                    <Bar dataKey="fatura" name="R$ Faturamento" fill="#3b82f6" radius={[4,4,0,0]} />
                    <Bar dataKey="custo" name="R$ Custo" fill="#f97316" radius={[4,4,0,0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pizza participação */}
              <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
                <SectionTitle title="Participação no Faturamento" sub="% de cada loja" />
                <ResponsiveContainer width="100%" height={260}>
                  <PieChart>
                    <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={90} strokeWidth={2} stroke="#0d1117">
                      {pieData.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                    </Pie>
                    <Tooltip formatter={(v: number) => [fmt(v), "Faturamento"]} contentStyle={{ background: "#1c2128", border: "1px solid #30363d", borderRadius: 8, fontSize: 11 }} />
                    <Legend wrapperStyle={{ fontSize: 10, color: "#8b949e" }} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {/* EVOLUÇÃO DIÁRIA / MENSAL */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <SectionTitle
                title={activeStore ? `Evolução Diária — ${activeStore}` : "Evolução Consolidada — Todas as Operações"}
                sub="Faturamento e custo ao longo do tempo"
              />
              <div className="flex gap-2">
                {(["mensal","diario"] as const).map(m => (
                  <button key={m} onClick={() => setChartMode(m)}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors ${chartMode === m ? "bg-blue-600 text-white" : "bg-[#21262d] text-[#8b949e] hover:text-white"}`}>
                    {m === "mensal" ? "Mensal" : "Diário"}
                  </button>
                ))}
              </div>
            </div>
            <ResponsiveContainer width="100%" height={280}>
              <LineChart data={chartMode === "mensal" ? monthlyData : dailyChartData} margin={{ left: -10, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#21262d" vertical={false} />
                <XAxis dataKey={chartMode === "mensal" ? "mes" : "data"} stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} interval={chartMode === "diario" ? 6 : 0} />
                <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} tickFormatter={v => `${(v/1000).toFixed(0)}k`} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, color: "#8b949e" }} />
                <Line type="monotone" dataKey="fatura" name="R$ Faturamento" stroke="#3b82f6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="custo" name="R$ Custo" stroke="#f97316" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="margem" name="R$ Margem" stroke="#22c55e" strokeWidth={1.5} dot={false} strokeDasharray="4 2" />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* DETALHE DA LOJA SELECIONADA */}
          {activeStore && activeStoreData && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <SectionTitle title={`Detalhes — ${activeStore}`} sub={`${activeStoreData.registros} registros · ${activeStoreData.numEntregadores} motoristas ativos`} />
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[
                  { l: "Faturamento", v: fmtFull(activeStoreData.fatura), c: "text-blue-400" },
                  { l: "Custo", v: fmtFull(activeStoreData.custo), c: "text-red-400" },
                  { l: "Margem", v: fmtFull(activeStoreData.margem), c: activeStoreData.margem >= 0 ? "text-green-400" : "text-red-400" },
                  { l: "% Custo", v: pct(activeStoreData.custo, activeStoreData.fatura), c: "text-[#8b949e]" },
                ].map(item => (
                  <div key={item.l} className="bg-[#0d1117] rounded-lg p-4">
                    <p className="text-[10px] uppercase tracking-wider text-[#8b949e] mb-1">{item.l}</p>
                    <p className={`text-xl font-bold ${item.c}`}>{item.v}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TABELA DE MOTORISTAS */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-3">
              <SectionTitle
                title="Produtividade dos Motoristas"
                sub={`${filteredEntregadores.length} motoristas no período`}
              />
              <div className="flex items-center gap-2 flex-wrap">
                <div className="flex items-center gap-1.5 bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-1.5">
                  <Filter className="h-3.5 w-3.5 text-[#8b949e]" />
                  <input
                    placeholder="Buscar motorista..."
                    value={motoristaBusca}
                    onChange={e => setMotoristaBusca(e.target.value)}
                    className="bg-transparent text-xs text-white placeholder-[#8b949e] outline-none w-36"
                  />
                </div>
                <select
                  value={motoristaLoja}
                  onChange={e => setMotoristaLoja(e.target.value)}
                  className="bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs text-white outline-none"
                >
                  <option>Todas</option>
                  {stores.map(s => <option key={s.nome}>{s.nome}</option>)}
                </select>
              </div>
            </div>
            <div className="overflow-x-auto max-h-[520px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-[#161b22]">
                  <tr className="border-b border-[#30363d] text-[10px] uppercase tracking-widest text-[#8b949e]">
                    <th className="px-4 py-3 text-left w-8">#</th>
                    <th className="px-4 py-3 text-left">Motorista</th>
                    <th className="px-4 py-3 text-left">Loja(s)</th>
                    <th className="px-4 py-3 text-right">Entregas</th>
                    <th className="px-4 py-3 text-right">Média/dia</th>
                    <th className="px-4 py-3 text-right">Custo</th>
                    <th className="px-4 py-3 text-right">Faturamento</th>
                    <th className="px-4 py-3 text-right">Margem</th>
                    <th className="px-4 py-3 text-right">% Custo</th>
                    <th className="px-4 py-3 text-left w-32">Produtividade</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredEntregadores.map((e, i) => {
                    const maxEntregas = entregadoresRich[0].entregas;
                    const prodPct = Math.round((e.entregas / maxEntregas) * 100);
                    const custoPctVal = e.custoPct;
                    const barColor = custoPctVal < 70 ? "#22c55e" : custoPctVal < 85 ? "#f97316" : "#ef4444";
                    return (
                      <tr key={e.nome} className="border-b border-[#21262d] hover:bg-[#21262d] transition-colors">
                        <td className="px-4 py-2.5 text-[#8b949e] text-xs">
                          {i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}
                        </td>
                        <td className="px-4 py-2.5 font-medium text-white text-xs">{e.nome}</td>
                        <td className="px-4 py-2.5 text-xs">
                          <span className="flex flex-wrap gap-1">
                            {e.lojas.map(l => (
                              <span key={l} className="px-1.5 py-0.5 rounded text-[10px]" style={{ background: (STORE_COLORS[l] ?? "#64748b") + "22", color: STORE_COLORS[l] ?? "#64748b" }}>{l.split(" ")[0]}</span>
                            ))}
                          </span>
                        </td>
                        <td className="px-4 py-2.5 text-right text-white tabular-nums text-xs font-semibold">{e.entregas.toLocaleString("pt-BR")}</td>
                        <td className="px-4 py-2.5 text-right text-[#8b949e] tabular-nums text-xs">{e.mediaDia.toFixed(1)}</td>
                        <td className="px-4 py-2.5 text-right text-red-400 tabular-nums text-xs">{fmt(e.custo)}</td>
                        <td className="px-4 py-2.5 text-right text-blue-400 tabular-nums text-xs">{fmt(e.fatura)}</td>
                        <td className={`px-4 py-2.5 text-right tabular-nums text-xs font-medium ${e.margemVal >= 0 ? "text-green-400" : "text-red-400"}`}>{fmt(e.margemVal)}</td>
                        <td className="px-4 py-2.5 text-right tabular-nums text-xs" style={{ color: barColor }}>{custoPctVal.toFixed(1)}%</td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-[#21262d] rounded-full h-1.5">
                              <div className="h-1.5 rounded-full transition-all" style={{ width: `${prodPct}%`, background: barColor }} />
                            </div>
                            <span className="text-[10px] text-[#8b949e] w-7 text-right">{prodPct}%</span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* GRÁFICO MENSAL DE ENTREGAS */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <SectionTitle title="Entregas por Mês" sub="Volume total de entregas consolidado mensalmente" />
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlyData} margin={{ left: -10, right: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#21262d" vertical={false} />
                <XAxis dataKey="mes" stroke="#8b949e" fontSize={11} tickLine={false} axisLine={false} />
                <YAxis stroke="#8b949e" fontSize={10} tickLine={false} axisLine={false} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="entregas" name="Entregas" fill="#3b82f6" radius={[4,4,0,0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

        </div>
      </main>
    </div>
  );
}
