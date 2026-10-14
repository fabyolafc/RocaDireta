# RoçaDireta

> Do produtor para quem compra.

Marketplace rural que conecta produtores a consumidores, restaurantes, mercados e
pequenos comércios, combinando oferta publicada pelo produtor e demanda publicada
pelo comprador, com negociação, pedidos, chat e assistência por IA.

Este repositório está na **Etapa 1 — Fundação**: estrutura de projeto, frontend,
backend e configuração de banco. Não há autenticação, catálogo, demandas, pedidos,
chat ou IA implementados ainda — veja `CLAUDE.md` para o roteiro completo.

## Stack

- **Frontend:** React, TypeScript (modo estrito), Vite, Tailwind CSS v4.
- **Backend:** Node.js, Express, TypeScript (modo estrito), Zod.
- **Banco de dados:** PostgreSQL com Prisma ORM (schema configurado; models e
  migrations chegam na Etapa 2).

## Estrutura do repositório

```text
rocaDireta/
├── apps/
│   ├── web/   → Frontend (React + Vite + Tailwind)
│   └── api/   → Backend (Express + TypeScript)
├── prisma/
│   └── schema.prisma   → datasource/generator (sem models ainda)
├── .env.example
├── .gitignore
├── package.json       → raiz do monorepo (npm workspaces)
└── README.md
```

## Pré-requisitos

- Node.js 20 LTS ou superior (testado com v22).
- npm 10 ou superior (vem com o Node).
- PostgreSQL 14+ para as próximas etapas (não é necessário para rodar a Etapa 1,
  exceto para validar o schema do Prisma).

## Configuração do ambiente

1. Copie o arquivo de variáveis de ambiente na raiz do projeto:

   ```bash
   cp .env.example .env
   ```

2. Ajuste os valores conforme o seu ambiente. Nesta etapa, apenas `NODE_ENV`,
   `PORT` e `WEB_ORIGIN` são utilizados pela API. As demais variáveis
   (`DATABASE_URL`, `JWT_SECRET`, IA, armazenamento, e-mail) serão exigidas em
   etapas futuras, conforme os recursos forem implementados.

3. Se for usar o app web separadamente, copie também `apps/web/.env.example`
   para `apps/web/.env` e ajuste `VITE_API_URL` se necessário.

## Instalação

Na raiz do projeto (instala as dependências de `apps/web` e `apps/api` via
npm workspaces):

```bash
npm install
```

## Executando em desenvolvimento

Em dois terminais separados, a partir da raiz do projeto:

```bash
npm run dev:api   # inicia a API em http://localhost:3333
npm run dev:web   # inicia o frontend em http://localhost:5173
```

Health check da API: `GET http://localhost:3333/health`.

## Build

```bash
npm run build:api
npm run build:web
```

## Banco de dados (Prisma)

O schema do Prisma (`prisma/schema.prisma`) está configurado apenas com
`datasource` e `generator`, sem models — isso será feito na Etapa 2. Os
comandos abaixo já estão disponíveis na raiz do projeto:

```bash
npm run db:validate   # valida a sintaxe do schema.prisma
npm run db:generate   # gera o Prisma Client
npm run db:migrate    # cria/aplica migrations (requer DATABASE_URL configurado)
npm run db:studio     # abre o Prisma Studio
```

`db:validate` e `db:generate` exigem que `DATABASE_URL` esteja definido no
`.env` da raiz (mesmo que apontando para um banco ainda não criado). `db:migrate`
exige um banco PostgreSQL acessível.

## Lint e verificação de tipos

```bash
npm run lint:web        # oxlint no frontend
npm run typecheck:api   # tsc --noEmit no backend
```

## Limitações conhecidas desta etapa

- Não há PostgreSQL configurado neste ambiente de desenvolvimento; `db:migrate`
  não foi executado e precisa ser rodado pelo responsável pelo banco.
- Não há autenticação, CRUD de produtos, demandas, pedidos, chat, avaliações,
  administração ou IA — escopo das próximas etapas.
- O endpoint `/health` é uma verificação simples de disponibilidade do
  processo (não verifica conexão com o banco, já que ainda não há banco
  configurado nesta etapa).

## Roadmap

Consulte `CLAUDE.md` para o roteiro completo de etapas (autenticação, perfis,
catálogo, demandas e ofertas, pedidos, chat, avaliações, administração, IA e
matching).
