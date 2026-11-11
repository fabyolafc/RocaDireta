# RoçaDireta MCP Server

Servidor MCP desenvolvido para o projeto RoçaDireta, um marketplace rural que conecta produtores e compradores.

## Objetivo

Disponibilizar uma ferramenta que calcula a compatibilidade entre ofertas de produtores e demandas de compradores, considerando produto, distância, quantidade e preço.

## Tecnologias utilizadas

- Node.js
- Model Context Protocol (MCP)
- MCP SDK
- Zod
- Node.js Test Runner

## Ferramenta disponível

### calcular_compatibilidade

Compara uma oferta com uma demanda e retorna:

- Pontuação de compatibilidade.
- Elegibilidade da oferta.
- Pontuação por critério.
- Observações sobre incompatibilidades.

### Critérios de pontuação

| Critério | Pontuação |
|---|---:|
| Produto | 40 pontos |
| Distância de até 30 km | 30 pontos |
| Quantidade | 20 pontos |
| Preço | 10 pontos |
| **Total** | **100 pontos** |

## Instalação

Entre na pasta do servidor:

```bash
cd meu-mcp-server
```

Instale as dependências:

```bash
npm install
```

## Executar o servidor

```bash
npm start
```

O servidor utiliza transporte STDIO para comunicação com clientes MCP.

## Executar os testes

```bash
npm test
```

Os testes verificam dados válidos, produtos diferentes, distância, quantidade, textos grandes, prompt injection e propriedades adicionais.

## Segurança

A ferramenta utiliza Zod para validar os parâmetros recebidos, limita os tamanhos dos textos e rejeita propriedades adicionais.

O servidor possui escopo limitado: não acessa diretamente o banco de dados e não realiza operações de criação, edição ou exclusão de registros.

## Documentação adicional

- `DECISAO-ESCOPO.md`
- `LOG-INJECTION-TEMPLATE.md`

## Projeto

RoçaDireta — Do produtor para quem compra.