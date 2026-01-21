# FlowPly Visualizer

Marketing website for FlowPly - Managed Operations for AI SaaS. A modern, responsive single-page application showcasing FlowPly's services, use cases, integrations, and insights for enterprise AI operations management.

## Overview

FlowPly Visualizer is a production-ready marketing website that presents FlowPly's managed operations platform for AI SaaS vendors. The site provides comprehensive information about services, use cases, integrations, and operational insights, designed to help enterprise customers understand how FlowPly manages their AI tools in production with SLAs, human escalation, and full audit trails.

## Features

- **Multi-page Marketing Site** - Homepage, Model, Scope, Controls, Stack, Insights, and Contact pages
- **Use Case Showcases** - Detailed pages for Customer Support Automation, AI Intake Operations, Claims Backoffice, Data Enrichment, and Voice Agent Operations
- **Integration Documentation** - Dedicated pages for OpenAI Operations, Salesforce Automation, and Zapier Production Ops
- **Insights Blog** - Articles on AI operations challenges and best practices
- **Internationalization (i18n)** - Support for English and Dutch with language detection
- **Responsive Design** - Mobile-first design with responsive navigation and mobile drawer
- **Animations** - Smooth page transitions and scroll animations using Framer Motion
- **Analytics Integration** - Event tracking infrastructure (ready for analytics service integration)
- **SEO Optimized** - Meta tags, Open Graph, and Twitter Card support
- **Accessibility** - Built with Radix UI primitives for accessible components

## Tech Stack

- **React 18.3** - UI framework
- **TypeScript 5.8** - Type safety
- **Vite 7.3** - Build tool and dev server
- **React Router 6.30** - Client-side routing
- **Tailwind CSS 3.4** - Utility-first styling
- **shadcn/ui** - Component library (Radix UI primitives)
- **Framer Motion 12.24** - Animation library
- **i18next 25.7** - Internationalization
- **TanStack Query 5.83** - Data fetching and state management
- **React Hook Form 7.61** - Form management
- **Zod 3.25** - Schema validation

## Architecture

The application follows a component-based architecture with clear separation of concerns:

- **Pages** (`src/pages/`) - Top-level route components
- **Components** (`src/components/`) - Reusable UI components
  - `layout/` - Header, Footer, MobileDrawer
  - `sections/` - Page sections (Hero, ProductPillars, UseCases, etc.)
  - `shared/` - Shared components (CTABand, VendorLogos, ControlsCarousel, etc.)
  - `ui/` - shadcn/ui base components
- **Data** (`src/data/`) - Content configuration and static data
- **Hooks** (`src/hooks/`) - Custom React hooks (analytics, mobile detection, toast)
- **i18n** (`src/i18n/`) - Internationalization configuration and translations
- **Assets** (`src/assets/`) - Images, videos, and static media files

The app uses React Router for client-side routing, with hash-based navigation for section anchors. All components are built with TypeScript for type safety, and styling is handled through Tailwind CSS with custom design tokens matching FlowPly's brand colors.

## Getting Started

### Prerequisites

- **Node.js** 18+ (recommended: use [nvm](https://github.com/nvm-sh/nvm))
- **npm** or **bun** package manager

### Installation

```sh
# Clone the repository
git clone <repository-url>
cd flowply-visualizer

# Install dependencies
npm install
```

### Running Locally

```sh
# Start development server (runs on http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linter
npm run lint
```

## Configuration

No environment variables are required for basic operation. The application is configured to work out of the box.

**Development Configuration:**

- Dev server runs on port `8080` (configured in `vite.config.ts`)
- Analytics events are logged to console in development mode
- Component tagger is enabled in development (Lovable integration)

**Production Considerations:**

- Update Open Graph images in `index.html` (currently pointing to Lovable placeholder)
- Configure analytics service in `src/hooks/useAnalytics.ts` for production tracking
- Update favicon paths if needed (currently using `/favicon.png`)

## Usage

### Navigation Structure

The site includes the following main sections:

- **Home** (`/`) - Landing page with hero, product pillars, use cases, and CTAs
- **Model** (`/model`) - FlowPly's operational model and approach
- **Scope** (`/scope`) - Service scope including managed operations, AI orchestration, integrations
- **Controls** (`/controls`) - Operational controls (monitoring, escalations, HITL, audit trails)
- **Stack** (`/stack`) - Supported tools and integrations
- **Insights** (`/insights`) - Blog articles and operational insights
- **Contact** (`/contact`) - Contact form and assessment booking

### Adding New Content

1. **New Page**: Create a component in `src/pages/` and add route in `src/App.tsx`
2. **New Section**: Add component in `src/components/sections/` and import in page
3. **Content Updates**: Modify data files in `src/data/` (siteContent.ts, useCaseContent.ts, etc.)
4. **Translations**: Update `src/i18n/locales/en.json` and `nl.json`

### Styling

The project uses Tailwind CSS with custom design tokens. Brand colors are defined in `tailwind.config.ts`:

- Slate blue (primary brand color)
- Amber (accent color)
- Custom animations for flow effects

## Testing

Currently, no test suite is configured. To add testing:

1. Install testing framework (e.g., Vitest, React Testing Library)
2. Create test files alongside components
3. Add test script to `package.json`

## Deployment

The application builds to static files that can be deployed to any static hosting service:

```sh
# Build production bundle
npm run build

# Output will be in the `dist/` directory
```

The build output is a standard static site with no server-side requirements.

## Folder Structure

```text
flowply-visualizer/
├── public/                 # Static assets (favicon, robots.txt)
├── src/
│   ├── assets/            # Images, videos, media files
│   ├── components/        # React components
│   │   ├── layout/       # Header, Footer, MobileDrawer
│   │   ├── sections/     # Page sections
│   │   ├── shared/       # Shared components
│   │   └── ui/          # shadcn/ui base components
│   ├── data/             # Content configuration
│   ├── hooks/            # Custom React hooks
│   ├── i18n/             # Internationalization
│   ├── lib/              # Utility functions
│   ├── pages/            # Route components
│   │   ├── insights/    # Insight article pages
│   │   ├── integrations/ # Integration detail pages
│   │   └── use-cases/   # Use case detail pages
│   ├── App.tsx           # Main app component with routing
│   └── main.tsx          # Entry point
├── index.html            # HTML template
├── vite.config.ts        # Vite configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── package.json          # Dependencies and scripts
```

## Roadmap / TODO

- [ ] Add more language translations
- [ ] Implement dark mode toggle
- [ ] Add performance monitoring

## License

[Add your license here]
