
# Skill — Validar Código

Skill personalizada para revisão técnica do projeto RoçaDireta.

## Objetivo

Padronizar a análise de código, identificando possíveis bugs, problemas de segurança, falhas de arquitetura e inconsistências nas regras de negócio.

## Estrutura

- `SKILL.md`: instruções principais, metadados e fluxo de execução.
- `reference.md`: critérios técnicos detalhados para análise do projeto.

## Tecnologias consideradas

- React e TypeScript
- Node.js e Express
- PostgreSQL e Prisma
- JWT e Zod
- Integrações com Inteligência Artificial

## Como utilizar

A skill está disponível no projeto em `.claude/skills/validar-codigo/`.

No Claude Code, execute:

`/validar-codigo`

Também é possível direcionar a análise:

`/validar-codigo Revise a implementação de autenticação do RoçaDireta.`

## Comportamento

A skill realiza revisões sem modificar arquivos automaticamente. Os resultados são apresentados em um relatório com gravidade, evidências, impactos e sugestões de melhoria.
