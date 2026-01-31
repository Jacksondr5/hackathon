# Hackathon

A web application for coordinating hackathon events, including project submissions, voting, and team collaboration.

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Database**: Convex (real-time backend)
- **Authentication**: Clerk
- **Analytics**: PostHog
- **Error Tracking**: Sentry
- **Forms**: TanStack Form with Zod validation
- **Styling**: Tailwind CSS v4
- **Error Handling**: neverthrow for Result types

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
# Convex
CONVEX_DEPLOYMENT=dev:your-deployment
NEXT_PUBLIC_CONVEX_URL=https://your-deployment.convex.cloud

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxx
NEXT_PUBLIC_CLERK_FRONTEND_API_URL=https://xxx.clerk.accounts.dev
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/

# PostHog
NEXT_PUBLIC_POSTHOG_KEY=phc_xxx
NEXT_PUBLIC_POSTHOG_HOST=https://us.i.posthog.com
NEXT_PUBLIC_POSTHOG_ENABLED=true
NEXT_PUBLIC_POSTHOG_DEBUG=false

# Sentry
NEXT_PUBLIC_SENTRY_DSN=https://xxx@xxx.ingest.us.sentry.io/xxx

# Environment
NEXT_PUBLIC_ENV=development
```

## Scripts

```bash
pnpm dev        # Start development server
pnpm build      # Build for production
pnpm start      # Start production server
pnpm lint       # Run ESLint
pnpm typecheck  # Run TypeScript type checking
```

## Development

1. Clone the repository
2. Copy `.env.local.example` to `.env.local` and fill in your values
3. Run `pnpm install` to install dependencies
4. Run `pnpm dev` to start the development server
5. Open http://localhost:3000 in your browser

## Features

- Hackathon event management (phases: signup, submission, voting, results)
- Project submissions with team collaboration
- Comments and feedback on projects
- Admin panel for event management
- Real-time updates via Convex
