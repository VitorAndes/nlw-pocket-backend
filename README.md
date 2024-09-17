# Planejador de Metas Semanais - Backend

## Descrição

Este é o backend do Planejador de Metas Semanais, um aplicativo para ajudar os usuários a definir, acompanhar e concluir suas metas semanais. O backend foi desenvolvido utilizando Fastify e Drizzle ORM, garantindo uma API rápida e eficiente para o gerenciamento de metas.

## Funcionalidades

- **Criação de Metas**: Endpoints para criar metas específicas para a semana.
- **Acompanhamento de Progresso**: Endpoints para atualizar e obter o status das metas.
- **Conclusão de Metas**: Endpoints para marcar metas como concluídas e consultar o histórico de metas concluídas.

## Tecnologias Utilizadas

- **Framework**: Fastify
- **ORM**: Drizzle ORM
- **Banco de Dados**: PostgreSQL
- **Validação**: Zod
- **Data**: Dayjs

## Dependências

### Prod

- @fastify/cors
- @paralleldrive/cuid2
- dayjs
- drizzle-orm
- fastify
- fastify-type-provider-zod
- postgres
- tsup
- zod

### Dev

- @biomejs/biome
- @types/node
- drizzle-kit
- tsx
- typescript

## Licença

Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
