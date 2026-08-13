// Gerado por analise-rotas.js — não editar à mão.
// Atualizado diariamente às 8h pelo rotas-diario.js.
export const coletas = {
  gerado: "",
  resumo: {
    coletas: 0,
    motoristas: 0,
    medianaColetas: 0,
    sobrecarregados: 0,
    ociosos: 0,
    dispersos: 0,
    semCadastro: 0,
  },
  cobertura: { veiculo: 0, cep: 0, horario: 0, corte: 0, total: 0 },
  sobrecarregados: [] as Array<{
    nome: string; codigo: string | null; veiculo: string | null;
    coletas: number; vezesMediana: number; regioes: string[];
  }>,
  dispersos: [] as Array<{
    nome: string; codigo: string; veiculo: string | null;
    coletas: number; cepsDistintos: number; coletasPorCep: number; indice: number; regioes: string[];
  }>,
  semCadastro: [] as Array<{ nome: string; codigo: string; coletas: number; regioes: string[] }>,
  regioes: [] as Array<{
    nome: string; coletas: number; motoristas: number;
    mediaPorMotorista: number; veiculos: Record<string, number>;
  }>,
};
