
import { z } from "zod";

// Schema: define e valida os dados recebidos pelo MCP
export const compatibilidadeSchema = z.object({
  produtoOferta: z.string().trim().min(2).max(80),
  produtoDemanda: z.string().trim().min(2).max(80),

  quantidadeOferta: z.number().positive().max(1000000),
  quantidadeDemanda: z.number().positive().max(1000000),

  distanciaKm: z.number().min(0).max(1000),

  precoOferta: z.number().positive().max(100000),
  precoMaximo: z.number().positive().max(100000),
}).strict();

// Normaliza os nomes para comparar produtos
function normalizarProduto(produto) {
  return produto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, " ");
}

// Calcula a compatibilidade entre oferta e demanda
export function calcularCompatibilidade(entrada) {
  const dados = compatibilidadeSchema.parse(entrada);

  const produtoCompativel =
    normalizarProduto(dados.produtoOferta) ===
    normalizarProduto(dados.produtoDemanda);

  const distanciaCompativel = dados.distanciaKm <= 30;

  const quantidadeScore = Math.min(
    (dados.quantidadeOferta / dados.quantidadeDemanda) * 100,
    100
  );

  const precoCompativel =
    dados.precoOferta <= dados.precoMaximo;

  // Pesos definidos nas regras de negócio do RoçaDireta
  const criterios = {
    produto: produtoCompativel ? 40 : 0,
    distancia: distanciaCompativel ? 30 : 0,
    quantidade: quantidadeScore * 0.20,
    preco: precoCompativel ? 10 : 0,
  };

  const pontuacao = Object.values(criterios).reduce(
    (total, valor) => total + valor,
    0
  );

  const elegivel =
    produtoCompativel &&
    distanciaCompativel &&
    precoCompativel;

  const motivos = [];

  if (!produtoCompativel) {
    motivos.push("Produto diferente do solicitado.");
  }

  if (!distanciaCompativel) {
    motivos.push("Distância superior a 30 km.");
  }

  if (!precoCompativel) {
    motivos.push("Preço acima do limite do comprador.");
  }

  if (quantidadeScore < 100) {
    motivos.push("A oferta atende apenas parte da quantidade.");
  }

  return {
    pontuacao: Number(pontuacao.toFixed(2)),
    elegivel,
    criterios,
    observacao: motivos.length
      ? motivos.join(" ")
      : "Oferta compatível com os critérios definidos.",
  };
}
