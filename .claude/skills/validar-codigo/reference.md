
# Referência técnica — Validação do RoçaDireta

Este documento complementa as instruções de `SKILL.md`.

Antes de aplicar qualquer critério, considere o `CLAUDE.md` e a implementação real do projeto como referências principais.

## 1. Frontend — React e TypeScript

Verificar:

- Componentes com responsabilidades bem definidas.
- Uso adequado de props, estado e hooks.
- Tipagem correta, evitando `any` desnecessário.
- Tratamento de carregamento, sucesso, erro e ausência de dados.
- Formulários com validação e mensagens claras.
- Interfaces responsivas e acessíveis.
- Consumo correto das APIs.
- Tratamento de erros de requisição.
- Proteção de rotas e controle de acesso na interface.
- Ausência de exposição de informações sensíveis.

A interface não deve ser considerada segura apenas porque esconde botões ou páginas. As permissões precisam ser verificadas também no backend.

## 2. Backend — Node.js e Express

Verificar:

- Separação adequada entre rotas, controllers, services e acesso a dados.
- Validação dos dados recebidos.
- Tratamento consistente de exceções.
- Respostas HTTP coerentes.
- Autenticação e autorização nas rotas protegidas.
- Verificação de propriedade dos recursos acessados.
- Proteção contra acesso indevido a dados de outros usuários.
- Ausência de regras de negócio importantes implementadas somente no frontend.

## 3. Banco de dados — Prisma e PostgreSQL

Verificar:

- Relacionamentos e integridade referencial.
- Campos obrigatórios e opcionais.
- Tipos de dados adequados.
- Uso de Decimal para valores monetários.
- Restrições e índices relevantes.
- Prevenção de registros duplicados quando necessário.
- Operações relacionadas que precisem de transação.
- Consultas que possam retornar dados de usuários não autorizados.

## 4. Segurança e privacidade

Verificar:

- Senhas armazenadas com hash seguro.
- JWT validado corretamente.
- Segredos mantidos em variáveis de ambiente.
- Validação e sanitização de entradas.
- Controle de acesso por perfil.
- Proteção contra IDOR/BOLA.
- Configuração adequada de CORS.
- Proteção contra exposição de dados pessoais.
- Cuidados com upload de imagens e arquivos.
- Aplicação dos princípios da LGPD.

Nunca exibir senhas, tokens ou valores secretos no relatório.

## 5. Regras de negócio do marketplace

Considerar os perfis:

- Produtor: cadastra produtos, administra ofertas e acompanha pedidos.
- Comprador: pesquisa produtos, registra demandas e realiza pedidos.
- Administrador: administra e acompanha o funcionamento da plataforma.

Verificar:

- Um usuário não deve executar ações incompatíveis com seu perfil.
- Produtos e ofertas devem pertencer ao produtor responsável.
- Demandas devem estar associadas ao comprador correto.
- Pedidos devem respeitar os estados e transições definidos no projeto.
- Conversas devem ser acessíveis somente aos participantes autorizados.
- Avaliações devem respeitar as regras de elegibilidade.
- Favoritos devem evitar associações duplicadas, quando aplicável.
- Operações de cancelamento e atualização devem preservar a integridade dos dados.

Não presuma regras que não estejam documentadas. Quando houver dúvida, registre como ponto de atenção.

## 6. Sistema de correspondência entre oferta e demanda

O RoçaDireta utiliza uma pontuação de correspondência determinística como referência:

| Critério | Peso |
|---|---:|
| Compatibilidade do produto | 40 |
| Distância | Até 30 |
| Quantidade | 20 |
| Preço | 10 |

Verificar:

- Compatibilidade entre produto ofertado e demandado.
- Respeito ao limite de distância definido no projeto.
- Compatibilidade de quantidade.
- Comparação coerente de preços.
- Cálculo consistente da pontuação.
- Ausência de resultados que violem critérios obrigatórios.

Não invente fórmulas para critérios cuja implementação ainda não esteja definida.

## 7. Inteligência Artificial

Verificar:

- Chaves e credenciais de IA somente no backend.
- Entradas da IA validadas.
- Saídas da IA tratadas como dados não confiáveis.
- Ações importantes sujeitas à confirmação do usuário.
- Ausência de execução automática de pedidos ou alterações críticas.
- Tratamento de falhas, indisponibilidade e respostas inválidas.
- Clareza quando uma resposta for gerada por IA.

A IA deve auxiliar o usuário, não substituir a autorização e as regras determinísticas do sistema.

## 8. Testes e confiabilidade

Verificar:

- Cobertura dos fluxos principais.
- Casos de sucesso e de erro.
- Validação de permissões.
- Casos de dados inválidos.
- Possíveis regressões.
- Testes de integração entre frontend e backend, quando existentes.

Não considere um teste executado apenas porque existe um arquivo de teste.

## 9. Classificação da gravidade

- **Crítica:** risco imediato de comprometimento de dados, segurança ou funcionamento essencial.
- **Alta:** falha importante que compromete uma funcionalidade ou permite acesso indevido.
- **Média:** comportamento incorreto ou risco relevante, mas com impacto limitado.
- **Baixa:** problema localizado de qualidade, manutenção ou usabilidade.

Diferencie sempre falhas confirmadas de riscos que precisam de investigação.
