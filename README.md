# Nuxt Minimal Starter
Look at the Nuxt documentation to learn more.

Setup
Make sure to install dependencies:

## Install dependencies

### npm
npm install

### pnpm
pnpm install

### yarn
yarn install

## Run project on development environment

### npm
npm run dev

### pnpm
pnpm dev

### yarn
yarn dev

## Build project

### npm
npm run build

### pnpm
pnpm build

### yarn
yarn build

# .env Structure base

```bash
NODE_ENV=local
SITE_URL=http://localhost:3000
SUPABASE_URL=http://127.0.0.1:54321
SUPABASE_KEY= {your_supabase_key}
GITHUB_CLIENT_ID= {your_github_key}
GITHUB_SECRET= {your_github_secret}
```

# Supabase CLI

[Supabase](https://supabase.io) is an open source Firebase alternative. We're building the features of Firebase using enterprise-grade open source tools.

- [x] Running Supabase locally
- [x] Managing database migrations
- [x] Creating and deploying Supabase Functions
- [x] Generating types directly from your database schema
- [x] Making authenticated HTTP requests to [Management API](https://supabase.com/docs/reference/api/introduction)

## Getting started

### Run the CLI

```bash
supabase bootstrap
```

Or using npx:

```bash
npx supabase bootstrap
```

### Init supabase

```bash
supabase init
```

### Start supabase

```bash
supabase start
```

### Stop supabase

```bash
supabase stop
```

# Scripts

```bash
yarn db:generate-types

// libs --> são utilitários (quase como helpers)
// quando usa o supabase client, ele retorna um typo any, ai serve para recuperar os dados
// sempre que modificar algo nas migrations, precisa rodar esse comando
```