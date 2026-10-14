# RoçaDireta — Web

Frontend do RoçaDireta: React + TypeScript (modo estrito) + Vite + Tailwind CSS v4.

Veja o `README.md` na raiz do repositório para instruções de instalação e
execução do monorepo completo (frontend + backend).

## Scripts

```bash
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # typecheck + build de produção
npm run lint     # oxlint
npm run preview  # pré-visualiza o build de produção
```

## Variáveis de ambiente

Copie `.env.example` para `.env` e ajuste `VITE_API_URL` se a API não estiver
em `http://localhost:3333`.
