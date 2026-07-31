export interface DailyPoint { data: string; entregas: number; custo: number; fatura: number; margem: number; }
export interface StoreStat { nome: string; entregas: number; custo: number; fatura: number; margem: number; numEntregadores: number; registros: number; estado?: string; }
export interface EntregadorStat { nome: string; entregas: number; custo: number; fatura: number; lojas: string[]; }
export interface HuskyLojaValidation {
  nome: string;
  planilhaEntregas: number;
  huskyEntregas: number;
  diff: number;
  diffPct: number;
  status: 'ok' | 'divergente' | 'sem_dados';
}
export interface HuskyValidation {
  lastSync: string;
  periodo: { inicio: string; fim: string };
  lojas: HuskyLojaValidation[];
  totalDivergencias: number;
}

export { totals } from "./data/totals";
export { meta } from "./data/meta";
export { stores } from "./data/stores";
export { dailySeries } from "./data/daily";
export { entregadores } from "./data/entregadores";
export { storesSeries } from "./data/storesSeries";
export type { StoreDay } from "./data/storesSeries";
export { huskyValidation } from "./data/huskyValidation";
