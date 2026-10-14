# CLAUDE.md — RoçaDireta

> Documento mestre de contexto e regras de desenvolvimento para Claude Code.
> Projeto: **RoçaDireta — Do produtor para quem compra.**
> Tipo: marketplace rural B2C/B2B, mobile-first, com oferta, demanda reversa, pedidos, chat e assistência por IA.

---

## 1. Instruções prioritárias para Claude

Você é responsável por atuar como engenheiro de software sênior, arquiteto full-stack, especialista em UX/UI, segurança e qualidade de software no desenvolvimento do **RoçaDireta**.

### Regras obrigatórias de trabalho

1. **Inspecione o repositório antes de alterar qualquer arquivo.** Leia `README.md`, `package.json`, configurações, estrutura de pastas, migrations e código existente. Não presuma que o projeto está vazio.
2. **Preserve o que já funciona.** Não reescreva a aplicação inteira nem substitua tecnologias sem justificativa e autorização.
3. **Trabalhe em etapas pequenas e verificáveis.** Execute apenas a etapa solicitada. Se o usuário disser “continue”, avance somente para a próxima etapa planejada.
4. Antes de uma implementação ampla, apresente brevemente arquitetura, arquivos que serão afetados e decisões relevantes. Para uma alteração pequena e clara, vá direto à implementação.
5. Entregue código real e executável sempre que possível; não use pseudocódigo quando puder implementar a solução.
6. Ao criar ou modificar arquivos, informe o caminho e forneça o conteúdo completo quando isso for solicitado. Não deixe trechos essenciais como “TODO”, “implemente aqui” ou “restante omitido”.
7. Não afirme que testes, builds, migrations ou comandos foram executados se não tiver executado. Informe claramente o que foi verificado e o que ainda precisa ser executado.
8. Não invente APIs, credenciais, variáveis, serviços externos ou funcionalidades já implementadas. Se faltar informação essencial, faça uma pergunta objetiva; caso contrário, adote a opção mais simples e documente a suposição.
9. Prefira alterações focadas, legíveis e fáceis de revisar. Evite dependências novas quando a plataforma ou as bibliotecas já existentes resolvem o problema.
10. Ao concluir cada etapa, apresente: resumo, arquivos criados/alterados, comandos para executar, testes realizados e limitações pendentes.
11. Não exponha segredos, tokens, senhas, dados pessoais ou conteúdo de `.env` em logs, respostas, commits ou documentação.
12. Se o usuário pedir uma correção, investigue a causa antes de aplicar um contorno. Não esconda erros com `any`, `@ts-ignore`, casts indiscriminados ou desativação de regras.
13. Se houver conflito entre este documento e o código real do projeto, inspecione o contexto e explique o conflito antes de fazer uma mudança estrutural.
14. Não faça deploy, exclusão de dados, reset de banco, publicação, cobrança ou operação irreversível sem autorização explícita.
15. Use português brasileiro nas explicações e textos da interface, salvo solicitação diferente. Nomes de código, tipos, rotas e identificadores devem seguir convenções consistentes em inglês.

---

## 2. Visão e objetivo do produto

O **RoçaDireta** conecta produtores rurais a consumidores, restaurantes, mercados, mercearias e pequenos comércios. Seu slogan é:

> **Do produtor para quem compra.**

A plataforma não deve ser apenas um catálogo de produtos. Seu diferencial é combinar dois caminhos de negócio:

### Fluxo A — Oferta publicada pelo produtor

1. Produtor cadastra e publica um produto disponível.
2. Comprador pesquisa, filtra e consulta os detalhes.
3. Comprador conversa com o produtor.
4. As partes negociam e criam um pedido.
5. O pedido avança pelos estados permitidos.
6. Após a conclusão, as partes podem avaliar a experiência.

### Fluxo B — Demanda publicada pelo comprador

1. Comprador publica o que precisa, com quantidade, unidade, prazo, região e preço máximo opcional.
2. O sistema encontra produtores e produtos compatíveis.
3. Produtores enviam ofertas de quantidade, preço e mensagem.
4. Comprador compara as ofertas e escolhe uma.
5. As partes conversam e formalizam o pedido.

### Papel da inteligência artificial

A IA é uma camada assistiva para entender intenções, melhorar anúncios, encontrar oportunidades e resumir conversas. **Ela não substitui as regras de negócio, a autorização do servidor ou a confirmação humana de ações comerciais.**

O MVP deve provar que pessoas conseguem fazer negócios reais e recorrentes, não apenas demonstrar telas ou recursos de IA.

---

## 3. Público e princípios de UX

### Perfis de usuário

- **Produtor rural:** quer anunciar produção, responder oportunidades e encontrar compradores com o mínimo de esforço.
- **Consumidor:** quer encontrar produtos locais com preço, disponibilidade e confiança.
- **Restaurante ou comércio:** precisa de volume, regularidade, prazo e fornecedores confiáveis.
- **Administrador:** precisa moderar usuários, produtos, demandas, pedidos e avaliações.

### Princípios de experiência

- Mobile-first e responsivo, com atenção especial a celulares de entrada.
- Interface simples, acolhedora, profissional e acessível.
- Navegação previsível, textos curtos e formulários objetivos.
- Fluxos com poucos passos, estados vazios úteis e erros explicados em linguagem clara.
- Não depender de hover para ações essenciais.
- Não usar dados fictícios em produção. Dados de demonstração devem ser identificados claramente.
- Exibir unidades, moeda e datas de forma consistente (`pt-BR`, BRL).
- Sempre oferecer estados de carregamento, sucesso, erro e ausência de resultados.
- Formulários devem validar dados no cliente para usabilidade e no servidor para segurança.
- Considerar conexão instável e carregamento eficiente de imagens.
- Acessibilidade: semântica HTML, foco visível, labels, contraste adequado e operação por teclado.

---

## 4. Escopo funcional do MVP

Implemente os módulos abaixo gradualmente, sem tentar construir tudo de uma vez.

### 4.1 Fundação técnica
- Repositório organizado e instruções de desenvolvimento.
- Frontend, backend e configuração do banco.
- TypeScript e ferramentas de qualidade.
- Variáveis de ambiente documentadas em `.env.example`.
- Tratamento centralizado de erros e configuração de logs segura.
- Configuração mínima de testes e lint, compatível com a stack escolhida.

### 4.2 Autenticação e contas
- Cadastro, login, logout e recuperação/reset de senha.
- Perfil com nome, telefone, e-mail e localização.
- Papéis `PRODUCER`, `BUYER` e `ADMIN`.
- Hash seguro de senha; nunca armazenar senha em texto puro.
- Autorização no backend para cada recurso protegido.

### 4.3 Perfis de produtor e comprador
- Perfil do produtor com nome da propriedade, descrição e tipo de produção.
- Perfil do comprador com informações necessárias ao uso da plataforma.
- Exposição pública mínima dos dados pessoais.
- Permitir que o usuário altere apenas os próprios dados, salvo funções administrativas autorizadas.

### 4.4 Catálogo e produtos
- Categorias.
- Cadastro, edição, desativação e consulta de produtos.
- Nome, descrição, categoria, quantidade, unidade, preço, disponibilidade e opções de retirada/entrega.
- Suporte a imagens por um fluxo de upload seguro ou serviço explicitamente configurado.
- Busca, paginação, filtros e ordenação.
- Produto inativo não aparece na pesquisa pública.

### 4.5 Demandas e ofertas
- Comprador publica uma demanda com produto, quantidade, unidade, prazo, localização, frequência e preço máximo opcional.
- Demanda possui estados definidos e transições validadas no backend.
- Produtor envia interesse/oferta com quantidade, preço e mensagem.
- Demanda encerrada não aceita novas ofertas.
- Comprador visualiza e compara as ofertas recebidas.
- Evitar duplicidade de oferta indevida, conforme regra definida na implementação.

### 4.6 Pedidos
- Criar pedido a partir de produto e negociação.
- Registrar comprador, produtor, quantidade, preço unitário, total, método de entrega e status.
- Validar quantidades, preços e transições no servidor.
- Calcular valores no backend com precisão decimal adequada; não confiar no total enviado pelo frontend.
- Manter histórico/timeline de status.
- Estados inicialmente previstos: `PENDING`, `ACCEPTED`, `REJECTED`, `READY`, `COMPLETED`, `CANCELLED`.
- Documentar quem pode executar cada transição. Não permitir mudanças arbitrárias de status.

### 4.7 Chat interno
- Mensagens de texto associadas ao pedido/negociação.
- Histórico ordenado, indicador de leitura e polling no MVP se não houver necessidade imediata de WebSocket.
- Apenas participantes autorizados podem consultar ou enviar mensagens.
- Validar tamanho e conteúdo da mensagem.
- Nunca permitir acesso a conversas apenas alterando um ID na URL.
- Planejar evolução para WebSocket, anexos e notificações sem antecipar complexidade desnecessária.

### 4.8 Avaliações e favoritos
- Avaliação de 1 a 5 estrelas após pedido concluído.
- Um usuário não pode avaliar duas vezes a mesma transação no mesmo papel.
- Validar que avaliador e avaliado fazem parte do pedido.
- Favoritos de produtores pelo comprador.
- Evitar avaliações falsas ou acesso a avaliações privadas.

### 4.9 Administração
- Listagem e moderação de usuários, produtos, demandas, pedidos e avaliações.
- Rotas administrativas exigem papel `ADMIN` verificado no servidor.
- Registrar ações administrativas relevantes sem gravar dados sensíveis desnecessários.
- Aplicar paginação e filtros em listagens.

### 4.10 Inteligência artificial
Criar uma camada isolada de IA no backend, com funções conceituais:

- `parseBuyerIntent()`
- `parseProducerIntent()`
- `suggestListing()`
- `findRelevantDemands()`
- `summarizeConversation()`
- `explainMatch()`
- `chatAssistant()`

Requisitos:
- Provedor e modelo devem ser configuráveis por variáveis de ambiente.
- A chave da API fica exclusivamente no backend.
- Não enviar senha, token, dados pessoais desnecessários ou conteúdo de outros usuários.
- Validar a saída da IA com schemas antes de usá-la.
- Tratar saída do modelo como entrada não confiável.
- Não executar SQL arbitrário, comandos de sistema ou operações críticas a partir de saída de IA.
- Não publicar anúncios, enviar ofertas, alterar preço, aceitar/cancelar pedidos ou fechar compra sem confirmação explícita do usuário.
- Aplicar limites de uso, timeouts, tratamento de indisponibilidade e controle de custos.
- Se a integração ainda não estiver configurada, informar isso claramente e manter o restante do sistema funcional.
- Não afirmar que um resultado foi encontrado no banco sem realizar a consulta real.
- A IA não deve inventar preço, disponibilidade, distância ou informação sobre produtores.

### 4.11 Matching inicial
Começar com regras determinísticas e explicáveis. O documento de produto sugere esta ponderação inicial:

- Compatibilidade do produto: até 40 pontos.
- Proximidade: até 30 pontos.
- Quantidade suficiente: até 20 pontos.
- Preço dentro do limite: até 10 pontos.

Total máximo: 100 pontos.

Regras complementares:
- Definir e documentar como cada pontuação é calculada.
- Não inventar coordenadas ou distâncias. Se não houver localização confiável, não atribuir pontuação geográfica falsa.
- A ponderação é uma hipótese inicial e pode ser ajustada após testes com usuários.
- A IA pode explicar o resultado, mas não deve alterar silenciosamente a pontuação nem substituir as regras.

---

## 5. Stack técnica preferencial

Use esta stack como padrão **se o repositório não tiver decisões já consolidadas**:

### Frontend
- React
- TypeScript em modo estrito
- Vite
- Tailwind CSS
- React Router ou solução já presente no projeto
- Biblioteca de formulários e validação somente se agregar valor real
- Cliente HTTP isolado em uma camada de serviços

### Backend
- Node.js em versão LTS suportada pelo projeto
- Express
- TypeScript
- Zod para validação
- JWT para autenticação, com estratégia de expiração e renovação documentada
- bcrypt ou biblioteca segura equivalente para hash de senha
- Services para regras de negócio e repositories quando a separação melhorar a manutenção

### Persistência
- PostgreSQL
- Prisma ORM
- Migrations versionadas
- Seed apenas para desenvolvimento/testes, sem senhas reais
- Restrições, índices e relações no banco para proteger a integridade

### Organização sugerida
O monorepo abaixo é uma proposta inicial, não uma ordem para reorganizar um repositório existente sem necessidade:

```text
rocadireta/
├── apps/
│   ├── web/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   ├── pages/
│   │   │   ├── layouts/
│   │   │   ├── hooks/
│   │   │   ├── services/
│   │   │   ├── stores/
│   │   │   ├── types/
│   │   │   └── utils/
│   │   └── ...
│   └── api/
│       ├── src/
│       │   ├── routes/
│       │   ├── controllers/
│       │   ├── services/
│       │   ├── repositories/
│       │   ├── middlewares/
│       │   ├── schemas/
│       │   ├── ai/
│       │   ├── utils/
│       │   └── server.ts
│       └── ...
├── packages/
│   ├── shared/
│   └── config/
├── prisma/
│   ├── schema.prisma
│   └── seed.ts
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

A estrutura real pode variar. Evite abstrações e camadas vazias que não tragam benefício. Não crie um monorepo se o projeto existente tiver uma estrutura simples e funcional sem ele.

---

## 6. Modelo de dados de referência

Ajuste os nomes e campos ao padrão do projeto, preservando os requisitos funcionais. Todos os modelos devem ter tipos, relações, restrições e timestamps apropriados.

### User
- `id`
- `name`
- `email` (único, normalizado)
- `phone`
- `passwordHash`
- `role`: `PRODUCER`, `BUYER`, `ADMIN`
- `city`
- `state`
- `latitude` e `longitude` opcionais, com política clara de privacidade
- `createdAt`
- `updatedAt`

### ProducerProfile
- `id`
- `userId` (relação apropriada)
- `farmName`
- `description`
- `productionType`
- `createdAt`
- `updatedAt`

### Category
- `id`
- `name`
- `icon` opcional
- `active`
- timestamps

### Product
- `id`
- `producerId`
- `categoryId`
- `name`
- `description`
- `quantity`
- `unit`
- `price`
- `availableDate`
- `deliveryAvailable`
- `pickupAvailable`
- `status`
- timestamps

### ProductImage
- `id`
- `productId`
- `url` ou referência segura ao armazenamento
- `createdAt`

### Demand
- `id`
- `buyerId`
- `productName`
- `categoryId` opcional
- `quantity`
- `unit`
- `maxPrice` opcional
- `neededUntil`
- `frequency` opcional
- `deliveryCity`
- `deliveryState`
- `status`
- timestamps

### DemandInterest
- `id`
- `demandId`
- `producerId`
- `quantityOffered`
- `priceOffered`
- `message`
- `status`
- timestamps

### Order
- `id`
- `buyerId`
- `producerId`
- `productId` opcional se a origem for uma demanda sem produto de catálogo
- `quantity`
- `unitPrice`
- `totalPrice`
- `deliveryMethod`
- `status`
- timestamps

### Message
- `id`
- `senderId`
- `receiverId` quando necessário para o modelo
- `orderId`
- `content`
- `readAt` ou equivalente
- `createdAt`

### Review
- `id`
- `orderId`
- `reviewerId`
- `reviewedUserId`
- `rating` (inteiro entre 1 e 5)
- `comment` opcional
- `createdAt`

### Favorite
- `id`
- `buyerId`
- `producerId`
- `createdAt`

### Regras de modelagem
- Use `Decimal` para dinheiro, nunca `float`/`number` binário como fonte de verdade financeira no banco.
- Defina precisão e escala para valores monetários e quantidades.
- Use enums ou estados explícitos quando apropriado.
- Crie índices para filtros frequentes e relações consultadas.
- Adicione constraints/índices únicos para impedir duplicidades críticas.
- Defina política de exclusão (`Restrict`, `Cascade`, soft delete) deliberadamente; não use cascata indiscriminada.
- Decida e documente se `Product.quantity` representa estoque atual ou quantidade inicial.
- Use transações para operações que alterem múltiplos registros relacionados.
- Não armazene informações redundantes sem justificar a necessidade de preservar histórico.

---

## 7. API REST de referência

Mantenha consistência entre rotas, controllers, services, schemas e respostas. Use códigos HTTP apropriados, paginação e formato de erro consistente.

### Autenticação e usuário
- `POST /auth/register`
- `POST /auth/login`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`
- `GET /users/me`
- `PATCH /users/me`

### Produtos
- `GET /products`
- `POST /products`
- `GET /products/:id`
- `PATCH /products/:id`
- `DELETE /products/:id` (preferir desativação quando houver histórico relacionado)

### Demandas e ofertas
- `GET /demands`
- `POST /demands`
- `GET /demands/:id`
- `PATCH /demands/:id`
- `DELETE /demands/:id`
- `POST /demands/:id/interests`
- `GET /demands/:id/interests`
- `PATCH /interests/:id`

### Pedidos e chat
- `POST /orders`
- `GET /orders`
- `GET /orders/:id`
- `PATCH /orders/:id/status`
- `GET /orders/:id/messages`
- `POST /orders/:id/messages`

### Reputação e favoritos
- `POST /reviews`
- `GET /users/:id/reviews`
- `GET /favorites`
- `POST /favorites/:producerId`
- `DELETE /favorites/:producerId`

### Administração
- `GET /admin/users`
- `GET /admin/products`
- `GET /admin/demands`
- `GET /admin/orders`
- `GET /admin/reviews`

Estas rotas são uma referência funcional. Ajuste-as se o código existente exigir convenções diferentes. Não implemente endpoint sem autenticação/autorização apropriadas. Use paginação para listagens e filtros permitidos por uma lista explícita.

---

## 8. Segurança e privacidade

Segurança deve ser aplicada em todas as etapas, não deixada para o final.

- Nunca armazenar senhas em texto puro.
- Nunca incluir secrets em frontend, repositório, logs ou documentação.
- Usar `.env.example` com nomes e valores ilustrativos, sem credenciais reais.
- Validar todas as entradas no backend com schemas.
- Aplicar autenticação e autorização no servidor, com princípio do menor privilégio.
- Proteger endpoints de autenticação e operações sensíveis com rate limiting apropriado.
- Definir CORS explicitamente para os ambientes necessários.
- Aplicar headers de segurança e tratamento centralizado de erros.
- Evitar SQL injection usando Prisma de forma segura; não montar consultas dinâmicas inseguras.
- Evitar XSS: tratar conteúdo de usuários como não confiável e não renderizar HTML arbitrário.
- Limitar tamanho de requests, mensagens e uploads.
- Verificar tipo real, tamanho e autorização de uploads; não confiar apenas na extensão.
- Não expor e-mail, telefone, coordenadas exatas ou dados de terceiros sem necessidade e consentimento.
- Nunca confiar no papel, preço, total, status, proprietário ou identidade enviados pelo cliente sem validação.
- Validar acesso a cada pedido, conversa, demanda e recurso por ID para impedir IDOR/BOLA.
- Usar mensagens de erro que não revelem detalhes internos.
- Registrar eventos relevantes sem registrar senhas, tokens, conteúdo sensível ou dados desnecessários.
- Definir política de retenção, exportação e exclusão de dados e documentá-la.
- Implementar termos de uso e política de privacidade antes do lançamento público.
- Tratar LGPD como requisito de produto e consultar orientação jurídica especializada quando necessário; não afirmar conformidade legal apenas por ter implementado controles técnicos.

---

## 9. Regras de negócio essenciais

1. Apenas `PRODUCER` pode criar e gerenciar seus produtos.
2. Apenas `BUYER` pode publicar demandas de compra.
3. Usuários só alteram seus próprios dados, salvo administradores autorizados.
4. Produto inativo não aparece no catálogo público.
5. Demanda encerrada não recebe novas ofertas.
6. Produtor não pode responder à própria demanda nem acessar ofertas privadas sem autorização.
7. Somente os participantes autorizados podem ver uma negociação e seu chat.
8. Pedidos devem ter comprador e produtor coerentes com a origem da negociação.
9. Valores totais são calculados no backend usando decimal.
10. Mudanças de status obedecem a uma máquina de estados explícita.
11. Avaliações só são permitidas após conclusão e por participantes do pedido.
12. Um usuário não pode duplicar avaliação para a mesma transação.
13. Todas as verificações críticas devem ser aplicadas no backend e, quando possível, reforçadas pelo banco.
14. Listagens devem ser paginadas e não retornar dados privados por padrão.
15. A IA apenas sugere; ações comerciais críticas exigem confirmação explícita.
16. Operações multi-registro relevantes devem usar transações.
17. Concorrência em estoque, ofertas e pedidos deve ser considerada para evitar venda acima da disponibilidade.
18. Se o sistema não puder confirmar disponibilidade ou distância, deve informar a incerteza, não inventar um resultado.

---

## 10. Matching de ofertas e demandas

Implemente primeiro uma versão simples, determinística e testável.

### Pontuação sugerida

| Critério | Pontuação máxima |
|---|---:|
| Produto/categoria compatível | 40 |
| Proximidade geográfica | 30 |
| Quantidade disponível suficiente | 20 |
| Preço dentro do limite da demanda | 10 |
| **Total** | **100** |

### Requisitos

- Definir os critérios exatos em função pura e coberta por testes.
- Não considerar dois produtos compatíveis apenas por similaridade textual sem regra explícita.
- Não presumir que preço ausente está dentro do limite.
- Não inferir distância se não houver coordenadas confiáveis.
- Exibir, quando possível, quais critérios contribuíram para a recomendação.
- Não apresentar pontuação como garantia de qualidade ou disponibilidade.
- IA pode gerar uma explicação textual a partir dos dados reais do matching, sem alterar a pontuação.

---

## 11. Padrões de implementação

### TypeScript
- Ativar `strict` e tratar tipos corretamente.
- Evitar `any`; preferir tipos explícitos, `unknown` com narrowing ou inferência segura.
- Não usar `@ts-ignore` como solução permanente.
- Compartilhar tipos entre frontend/backend somente quando isso reduzir duplicação sem acoplar camadas indevidamente.

### Arquitetura
- Rotas definem endpoints e conectam middlewares/controllers.
- Controllers lidam com HTTP e delegam regras de negócio.
- Services concentram regras de negócio.
- Repositories isolam persistência quando trouxerem benefício real.
- Schemas validam payloads, query params e parâmetros de rota.
- Middlewares cuidam de autenticação, autorização, rate limiting e erros transversais.
- Evitar lógica de negócio dentro de componentes React, rotas Express ou componentes de apresentação.
- Não criar interfaces, classes ou camadas apenas por formalidade.

### API e erros
- Padronizar respostas e erros.
- Distinguir erro de validação, autenticação, autorização, recurso inexistente e falha inesperada.
- Não retornar stack trace ao cliente em produção.
- Paginar coleções e definir limites máximos.
- Validar ordenação e filtros contra campos permitidos.

### Frontend
- Componentes pequenos com responsabilidades claras.
- Separar acesso à API da apresentação.
- Exibir feedback durante ações assíncronas.
- Tratar expiração de sessão sem loops de redirecionamento.
- Evitar duplicar a mesma regra de negócio em várias telas.
- Não confiar em esconder botões como mecanismo de autorização.
- Manter consistência visual, responsividade e acessibilidade.

### Banco de dados
- Migrations versionadas e revisáveis.
- Não editar migrations já aplicadas em ambientes compartilhados; criar migration corretiva.
- Não executar `migrate reset`, apagar banco ou limpar tabelas sem autorização explícita.
- Seed deve ser idempotente sempre que viável e limitado a desenvolvimento/testes.
- Criar índices com base em consultas reais e necessidades conhecidas.

### Testes e qualidade
- Criar testes unitários para regras críticas: autorização, transições de status, cálculo de preço, matching e avaliações.
- Criar testes de integração para endpoints e persistência quando a infraestrutura permitir.
- Testar cenários negativos, não apenas sucesso.
- Antes de concluir uma etapa, executar os testes/lint/build disponíveis e relatar os resultados reais.
- Se comandos não puderem ser executados por falta de banco, credenciais ou dependências, explicar a limitação e fornecer o comando necessário.

---

## 12. Variáveis de ambiente

Documentar as variáveis necessárias em `.env.example`. Os nomes finais devem refletir a implementação real. Como referência:

```dotenv
NODE_ENV=development
PORT=3333
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/rocadireta
JWT_SECRET=replace-with-a-long-random-secret
JWT_EXPIRES_IN=15m
WEB_ORIGIN=http://localhost:5173

# Configure apenas se recuperação de senha por e-mail estiver implementada
SMTP_HOST=
SMTP_PORT=
SMTP_USER=
SMTP_PASSWORD=
MAIL_FROM=

# Configure apenas se houver integração de IA
AI_PROVIDER=
AI_MODEL=
AI_API_KEY=
AI_TIMEOUT_MS=15000

# Configure apenas se houver armazenamento de imagens
STORAGE_PROVIDER=
STORAGE_BUCKET=
STORAGE_ENDPOINT=
STORAGE_ACCESS_KEY=
STORAGE_SECRET_KEY=
```

Regras:
- `.env.example` não deve conter credenciais reais.
- Nunca usar `VITE_` para segredos; variáveis expostas ao Vite podem chegar ao navegador.
- Validar variáveis obrigatórias na inicialização e falhar com mensagem clara, sem imprimir o valor do segredo.
- Não exigir variáveis de serviços opcionais quando o recurso estiver desativado.

---

## 13. Roadmap e ordem de implementação

Avance uma etapa por vez. Confirme o estado real do repositório antes de escolher o próximo passo.

### Etapa 1 — Fundação
- Inspecionar o repositório.
- Definir arquitetura e estrutura real.
- Configurar TypeScript, frontend, backend e scripts necessários.
- Configurar Tailwind conforme a versão escolhida.
- Configurar Prisma e PostgreSQL sem executar operações destrutivas.
- Criar `.env.example`, `.gitignore` e README.
- Criar health check simples da API.
- Verificar instalação, lint, testes e build possíveis.

### Etapa 2 — Banco de dados
- Criar schema Prisma com relações, enums, constraints e índices.
- Validar schema.
- Criar migration inicial somente quando houver configuração segura do banco.
- Implementar seed de desenvolvimento se útil.
- Documentar como executar migrations.

### Etapa 3 — Autenticação
- Cadastro e login.
- Hash de senha.
- JWT e expiração.
- Middleware de autenticação e autorização por papel.
- Testes de validação e acesso negado.
- Recuperação de senha somente com fluxo seguro implementado.

### Etapa 4 — Usuários e perfis
- Perfil do usuário.
- Perfil do produtor.
- Edição segura dos próprios dados.
- Exposição pública mínima.

### Etapa 5 — Categorias e produtos
- CRUD de produtos.
- Categorias.
- Regras de propriedade e status.
- Upload seguro ou integração configurada.
- Testes.

### Etapa 6 — Busca e filtros
- Busca pública de produtos ativos.
- Filtros, ordenação e paginação.
- Consultas eficientes e estados de interface.

### Etapa 7 — Demandas
- CRUD de demandas.
- Estados e autorização.
- Listagem pública/privada conforme regras definidas.

### Etapa 8 — Ofertas/interesses
- Produtores respondem às demandas.
- Comparação e gestão de ofertas.
- Controle de duplicidade e encerramento.

### Etapa 9 — Pedidos
- Criação a partir de negociação válida.
- Cálculo de valores no servidor.
- Máquina de estados e timeline.
- Proteção contra concorrência.

### Etapa 10 — Chat
- Histórico e envio de mensagens.
- Autorização dos participantes.
- Lidos/não lidos.
- Polling inicialmente, se adequado.

### Etapa 11 — Avaliações e favoritos
- Avaliações verificadas após conclusão.
- Favoritos.
- Restrições contra duplicidade.

### Etapa 12 — IA
- Serviço isolado.
- Parser de intenção.
- Assistência para anúncios.
- Busca de demandas compatíveis.
- Explicação de matching.
- Resumo e assistência de conversa.
- Limites, validação e confirmação humana.

### Etapa 13 — Administração
- Painéis de moderação.
- Permissões de administrador.
- Paginação, filtros e logs de auditoria relevantes.

### Etapa 14 — Qualidade e lançamento piloto
- Testes de integração e fluxo ponta a ponta.
- Segurança, responsividade e acessibilidade.
- Observabilidade e limites de uso.
- Documentação de deploy e backup.
- Piloto regional com usuários reais.
- Medição do funil: anúncio/demanda → conversa → pedido → conclusão → recompra.

**Não implemente todas as etapas em uma única resposta.** Ao receber “continue”, avance apenas uma etapa, após conferir o estado do projeto.

---

## 14. Comandos e documentação

- Verifique os scripts existentes antes de sugerir comandos.
- Informe se os comandos devem ser executados na raiz ou dentro de uma aplicação.
- Prefira comandos reproduzíveis e compatíveis com o sistema operacional do usuário.
- Documente requisitos de versão do Node, gerenciador de pacotes e PostgreSQL.
- Inclua passos para configurar ambiente, instalar dependências, iniciar serviços, executar migrations, seed, testes e builds.
- Não suponha que Docker esteja instalado; ofereça-o apenas se fizer sentido ou se o projeto já o utilizar.
- Não inclua segredos ou dados reais nos exemplos.
- Se houver scripts diferentes para Windows e Unix, documente as diferenças necessárias.

---

## 15. Critérios de aceite por etapa

Uma etapa só deve ser considerada concluída quando:

1. O escopo da etapa estiver implementado ou as limitações estiverem explicitamente documentadas.
2. O código for coerente com a arquitetura real do repositório.
3. Não houver segredos versionados.
4. As validações críticas estiverem no servidor.
5. Os testes disponíveis tiverem sido executados ou a impossibilidade estiver explicada.
6. Lint e build tiverem sido verificados quando configurados.
7. A documentação de uso tiver sido atualizada.
8. O usuário souber exatamente como executar e validar a entrega.
9. Não houver operações destrutivas ou deploy realizados sem autorização.

---

## 16. Formato esperado das respostas de Claude

Ao implementar uma etapa, responda em português brasileiro com esta estrutura:

1. **Objetivo da etapa**
2. **O que foi encontrado no repositório**
3. **Decisões técnicas**
4. **Arquivos criados/alterados**
5. **Implementação**
6. **Comandos para instalar/executar**
7. **Testes e verificações** — somente resultados realmente observados
8. **Pendências e próximo passo**

Evite repetir todo este documento em cada resposta. Consulte-o como contexto permanente e foque no trabalho solicitado.

---

## 17. Prompt inicial para começar o desenvolvimento

Use este comando como primeira solicitação ao Claude Code após adicionar este arquivo ao repositório:

> Leia integralmente o `CLAUDE.md` e inspecione o repositório atual antes de editar qualquer arquivo. Comece pela **Etapa 1 — Fundação** do RoçaDireta. Primeiro apresente um diagnóstico conciso da estrutura existente, a arquitetura recomendada para este repositório, os arquivos que pretende criar ou alterar e os comandos que pretende executar. Em seguida, implemente somente a Etapa 1, sem avançar para autenticação, catálogo, demandas, pedidos, chat ou IA. Preserve o que já funciona, não execute comandos destrutivos, não invente integrações e não afirme que verificações foram executadas sem executá-las. Ao terminar, informe os arquivos alterados, comandos de execução, testes realmente realizados e pendências.

---

## 18. Definição de sucesso do RoçaDireta

O MVP será considerado validado quando usuários reais conseguirem completar o ciclo:

**Publicar oferta ou demanda → encontrar compatibilidade → conversar → negociar → criar pedido → concluir → avaliar → comprar/vender novamente.**

Métricas prioritárias:
- produtores e compradores ativos;
- produtos publicados com disponibilidade real;
- demandas que recebem ao menos uma oferta;
- tempo até a primeira conversa;
- pedidos criados e concluídos;
- taxa de conversão de demanda em pedido;
- taxa de recompra;
- problemas e abandono em cada etapa.

O foco deve permanecer em facilitar negócios reais entre produtores e compradores. Adicione complexidade somente quando houver necessidade comprovada.
