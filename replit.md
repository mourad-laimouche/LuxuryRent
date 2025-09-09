# Luxury Car Rental Website

## Overview

This is a luxury car rental website built with React (frontend) and Express.js (backend), designed to showcase and manage a fleet of high-end vehicles including Ferrari, Lamborghini, Rolls Royce, and other premium brands. The application features a modern dark luxury theme with gold accents, providing an elegant user experience for browsing and booking luxury vehicles.

The application is structured as a full-stack web application with a React frontend using modern UI components, a Node.js/Express backend, and PostgreSQL database integration through Drizzle ORM. It includes features like car browsing with filters, detailed car information modals, rental calculations, and an integrated chatbot for customer support.

## User Preferences 

Preferred communication style: Simple, everyday language.
Architecture preferences: Simple, maintainable solutions over complex imports - prefers string paths over complex import statements for better readability and maintainability.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Styling**: Tailwind CSS with custom luxury theme (dark background, gold accents)
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Module System**: ES Modules (type: "module")
- **Development**: tsx for TypeScript execution in development
- **Build**: esbuild for production bundling
- **Middleware**: Express built-in middleware for JSON parsing and URL encoding

### Data Storage & Assets
- **Database**: PostgreSQL (configured for production use)
- **ORM**: Drizzle ORM for type-safe database operations
- **Migrations**: Drizzle Kit for schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Connection**: Neon Database serverless driver for PostgreSQL connections
- **Assets**: Simple string-based image paths (@assets/...) instead of complex import statements
- **Car Data**: Simplified structure with pricePerDay, specifications, features, and gallery arrays

### UI Design System
- **Theme**: Custom luxury theme with CSS variables
- **Colors**: Dark luxury palette (luxury-black, luxury-gold, luxury-gray)
- **Typography**: Inter font for body text, Playfair Display for headings
- **Components**: Comprehensive UI component library based on Radix UI
- **Responsive**: Mobile-first design with Tailwind CSS breakpoints

### Key Features Architecture
- **Car Catalog**: 7 luxury vehicles with real photos, filterable by brand, category, and price ranges
- **Car Details**: Modal-based detailed view with image gallery carousel, specifications and rental calculator
- **Image Gallery**: Touch/swipe-enabled carousel with gold navigation arrows and indicator dots
- **Chatbot**: Integrated customer support chatbot with predefined responses
- **Navigation**: Fixed header with responsive mobile menu
- **Forms**: Contact forms and reservation forms with validation
- **Asset Management**: Simplified string-based paths for better maintainability

### Recent Changes (August 2025)
- **Car Data Structure Simplified**: Replaced complex import system with simple string paths
- **Image System**: Images moved to client/public/images/ for proper static serving
- **Interface Updates**: Updated Car interface with pricePerDay, specifications, features, gallery
- **Build Optimization**: Resolved Netlify deployment issues with simplified asset management
- **Performance**: Improved build times by removing hundreds of import statements
- **Audi RS6 Image Updated**: Replaced with new station service photo (August 12, 2025)
- **Welcome Tour Removed**: User requested complete removal of animated tour feature
- **Deployment Ready**: All Netlify files updated and optimized for local export

### Development Environment
- **Hot Reload**: Vite HMR for frontend, tsx watch mode for backend
- **Error Handling**: Runtime error overlay for development
- **Path Aliases**: Configured aliases for clean imports (@/, @shared/, @assets/)
- **TypeScript**: Strict type checking across the entire codebase

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18, React DOM, React Router (Wouter)
- **Node.js Backend**: Express.js, TypeScript execution (tsx)
- **Build Tools**: Vite (frontend), esbuild (backend production builds)

### Database & ORM
- **Drizzle ORM**: Type-safe PostgreSQL ORM with Zod integration
- **Neon Database**: Serverless PostgreSQL driver
- **Session Storage**: connect-pg-simple for PostgreSQL session storage

### UI & Styling
- **Radix UI**: Complete set of UI primitives for accessible components
- **Tailwind CSS**: Utility-first CSS framework with PostCSS
- **Class Variance Authority**: Utility for managing component variants
- **Embla Carousel**: Carousel functionality for image galleries

### State Management & Data Fetching
- **TanStack Query**: Server state management and caching
- **React Hook Form**: Form handling with Hookform resolvers
- **Zod**: Schema validation and type inference

### Development Tools
- **Replit Integration**: Vite plugins for Replit development environment
- **Error Handling**: Runtime error modal for development debugging
- **Font Loading**: Google Fonts integration (Inter, Playfair Display)

### Utility Libraries
- **Date Handling**: date-fns for date manipulation
- **Class Utilities**: clsx and tailwind-merge for conditional styling
- **Icons**: Lucide React for consistent iconography
- **Command Interface**: cmdk for command palette functionality