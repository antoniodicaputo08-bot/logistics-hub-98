import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from "recharts";
import {
  DollarSign, TrendingUp, TrendingDown, Package, Users, Percent,
  LayoutDashboard, ChevronRight, Activity, Calendar, Filter, X
} from "lucide-react";
import { meta, dailySeries, stores, entregadores, storesSeries } from "@/lib/productivity-data";

export const Route = createFileRoute("/")({ component: Dashboard });

const STORE_COLORS: Record<string, string> = {
  "DOMINOS":          "#3b82f6",
  "DOMINOS_SP":       "#60a5fa",
  "JOAQUINA":         "#f97316",
  "COZI":             "#22c55e",
  "FERRO E FARINHA":  "#a855f7",
  "DOMINOS IRAJÁ":    "#06b6d4",
  "ARTIGIANO - ANNA": "#eab308",
  "RJCC":             "#ef4444",
  "MITSUBA":          "#ec4899",
  "RSV_SP":           "#8b5cf6",
  "RSV_MG":           "#14b8a6",
};

const MESES = ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];

function fmt(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", maximumFractionDigits: 0 });
}
function fmtFull(v: number) {
  return v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2 });
}
function pct(a: number, b: number) { return b ? ((a / b) * 100).toFixed(1) + "%" : "—"; }

// datas disponíveis no dataset
const DATA_MIN = meta.periodoInicio;
const DATA_MAX = "2026-12-31";

// entregadores base
const entregadoresBase = entregadores.map(e => ({
  ...e,
  custoPct: e.fatura ? (e.custo / e.fatura) * 100 : 0,
  mediaDia: e.entregas / meta.totalDias,
  margemVal: e.fatura - e.custo,
})).sort((a, b) => b.entregas - a.entregas);

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
          {p.name}: <span className="font-semibold text-white">{typeof p.value === "number" && p.value > 100 ? fmt(p.value) : p.value?.toLocaleString("pt-BR")}</span>
        </p>
      ))}
    </div>
  );
};

export default function Dashboard() {
  const [activeStore, setActiveStore] = useState<string | null>(null);
  const [motoristaBusca, setMotoristaBusca] = useState("");
  const [motoristaLoja, setMotoristaLoja] = useState("Todas");
  const [chartMode, setChartMode] = useState<"mensal" | "diario">("mensal");
  const [dataInicio, setDataInicio] = useState(DATA_MIN);
  const [dataFim, setDataFim] = useState(meta.periodoFim);

  // série diária filtrada por data
  const dailyFiltered = useMemo(() =>
    dailySeries.filter(d => d.data >= dataInicio && d.data <= dataFim),
    [dataInicio, dataFim]
  );

  // totais derivados do período filtrado
  const filteredTotals = useMemo(() => {
    let fatura = 0, custo = 0, margem = 0, entregas = 0;
    for (const d of dailyFiltered) {
      fatura += d.fatura; custo += d.custo; margem += d.margem; entregas += d.entregas;
    }
    return { totalFatura: fatura, totalCusto: custo, margem, totalEntregas: entregas };
  }, [dailyFiltered]);

  const diasFiltrados = dailyFiltered.length || 1;

  // dados do gráfico de linha/área
  const dailyChartData = useMemo(() =>
    dailyFiltered.map(d => ({
      data: d.data.slice(5),
      fatura: d.fatura, custo: d.custo, margem: d.margem, entregas: d.entregas,
    })),
    [dailyFiltered]
  );

  const monthlyData = useMemo(() => {
    const map = new Map<string, { mes: string; fatura: number; custo: number; margem: number; entregas: number }>();
    for (const d of dailyFiltered) {
      const key = d.data.slice(0, 7);
      const m = Number(d.data.split("-")[1]);
      if (!map.has(key)) map.set(key, { mes: MESES[m - 1], fatura: 0, custo: 0, margem: 0, entregas: 0 });
      const mo = map.get(key)!;
      mo.fatura += d.fatura; mo.custo += d.custo; mo.margem += d.margem; mo.entregas += d.entregas;
    }
    return Array.from(map.values());
  }, [dailyFiltered]);

  // KPIs por loja calculados linha a linha a partir do storesSeries filtrado por data
  const filteredStores = useMemo(() => {
    const acc: Record<string, { fatura: number; custo: number; entregas: number }> = {};
    for (const day of storesSeries) {
      if (day.data < dataInicio || day.data > dataFim) continue;
      for (const [nome, v] of Object.entries(day.lojas as Record<string, { f: number; c: number; e: number }>)) {
        if (!acc[nome]) acc[nome] = { fatura: 0, custo: 0, entregas: 0 };
        acc[nome].fatura   += v.f;
        acc[nome].custo    += v.c;
        acc[nome].entregas += v.e;
      }
    }
    return stores.map(s => {
      const a = acc[s.nome];
      if (!a) return { ...s, fatura: 0, custo: 0, margem: 0, entregas: 0 };
      return { ...s, fatura: Math.round(a.fatura * 100) / 100, custo: Math.round(a.custo * 100) / 100, margem: Math.round((a.fatura - a.custo) * 100) / 100, entregas: a.entregas };
    }).filter(s => s.fatura > 0 || s.entregas > 0);
  }, [dataInicio, dataFim]);

  const pieData = useMemo(() =>
    filteredStores.map(s => ({ name: s.nome, value: s.fatura, color: STORE_COLORS[s.nome] ?? "#64748b" })),
    [filteredStores]
  );

  const activeStoreData = activeStore ? filteredStores.find(s => s.nome === activeStore) : null;

  const displayTotals = activeStore && activeStoreData ? {
    totalFatura: activeStoreData.fatura,
    totalCusto:  activeStoreData.custo,
    margem:      activeStoreData.margem,
    totalEntregas: activeStoreData.entregas,
  } : filteredTotals;

  const operacaoSaudavel = displayTotals.totalFatura > 0 && (displayTotals.totalCusto / displayTotals.totalFatura) < 0.85;

  const filteredEntregadores = useMemo(() => {
    let list = entregadoresBase;
    if (motoristaLoja !== "Todas") list = list.filter(e => e.lojas.includes(motoristaLoja));
    if (motoristaBusca) list = list.filter(e => e.nome.toLowerCase().includes(motoristaBusca.toLowerCase()));
    return list;
  }, [motoristaBusca, motoristaLoja]);

  const periodoLabel = `${dataInicio.split("-").reverse().join("/")} a ${dataFim.split("-").reverse().join("/")}`;
  const filtrando = dataInicio !== DATA_MIN || dataFim !== DATA_MAX;

  return (
    <div className="flex h-screen bg-[#0d1117] text-white overflow-hidden">

      {/* SIDEBAR */}
      <aside className="w-60 shrink-0 bg-[#161b22] border-r border-[#30363d] flex flex-col overflow-y-auto">
        <div className="p-4 border-b border-[#30363d]">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-xs font-bold">R3</div>
            <div>
              <p className="text-sm font-semibold text-white leading-none">R3 EXPRESS</p>
              <p className="text-[10px] text-[#8b949e]">Dashboard Operacional</p>
            </div>
          </div>
        </div>


        <div className="p-3 border-b border-[#30363d]">
          <p className="text-[10px] uppercase tracking-widest text-[#8b949e] mb-2 px-2">Clientes</p>
          <button onClick={() => setActiveStore(null)}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm mb-1 transition-colors ${!activeStore ? "bg-blue-600 text-white" : "text-[#8b949e] hover:bg-[#21262d] hover:text-white"}`}>
            <span className="flex items-center gap-2"><LayoutDashboard className="h-3.5 w-3.5" />Todas as lojas</span>
            <ChevronRight className="h-3.5 w-3.5" />
          </button>
          {stores.map(s => (
            <button key={s.nome} onClick={() => setActiveStore(s.nome)}
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
            {filtrando ? "Período filtrado" : "Período completo"}
          </div>
          <p className="text-[10px] text-[#8b949e] mt-1">{periodoLabel}</p>
        </div>
      </aside>

      {/* MAIN */}
      <main className="flex-1 overflow-y-auto">

        {/* header */}
        <div className="sticky top-0 z-10 bg-[#0d1117] border-b border-[#30363d] px-6 py-3 space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-base font-semibold text-white">
                {activeStore ?? "Visão Geral — Todas as Operações"}
              </h1>
              <p className="text-xs text-[#8b949e]">
                {activeStore ? `${activeStoreData?.registros} registros` : `${stores.length} lojas · ${entregadores.length} motoristas`}
              </p>
            </div>
            <span className="flex items-center gap-1.5 text-xs text-[#3fb950]">
              <span className="w-2 h-2 rounded-full bg-[#3fb950] animate-pulse" />Ao vivo
            </span>
          </div>
          {/* barra de filtros */}
          <div className="flex flex-wrap items-center gap-2 pb-1">
            <span className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#8b949e] mr-1">
              <Filter className="h-3 w-3" /> Filtros
            </span>
            <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs">
              <Calendar className="h-3.5 w-3.5 text-[#8b949e]" />
              <label className="text-[#8b949e]">De:</label>
              <select value={dataInicio.slice(0,7)} onChange={e => setDataInicio(e.target.value + "-01")}
                className="bg-transparent text-white outline-none text-xs cursor-pointer">
                {Array.from(new Set(dailySeries.map(d => d.data.slice(0,7)))).sort().map(m => (
                  <option key={m} value={m} className="bg-[#161b22]">{MESES[Number(m.split("-")[1])-1]}/{m.slice(2,4)}</option>
                ))}
              </select>
            </div>
            <div className="flex items-center gap-1.5 bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs">
              <Calendar className="h-3.5 w-3.5 text-[#8b949e]" />
              <label className="text-[#8b949e]">Até:</label>
              <select value={dataFim.slice(0,7)} onChange={e => { const ultimo = dailySeries.filter(d => d.data.startsWith(e.target.value)).slice(-1)[0]?.data || e.target.value+"-28"; setDataFim(ultimo); }}
                className="bg-transparent text-white outline-none text-xs cursor-pointer">
                {Array.from(new Set(dailySeries.map(d => d.data.slice(0,7)))).sort().map(m => (
                  <option key={m} value={m} className="bg-[#161b22]">{MESES[Number(m.split("-")[1])-1]}/{m.slice(2,4)}</option>
                ))}
              </select>
            </div>
            <select value={motoristaLoja} onChange={e => { setMotoristaLoja(e.target.value); setActiveStore(e.target.value === "Todas" ? null : e.target.value); }}
              className="bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs text-white outline-none">
              <option value="Todas">Todas as lojas</option>
              {stores.map(s => <option key={s.nome} value={s.nome}>{s.nome}</option>)}
            </select>
            <select value={motoristaBusca ? motoristaBusca : "__all__"}
              onChange={e => setMotoristaBusca(e.target.value === "__all__" ? "" : e.target.value)}
              className="bg-[#161b22] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs text-white outline-none">
              <option value="__all__">Todos os motoristas</option>
              {entregadores.map(e => <option key={e.nome} value={e.nome}>{e.nome}</option>)}
            </select>
            {filtrando && (
              <button onClick={() => { setDataInicio(DATA_MIN); setDataFim(meta.periodoFim); }}
                className="flex items-center gap-1 text-xs text-red-400 hover:text-red-300 bg-red-500/10 border border-red-500/20 rounded-lg px-2.5 py-1.5 transition-colors">
                <X className="h-3 w-3" /> Limpar
              </button>
            )}
            <span className="text-[10px] text-[#8b949e] ml-auto">{diasFiltrados} dia{diasFiltrados !== 1 ? "s" : ""}</span>
          </div>
        </div>

        {/* banner status */}
        <div className={`mx-6 mt-4 rounded-lg px-4 py-2.5 flex items-center justify-between text-xs border ${operacaoSaudavel ? "bg-[#0d4429] border-[#3fb950]/40 text-[#3fb950]" : "bg-[#4d1f1f] border-[#f85149]/40 text-[#f85149]"}`}>
          <span className="flex items-center gap-2">
            <Activity className="h-3.5 w-3.5" />
            {operacaoSaudavel
              ? `Operação saudável: custo em ${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do faturamento`
              : `Atenção: custo elevado em ${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do faturamento`}
            <span className="text-white/40 mx-2">|</span>
            {displayTotals.totalEntregas.toLocaleString("pt-BR")} entregas · {diasFiltrados} dias
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
            <KpiCard label="Faturamento Total" value={fmt(displayTotals.totalFatura)} sub={`${diasFiltrados} dias`} icon={DollarSign} color="bg-blue-500/10 text-blue-400" />
            <KpiCard label="Custo Total" value={fmt(displayTotals.totalCusto)} sub={`${pct(displayTotals.totalCusto, displayTotals.totalFatura)} do fatur.`} icon={TrendingDown} color="bg-red-500/10 text-red-400" />
            <KpiCard label="Margem Bruta" value={fmt(displayTotals.margem)} sub={`${pct(displayTotals.margem, displayTotals.totalFatura)} de margem`} icon={TrendingUp} color="bg-green-500/10 text-green-400" />
            <KpiCard label="% Custo / Fatura" value={pct(displayTotals.totalCusto, displayTotals.totalFatura)} sub={operacaoSaudavel ? "Saudável" : "Atenção"} icon={Percent} color={operacaoSaudavel ? "bg-green-500/10 text-green-400" : "bg-red-500/10 text-red-400"} />
            <KpiCard label="Total de Entregas" value={displayTotals.totalEntregas.toLocaleString("pt-BR")} sub={`~${Math.round(displayTotals.totalEntregas / diasFiltrados)}/dia`} icon={Package} color="bg-purple-500/10 text-purple-400" />
            <KpiCard label="Motoristas Ativos" value={(activeStore ? activeStoreData?.numEntregadores ?? 0 : entregadores.length).toString()} sub={activeStore ? `na ${activeStore}` : "no período"} icon={Users} color="bg-cyan-500/10 text-cyan-400" />
          </div>

          {/* RESUMO POR CLIENTE */}
          {!activeStore && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
              <div className="px-5 py-4 border-b border-[#30363d]">
                <SectionTitle title="Resumo por Cliente" sub={`Comparativo financeiro no período ${periodoLabel}`} />
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
                    {filteredStores.map(s => (
                      <tr key={s.nome} onClick={() => setActiveStore(s.nome)}
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
                      <td className="px-5 py-3 text-blue-400 tabular-nums">{fmtFull(filteredTotals.totalFatura)}</td>
                      <td className="px-5 py-3 text-red-400 tabular-nums">{fmtFull(filteredTotals.totalCusto)}</td>
                      <td className="px-5 py-3 text-green-400 tabular-nums">{fmtFull(filteredTotals.margem)}</td>
                      <td className="px-5 py-3 text-[#8b949e] tabular-nums">{pct(filteredTotals.totalCusto, filteredTotals.totalFatura)}</td>
                      <td className="px-5 py-3 tabular-nums">{filteredTotals.totalEntregas.toLocaleString("pt-BR")}</td>
                      <td className="px-5 py-3 text-[#8b949e] tabular-nums">{entregadores.length}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* GRÁFICOS */}
          {!activeStore && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <div className="lg:col-span-2 bg-[#161b22] border border-[#30363d] rounded-xl p-5">
                <SectionTitle title="Faturamento vs Custo por Cliente" sub={periodoLabel} />
                <ResponsiveContainer width="100%" height={260}>
                  <BarChart data={filteredStores.map(s => ({ nome: s.nome.split(" ")[0], fatura: s.fatura, custo: s.custo }))} margin={{ left: -10, right: 8 }}>
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

          {/* EVOLUÇÃO */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="flex items-center justify-between mb-4">
              <SectionTitle
                title={activeStore ? `Evolução — ${activeStore}` : "Evolução Consolidada"}
                sub={periodoLabel}
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

          {/* DETALHE LOJA */}
          {activeStore && activeStoreData && (
            <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <SectionTitle title={`Detalhes — ${activeStore}`} sub={`${activeStoreData.registros} registros · ${activeStoreData.numEntregadores} motoristas`} />
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

          {/* TABELA MOTORISTAS */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
            <div className="px-5 py-4 border-b border-[#30363d] flex flex-wrap items-center justify-between gap-3">
              <SectionTitle title="Produtividade dos Motoristas" sub={`${filteredEntregadores.length} motoristas`} />
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
                <select value={motoristaLoja} onChange={e => setMotoristaLoja(e.target.value)}
                  className="bg-[#0d1117] border border-[#30363d] rounded-lg px-3 py-1.5 text-xs text-white outline-none">
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
                    const maxE = entregadoresBase[0].entregas;
                    const prodPct = Math.round((e.entregas / maxE) * 100);
                    const barColor = e.custoPct < 70 ? "#22c55e" : e.custoPct < 85 ? "#f97316" : "#ef4444";
                    return (
                      <tr key={e.nome} className="border-b border-[#21262d] hover:bg-[#21262d] transition-colors">
                        <td className="px-4 py-2.5 text-[#8b949e] text-xs">{i === 0 ? "🥇" : i === 1 ? "🥈" : i === 2 ? "🥉" : i + 1}</td>
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
                        <td className="px-4 py-2.5 text-right tabular-nums text-xs" style={{ color: barColor }}>{e.custoPct.toFixed(1)}%</td>
                        <td className="px-4 py-2.5">
                          <div className="flex items-center gap-2">
                            <div className="flex-1 bg-[#21262d] rounded-full h-1.5">
                              <div className="h-1.5 rounded-full" style={{ width: `${prodPct}%`, background: barColor }} />
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

          {/* ENTREGAS POR MÊS */}
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <SectionTitle title="Entregas por Mês" sub={periodoLabel} />
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
