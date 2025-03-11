# C3 Starter

A TypeScript monorepo built with Bun.

## Project Structure

```
rainmaker/
├── api/           # Backend API service
├── ui/            # Frontend UI service
├── package.json   # Root workspace configuration
└── tsconfig.json  # Shared TypeScript configuration
```

## Getting Started

Make sure you have [Bun](https://bun.sh) installed.

### Install dependencies

```bash
bun install
```

### Development

Run both UI and API in development mode:

```bash
bun dev
```

Or run them separately:

```bash
# Run just the API
bun dev:api

# Run just the UI
bun dev:ui
```

### Building

Build both projects:

```bash
bun build
```

Or build them separately:

```bash
# Build just the API
bun build:api

# Build just the UI
bun build:ui
```

## Accessing the Applications

- UI: http://localhost:3001
- API: http://localhost:3000/api/health
