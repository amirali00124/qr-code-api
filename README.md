# QR Code API Landing Page

A professional landing page for a QR Code generation API service hosted on RapidAPI. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 🔧 Interactive demo with real-time preview
- 💰 Optimized pricing strategy for fast conversions
- 📱 Mobile-first responsive layout
- 🚀 RapidAPI marketplace integration
- 📊 Analytics and usage tracking features
- 🔒 Privacy policy and terms of service pages

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Update RapidAPI URL:**
   Edit `client/src/config/rapidapi.ts` with your RapidAPI listing URL

## Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/         # Page components
│   │   ├── config/        # Configuration files
│   │   └── lib/           # Utilities and helpers
├── server/                # Backend Express server
├── shared/                # Shared types and schemas
└── docs/                  # Documentation
```

## Configuration

### RapidAPI Integration

Update your RapidAPI URL in `client/src/config/rapidapi.ts`:

```typescript
export const RAPIDAPI_URL = "https://rapidapi.com/your-username/your-qrcode-api";
```

This will redirect all pricing buttons and contact links to your RapidAPI listing.

## Deployment

### Replit (Recommended)
- Push to Replit and click "Deploy"
- Automatic SSL, scaling, and hosting included

### Vercel
```bash
npm run build
vercel deploy
```

### Netlify
```bash
npm run build
# Upload dist/ folder to Netlify
```

### Traditional Hosting
```bash
npm run build
# Upload dist/ folder to your web server
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run linting

## Tech Stack

- **Frontend:** React 18, TypeScript, Tailwind CSS
- **Backend:** Express.js, Node.js
- **Build Tool:** Vite
- **UI Components:** shadcn/ui, Radix UI
- **Icons:** Lucide React
- **State Management:** TanStack Query

## License

MIT License - see LICENSE file for details