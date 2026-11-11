# DECISAO-ESCOPO.md

## 1. Identificação do projeto

- **Projeto:** RoçaDireta
- **Tipo:** Marketplace rural que conecta produtores e compradores.
- **Servidor MCP:** meu-mcp-server
- **Objetivo:** Disponibilizar uma ferramenta para calcular a compatibilidade entre ofertas de produtores e demandas de compradores.

## 2. Escopo de acesso

O servidor MCP recebe informações por parâmetros enviados à ferramenta, sem conexão direta com o banco de dados do RoçaDireta.

Os dados utilizados são:
- Nome do produto ofertado.
- Nome do produto solicitado.
- Quantidade disponível.
- Quantidade desejada.
- Distância em quilômetros.
- Preço da oferta.
- Preço máximo aceito pelo comprador.

O servidor é executado localmente durante o desenvolvimento.

## 3. Ferramenta implementada

### calcular_compatibilidade

**Objetivo:** Comparar uma oferta de produtor com uma demanda de comprador.

**Critérios de avaliação:**
- Produto compatível: 40 pontos.
- Distância de até 30 km: 30 pontos.
- Quantidade disponível: até 20 pontos.
- Preço dentro do limite do comprador: 10 pontos.

**Retorno:** Pontuação, elegibilidade, critérios avaliados e observações sobre a compatibilidade.

## 4. Limites e permissões

O servidor pode:
- Receber e validar dados.
- Comparar produtos.
- Calcular pontuações.
- Retornar resultados da análise.

O servidor não pode:
- Criar, editar ou excluir ofertas.
- Criar pedidos ou realizar compras.
- Modificar informações do banco de dados.
- Executar comandos do terminal.
- Acessar arquivos pessoais ou dados sensíveis.

## 5. Segurança e validação

Foi utilizada a biblioteca Zod para validar os dados recebidos.

As validações incluem:
- Limite de 80 caracteres para nomes dos produtos.
- Quantidades e preços positivos.
- Limites máximos para valores numéricos.
- Rejeição de propriedades adicionais.
- Tratamento de textos recebidos como dados, não como instruções.

Também foram criados testes automatizados utilizando o módulo `node:test` do Node.js.

## 6. Decisão de escopo

A ferramenta foi desenvolvida com escopo limitado e execução determinística. Ela apenas calcula a compatibilidade entre oferta e demanda, sem realizar ações externas ou modificar dados do marketplace.

Essa decisão reduz os riscos de operações indevidas e mantém o controle das ações dentro da aplicação principal.