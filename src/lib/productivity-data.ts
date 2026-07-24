export interface DailyPoint { data: string; entregas: number; custo: number; fatura: number; margem: number; }
export interface StoreStat { nome: string; entregas: number; custo: number; fatura: number; margem: number; numEntregadores: number; registros: number; }
export interface EntregadorStat { nome: string; entregas: number; custo: number; fatura: number; lojas: string[]; }

export { totals } from "./data/totals";
export { meta } from "./data/meta";
export { stores } from "./data/stores";
export { dailySeries } from "./data/daily";
export { entregadores } from "./data/entregadores";
export { storesSeries } from "./data/storesSeries";
