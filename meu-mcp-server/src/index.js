
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";

import {
  calcularCompatibilidade,
  compatibilidadeSchema,
} from "./ferramentas.js";

const server = new McpServer({
  name: "rocadireta-mcp-server",
  version: "1.0.0",
});

server.registerTool(
  "calcular_compatibilidade",
  {
    title: "Calcular compatibilidade",
    description:
      "Compara uma oferta de produtor com uma demanda de comprador " +
      "do RoçaDireta. Avalia produto, distância, quantidade e preço. " +
      "Não cria pedidos nem modifica informações do marketplace.",
    inputSchema: compatibilidadeSchema.shape,
  },
  async (entrada) => {
    try {
      const resultado = calcularCompatibilidade(entrada);

      return {
        content: [
          {
            type: "text",
            text: JSON.stringify(resultado, null, 2),
          },
        ],
      };
    } catch {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: "Não foi possível calcular. Verifique os dados informados.",
          },
        ],
      };
    }
  }
);

const transport = new StdioServerTransport();

await server.connect(transport);

console.error("RoçaDireta MCP conectado via stdio.");
