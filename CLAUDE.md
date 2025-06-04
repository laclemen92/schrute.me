# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with
code in this repository.

## Development Commands

```bash
# Start development server (with hot reload)
deno task start

# Check code quality (format, lint, typecheck)
deno task check

# Build for production
deno task build

# Preview production build
deno task preview
```

## Architecture Overview

This is a Fresh (Deno web framework) URL shortener application with the
following structure:

### Key Patterns

- **Routes** handle server-side rendering and API endpoints
- **Islands** are interactive client-side components (hydrated on the client)
- **Services** contain business logic and database operations
- **Models** define data structures with Zod validation and KVM entity
  definitions

### Data Layer

- Uses Deno KV for persistence
- KVM library (`@laclemen92/kvm`) provides entity management
- Models define both Zod schemas and KVM entities

### Authentication

- Google OAuth via `deno_kv_oauth`
- Session-based authentication with protected routes
- Session middleware in `plugins/session.ts` handles route protection

### Dynamic Routing

- `[shortCode].tsx` handles short URL resolution and redirection
- Short codes are 5-character alphanumeric strings
- Redirects use a countdown component before navigation

### API Integration

- Giphy API for office-themed GIF selection
- API key management through environment variables

## Environment Configuration

Required environment variables:

- `GOOGLE_CLIENT_ID` - For OAuth authentication
- `GOOGLE_CLIENT_SECRET` - For OAuth authentication

Optional:

- `DENO_KV_PATH` - Custom path for KV database
