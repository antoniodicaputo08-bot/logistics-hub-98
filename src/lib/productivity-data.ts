// Gerado automaticamente a partir de PRODUTIVIDADE V2.xlsx em 2026-06-25
// Fonte: planilha enviada pelo Antonio (WhatsApp, 23/06/2026)

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

export const totals = {
  "totalEntregas": 51128,
  "totalCusto": 591590.72,
  "totalFatura": 876252.51,
  "margem": 284661.79
};

export const dailySeries: DailyPoint[] = [
  {
    "data": "2026-03-16",
    "entregas": 278,
    "custo": 3394.08,
    "fatura": 5436.34,
    "margem": 2042.26
  },
  {
    "data": "2026-03-17",
    "entregas": 347,
    "custo": 4490.08,
    "fatura": 6934.34,
    "margem": 2444.26
  },
  {
    "data": "2026-03-18",
    "entregas": 326,
    "custo": 3986.08,
    "fatura": 6145.34,
    "margem": 2159.26
  },
  {
    "data": "2026-03-19",
    "entregas": 345,
    "custo": 4180.08,
    "fatura": 6596.34,
    "margem": 2416.26
  },
  {
    "data": "2026-03-20",
    "entregas": 626,
    "custo": 6429.8,
    "fatura": 9252.34,
    "margem": 2822.54
  },
  {
    "data": "2026-03-21",
    "entregas": 636,
    "custo": 6366,
    "fatura": 9091.34,
    "margem": 2725.34
  },
  {
    "data": "2026-03-22",
    "entregas": 638,
    "custo": 6266.64,
    "fatura": 9068.34,
    "margem": 2801.7
  },
  {
    "data": "2026-03-23",
    "entregas": 266,
    "custo": 3256.16,
    "fatura": 5296.34,
    "margem": 2040.18
  },
  {
    "data": "2026-03-24",
    "entregas": 354,
    "custo": 4563.08,
    "fatura": 7081.34,
    "margem": 2518.26
  },
  {
    "data": "2026-03-25",
    "entregas": 314,
    "custo": 4060.8,
    "fatura": 6443.34,
    "margem": 2382.54
  },
  {
    "data": "2026-03-26",
    "entregas": 270,
    "custo": 3899.08,
    "fatura": 6261.34,
    "margem": 2362.26
  },
  {
    "data": "2026-03-27",
    "entregas": 583,
    "custo": 6236.44,
    "fatura": 8952.34,
    "margem": 2715.9
  },
  {
    "data": "2026-03-28",
    "entregas": 678,
    "custo": 6723,
    "fatura": 9728.34,
    "margem": 3005.34
  },
  {
    "data": "2026-03-29",
    "entregas": 635,
    "custo": 6536.64,
    "fatura": 9422.34,
    "margem": 2885.7
  },
  {
    "data": "2026-03-30",
    "entregas": 267,
    "custo": 3183.88,
    "fatura": 5179.34,
    "margem": 1995.46
  },
  {
    "data": "2026-03-31",
    "entregas": 482,
    "custo": 5246.72,
    "fatura": 7582.34,
    "margem": 2335.62
  },
  {
    "data": "2026-04-01",
    "entregas": 398,
    "custo": 4811.12,
    "fatura": 7291.68,
    "margem": 2480.56
  },
  {
    "data": "2026-04-02",
    "entregas": 573,
    "custo": 5590.84,
    "fatura": 8256.01,
    "margem": 2665.17
  },
  {
    "data": "2026-04-03",
    "entregas": 692,
    "custo": 6980.04,
    "fatura": 10289.68,
    "margem": 3309.64
  },
  {
    "data": "2026-04-04",
    "entregas": 589,
    "custo": 6619.52,
    "fatura": 9899.68,
    "margem": 3280.16
  },
  {
    "data": "2026-04-05",
    "entregas": 547,
    "custo": 6698.44,
    "fatura": 10420.35,
    "margem": 3721.91
  },
  {
    "data": "2026-04-06",
    "entregas": 250,
    "custo": 3249.08,
    "fatura": 5157.34,
    "margem": 1908.26
  },
  {
    "data": "2026-04-07",
    "entregas": 349,
    "custo": 4850.48,
    "fatura": 7424.68,
    "margem": 2574.2
  },
  {
    "data": "2026-04-08",
    "entregas": 359,
    "custo": 4482.76,
    "fatura": 6941.68,
    "margem": 2458.92
  },
  {
    "data": "2026-04-09",
    "entregas": 358,
    "custo": 4511.76,
    "fatura": 6966.68,
    "margem": 2454.92
  },
  {
    "data": "2026-04-10",
    "entregas": 686,
    "custo": 7125.76,
    "fatura": 10311.68,
    "margem": 3185.92
  },
  {
    "data": "2026-04-11",
    "entregas": 703,
    "custo": 7041.32,
    "fatura": 10385.68,
    "margem": 3344.36
  },
  {
    "data": "2026-04-12",
    "entregas": 670,
    "custo": 6868.52,
    "fatura": 10394.68,
    "margem": 3526.16
  },
  {
    "data": "2026-04-13",
    "entregas": 262,
    "custo": 3266.08,
    "fatura": 5234.34,
    "margem": 1968.26
  },
  {
    "data": "2026-04-14",
    "entregas": 378,
    "custo": 4923.76,
    "fatura": 7647.68,
    "margem": 2723.92
  },
  {
    "data": "2026-04-15",
    "entregas": 360,
    "custo": 4597.76,
    "fatura": 7094.68,
    "margem": 2496.92
  },
  {
    "data": "2026-04-16",
    "entregas": 379,
    "custo": 4673.48,
    "fatura": 7151.68,
    "margem": 2478.2
  },
  {
    "data": "2026-04-17",
    "entregas": 617,
    "custo": 6944.76,
    "fatura": 10048.68,
    "margem": 3103.92
  },
  {
    "data": "2026-04-18",
    "entregas": 685,
    "custo": 7319.24,
    "fatura": 10650.68,
    "margem": 3331.44
  },
  {
    "data": "2026-04-19",
    "entregas": 638,
    "custo": 6997.16,
    "fatura": 10443.35,
    "margem": 3446.19
  },
  {
    "data": "2026-04-20",
    "entregas": 377,
    "custo": 4784.44,
    "fatura": 7368.34,
    "margem": 2583.9
  },
  {
    "data": "2026-04-21",
    "entregas": 619,
    "custo": 6379.48,
    "fatura": 9361.68,
    "margem": 2982.2
  },
  {
    "data": "2026-04-22",
    "entregas": 407,
    "custo": 5622.12,
    "fatura": 8559.68,
    "margem": 2937.56
  },
  {
    "data": "2026-04-23",
    "entregas": 536,
    "custo": 5886.76,
    "fatura": 8769.68,
    "margem": 2882.92
  },
  {
    "data": "2026-04-24",
    "entregas": 554,
    "custo": 6658.12,
    "fatura": 9902.68,
    "margem": 3244.56
  },
  {
    "data": "2026-04-25",
    "entregas": 684,
    "custo": 7237.32,
    "fatura": 10555.68,
    "margem": 3318.36
  },
  {
    "data": "2026-04-26",
    "entregas": 702,
    "custo": 7266.44,
    "fatura": 10729.02,
    "margem": 3462.58
  },
  {
    "data": "2026-04-27",
    "entregas": 313,
    "custo": 3688.72,
    "fatura": 5687.34,
    "margem": 1998.62
  },
  {
    "data": "2026-04-28",
    "entregas": 405,
    "custo": 5103.48,
    "fatura": 7755.68,
    "margem": 2652.2
  },
  {
    "data": "2026-04-29",
    "entregas": 381,
    "custo": 4650.76,
    "fatura": 7147.68,
    "margem": 2496.92
  },
  {
    "data": "2026-04-30",
    "entregas": 757,
    "custo": 6748.68,
    "fatura": 9878.35,
    "margem": 3129.67
  },
  {
    "data": "2026-05-01",
    "entregas": 974,
    "custo": 8054.64,
    "fatura": 11637.69,
    "margem": 3583.05
  },
  {
    "data": "2026-05-02",
    "entregas": 692,
    "custo": 7546.8,
    "fatura": 10911.68,
    "margem": 3364.88
  },
  {
    "data": "2026-05-03",
    "entregas": 798,
    "custo": 7741.8,
    "fatura": 11398.35,
    "margem": 3656.55
  },
  {
    "data": "2026-05-04",
    "entregas": 305,
    "custo": 3713.08,
    "fatura": 5751.34,
    "margem": 2038.26
  },
  {
    "data": "2026-05-05",
    "entregas": 427,
    "custo": 5633.48,
    "fatura": 8561.68,
    "margem": 2928.2
  },
  {
    "data": "2026-05-06",
    "entregas": 326,
    "custo": 4728.76,
    "fatura": 7474.68,
    "margem": 2745.92
  },
  {
    "data": "2026-05-07",
    "entregas": 412,
    "custo": 4924.76,
    "fatura": 7590.68,
    "margem": 2665.92
  },
  {
    "data": "2026-05-08",
    "entregas": 667,
    "custo": 7238.76,
    "fatura": 10364.68,
    "margem": 3125.92
  },
  {
    "data": "2026-05-09",
    "entregas": 700,
    "custo": 7320.68,
    "fatura": 10594.68,
    "margem": 3274
  },
  {
    "data": "2026-05-10",
    "entregas": 722,
    "custo": 7684.44,
    "fatura": 11160.02,
    "margem": 3475.58
  },
  {
    "data": "2026-05-11",
    "entregas": 302,
    "custo": 3764.36,
    "fatura": 5879.34,
    "margem": 2114.98
  },
  {
    "data": "2026-05-12",
    "entregas": 413,
    "custo": 5261.48,
    "fatura": 7765.68,
    "margem": 2504.2
  },
  {
    "data": "2026-05-13",
    "entregas": 351,
    "custo": 4547.12,
    "fatura": 7099.68,
    "margem": 2552.56
  },
  {
    "data": "2026-05-14",
    "entregas": 359,
    "custo": 4585.48,
    "fatura": 6989.68,
    "margem": 2404.2
  },
  {
    "data": "2026-05-15",
    "entregas": 638,
    "custo": 6943.48,
    "fatura": 9992.68,
    "margem": 3049.2
  },
  {
    "data": "2026-05-16",
    "entregas": 726,
    "custo": 7202.76,
    "fatura": 10785.01,
    "margem": 3582.25
  },
  {
    "data": "2026-05-17",
    "entregas": 770,
    "custo": 7891.8,
    "fatura": 11580.35,
    "margem": 3688.55
  },
  {
    "data": "2026-05-18",
    "entregas": 317,
    "custo": 4143.56,
    "fatura": 6357.68,
    "margem": 2214.12
  },
  {
    "data": "2026-05-19",
    "entregas": 436,
    "custo": 5069.52,
    "fatura": 7548.34,
    "margem": 2478.82
  },
  {
    "data": "2026-05-20",
    "entregas": 441,
    "custo": 5079.2,
    "fatura": 7790.68,
    "margem": 2711.48
  },
  {
    "data": "2026-05-21",
    "entregas": 417,
    "custo": 4868.48,
    "fatura": 7475.68,
    "margem": 2607.2
  },
  {
    "data": "2026-05-22",
    "entregas": 758,
    "custo": 7601.84,
    "fatura": 10880.68,
    "margem": 3278.84
  },
  {
    "data": "2026-05-23",
    "entregas": 745,
    "custo": 7703.96,
    "fatura": 11097.02,
    "margem": 3393.06
  },
  {
    "data": "2026-05-24",
    "entregas": 835,
    "custo": 8220.72,
    "fatura": 12132.69,
    "margem": 3911.97
  },
  {
    "data": "2026-05-25",
    "entregas": 317,
    "custo": 3883.16,
    "fatura": 6255.34,
    "margem": 2372.18
  },
  {
    "data": "2026-05-26",
    "entregas": 392,
    "custo": 5193.56,
    "fatura": 7863.68,
    "margem": 2670.12
  },
  {
    "data": "2026-05-27",
    "entregas": 344,
    "custo": 4592.28,
    "fatura": 7238.68,
    "margem": 2646.4
  },
  {
    "data": "2026-05-28",
    "entregas": 373,
    "custo": 4850.56,
    "fatura": 7587.68,
    "margem": 2737.12
  },
  {
    "data": "2026-05-29",
    "entregas": 820,
    "custo": 8008.48,
    "fatura": 11348.68,
    "margem": 3340.2
  },
  {
    "data": "2026-05-30",
    "entregas": 726,
    "custo": 7494.68,
    "fatura": 10998.35,
    "margem": 3503.67
  },
  {
    "data": "2026-05-31",
    "entregas": 785,
    "custo": 7513.16,
    "fatura": 11139.69,
    "margem": 3626.53
  },
  {
    "data": "2026-06-01",
    "entregas": 332,
    "custo": 3772.16,
    "fatura": 5902.34,
    "margem": 2130.18
  },
  {
    "data": "2026-06-02",
    "entregas": 397,
    "custo": 4969.56,
    "fatura": 7623.68,
    "margem": 2654.12
  },
  {
    "data": "2026-06-03",
    "entregas": 471,
    "custo": 5438.84,
    "fatura": 8168.68,
    "margem": 2729.84
  },
  {
    "data": "2026-06-04",
    "entregas": 607,
    "custo": 6487.84,
    "fatura": 9513.68,
    "margem": 3025.84
  },
  {
    "data": "2026-06-05",
    "entregas": 593,
    "custo": 6853.84,
    "fatura": 9939.68,
    "margem": 3085.84
  },
  {
    "data": "2026-06-06",
    "entregas": 678,
    "custo": 7477.68,
    "fatura": 10911.35,
    "margem": 3433.67
  },
  {
    "data": "2026-06-07",
    "entregas": 779,
    "custo": 7897.08,
    "fatura": 11612.02,
    "margem": 3714.94
  },
  {
    "data": "2026-06-08",
    "entregas": 315,
    "custo": 3727.52,
    "fatura": 5824.34,
    "margem": 2096.82
  },
  {
    "data": "2026-06-09",
    "entregas": 372,
    "custo": 5084.56,
    "fatura": 7848.68,
    "margem": 2764.12
  },
  {
    "data": "2026-06-10",
    "entregas": 345,
    "custo": 4502.2,
    "fatura": 7304.68,
    "margem": 2802.48
  },
  {
    "data": "2026-06-11",
    "entregas": 414,
    "custo": 4888.48,
    "fatura": 7590.68,
    "margem": 2702.2
  },
  {
    "data": "2026-06-12",
    "entregas": 817,
    "custo": 8442.2,
    "fatura": 11984.68,
    "margem": 3542.48
  },
  {
    "data": "2026-06-13",
    "entregas": 634,
    "custo": 7467.68,
    "fatura": 10956.35,
    "margem": 3488.67
  },
  {
    "data": "2026-06-14",
    "entregas": 754,
    "custo": 8178.08,
    "fatura": 11982.02,
    "margem": 3803.94
  },
  {
    "data": "2026-06-15",
    "entregas": 365,
    "custo": 3937.16,
    "fatura": 5971.34,
    "margem": 2034.18
  },
  {
    "data": "2026-06-16",
    "entregas": 414,
    "custo": 4830.72,
    "fatura": 7305.34,
    "margem": 2474.62
  },
  {
    "data": "2026-06-17",
    "entregas": 214,
    "custo": 3283.4,
    "fatura": 4774.34,
    "margem": 1490.94
  },
  {
    "data": "2026-06-18",
    "entregas": 195,
    "custo": 3065.4,
    "fatura": 4446.34,
    "margem": 1380.94
  },
  {
    "data": "2026-06-19",
    "entregas": 629,
    "custo": 6530.4,
    "fatura": 8752.34,
    "margem": 2221.94
  },
  {
    "data": "2026-06-20",
    "entregas": 493,
    "custo": 5853.4,
    "fatura": 8010.34,
    "margem": 2156.94
  },
  {
    "data": "2026-06-21",
    "entregas": 570,
    "custo": 6440.52,
    "fatura": 8884.34,
    "margem": 2443.82
  },
  {
    "data": "2026-06-22",
    "entregas": 160,
    "custo": 2646.4,
    "fatura": 3930.34,
    "margem": 1283.94
  },
  {
    "data": "2026-06-23",
    "entregas": 238,
    "custo": 3373,
    "fatura": 4884,
    "margem": 1511
  }
];

export const stores: StoreStat[] = [
  {
    "nome": "DOMINOS",
    "entregas": 33617,
    "custo": 396856,
    "fatura": 544980,
    "margem": 148124,
    "numEntregadores": 118,
    "registros": 3282
  },
  {
    "nome": "JOAQUINA",
    "entregas": 13679,
    "custo": 108521.36,
    "fatura": 201605,
    "margem": 93083.64,
    "numEntregadores": 49,
    "registros": 1426
  },
  {
    "nome": "COZI",
    "entregas": 1376,
    "custo": 18888.12,
    "fatura": 27162.33,
    "margem": 8274.21,
    "numEntregadores": 13,
    "registros": 248
  },
  {
    "nome": "FERRO E FARINHA",
    "entregas": 1182,
    "custo": 8461,
    "fatura": 15393,
    "margem": 6932,
    "numEntregadores": 8,
    "registros": 44
  },
  {
    "nome": "DOMINOS IRAJÁ",
    "entregas": 794,
    "custo": 33410,
    "fatura": 41060,
    "margem": 7650,
    "numEntregadores": 7,
    "registros": 368
  },
  {
    "nome": "ARTIGIANO - ANNA",
    "entregas": 424,
    "custo": 3538.32,
    "fatura": 7676.36,
    "margem": 4138.04,
    "numEntregadores": 2,
    "registros": 65
  },
  {
    "nome": "RJCC",
    "entregas": 43,
    "custo": 20588.92,
    "fatura": 35825.82,
    "margem": 15236.9,
    "numEntregadores": 19,
    "registros": 320
  },
  {
    "nome": "MITSUBA",
    "entregas": 13,
    "custo": 1327,
    "fatura": 2550,
    "margem": 1223,
    "numEntregadores": 2,
    "registros": 17
  }
];

export const entregadores: EntregadorStat[] = [
  {
    "nome": "ALAN SANTOS ALVES",
    "entregas": 1626,
    "custo": 13215.28,
    "fatura": 23139,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "MICAEL LUIS FERREIRA",
    "entregas": 1578,
    "custo": 11962.2,
    "fatura": 21160,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "SALATYEL DE SOUZA MARTINS (R3)",
    "entregas": 1307,
    "custo": 15301,
    "fatura": 21242,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THIAGO FRANÇA DE LIMA (R3)",
    "entregas": 1287,
    "custo": 16504,
    "fatura": 23524,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JEFFERSON ANTERO (R3)",
    "entregas": 1170,
    "custo": 12904,
    "fatura": 17596,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GABRIEL RAMOS (CLT)",
    "entregas": 1155,
    "custo": 11575,
    "fatura": 15370,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAFAEL REIS LINHARES (R3)",
    "entregas": 1106,
    "custo": 13053,
    "fatura": 18166,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RONNALD BENTO SANTOS (R3)",
    "entregas": 1105,
    "custo": 11177,
    "fatura": 14878,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FRANCISCO AGNALDO BRITO",
    "entregas": 983,
    "custo": 13213.28,
    "fatura": 17755.53,
    "lojas": [
      "COZI"
    ]
  },
  {
    "nome": "GUILHERME MORAIS (CLT)",
    "entregas": 958,
    "custo": 10323,
    "fatura": 13814,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JOSE AUGUSTO DA SILVA LOPES (R3)",
    "entregas": 941,
    "custo": 10285,
    "fatura": 13934,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ANTÔNIO BEZERRA DA SILVA (R3)",
    "entregas": 924,
    "custo": 9978,
    "fatura": 13428,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "CARLOS EDUARDO DE OLIVEIRA (R3)",
    "entregas": 886,
    "custo": 10819,
    "fatura": 14370,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "BRUNO SILVA DOS SANTOS (CLT)",
    "entregas": 876,
    "custo": 6645,
    "fatura": 11703,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JOÃO VICTOR FEITOSA DA COSTA (R3)",
    "entregas": 839,
    "custo": 9820,
    "fatura": 13556,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "YURI DA SILVA SARAIVA (R3)",
    "entregas": 819,
    "custo": 8486,
    "fatura": 11240,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "IAN LOPES DOS SANTOS",
    "entregas": 805,
    "custo": 6625.28,
    "fatura": 12238,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "CARLOS ALBERTO DA SILVA (R3)",
    "entregas": 801,
    "custo": 9374,
    "fatura": 12485,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUIZ FELIPE GOMES BARRETO (R3)",
    "entregas": 760,
    "custo": 8220,
    "fatura": 11120,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARCUS OLINTO DA SILVA (CLT)",
    "entregas": 739,
    "custo": 6482.36,
    "fatura": 11373,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LUCAS BORGES DOS SANTOS (R3)",
    "entregas": 736,
    "custo": 9319,
    "fatura": 12675,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RENAN MACHADO DE MATOS (R3)",
    "entregas": 725,
    "custo": 9552,
    "fatura": 13153,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARLON BEZERRA NOBRE (SOBRA)",
    "entregas": 713,
    "custo": 5892.28,
    "fatura": 10888.68,
    "lojas": [
      "COZI",
      "JOAQUINA"
    ]
  },
  {
    "nome": "JOÃO CARLOS RAMOS (CLT)",
    "entregas": 701,
    "custo": 7258.2,
    "fatura": 10180.34,
    "lojas": [
      "COZI",
      "DOMINOS",
      "JOAQUINA"
    ]
  },
  {
    "nome": "ANTONIO MAYCON (SOBRA)",
    "entregas": 696,
    "custo": 6516.28,
    "fatura": 12180.03,
    "lojas": [
      "COZI",
      "JOAQUINA",
      "RJCC"
    ]
  },
  {
    "nome": "CLEYTON ROBERTO SILVA (R3)",
    "entregas": 692,
    "custo": 7711,
    "fatura": 10322,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "HENRIQUE MOURÃO MESQUITA (R3)",
    "entregas": 692,
    "custo": 7840,
    "fatura": 10838,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "CARLOS EDUARDO TOTES (R3)",
    "entregas": 684,
    "custo": 8006,
    "fatura": 11180,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAFAEL NUNES DIAS (R3)",
    "entregas": 680,
    "custo": 8273,
    "fatura": 10981,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ROBSON TOMAS DE AQUINO (CLT)",
    "entregas": 662,
    "custo": 6456.64,
    "fatura": 11162,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "THIAGO DINIZ MENESSES (R3)",
    "entregas": 660,
    "custo": 9102,
    "fatura": 12742,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FRANCISCO CLEBIO DA SILVA (CLT)",
    "entregas": 641,
    "custo": 4487,
    "fatura": 9247,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "ANTHONY FELIPE DE LIMA (R3)",
    "entregas": 627,
    "custo": 7653,
    "fatura": 10530,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "EDUARDO SANTIAGO DA SILVA (R3)",
    "entregas": 625,
    "custo": 6912,
    "fatura": 9398,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JOÃO VITOR DO NASCIMENTO",
    "entregas": 622,
    "custo": 4596.2,
    "fatura": 8512,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "MATHEUS CEZARI DA SILVEIRA (R3)",
    "entregas": 598,
    "custo": 9340,
    "fatura": 13992,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PAULO SÉRGIO ANTUNES (R3)",
    "entregas": 578,
    "custo": 7374,
    "fatura": 9888,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DENILSON BRITO DE PAIVA (SOBRA)",
    "entregas": 578,
    "custo": 3834.28,
    "fatura": 7463,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "WALLISSON MATHIAS VERAS (R3)",
    "entregas": 523,
    "custo": 5488,
    "fatura": 7434,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RICARDO ADELINO DE OLIVEIRA (CLT)",
    "entregas": 507,
    "custo": 3635.08,
    "fatura": 7655,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "ALEX BRENO MUZI CARDOSO (R3)",
    "entregas": 504,
    "custo": 7013,
    "fatura": 10238,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MATHEUS RIBEIRO DINIZ (R3)",
    "entregas": 494,
    "custo": 5821,
    "fatura": 8030,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "IGOR PEREIRA (FREE)",
    "entregas": 472,
    "custo": 3036,
    "fatura": 5568.34,
    "lojas": [
      "COZI",
      "JOAQUINA"
    ]
  },
  {
    "nome": "DIEGO GIL DA SILVA (R3)",
    "entregas": 440,
    "custo": 4951,
    "fatura": 7178,
    "lojas": [
      "DOMINOS",
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "FABIO HENRIQUE ROSA MUNIZ (R3)",
    "entregas": 438,
    "custo": 5570,
    "fatura": 7382,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "BRUNO DA SILVA MENDES (SOBRA)",
    "entregas": 427,
    "custo": 3939.68,
    "fatura": 7838,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JEFFERSON TIMÓTEO",
    "entregas": 424,
    "custo": 3384.48,
    "fatura": 7343.36,
    "lojas": [
      "ARTIGIANO - ANNA"
    ]
  },
  {
    "nome": "MATHEUS SENNA (R3)",
    "entregas": 409,
    "custo": 4349,
    "fatura": 5902,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GUSTAVO PAULA FRAGOSO (R3)",
    "entregas": 405,
    "custo": 5083,
    "fatura": 7486,
    "lojas": [
      "DOMINOS",
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "BRUCE ARAUJO DE CARVALHO (R3)",
    "entregas": 399,
    "custo": 4511,
    "fatura": 6110,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "SANDRO COELHO BRITO (R3)",
    "entregas": 390,
    "custo": 4660,
    "fatura": 6400,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARCUS BRUNO DE SOUZA (LIDER)",
    "entregas": 383,
    "custo": 4656,
    "fatura": 6678,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PAULO ROBERTO RODRIGUES",
    "entregas": 375,
    "custo": 2964.64,
    "fatura": 5320,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LUCAS PEREIRA DA SILVA",
    "entregas": 349,
    "custo": 2707.88,
    "fatura": 5152,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LEONARDO CÉSAR GREGO ALVES (R3)",
    "entregas": 348,
    "custo": 4257,
    "fatura": 5910,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "YURI DE LIMA DA SILVA (R3)",
    "entregas": 347,
    "custo": 4426,
    "fatura": 5867,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MAX SOUZA PRÓCOPIO (R3)",
    "entregas": 337,
    "custo": 3291,
    "fatura": 4322,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JORGE BRUNO LOPES",
    "entregas": 328,
    "custo": 2507.4,
    "fatura": 4928,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "VICTOR HUGO PEDREIRA SILVA (R3)",
    "entregas": 323,
    "custo": 3623,
    "fatura": 4974,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FABIANO GOMES DE ALMIRANTE (R3)",
    "entregas": 309,
    "custo": 4025,
    "fatura": 5708,
    "lojas": [
      "DOMINOS",
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "JULIO HENRIQUE MAGALHÃES (R3)",
    "entregas": 299,
    "custo": 3922,
    "fatura": 5504,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PEDRO LUCAS AZEREDO (R3)",
    "entregas": 296,
    "custo": 3587,
    "fatura": 4962,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ALVARO LUCENA DA CONCEIÇÃO (CLT)",
    "entregas": 289,
    "custo": 4006.8,
    "fatura": 7236.36,
    "lojas": [
      "COZI",
      "JOAQUINA",
      "RJCC"
    ]
  },
  {
    "nome": "JORGE DOS SANTOS MANSUR (R3)",
    "entregas": 289,
    "custo": 3297,
    "fatura": 4514,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "KEVIN WILLIAM (R3)",
    "entregas": 241,
    "custo": 2594,
    "fatura": 3520,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THIAGO MENDES DOS SANTOS (CLT)",
    "entregas": 241,
    "custo": 2087.08,
    "fatura": 4446,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LUIS CLAUDERSON CARVALHO (R3)",
    "entregas": 234,
    "custo": 2944,
    "fatura": 3982,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUCAS FREITAS DA SILVA (CLT)",
    "entregas": 218,
    "custo": 1756.4,
    "fatura": 3984,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "DAVI CHUENG (FREE)",
    "entregas": 210,
    "custo": 2457,
    "fatura": 3318,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PEDRO ROMANELI DOS ANJOS (R3)",
    "entregas": 201,
    "custo": 2159,
    "fatura": 2870,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FELIPE GOMES DOS SANTOS (R3)",
    "entregas": 195,
    "custo": 2119,
    "fatura": 2806,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ROQUE ROGELIO DE LIRA (R3)",
    "entregas": 193,
    "custo": 2712,
    "fatura": 3770,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "IAGO DAMIÃO DA SILVA (ZEE)",
    "entregas": 188,
    "custo": 1341.8,
    "fatura": 2652,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "DAIENE CRISTINA MARTINS (R3)",
    "entregas": 183,
    "custo": 2529,
    "fatura": 3570,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ROBSON BOSCARINO LOBO DE SOUZA (R3)",
    "entregas": 166,
    "custo": 2030,
    "fatura": 3010,
    "lojas": [
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "JHONATHAN SOUZA MENDES (R3)",
    "entregas": 163,
    "custo": 1967,
    "fatura": 2710,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUIS CLAUDIO DOS SANTOS (CLT)",
    "entregas": 156,
    "custo": 1540.56,
    "fatura": 2646,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "CARLOS DAVID DE OLIVEIRA ALVES (R3)",
    "entregas": 154,
    "custo": 1852,
    "fatura": 2544,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MOISES SANTOS DA SILVA (R3)",
    "entregas": 152,
    "custo": 1844,
    "fatura": 2544,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "YAGO DE BARROS SILVA (FREE)",
    "entregas": 131,
    "custo": 1666,
    "fatura": 2258,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MATHEUS WHAT LIMA (R3)",
    "entregas": 125,
    "custo": 1436,
    "fatura": 2110,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARCELLO VICTOR SOUZA (FREE)",
    "entregas": 125,
    "custo": 919.84,
    "fatura": 1686,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "PHELIPE GOMES",
    "entregas": 122,
    "custo": 1562,
    "fatura": 2196,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THIAGO DA SILVA COUTO (R3)",
    "entregas": 118,
    "custo": 1532,
    "fatura": 2140,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DIOGO NEVES MARQUES DA SILVA (R3)",
    "entregas": 114,
    "custo": 1301,
    "fatura": 1730,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GABRIEL CARMO DOS SANTOS (FREE)",
    "entregas": 110,
    "custo": 1354,
    "fatura": 2006,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FERRO 02 - JONATAN SOUZA MENDES",
    "entregas": 107,
    "custo": 1277,
    "fatura": 1809,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "CARLOS ALBERTO DA SILVA JOANA (R3)",
    "entregas": 105,
    "custo": 1187,
    "fatura": 1652,
    "lojas": [
      "DOMINOS",
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "VINNICIUS JOSÉ PEREIRA (R3)",
    "entregas": 102,
    "custo": 1489,
    "fatura": 2179,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GUILHERME ESTEVAM (R3)",
    "entregas": 102,
    "custo": 1230,
    "fatura": 1830,
    "lojas": [
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "ANDERSON LUIZ OLIVEIRA DA SILVA (R3)",
    "entregas": 99,
    "custo": 1269,
    "fatura": 1752,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JORGE LUIS FELIX DA SILVA (R3-BIKE)",
    "entregas": 98,
    "custo": 1308,
    "fatura": 1864,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "VINNICIUS JOSÉ PEREIRA (FREE)",
    "entregas": 96,
    "custo": 1332,
    "fatura": 1797,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LEONARDO FIGUEIRA (CLT)",
    "entregas": 95,
    "custo": 1018.04,
    "fatura": 2216,
    "lojas": [
      "COZI"
    ]
  },
  {
    "nome": "ALLAN SILVA DOS SANTOS (R3)",
    "entregas": 94,
    "custo": 1243,
    "fatura": 1758,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DAVI DOS SANTOS CONCEIÇÃO (FREE)",
    "entregas": 89,
    "custo": 1023,
    "fatura": 1363,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DIEGO GOMES (FREE)",
    "entregas": 86,
    "custo": 855.2,
    "fatura": 1635,
    "lojas": [
      "JOAQUINA",
      "RJCC"
    ]
  },
  {
    "nome": "EDSON SILVA FILHO (R3)",
    "entregas": 84,
    "custo": 1073,
    "fatura": 1448,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MAURICIO MOTA DA SILVA (FREE)",
    "entregas": 83,
    "custo": 899,
    "fatura": 1218,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "WELINGTON LUIZ FERREIRA (R3)",
    "entregas": 81,
    "custo": 1029,
    "fatura": 1470,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUCAS ARAUJO QUEIROZ (R3)",
    "entregas": 80,
    "custo": 1011,
    "fatura": 1414,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MOISES DA SILVA TEXEIRA (R3)",
    "entregas": 78,
    "custo": 1087,
    "fatura": 1525,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAFAEL SANTOS",
    "entregas": 78,
    "custo": 747,
    "fatura": 990,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ERIC DELSON DE ALMEIDA SILVA (R3)",
    "entregas": 77,
    "custo": 873,
    "fatura": 1210,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAFAEL FREITAS (LIDER)",
    "entregas": 76,
    "custo": 999,
    "fatura": 1430,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THIAGO FERNANDES DE OLIVEIRA (R3)",
    "entregas": 73,
    "custo": 1058,
    "fatura": 1564,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JONATAN ROCHA PAINS (R3)",
    "entregas": 72,
    "custo": 1194,
    "fatura": 1824,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ALLAN PATRICK ALVES (R3)",
    "entregas": 72,
    "custo": 969,
    "fatura": 1374,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ALLAN PINTO ALVES (R3)",
    "entregas": 70,
    "custo": 959,
    "fatura": 1366,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "WAGNER DO CARMO SILVA (R3)",
    "entregas": 68,
    "custo": 890,
    "fatura": 1272,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RODRIGO PINHEIRO MARÇAL (ZEE)",
    "entregas": 68,
    "custo": 657.72,
    "fatura": 1253,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "VLADSON PEREIRA (FREE)",
    "entregas": 66,
    "custo": 734,
    "fatura": 980,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PAULO ROBERTO DA SILVA (R3)",
    "entregas": 64,
    "custo": 659,
    "fatura": 862,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LEONARDO FIGUEIRA DA SILVA (CLT)",
    "entregas": 63,
    "custo": 370.68,
    "fatura": 855,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "entregas": 62,
    "custo": 736,
    "fatura": 1088,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "entregas": 58,
    "custo": 903,
    "fatura": 1281,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "WELLINGTON SILVA OLIVEIRA (R3)",
    "entregas": 57,
    "custo": 763,
    "fatura": 1090,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FERRO 07 - ANTÔNIO BEZERRA DA SILVA",
    "entregas": 56,
    "custo": 649,
    "fatura": 920,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "GABRIEL BERNARDO NUNES (R3)",
    "entregas": 51,
    "custo": 731,
    "fatura": 1058,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ADAILTON FERNANDES (FREE)",
    "entregas": 50,
    "custo": 383.32,
    "fatura": 735,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JOÃO RODRIGUES (FREE)",
    "entregas": 49,
    "custo": 522,
    "fatura": 704,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JONATHAN RIBEIRO SORRENTINO (ZEE)",
    "entregas": 49,
    "custo": 459.24,
    "fatura": 853,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "PABLO DE SÁ CAMPOS (FREE)",
    "entregas": 48,
    "custo": 506,
    "fatura": 676,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ROBERTO NAPOLEÃO DA SILVA (FREE)",
    "entregas": 47,
    "custo": 573,
    "fatura": 790,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JORGE LUIZ FELIZ DA SILVA (FREE)",
    "entregas": 45,
    "custo": 565,
    "fatura": 790,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THIAGO MENDES (CLT)",
    "entregas": 44,
    "custo": 2813.12,
    "fatura": 5419.36,
    "lojas": [
      "COZI",
      "RJCC"
    ]
  },
  {
    "nome": "CARLOS PEREIRA GONÇALVES",
    "entregas": 44,
    "custo": 593,
    "fatura": 798,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LEONARDO ELIAS DA SILVA (R3)",
    "entregas": 43,
    "custo": 555,
    "fatura": 782,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PEDRO HENRIQUE (FREE)",
    "entregas": 42,
    "custo": 324.04,
    "fatura": 600,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "entregas": 39,
    "custo": 695,
    "fatura": 1029,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "entregas": 34,
    "custo": 476,
    "fatura": 680,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "MARKLEY VINÍCIUS RAMOS (ZEE)",
    "entregas": 34,
    "custo": 34,
    "fatura": 102,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "ALEXSANDER TELES DA SILVA (R3)",
    "entregas": 30,
    "custo": 420,
    "fatura": 600,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "entregas": 30,
    "custo": 368,
    "fatura": 503,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "NATAN PAULA DE SOUZA (FREE)",
    "entregas": 29,
    "custo": 343,
    "fatura": 458,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "FELIPE VIANA MARTINS (FREE)",
    "entregas": 29,
    "custo": 345,
    "fatura": 466,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAMON DE SOUZA DA SILVA (ZEE)",
    "entregas": 27,
    "custo": 129.56,
    "fatura": 303,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LEONARDO DOS SANTOS (FREE)",
    "entregas": 26,
    "custo": 282.4,
    "fatura": 640,
    "lojas": [
      "JOAQUINA",
      "RJCC"
    ]
  },
  {
    "nome": "BRUNO PESSET DOS SANTOS (R3)",
    "entregas": 25,
    "custo": 325,
    "fatura": 450,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GABRIEL SILVA FIDELIS",
    "entregas": 25,
    "custo": 8589.4,
    "fatura": 14248.89,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "FERNANDO AUGUSTO REGATO (R3)",
    "entregas": 24,
    "custo": 396,
    "fatura": 600,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MAICON DOUGLAS (COORDENADOR)",
    "entregas": 23,
    "custo": 542,
    "fatura": 900,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "ANTONIO MAYCON SOBRA",
    "entregas": 21,
    "custo": 236,
    "fatura": 308,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RENATO DINIZ DA SILVA",
    "entregas": 20,
    "custo": 148.2,
    "fatura": 292,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "THIAGO MENDES",
    "entregas": 19,
    "custo": 228,
    "fatura": 308,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RAFAEL SILVA DE SOUSA (CLT)",
    "entregas": 18,
    "custo": 5204.92,
    "fatura": 7636.22,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "CAIO MARCELO DOS SANTOS (R3)",
    "entregas": 17,
    "custo": 220,
    "fatura": 308,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "JORGE LUIZ BARBOSA (FREE)",
    "entregas": 17,
    "custo": 157,
    "fatura": 206,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GABRIEL AUGUSTO SOUZA (FREE)",
    "entregas": 16,
    "custo": 151,
    "fatura": 198,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "HEDIVAN RODRIGUES (FREE)",
    "entregas": 16,
    "custo": 144.2,
    "fatura": 280,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "FRANCISCO CLAUDIO",
    "entregas": 15,
    "custo": 210,
    "fatura": 300,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MAICON DOUGLAS SUPERVISOR",
    "entregas": 15,
    "custo": 158,
    "fatura": 223,
    "lojas": [
      "FERRO E FARINHA"
    ]
  },
  {
    "nome": "MAYCON SANTANA (FREE)",
    "entregas": 15,
    "custo": 168.84,
    "fatura": 287,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JHONATAN WILLIAN DOS SANTOS (FREE)",
    "entregas": 14,
    "custo": 149,
    "fatura": 192,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "EZEQUIEL NASCIMENTO CAETANO (ZEE)",
    "entregas": 14,
    "custo": 142.2,
    "fatura": 274,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "RODRIGO DA SILVEIRA SANTOS (ZEE)",
    "entregas": 14,
    "custo": 167.84,
    "fatura": 284,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "MARCELLO VICTOR (FREE)",
    "entregas": 13,
    "custo": 500.16,
    "fatura": 760.35,
    "lojas": [
      "COZI",
      "RJCC"
    ]
  },
  {
    "nome": "JOÃO PEDRO CLIMAS LOPES",
    "entregas": 13,
    "custo": 133,
    "fatura": 174,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RENATO DINIZ DA SILVA (ZEE)",
    "entregas": 13,
    "custo": 13,
    "fatura": 39,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "DIOGO PEREIRA DA SILVA (ZEE)",
    "entregas": 13,
    "custo": 64.28,
    "fatura": 150,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JOÃO VITOR DA SILVA BARROS",
    "entregas": 13,
    "custo": 1102,
    "fatura": 2100,
    "lojas": [
      "MITSUBA"
    ]
  },
  {
    "nome": "BRUNO SILVA MENDES (FREE)",
    "entregas": 12,
    "custo": 422.24,
    "fatura": 648.68,
    "lojas": [
      "COZI"
    ]
  },
  {
    "nome": "FERNANDO REZENDE IVO (FREE)",
    "entregas": 12,
    "custo": 198,
    "fatura": 300,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARCUS BRUNO DE SOUZA (R3)",
    "entregas": 12,
    "custo": 140,
    "fatura": 210,
    "lojas": [
      "DOMINOS IRAJÁ"
    ]
  },
  {
    "nome": "FELIPE PEDRO MARTINS FREE",
    "entregas": 12,
    "custo": 165.84,
    "fatura": 278,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "VITOR HUGO MEIRELES (R3)",
    "entregas": 10,
    "custo": 115,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "THAUANE BARBOSA (LIDER)",
    "entregas": 10,
    "custo": 138.2,
    "fatura": 262,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "HEVERSON CLEITON PEREIRA (ZEE)",
    "entregas": 10,
    "custo": 86.92,
    "fatura": 151,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LUIS LUCAS",
    "entregas": 9,
    "custo": 111,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "BRUNO",
    "entregas": 9,
    "custo": 111,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DIOGO VIEIRA",
    "entregas": 9,
    "custo": 111,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "MARCOS MORAES",
    "entregas": 8,
    "custo": 107,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "RICARDO ADELINO CLT",
    "entregas": 8,
    "custo": 107,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUIZ HENRIQUE",
    "entregas": 8,
    "custo": 107,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUCAS DO NASCIMENTO BASTOS (R3)",
    "entregas": 8,
    "custo": 107,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "PATRICK WESLEY SANTIAGO (FREE)",
    "entregas": 8,
    "custo": 107,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "GUILHERME LIMA",
    "entregas": 7,
    "custo": 108,
    "fatura": 155,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "CEZAR AUGUSTUS DA SILVA OLIVEIRA (R3)",
    "entregas": 6,
    "custo": 99,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "LUIZ HENRIQUE DE OLIVEIRA (SUPERVISOR)",
    "entregas": 6,
    "custo": 57.28,
    "fatura": 129,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "PAULO ROBERTO (FREE)",
    "entregas": 5,
    "custo": 543.44,
    "fatura": 1036.34,
    "lojas": [
      "COZI",
      "RJCC"
    ]
  },
  {
    "nome": "DIEGO DE ARAUJO FREE",
    "entregas": 5,
    "custo": 81.92,
    "fatura": 136,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "JOÃO PEDRO CLIMAS LOPES (R3)",
    "entregas": 3,
    "custo": 87,
    "fatura": 150,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "DENILSON BRITO (SOBRA)",
    "entregas": 2,
    "custo": 181.48,
    "fatura": 313.67,
    "lojas": [
      "COZI"
    ]
  },
  {
    "nome": "LUCIANO PIRES",
    "entregas": 2,
    "custo": 0,
    "fatura": 8,
    "lojas": [
      "DOMINOS"
    ]
  },
  {
    "nome": "BRIGIDO RENATO",
    "entregas": 2,
    "custo": 78.92,
    "fatura": 127,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "LUAN MESSIAS DA SILVA (FACILITADOR)",
    "entregas": 1,
    "custo": 1,
    "fatura": 3,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "ANDERSON ALEXANDRE DA SILVA (ZEE)",
    "entregas": 1,
    "custo": 1,
    "fatura": 3,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "DAVID RICARDO DE LIMA (ZEE)",
    "entregas": 1,
    "custo": 1,
    "fatura": 3,
    "lojas": [
      "JOAQUINA"
    ]
  },
  {
    "nome": "KARINA",
    "entregas": 0,
    "custo": 153.84,
    "fatura": 333,
    "lojas": [
      "ARTIGIANO - ANNA"
    ]
  },
  {
    "nome": "IAGO DAMIÃO (SOBRA)",
    "entregas": 0,
    "custo": 76.92,
    "fatura": 111.67,
    "lojas": [
      "COZI"
    ]
  },
  {
    "nome": "LEONARDO SANTOS",
    "entregas": 0,
    "custo": 150,
    "fatura": 300,
    "lojas": [
      "MITSUBA"
    ]
  },
  {
    "nome": "RAFAEL FREITAS",
    "entregas": 0,
    "custo": 51.28,
    "fatura": 143,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "SALVIANO ROCHA (FREE)",
    "entregas": 0,
    "custo": 128.2,
    "fatura": 212.67,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "LUIZ LUCAS (FREE)",
    "entregas": 0,
    "custo": 205.12,
    "fatura": 473,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "LAYO LIMA",
    "entregas": 0,
    "custo": 692.28,
    "fatura": 1449.67,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "RENATO ZEE",
    "entregas": 0,
    "custo": 51.28,
    "fatura": 101,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "DENILSON BRITO (FREE)",
    "entregas": 0,
    "custo": 820.48,
    "fatura": 1488.01,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "MARLON NOBRE (SOBRA)",
    "entregas": 0,
    "custo": 76.92,
    "fatura": 111.67,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "FRANCISCO CLEBIO (CLT)",
    "entregas": 0,
    "custo": 256.4,
    "fatura": 520.67,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "MARCUS OLINTO (CLT)",
    "entregas": 0,
    "custo": 51.28,
    "fatura": 101,
    "lojas": [
      "RJCC"
    ]
  },
  {
    "nome": "RICARDO ADELINO (CLT)",
    "entregas": 0,
    "custo": 128.2,
    "fatura": 308,
    "lojas": [
      "RJCC"
    ]
  }
];

export const pedidosIfood: PedidoIfood[] = [
  {
    "codigo": "IF-9251",
    "distancia": "5.11 km",
    "entrada": "01/06/2026 19:21:22",
    "finalizou": "01/06/2026 19:49:27",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 76.93
  },
  {
    "codigo": "IF-9368",
    "distancia": "5.26 km",
    "entrada": "01/06/2026 19:32:14",
    "finalizou": "01/06/2026 20:11:14",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 162.98
  },
  {
    "codigo": "IF-0434",
    "distancia": "3.54 km",
    "entrada": "01/06/2026 19:32:15",
    "finalizou": "01/06/2026 19:52:07",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 105.38
  },
  {
    "codigo": "IF-3918",
    "distancia": "9.99 km",
    "entrada": "01/06/2026 20:41:22",
    "finalizou": "01/06/2026 21:27:42",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 9,
    "valorCliente": 224.48
  },
  {
    "codigo": "IF-4485",
    "distancia": "1.51 km",
    "entrada": "01/06/2026 21:52:20",
    "finalizou": "01/06/2026 22:04:40",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.93
  },
  {
    "codigo": "IF-2458",
    "distancia": "1.80 km",
    "entrada": "01/06/2026 22:11:16",
    "finalizou": "01/06/2026 22:31:48",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 92.98
  },
  {
    "codigo": "IF-3593",
    "distancia": "2.64 km",
    "entrada": "02/06/2026 19:16:30",
    "finalizou": "02/06/2026 19:44:25",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 164.66
  },
  {
    "codigo": "IF-9237",
    "distancia": "4.53 km",
    "entrada": "02/06/2026 19:27:22",
    "finalizou": "02/06/2026 20:05:23",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 61.98
  },
  {
    "codigo": "IF-2969",
    "distancia": "1.01 km",
    "entrada": "02/06/2026 19:57:27",
    "finalizou": "02/06/2026 20:30:50",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 169.98
  },
  {
    "codigo": "IF-4496",
    "distancia": "3.26 km",
    "entrada": "02/06/2026 20:17:37",
    "finalizou": "02/06/2026 21:01:12",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 204.98
  },
  {
    "codigo": "IF-8636",
    "distancia": "2.64 km",
    "entrada": "02/06/2026 20:32:31",
    "finalizou": "02/06/2026 20:53:15",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 104.48
  },
  {
    "codigo": "IF-9775",
    "distancia": "8.74 km",
    "entrada": "02/06/2026 20:39:28",
    "finalizou": "02/06/2026 21:14:30",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 78.98
  },
  {
    "codigo": "IF-0967",
    "distancia": "2.27 km",
    "entrada": "02/06/2026 21:19:25",
    "finalizou": "02/06/2026 21:56:00",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 109.98
  },
  {
    "codigo": "IF-9689",
    "distancia": "4.54 km",
    "entrada": "02/06/2026 21:25:30",
    "finalizou": "02/06/2026 22:04:10",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 120.98
  },
  {
    "codigo": "IF-0019",
    "distancia": "3.48 km",
    "entrada": "03/06/2026 18:31:24",
    "finalizou": "03/06/2026 19:08:11",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 117.98
  },
  {
    "codigo": "IF-2152",
    "distancia": "1.87 km",
    "entrada": "03/06/2026 18:38:22",
    "finalizou": "03/06/2026 18:58:27",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 160.98
  },
  {
    "codigo": "IF-9833",
    "distancia": "0.67 km",
    "entrada": "03/06/2026 18:56:25",
    "finalizou": "03/06/2026 19:18:09",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 96.98
  },
  {
    "codigo": "IF-5875",
    "distancia": "6.04 km",
    "entrada": "03/06/2026 19:12:28",
    "finalizou": "03/06/2026 20:08:17",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 99.98
  },
  {
    "codigo": "IF-7827",
    "distancia": "2.02 km",
    "entrada": "03/06/2026 19:21:35",
    "finalizou": "03/06/2026 19:39:27",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.98
  },
  {
    "codigo": "IF-6420",
    "distancia": "2.37 km",
    "entrada": "03/06/2026 19:40:31",
    "finalizou": "03/06/2026 20:13:06",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 223.98
  },
  {
    "codigo": "IF-0363",
    "distancia": "10.00 km",
    "entrada": "03/06/2026 19:42:54",
    "finalizou": "03/06/2026 20:41:53",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 9,
    "valorCliente": 214.98
  },
  {
    "codigo": "IF-8665",
    "distancia": "4.70 km",
    "entrada": "03/06/2026 19:46:33",
    "finalizou": "03/06/2026 20:29:30",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 148.98
  },
  {
    "codigo": "IF-1549",
    "distancia": "9.53 km",
    "entrada": "03/06/2026 20:05:53",
    "finalizou": "03/06/2026 21:27:51",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 9,
    "valorCliente": 164.98
  },
  {
    "codigo": "IF-6877",
    "distancia": "0.95 km",
    "entrada": "03/06/2026 20:09:28",
    "finalizou": "03/06/2026 20:40:02",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 88.98
  },
  {
    "codigo": "IF-7694",
    "distancia": "1.87 km",
    "entrada": "03/06/2026 20:10:48",
    "finalizou": "03/06/2026 20:46:01",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 200.98
  },
  {
    "codigo": "IF-5686",
    "distancia": "5.27 km",
    "entrada": "03/06/2026 20:19:32",
    "finalizou": "03/06/2026 21:09:08",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 110.49
  },
  {
    "codigo": "IF-2149",
    "distancia": "1.22 km",
    "entrada": "03/06/2026 20:25:46",
    "finalizou": "03/06/2026 20:59:01",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 124.98
  },
  {
    "codigo": "IF-7584",
    "distancia": "0.44 km",
    "entrada": "03/06/2026 20:34:36",
    "finalizou": "03/06/2026 21:15:56",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-2258",
    "distancia": "4.13 km",
    "entrada": "03/06/2026 20:58:40",
    "finalizou": "03/06/2026 21:29:05",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 113.98
  },
  {
    "codigo": "IF-2416",
    "distancia": "1.05 km",
    "entrada": "03/06/2026 21:05:29",
    "finalizou": "03/06/2026 21:38:07",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.98
  },
  {
    "codigo": "IF-2411",
    "distancia": "0.40 km",
    "entrada": "03/06/2026 21:21:34",
    "finalizou": "03/06/2026 21:52:27",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-4151",
    "distancia": "3.32 km",
    "entrada": "03/06/2026 21:32:32",
    "finalizou": "03/06/2026 22:07:30",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 100.98
  },
  {
    "codigo": "IF-2735",
    "distancia": "6.48 km",
    "entrada": "03/06/2026 21:37:19",
    "finalizou": "03/06/2026 22:33:48",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 112.98
  },
  {
    "codigo": "IF-5072",
    "distancia": "7.85 km",
    "entrada": "03/06/2026 21:51:38",
    "finalizou": "03/06/2026 22:29:49",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 7,
    "valorCliente": 69.98
  },
  {
    "codigo": "IF-4261",
    "distancia": "0.75 km",
    "entrada": "03/06/2026 21:56:18",
    "finalizou": "03/06/2026 22:15:01",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 96.98
  },
  {
    "codigo": "IF-0489",
    "distancia": "1.40 km",
    "entrada": "03/06/2026 22:13:29",
    "finalizou": "03/06/2026 23:05:43",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 67.99
  },
  {
    "codigo": "IF-5981",
    "distancia": "5.64 km",
    "entrada": "03/06/2026 22:20:21",
    "finalizou": "03/06/2026 23:10:15",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 67.99
  },
  {
    "codigo": "IF-0382",
    "distancia": "6.51 km",
    "entrada": "03/06/2026 22:24:21",
    "finalizou": "03/06/2026 23:21:13",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 80.98
  },
  {
    "codigo": "IF-2996",
    "distancia": "0.93 km",
    "entrada": "03/06/2026 22:38:14",
    "finalizou": "03/06/2026 23:01:23",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 104.98
  },
  {
    "codigo": "IF-8301",
    "distancia": "3.10 km",
    "entrada": "03/06/2026 22:42:14",
    "finalizou": "03/06/2026 23:05:13",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 103.98
  },
  {
    "codigo": "IF-6683",
    "distancia": "6.15 km",
    "entrada": "03/06/2026 23:22:12",
    "finalizou": "03/06/2026 23:54:58",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 104.98
  },
  {
    "codigo": "IF-2637",
    "distancia": "3.10 km",
    "entrada": "04/06/2026 18:13:20",
    "finalizou": "04/06/2026 19:04:46",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 58.74
  },
  {
    "codigo": "IF-2255",
    "distancia": "1.09 km",
    "entrada": "04/06/2026 18:16:22",
    "finalizou": "04/06/2026 18:44:59",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 66.98
  },
  {
    "codigo": "IF-8590",
    "distancia": "5.25 km",
    "entrada": "04/06/2026 18:25:38",
    "finalizou": "04/06/2026 19:15:32",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 233.98
  },
  {
    "codigo": "IF-4816",
    "distancia": "3.21 km",
    "entrada": "04/06/2026 18:28:40",
    "finalizou": "04/06/2026 18:56:23",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 104.98
  },
  {
    "codigo": "IF-7725",
    "distancia": "8.13 km",
    "entrada": "04/06/2026 19:01:22",
    "finalizou": "04/06/2026 19:22:37",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 75.98
  },
  {
    "codigo": "IF-7431",
    "distancia": "4.63 km",
    "entrada": "04/06/2026 19:15:32",
    "finalizou": "04/06/2026 19:58:23",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 77.13
  },
  {
    "codigo": "IF-0685",
    "distancia": "5.14 km",
    "entrada": "04/06/2026 19:24:38",
    "finalizou": "04/06/2026 19:46:31",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-9000",
    "distancia": "2.43 km",
    "entrada": "04/06/2026 19:29:29",
    "finalizou": "04/06/2026 19:59:47",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 288.58
  },
  {
    "codigo": "IF-4216",
    "distancia": "2.06 km",
    "entrada": "04/06/2026 19:31:47",
    "finalizou": "04/06/2026 20:09:18",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 99.99
  },
  {
    "codigo": "IF-9213",
    "distancia": "8.08 km",
    "entrada": "04/06/2026 19:37:40",
    "finalizou": "04/06/2026 21:29:53",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 109.98
  },
  {
    "codigo": "IF-2128",
    "distancia": "10.06 km",
    "entrada": "04/06/2026 19:40:53",
    "finalizou": "04/06/2026 20:55:19",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 104.98
  },
  {
    "codigo": "IF-7749",
    "distancia": "2.02 km",
    "entrada": "04/06/2026 19:40:54",
    "finalizou": "04/06/2026 20:39:27",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 58.23
  },
  {
    "codigo": "IF-0237",
    "distancia": "3.19 km",
    "entrada": "04/06/2026 19:43:15",
    "finalizou": "04/06/2026 21:11:49",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 208.98
  },
  {
    "codigo": "IF-6523",
    "distancia": "1.96 km",
    "entrada": "04/06/2026 19:45:25",
    "finalizou": "04/06/2026 21:03:07",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 91.98
  },
  {
    "codigo": "IF-1981",
    "distancia": "3.21 km",
    "entrada": "04/06/2026 19:48:33",
    "finalizou": "04/06/2026 20:50:02",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 115.98
  },
  {
    "codigo": "IF-7282",
    "distancia": "4.23 km",
    "entrada": "04/06/2026 19:56:50",
    "finalizou": "04/06/2026 20:48:42",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 204.98
  },
  {
    "codigo": "IF-6805",
    "distancia": "1.26 km",
    "entrada": "04/06/2026 20:00:31",
    "finalizou": "04/06/2026 20:33:25",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-2337",
    "distancia": "11.47 km",
    "entrada": "04/06/2026 20:00:34",
    "finalizou": "04/06/2026 21:03:23",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 11,
    "valorCliente": 155.98
  },
  {
    "codigo": "IF-0564",
    "distancia": "2.88 km",
    "entrada": "04/06/2026 20:01:49",
    "finalizou": "04/06/2026 21:55:51",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.93
  },
  {
    "codigo": "IF-4263",
    "distancia": "8.02 km",
    "entrada": "04/06/2026 20:01:52",
    "finalizou": "04/06/2026 21:35:01",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 106.98
  },
  {
    "codigo": "IF-9118",
    "distancia": "2.21 km",
    "entrada": "04/06/2026 20:03:32",
    "finalizou": "04/06/2026 21:48:08",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.93
  },
  {
    "codigo": "IF-2048",
    "distancia": "10.23 km",
    "entrada": "04/06/2026 20:03:33",
    "finalizou": "04/06/2026 21:18:06",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 121.99
  },
  {
    "codigo": "IF-0630",
    "distancia": "6.78 km",
    "entrada": "04/06/2026 20:25:28",
    "finalizou": "04/06/2026 22:18:14",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 113.98
  },
  {
    "codigo": "IF-5545",
    "distancia": "3.30 km",
    "entrada": "04/06/2026 21:06:32",
    "finalizou": "04/06/2026 22:09:42",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 133.93
  },
  {
    "codigo": "IF-2446",
    "distancia": "1.41 km",
    "entrada": "04/06/2026 21:24:24",
    "finalizou": "04/06/2026 22:14:02",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.93
  },
  {
    "codigo": "IF-6027",
    "distancia": "1.60 km",
    "entrada": "04/06/2026 21:48:25",
    "finalizou": "04/06/2026 22:09:49",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 103.98
  },
  {
    "codigo": "IF-8075",
    "distancia": "4.49 km",
    "entrada": "04/06/2026 22:54:15",
    "finalizou": "04/06/2026 23:25:56",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 203.98
  },
  {
    "codigo": "IF-2094",
    "distancia": "1.72 km",
    "entrada": "04/06/2026 22:57:15",
    "finalizou": "04/06/2026 23:14:31",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 120.98
  },
  {
    "codigo": "IF-7079",
    "distancia": "1.29 km",
    "entrada": "04/06/2026 23:19:12",
    "finalizou": "04/06/2026 23:47:06",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 67.99
  },
  {
    "codigo": "IF-7446",
    "distancia": "2.30 km",
    "entrada": "05/06/2026 18:21:25",
    "finalizou": "05/06/2026 19:10:33",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 106.98
  },
  {
    "codigo": "IF-4368",
    "distancia": "0.44 km",
    "entrada": "05/06/2026 18:26:33",
    "finalizou": "05/06/2026 18:51:29",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "5555",
    "distancia": "5.87 km",
    "entrada": "05/06/2026 18:28:05",
    "finalizou": "05/06/2026 20:26:58",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 0
  },
  {
    "codigo": "IF-8446",
    "distancia": "1.56 km",
    "entrada": "05/06/2026 18:31:17",
    "finalizou": "05/06/2026 18:58:55",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 142.98
  },
  {
    "codigo": "IF-9513",
    "distancia": "4.56 km",
    "entrada": "05/06/2026 18:40:38",
    "finalizou": "05/06/2026 20:00:25",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 134.98
  },
  {
    "codigo": "IF-6581",
    "distancia": "2.02 km",
    "entrada": "05/06/2026 18:42:28",
    "finalizou": "05/06/2026 19:32:15",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 74.98
  },
  {
    "codigo": "IF-6274",
    "distancia": "4.06 km",
    "entrada": "05/06/2026 18:47:29",
    "finalizou": "05/06/2026 19:50:13",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 67.98
  },
  {
    "codigo": "IF-9450",
    "distancia": "4.64 km",
    "entrada": "05/06/2026 18:49:41",
    "finalizou": "05/06/2026 20:09:09",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 99.98
  },
  {
    "codigo": "IF-4565",
    "distancia": "1.74 km",
    "entrada": "05/06/2026 18:50:31",
    "finalizou": "05/06/2026 19:23:05",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 180.98
  },
  {
    "codigo": "IF-3332",
    "distancia": "1.33 km",
    "entrada": "05/06/2026 18:54:38",
    "finalizou": "05/06/2026 19:16:44",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 74.98
  },
  {
    "codigo": "IF-6894",
    "distancia": "3.34 km",
    "entrada": "05/06/2026 19:03:40",
    "finalizou": "05/06/2026 19:37:16",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 209.98
  },
  {
    "codigo": "IF-9841",
    "distancia": "12.12 km",
    "entrada": "05/06/2026 19:03:45",
    "finalizou": "05/06/2026 19:58:27",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 12,
    "valorCliente": 125.99
  },
  {
    "codigo": "IF-2673",
    "distancia": "3.93 km",
    "entrada": "05/06/2026 19:15:37",
    "finalizou": "05/06/2026 19:45:18",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 213.98
  },
  {
    "codigo": "IF-7826",
    "distancia": "3.12 km",
    "entrada": "05/06/2026 19:28:35",
    "finalizou": "05/06/2026 20:04:06",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 67.99
  },
  {
    "codigo": "IF-7595",
    "distancia": "2.20 km",
    "entrada": "05/06/2026 19:30:28",
    "finalizou": "05/06/2026 20:12:49",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 95.98
  },
  {
    "codigo": "IF-9301",
    "distancia": "6.51 km",
    "entrada": "05/06/2026 19:31:39",
    "finalizou": "05/06/2026 20:25:34",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 332.98
  },
  {
    "codigo": "IF-2349",
    "distancia": "11.73 km",
    "entrada": "05/06/2026 20:04:57",
    "finalizou": "05/06/2026 21:09:23",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 11,
    "valorCliente": 115.99
  },
  {
    "codigo": "IF-1828",
    "distancia": "4.37 km",
    "entrada": "05/06/2026 20:05:01",
    "finalizou": "05/06/2026 20:56:30",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 99.98
  },
  {
    "codigo": "5555",
    "distancia": "5.87 km",
    "entrada": "05/06/2026 20:13:52",
    "finalizou": "05/06/2026 20:26:14",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 0
  },
  {
    "codigo": "IF-9732",
    "distancia": "3.18 km",
    "entrada": "05/06/2026 20:16:41",
    "finalizou": "05/06/2026 20:46:47",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 142.98
  },
  {
    "codigo": "IF-6975",
    "distancia": "11.79 km",
    "entrada": "05/06/2026 20:35:08",
    "finalizou": "05/06/2026 21:14:24",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 11,
    "valorCliente": 77.99
  },
  {
    "codigo": "IF-8319",
    "distancia": "3.90 km",
    "entrada": "05/06/2026 20:35:12",
    "finalizou": "05/06/2026 21:00:04",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 172.99
  },
  {
    "codigo": "IF-2120",
    "distancia": "4.54 km",
    "entrada": "05/06/2026 20:53:35",
    "finalizou": "05/06/2026 21:26:36",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 0
  },
  {
    "codigo": "IF-9037",
    "distancia": "1.08 km",
    "entrada": "05/06/2026 21:07:42",
    "finalizou": "05/06/2026 21:31:41",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 99.98
  },
  {
    "codigo": "IF-2120",
    "distancia": "4.54 km",
    "entrada": "05/06/2026 21:10:46",
    "finalizou": "05/06/2026 21:26:30",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 0
  },
  {
    "codigo": "IF-2236",
    "distancia": "1.08 km",
    "entrada": "05/06/2026 21:13:25",
    "finalizou": "05/06/2026 21:30:53",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 105.98
  },
  {
    "codigo": "IF-6811",
    "distancia": "3.10 km",
    "entrada": "05/06/2026 21:13:26",
    "finalizou": "05/06/2026 21:43:16",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 132.98
  },
  {
    "codigo": "IF-5772",
    "distancia": "1.52 km",
    "entrada": "05/06/2026 21:33:31",
    "finalizou": "05/06/2026 21:48:09",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 51.53
  },
  {
    "codigo": "IF-3328",
    "distancia": "1.04 km",
    "entrada": "05/06/2026 21:54:21",
    "finalizou": "05/06/2026 22:16:15",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-8103",
    "distancia": "2.31 km",
    "entrada": "05/06/2026 21:56:22",
    "finalizou": "05/06/2026 22:24:24",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 154.98
  },
  {
    "codigo": "IF-1847",
    "distancia": "10.06 km",
    "entrada": "05/06/2026 22:09:34",
    "finalizou": "05/06/2026 22:35:12",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 115.98
  },
  {
    "codigo": "IF-1178",
    "distancia": "7.14 km",
    "entrada": "05/06/2026 23:15:11",
    "finalizou": "05/06/2026 23:35:38",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 7,
    "valorCliente": 253.98
  },
  {
    "codigo": "5555",
    "distancia": "11.02 km",
    "entrada": "05/06/2026 23:34:26",
    "finalizou": "05/06/2026 23:36:51",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 11,
    "valorCliente": 0
  },
  {
    "codigo": "Não Consta",
    "distancia": "8.79 km",
    "entrada": "05/06/2026 23:40:30",
    "finalizou": "05/06/2026 23:41:37",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 0
  },
  {
    "codigo": "IF-7557",
    "distancia": "3.82 km",
    "entrada": "06/06/2026 18:29:41",
    "finalizou": "06/06/2026 19:16:14",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 59.23
  },
  {
    "codigo": "IF-9152",
    "distancia": "1.29 km",
    "entrada": "06/06/2026 18:30:43",
    "finalizou": "06/06/2026 19:29:27",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 86.98
  },
  {
    "codigo": "IF-5609",
    "distancia": "1.87 km",
    "entrada": "06/06/2026 18:32:21",
    "finalizou": "06/06/2026 19:35:11",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 105.98
  },
  {
    "codigo": "5555",
    "distancia": "10.43 km",
    "entrada": "06/06/2026 18:47:28",
    "finalizou": "06/06/2026 19:43:50",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 0
  },
  {
    "codigo": "IF-2537",
    "distancia": "0.34 km",
    "entrada": "06/06/2026 18:47:33",
    "finalizou": "06/06/2026 19:18:15",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 268.98
  },
  {
    "codigo": "IF-8218",
    "distancia": "1.66 km",
    "entrada": "06/06/2026 18:51:38",
    "finalizou": "06/06/2026 19:33:40",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 64.98
  },
  {
    "codigo": "IF-3337",
    "distancia": "0.56 km",
    "entrada": "06/06/2026 18:54:36",
    "finalizou": "06/06/2026 19:22:25",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 73.99
  },
  {
    "codigo": "IF-5441",
    "distancia": "1.85 km",
    "entrada": "06/06/2026 19:00:37",
    "finalizou": "06/06/2026 19:28:25",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 88.98
  },
  {
    "codigo": "IF-8036",
    "distancia": "4.30 km",
    "entrada": "06/06/2026 19:08:40",
    "finalizou": "06/06/2026 19:47:44",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 110.98
  },
  {
    "codigo": "IF-5410",
    "distancia": "3.35 km",
    "entrada": "06/06/2026 19:08:42",
    "finalizou": "06/06/2026 19:39:36",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 96.98
  },
  {
    "codigo": "IF-5409",
    "distancia": "2.02 km",
    "entrada": "06/06/2026 19:11:33",
    "finalizou": "06/06/2026 19:32:49",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 103.98
  },
  {
    "codigo": "IF-8677",
    "distancia": "0.90 km",
    "entrada": "06/06/2026 19:12:44",
    "finalizou": "06/06/2026 20:00:25",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 119.98
  },
  {
    "codigo": "IF-3928",
    "distancia": "2.68 km",
    "entrada": "06/06/2026 19:19:34",
    "finalizou": "06/06/2026 20:18:44",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 106.98
  },
  {
    "codigo": "IF-8458",
    "distancia": "0.57 km",
    "entrada": "06/06/2026 19:22:32",
    "finalizou": "06/06/2026 19:56:29",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 118.99
  },
  {
    "codigo": "IF-3309",
    "distancia": "4.82 km",
    "entrada": "06/06/2026 19:38:44",
    "finalizou": "06/06/2026 20:32:00",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 94.48
  },
  {
    "codigo": "IF-2039",
    "distancia": "1.56 km",
    "entrada": "06/06/2026 19:38:48",
    "finalizou": "06/06/2026 20:06:46",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 212.98
  },
  {
    "codigo": "IF-5600",
    "distancia": "4.84 km",
    "entrada": "06/06/2026 19:38:56",
    "finalizou": "06/06/2026 20:30:20",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 164.99
  },
  {
    "codigo": "IF-3550",
    "distancia": "10.38 km",
    "entrada": "06/06/2026 19:42:00",
    "finalizou": "06/06/2026 20:43:40",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 91.99
  },
  {
    "codigo": "IF-8903",
    "distancia": "3.77 km",
    "entrada": "06/06/2026 19:44:16",
    "finalizou": "06/06/2026 20:17:55",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 123.98
  },
  {
    "codigo": "IF-3922",
    "distancia": "5.40 km",
    "entrada": "06/06/2026 19:48:05",
    "finalizou": "06/06/2026 20:53:56",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 257.83
  },
  {
    "codigo": "IF-1170",
    "distancia": "0.40 km",
    "entrada": "06/06/2026 19:52:21",
    "finalizou": "06/06/2026 20:20:37",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 86.98
  },
  {
    "codigo": "IF-5601",
    "distancia": "2.07 km",
    "entrada": "06/06/2026 20:00:02",
    "finalizou": "06/06/2026 20:40:09",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 102.98
  },
  {
    "codigo": "IF-4595",
    "distancia": "1.46 km",
    "entrada": "06/06/2026 20:02:02",
    "finalizou": "06/06/2026 20:27:54",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 139.98
  },
  {
    "codigo": "IF-1092",
    "distancia": "1.54 km",
    "entrada": "06/06/2026 20:06:15",
    "finalizou": "06/06/2026 20:28:20",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-3944",
    "distancia": "1.50 km",
    "entrada": "06/06/2026 20:07:52",
    "finalizou": "06/06/2026 20:34:37",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 86.98
  },
  {
    "codigo": "IF-5308",
    "distancia": "1.65 km",
    "entrada": "06/06/2026 20:12:41",
    "finalizou": "06/06/2026 20:51:15",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 114.48
  },
  {
    "codigo": "IF-4615",
    "distancia": "1.89 km",
    "entrada": "06/06/2026 20:13:28",
    "finalizou": "06/06/2026 20:55:44",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 142.99
  },
  {
    "codigo": "IF-7277",
    "distancia": "3.15 km",
    "entrada": "06/06/2026 20:15:42",
    "finalizou": "06/06/2026 21:05:40",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 118.98
  },
  {
    "codigo": "IF-5845",
    "distancia": "3.29 km",
    "entrada": "06/06/2026 20:18:32",
    "finalizou": "06/06/2026 21:14:31",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 199.98
  },
  {
    "codigo": "IF-2395",
    "distancia": "1.18 km",
    "entrada": "06/06/2026 20:42:25",
    "finalizou": "06/06/2026 21:01:43",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 184.98
  },
  {
    "codigo": "IF-0425",
    "distancia": "1.25 km",
    "entrada": "06/06/2026 20:44:29",
    "finalizou": "06/06/2026 21:08:12",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 97.98
  },
  {
    "codigo": "IF-6497",
    "distancia": "3.90 km",
    "entrada": "06/06/2026 21:00:40",
    "finalizou": "06/06/2026 21:50:26",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 145.99
  },
  {
    "codigo": "IF-1810",
    "distancia": "5.92 km",
    "entrada": "06/06/2026 21:05:42",
    "finalizou": "06/06/2026 21:57:22",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 207.98
  },
  {
    "codigo": "IF-1537",
    "distancia": "1.12 km",
    "entrada": "06/06/2026 21:08:29",
    "finalizou": "06/06/2026 21:30:39",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 118.23
  },
  {
    "codigo": "IF-8536",
    "distancia": "5.14 km",
    "entrada": "06/06/2026 21:13:27",
    "finalizou": "06/06/2026 21:41:12",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 58.23
  },
  {
    "codigo": "IF-4303",
    "distancia": "3.21 km",
    "entrada": "06/06/2026 21:18:26",
    "finalizou": "06/06/2026 22:07:56",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 110.98
  },
  {
    "codigo": "IF-1575",
    "distancia": "4.66 km",
    "entrada": "06/06/2026 21:27:42",
    "finalizou": "06/06/2026 22:43:46",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 182.98
  },
  {
    "codigo": "IF-1125",
    "distancia": "1.35 km",
    "entrada": "06/06/2026 21:27:44",
    "finalizou": "06/06/2026 22:28:17",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 62.98
  },
  {
    "codigo": "IF-0794",
    "distancia": "2.38 km",
    "entrada": "06/06/2026 21:30:28",
    "finalizou": "06/06/2026 22:02:56",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 74.98
  },
  {
    "codigo": "IF-7027",
    "distancia": "5.07 km",
    "entrada": "06/06/2026 21:40:28",
    "finalizou": "06/06/2026 22:21:39",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 103.98
  },
  {
    "codigo": "IF-3922",
    "distancia": "5.40 km",
    "entrada": "06/06/2026 21:57:50",
    "finalizou": "06/06/2026 22:15:10",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 257.83
  },
  {
    "codigo": "IF-1845",
    "distancia": "0.95 km",
    "entrada": "06/06/2026 22:22:23",
    "finalizou": "06/06/2026 22:40:07",
    "entregador": "FERRO 06 - GUSTAVO PAULA FRAGOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 101.98
  },
  {
    "codigo": "IF-0842",
    "distancia": "2.37 km",
    "entrada": "06/06/2026 22:33:22",
    "finalizou": "06/06/2026 22:54:17",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 106.98
  },
  {
    "codigo": "IF-6943",
    "distancia": "3.29 km",
    "entrada": "06/06/2026 23:12:14",
    "finalizou": "06/06/2026 23:41:04",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 148.98
  },
  {
    "codigo": "IF-0559",
    "distancia": "4.04 km",
    "entrada": "06/06/2026 23:13:15",
    "finalizou": "06/06/2026 23:49:26",
    "entregador": "FERRO 03 - ALEX BRENO MUZI CARDOSO",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 66.98
  },
  {
    "codigo": "IF-4685",
    "distancia": "10.53 km",
    "entrada": "07/06/2026 18:16:23",
    "finalizou": "07/06/2026 19:26:04",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 197.99
  },
  {
    "codigo": "IF-5129",
    "distancia": "5.15 km",
    "entrada": "07/06/2026 18:16:25",
    "finalizou": "07/06/2026 19:42:11",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 65.98
  },
  {
    "codigo": "IF-7470",
    "distancia": "3.74 km",
    "entrada": "07/06/2026 18:21:28",
    "finalizou": "07/06/2026 18:57:51",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 101.98
  },
  {
    "codigo": "IF-1525",
    "distancia": "5.63 km",
    "entrada": "07/06/2026 18:28:38",
    "finalizou": "07/06/2026 19:12:50",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 159.98
  },
  {
    "codigo": "IF-8719",
    "distancia": "0.29 km",
    "entrada": "07/06/2026 18:34:47",
    "finalizou": "07/06/2026 18:45:52",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 173.98
  },
  {
    "codigo": "IF-2539",
    "distancia": "2.47 km",
    "entrada": "07/06/2026 18:42:26",
    "finalizou": "07/06/2026 19:16:05",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 101.98
  },
  {
    "codigo": "IF-9799",
    "distancia": "1.53 km",
    "entrada": "07/06/2026 18:43:37",
    "finalizou": "07/06/2026 19:23:50",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 72.98
  },
  {
    "codigo": "IF-8473",
    "distancia": "5.45 km",
    "entrada": "07/06/2026 18:49:36",
    "finalizou": "07/06/2026 19:35:12",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 105.98
  },
  {
    "codigo": "IF-4002",
    "distancia": "5.91 km",
    "entrada": "07/06/2026 18:56:12",
    "finalizou": "07/06/2026 20:28:00",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 109.98
  },
  {
    "codigo": "IF-6036",
    "distancia": "0.38 km",
    "entrada": "07/06/2026 18:58:18",
    "finalizou": "07/06/2026 20:01:51",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 132.98
  },
  {
    "codigo": "IF-3071",
    "distancia": "3.36 km",
    "entrada": "07/06/2026 18:58:20",
    "finalizou": "07/06/2026 19:41:17",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 56.29
  },
  {
    "codigo": "IF-3242",
    "distancia": "3.63 km",
    "entrada": "07/06/2026 19:00:18",
    "finalizou": "07/06/2026 20:45:49",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 99.99
  },
  {
    "codigo": "IF-1653",
    "distancia": "3.08 km",
    "entrada": "07/06/2026 19:00:25",
    "finalizou": "07/06/2026 20:10:16",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 147.98
  },
  {
    "codigo": "IF-8967",
    "distancia": "4.89 km",
    "entrada": "07/06/2026 19:03:51",
    "finalizou": "07/06/2026 20:33:01",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 110.98
  },
  {
    "codigo": "IF-7611",
    "distancia": "6.24 km",
    "entrada": "07/06/2026 19:10:34",
    "finalizou": "07/06/2026 20:24:55",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 164.98
  },
  {
    "codigo": "IF-8181",
    "distancia": "5.98 km",
    "entrada": "07/06/2026 19:10:40",
    "finalizou": "07/06/2026 20:35:28",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 170.23
  },
  {
    "codigo": "IF-5062",
    "distancia": "0.88 km",
    "entrada": "07/06/2026 19:13:36",
    "finalizou": "07/06/2026 20:09:05",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 132.98
  },
  {
    "codigo": "IF-8337",
    "distancia": "10.83 km",
    "entrada": "07/06/2026 19:26:37",
    "finalizou": "07/06/2026 20:59:58",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 10,
    "valorCliente": 193.98
  },
  {
    "codigo": "IF-8633",
    "distancia": "5.02 km",
    "entrada": "07/06/2026 20:08:32",
    "finalizou": "07/06/2026 21:39:56",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 122.98
  },
  {
    "codigo": "IF-0796",
    "distancia": "0.58 km",
    "entrada": "07/06/2026 20:09:27",
    "finalizou": "07/06/2026 20:39:20",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 151.98
  },
  {
    "codigo": "IF-8226",
    "distancia": "2.02 km",
    "entrada": "07/06/2026 20:11:42",
    "finalizou": "07/06/2026 21:11:43",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 67.98
  },
  {
    "codigo": "IF-1653",
    "distancia": "3.08 km",
    "entrada": "07/06/2026 20:14:47",
    "finalizou": "07/06/2026 21:36:20",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 147.98
  },
  {
    "codigo": "IF-5814",
    "distancia": "3.18 km",
    "entrada": "07/06/2026 20:15:31",
    "finalizou": "07/06/2026 21:19:56",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-5858",
    "distancia": "1.54 km",
    "entrada": "07/06/2026 20:17:39",
    "finalizou": "07/06/2026 20:52:36",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 65.89
  },
  {
    "codigo": "IF-1846",
    "distancia": "0.50 km",
    "entrada": "07/06/2026 20:17:42",
    "finalizou": "07/06/2026 21:05:51",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 103.98
  },
  {
    "codigo": "IF-3711",
    "distancia": "2.62 km",
    "entrada": "07/06/2026 20:28:31",
    "finalizou": "07/06/2026 21:10:22",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 341.98
  },
  {
    "codigo": "IF-9380",
    "distancia": "1.04 km",
    "entrada": "07/06/2026 20:33:28",
    "finalizou": "07/06/2026 21:04:04",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 134.98
  },
  {
    "codigo": "IF-7611",
    "distancia": "6.24 km",
    "entrada": "07/06/2026 20:37:39",
    "finalizou": "07/06/2026 21:23:04",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 164.98
  },
  {
    "codigo": "IF-6776",
    "distancia": "0.78 km",
    "entrada": "07/06/2026 20:43:34",
    "finalizou": "07/06/2026 21:33:34",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 198.98
  },
  {
    "codigo": "IF-0930",
    "distancia": "6.81 km",
    "entrada": "07/06/2026 20:52:30",
    "finalizou": "07/06/2026 21:57:04",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 6,
    "valorCliente": 88.98
  },
  {
    "codigo": "IF-5858",
    "distancia": "1.54 km",
    "entrada": "07/06/2026 20:54:36",
    "finalizou": "07/06/2026 21:13:48",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 65.89
  },
  {
    "codigo": "IF-3795",
    "distancia": "4.82 km",
    "entrada": "07/06/2026 20:58:40",
    "finalizou": "07/06/2026 21:45:15",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 91.98
  },
  {
    "codigo": "IF-3616",
    "distancia": "8.08 km",
    "entrada": "07/06/2026 21:05:23",
    "finalizou": "07/06/2026 22:14:18",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 95.98
  },
  {
    "codigo": "IF-4828",
    "distancia": "4.94 km",
    "entrada": "07/06/2026 21:06:30",
    "finalizou": "07/06/2026 22:14:30",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 51.53
  },
  {
    "codigo": "IF-3489",
    "distancia": "8.13 km",
    "entrada": "07/06/2026 21:08:26",
    "finalizou": "07/06/2026 22:05:24",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 8,
    "valorCliente": 107.98
  },
  {
    "codigo": "IF-9338",
    "distancia": "0.64 km",
    "entrada": "07/06/2026 21:08:29",
    "finalizou": "07/06/2026 21:46:09",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 94.98
  },
  {
    "codigo": "IF-9696",
    "distancia": "3.15 km",
    "entrada": "07/06/2026 21:09:22",
    "finalizou": "07/06/2026 22:04:04",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 281.99
  },
  {
    "codigo": "IF-5036",
    "distancia": "1.20 km",
    "entrada": "07/06/2026 21:15:23",
    "finalizou": "07/06/2026 22:00:03",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 104.98
  },
  {
    "codigo": "IF-1938",
    "distancia": "1.16 km",
    "entrada": "07/06/2026 21:19:26",
    "finalizou": "07/06/2026 21:53:46",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 142.98
  },
  {
    "codigo": "IF-8007",
    "distancia": "2.20 km",
    "entrada": "07/06/2026 21:21:21",
    "finalizou": "07/06/2026 21:57:15",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 96.98
  },
  {
    "codigo": "IF-0424",
    "distancia": "2.38 km",
    "entrada": "07/06/2026 21:23:23",
    "finalizou": "07/06/2026 22:08:50",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 106.98
  },
  {
    "codigo": "IF-6528",
    "distancia": "2.09 km",
    "entrada": "07/06/2026 21:59:28",
    "finalizou": "07/06/2026 22:12:32",
    "entregador": "FERRO 04 - MARCUS BRUNO DE SOUZA",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 102.99
  },
  {
    "codigo": "IF-2219",
    "distancia": "3.70 km",
    "entrada": "07/06/2026 22:09:20",
    "finalizou": "07/06/2026 22:54:11",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 70.98
  },
  {
    "codigo": "IF-6602",
    "distancia": "1.16 km",
    "entrada": "07/06/2026 22:11:22",
    "finalizou": "07/06/2026 22:44:11",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 111.98
  },
  {
    "codigo": "IF-1286",
    "distancia": "1.08 km",
    "entrada": "07/06/2026 22:17:18",
    "finalizou": "07/06/2026 22:32:08",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 76.98
  },
  {
    "codigo": "IF-7291",
    "distancia": "1.14 km",
    "entrada": "07/06/2026 22:31:17",
    "finalizou": "07/06/2026 22:55:32",
    "entregador": "FERRO 09 -FABIANO GOMES DE AMARANTE",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 157.98
  },
  {
    "codigo": "IF-4828",
    "distancia": "4.94 km",
    "entrada": "07/06/2026 22:47:43",
    "finalizou": "07/06/2026 22:56:53",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Cancelado",
    "valorEntregador": 4,
    "valorCliente": 51.53
  },
  {
    "codigo": "IF-1776",
    "distancia": "7.60 km",
    "entrada": "07/06/2026 22:52:12",
    "finalizou": "07/06/2026 23:11:48",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 7,
    "valorCliente": 75.98
  },
  {
    "codigo": "1653",
    "distancia": "3.14 km",
    "entrada": "07/06/2026 23:16:30",
    "finalizou": "07/06/2026 23:17:33",
    "entregador": "FERRO 02 - JONATAN SOUZA MENDES",
    "status": "Finalizado",
    "valorEntregador": 4,
    "valorCliente": 0
  },
  {
    "codigo": "Não Consta",
    "distancia": "5.10 km",
    "entrada": "07/06/2026 23:44:30",
    "finalizou": "07/06/2026 23:46:54",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 0
  },
  {
    "codigo": "IF-2994",
    "distancia": "5.45 km",
    "entrada": "08/06/2026 18:25:19",
    "finalizou": "08/06/2026 18:52:51",
    "entregador": "FERRO 07 - LUCAS ARAÚJO QUEIROZ",
    "status": "Finalizado",
    "valorEntregador": 5,
    "valorCliente": 96.98
  }
];

export const meta = {
  periodoInicio: "2026-03-16",
  periodoFim: "2026-06-23",
  totalDias: 100,
  totalEntregadores: 201,
  totalPedidosIfood: 401,
};
