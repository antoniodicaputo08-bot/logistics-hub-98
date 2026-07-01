import { useState, useEffect } from "react";

export interface DailyPoint {
  data: string;
  entregas: number;
  custo: number;
  fatura: number;
  margem: number;
}

export interface StoreStat {
  nome: string;
  entregas: number;
  custo: number;
  fatura: number;
  margem: number;
  numEntregadores: number;
  registros: number;
}

export interface EntregadorStat {
  nome: string;
  entregas: number;
  custo: number;
  fatura: number;
  lojas: string[];
}

export interface PedidoIfood {
  codigo: string;
  distancia: string;
  entrada: string;
  finalizou: string;
  entregador: string;
  status: string;
  valorEntregador: number;
  valorCliente: number;
}

export interface RegistroEntrega {
  data: string | null;
  entregador: string;
  km: number;
  valor: number;
}

export interface ProductivityData {
  totals: {
    totalEntregas: number;
    totalCusto: number;
    totalFatura: number;
    margem: number;
  };
  meta: {
    periodoInicio: string;
    periodoFim: string;
    totalDias: number;
    totalEntregadores: number;
    totalPedidosIfood: number;
    totalRegistroEntregas: number;
  };
  dailySeries: DailyPoint[];
  stores: StoreStat[];
  entregadores: EntregadorStat[];
  pedidosIfood: PedidoIfood[];
  registroEntregas: RegistroEntrega[];
}

const cache: { data: ProductivityData | null } = { data: null };

export function useProductivityData() {
  const [data, setData] = useState<ProductivityData | null>(cache.data);
  const [loading, setLoading] = useState(cache.data === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache.data) return;
    fetch("/data.json")
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json() as Promise<ProductivityData>;
      })
      .then((d) => {
        cache.data = d;
        setData(d);
        setLoading(false);
      })
      .catch((e) => {
        setError(String(e));
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
}
