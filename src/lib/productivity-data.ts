export type { } from "./data/totals";
export type { } from "./data/meta";

export interface DailyPoint { data: string; entregas: number; custo: number; fatura: number; margem: number; }
export interface StoreStat { nome: string; entregas: number; custo: number; fatura: number; margem: number; numEntregadores: number; registros: number; }
export interface EntregadorStat { nome: string; entregas: number; custo: number; fatura: number; lojas: string[]; }
export interface PedidoIfood { codigo: string; distancia: string; entrada: string; finalizou: string; entregador: string; status: string; valorEntregador: number; valorCliente: number; }
export interface RegistroEntrega { data: string | null; entregador: string; km: number; valor: number; }

export { totals } from "./data/totals";
export { meta } from "./data/meta";
export { stores } from "./data/stores";
export { dailySeries } from "./data/daily";
export { entregadores } from "./data/entregadores";
export { pedidosIfood } from "./data/pedidos";
export { registroEntregas } from "./data/registro";
