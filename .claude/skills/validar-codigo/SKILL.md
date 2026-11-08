
---
name: validar-codigo
description: Revisa código do RoçaDireta em tarefas de validação, revisão de pull requests e análise de qualidade, segurança, arquitetura, regras de negócio e possíveis bugs. Use quando solicitado a revisar ou validar implementações.
allowed-tools:
  - Read
  - Grep
  - Glob
  - Bash(npm run lint:*)
  - Bash(npm run test:*)
  - Bash(npx prisma validate:*)
---

# Skill: Validar Código — RoçaDireta

## Objetivo

Realizar uma revisão técnica do código do RoçaDireta, identificando erros, riscos de segurança, problemas de arquitetura e descumprimento das regras de negócio.

A revisão deve ser criteriosa, objetiva e baseada no código realmente existente no repositório.

## Instruções de execução

1. Leia o `CLAUDE.md` da raiz do projeto antes de iniciar.
2. Entenda o contexto da funcionalidade que será analisada.
3. Inspecione os arquivos envolvidos e seus relacionamentos.
4. Compare a implementação com os padrões e regras definidos no projeto.
5. Identifique problemas reais e possíveis riscos, sem inventar falhas.
6. Consulte `reference.md` quando precisar dos critérios técnicos detalhados.
7. Execute verificações permitidas somente quando forem pertinentes e os scripts existirem.
8. Não altere, exclua ou crie arquivos durante uma revisão.
9. Não exponha valores de variáveis de ambiente, tokens, senhas ou outras informações sensíveis.
10. Se não houver evidências suficientes, informe que não foi possível confirmar o problema.

## Áreas de validação

- Qualidade, legibilidade e organização do código.
- React, TypeScript e componentes.
- APIs Node.js e Express.
- Validação de dados e tratamento de erros.
- Autenticação, autorização e segurança.
- Prisma, PostgreSQL e integridade dos dados.
- Regras de negócio do marketplace.
- Comunicação entre frontend e backend.
- Testes e possíveis regressões.
- Funcionalidades que utilizam Inteligência Artificial.

## Formato obrigatório do relatório

Apresente o resultado nas seguintes seções:

### 1. Resumo da revisão
Explique o que foi analisado e o resultado geral.

### 2. Problemas encontrados
Para cada problema, informe:
- Gravidade: crítica, alta, média ou baixa.
- Arquivo e linha, quando identificáveis.
- Descrição do problema.
- Evidência encontrada.
- Impacto para o sistema.
- Sugestão de correção.

### 3. Pontos de atenção
Registre riscos ou situações que precisam de investigação adicional.

### 4. Aspectos positivos
Destaque boas práticas encontradas na implementação.

### 5. Testes e verificações
Informe quais verificações foram executadas, seus resultados e quais não foram executadas.

### 6. Conclusão
Indique se o código está adequado, se precisa de ajustes ou se existem riscos que impedem sua aprovação.

## Regras importantes

- Não modifique o código automaticamente.
- Não considere uma funcionalidade incorreta apenas por utilizar uma abordagem diferente da sua preferência.
- Não classifique sugestões de melhoria como bugs.
- Não afirme que testes passaram sem executá-los.
- Não invente arquivos, linhas, funções ou resultados.
- Priorize problemas que possam afetar usuários, dados e segurança.
- Seja específico e apresente recomendações práticas.

## Exemplo de solicitação

`/validar-codigo Revise a autenticação do RoçaDireta e verifique possíveis falhas de segurança. Não altere nenhum arquivo.`
