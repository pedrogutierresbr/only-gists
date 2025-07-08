# CLAUDE.md

Este arquivo fornece orientações para o Claude Code (claude.ai/code) ao trabalhar com código neste repositório.

## Comandos de Desenvolvimento

### Desenvolvimento Core
```bash
# Instalar dependências
yarn install

# Servidor de desenvolvimento
yarn dev

# Build para produção
yarn build

# Visualizar build de produção
yarn preview
```

### Operações de Banco de Dados
```bash
# Iniciar Supabase localmente
supabase start

# Parar Supabase localmente
supabase stop

# Gerar tipos TypeScript do schema do banco de dados
yarn db:generate-types

# Executar após qualquer mudança nas migrations do banco
# Tipos são gerados em ./libs/supabase/schema.ts
```

### Qualidade de Código
```bash
# Executar linter
eslint .

# Formatar código
prettier --write .
```

## Configuração do Ambiente

Variáveis de ambiente necessárias no `.env`:
```bash
NODE_ENV=local
SITE_URL=http://localhost:3000
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_KEY={sua_chave_supabase}
GITHUB_CLIENT_ID={sua_chave_github}
GITHUB_SECRET={seu_secret_github}
```

## Visão Geral da Arquitetura

Esta é uma **aplicação Nuxt 3** com **arquitetura modular baseada em features**. Cada módulo é independente e segue uma estrutura consistente:

### Padrão de Estrutura dos Módulos
```
modules/[feature]/
├── components/     # Componentes de UI reutilizáveis
├── screens/       # Componentes de página completa
├── composables/   # Vue composables para gerenciamento de estado
├── services/      # Camada de serviços da API
├── entities/      # Interfaces TypeScript
└── adapters/      # Camada de transformação de dados
```

### Módulos Principais
- **`auth/`** - Autenticação com GitHub OAuth via Supabase
- **`users/`** - Gerenciamento de perfil de usuário e perfis públicos
- **`gists/`** - Gerenciamento e exibição de snippets de código
- **`landing-page/`** - Marketing e página inicial
- **`reports/`** - Dashboard e analytics
- **`payments/`** - Interface de processamento de pagamentos

### Componentes Globais da Arquitetura
- **`composables/useServices/`** - Registro central de serviços para módulos
- **`composables/useLogger/`** - Logging com consciência de ambiente
- **`composables/useMarkdown/`** - Utilitários de processamento de Markdown
- **`pages/`** - Camada de roteamento que importa screens dos módulos
- **`layouts/`** - Layouts de página (default, admin, checkout)

## Stack Tecnológico

- **Framework**: Nuxt 3 com TypeScript
- **Banco de Dados**: Supabase (PostgreSQL)
- **Autenticação**: Supabase Auth com GitHub OAuth
- **Estilização**: Tailwind CSS + PrimeVue (sem estilo)
- **Gerenciamento de Estado**: Vue 3 Composition API com composables
- **Gerenciador de Pacotes**: Yarn

## Padrões de Desenvolvimento Principais

### Camada de Serviços
Todos os módulos usam um padrão de camada de serviços com factory functions:
```typescript
// Serviços de módulo são criados via factories
const userService = createUserService(supabase)
```

### Gerenciamento de Estado
Usa o sistema reativo do Vue com composables ao invés de Vuex/Pinia:
```typescript
// Estado global do usuário via provider/inject
const user = useMyself()
```

### Segurança de Tipos
Forte integração com TypeScript usando tipos do schema Supabase:
- Tipos do schema do banco são auto-gerados em `./libs/supabase/schema.ts`
- Execute `yarn db:generate-types` após qualquer mudança no schema

### Fluxo de Autenticação
- Integração GitHub OAuth via Supabase
- Middleware de autenticação para proteção de rotas
- Gerenciamento de sessão através do composable `useSession()`

## Roteamento Baseado em Arquivos

As páginas estão no diretório `/pages/` e importam screens dos módulos:
- `/pages/index.vue` → Página inicial
- `/pages/[username]/index.vue` → Perfil do usuário
- `/pages/[username]/gist/[id].vue` → Detalhes do gist
- `/pages/app/panel.vue` → Painel administrativo

## Temas Personalizados

PrimeVue é configurado com presets personalizados em `/assets/presets/lara/`. O tema usa propriedades CSS customizadas para cores que se integram com o Tailwind CSS.

## Notas Importantes

- Sempre execute `yarn db:generate-types` após mudanças no schema do banco
- A aplicação usa imports modulares configurados em `nuxt.config.ts`
- Redirecionamentos de autenticação são configurados em `supabase/config.toml`
- Desenvolvimento local usa instância local do Supabase (porta 54321)