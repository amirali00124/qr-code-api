# QR Code API Landing Page

## Overview

This is a professional QR Code generation API landing page built with React and Express. The application serves as a marketing and demonstration platform for a QR code generation service that would be hosted on RapidAPI. It features a clean, modern design with comprehensive sections including feature highlights, interactive demo, pricing tiers, documentation examples, and FAQ.

## Recent Changes (January 2025)

✓ Optimized for RapidAPI marketplace integration (no user registration - redirects to RapidAPI)
✓ Created Privacy Policy and Terms of Service pages
✓ Improved pricing strategy with urgency (limited time offers, crossed-out prices)
✓ Enhanced FAQ section explaining analytics and data storage features
✓ Streamlined footer (removed status, help center, community, blog)
✓ Added routing for legal pages (/privacy, /terms)
✓ **Deployment Ready**: Complete deployment configuration for GitHub + Vercel + RapidAPI
✓ Added health check endpoint (`/api/health`) for production monitoring
✓ Created comprehensive deployment guides and checklists
✓ Configured GitHub Actions for automated CI/CD pipeline
✓ Optimized Vercel configuration with CORS headers for RapidAPI integration

## User Preferences

Preferred communication style: Simple, everyday language.
Deployment strategy: GitHub + Vercel for hosting, then listing on RapidAPI marketplace.

## System Architecture

### Frontend Architecture
The frontend is built using React 18 with TypeScript, utilizing a component-based architecture. Key architectural decisions include:

- **Component Library**: Uses shadcn/ui components built on top of Radix UI primitives for consistent, accessible UI components
- **Styling**: Tailwind CSS for utility-first styling with custom CSS variables for theming
- **State Management**: React hooks for local state, with TanStack Query for server state management
- **Routing**: Wouter for lightweight client-side routing
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
The backend follows a minimal Express.js architecture with the following design patterns:

- **Server Structure**: Express.js server with middleware for JSON parsing, logging, and error handling
- **Storage Interface**: Abstract storage interface (IStorage) with in-memory implementation, designed to be easily swapped for database implementations
- **Route Registration**: Centralized route registration system for API endpoints (currently minimal, designed for QR code generation endpoints)
- **Development Integration**: Vite middleware integration for seamless development experience

### Database Design
Currently uses an in-memory storage system with a defined schema for users:

- **User Schema**: Simple user table with id, username, and password fields
- **ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in TypeScript
- **Migrations**: Database migration support through Drizzle Kit

### Styling and Design System
- **Design Tokens**: CSS custom properties for consistent theming across components
- **Component Variants**: Class Variance Authority (CVA) for component variant management
- **Typography**: Inter font family for modern, readable text
- **Color System**: Semantic color tokens with support for light/dark themes
- **Responsive Design**: Mobile-first responsive design with Tailwind breakpoints

### Development Experience
- **Type Safety**: Full TypeScript coverage across frontend, backend, and shared schemas
- **Hot Reloading**: Vite HMR for instant development feedback
- **Error Handling**: Runtime error overlay for development debugging
- **Path Aliases**: Configured path aliases for clean imports (@/, @shared/, @assets/)

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Backend**: Express.js, Node.js
- **Build Tools**: Vite, esbuild for production builds
- **TypeScript**: Full TypeScript support across the stack

### UI and Design Dependencies
- **Component Library**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS with PostCSS and Autoprefixer
- **Icons**: Lucide React for consistent iconography
- **Fonts**: Google Fonts (Inter) for typography

### Database and ORM
- **ORM**: Drizzle ORM for type-safe database operations
- **Database Driver**: Neon Database serverless driver
- **Schema Management**: Drizzle Zod for schema validation
- **Session Storage**: Connect-pg-simple for PostgreSQL session storage

### Development Tools
- **State Management**: TanStack React Query for server state
- **Form Handling**: React Hook Form with Hookform Resolvers
- **Validation**: Zod for runtime type validation
- **Utility Libraries**: clsx, class-variance-authority for dynamic class names
- **Date Handling**: date-fns for date manipulation

### Development and Replit Integration
- **Replit Tools**: Vite plugin for runtime error modal and cartographer for development
- **Development Scripts**: Configured scripts for dev, build, start, and database operations