# QR Code API - Professional QR Generation Service

A comprehensive QR Code generation API platform built with React frontend and Vercel serverless functions backend, designed for RapidAPI marketplace integration.

## 🚀 Features

### API Capabilities
- **QR Code Generation**: Custom styling, colors, sizes, error correction levels
- **Batch Processing**: Generate up to 100 QR codes in a single request
- **Multiple Formats**: PNG and SVG output formats
- **Analytics**: Usage tracking and statistics
- **Health Monitoring**: Built-in health check endpoints

### Frontend Features
- **Modern React Interface**: Built with React 18 and TypeScript
- **Responsive Design**: Tailwind CSS with mobile-first approach
- **Interactive Demo**: Live QR code generation preview
- **Comprehensive Documentation**: API examples and integration guides
- **Professional Landing Page**: Marketing-ready design for RapidAPI

## 📡 API Endpoints

### Health Check
```http
GET /api/health
```

### Generate QR Code
```http
POST /api/qr/generate
Content-Type: application/json

{
  "data": "https://example.com",
  "size": 300,
  "format": "png",
  "color": "#000000",
  "background_color": "#ffffff",
  "error_correction": "M",
  "border": 2
}
```

### Batch Generation
```http
POST /api/qr/batch
Content-Type: application/json

{
  "items": [
    {
      "data": "https://example1.com",
      "size": 200,
      "format": "png",
      "custom_id": "qr1"
    },
    {
      "data": "https://example2.com",
      "size": 250,
      "format": "svg",
      "custom_id": "qr2"
    }
  ]
}
```

### QR Code Info
```http
GET /api/qr/info/{qr_id}
```

### Analytics
```http
GET /api/analytics?period=month
```

## 🛠 Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for build tooling
- **Tailwind CSS** for styling
- **shadcn/ui** component library
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Vercel Serverless Functions**
- **Node.js** with TypeScript
- **QRCode** library for generation
- **Express.js** for local development

### Development Tools
- **TypeScript** for type safety
- **ESLint** and **Prettier** for code quality
- **Drizzle ORM** for database operations
- **PostCSS** and **Autoprefixer**

## 🚀 Deployment

### Quick Deploy to Vercel

1. **Clone/Upload to GitHub**
   ```bash
   git clone <your-repo>
   cd qr-code-api
   ```

2. **Connect to Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the configuration

3. **Automatic Deployment**
   - Vercel reads `vercel.json` for configuration
   - Installs dependencies from `package.json`
   - Builds React frontend with Vite
   - Deploys API as serverless functions

### Project Structure
```
├── api/                     # Vercel serverless functions
│   ├── health.ts           # Health check endpoint
│   ├── analytics.ts        # Analytics endpoint
│   └── qr/                 # QR generation endpoints
│       ├── generate.ts     # Single QR generation
│       ├── batch.ts        # Batch generation
│       └── info/
│           └── [qr_id].ts  # QR info retrieval
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # UI components
│   │   ├── pages/          # Route pages
│   │   ├── lib/           # Utilities
│   │   └── hooks/         # Custom hooks
│   └── index.html
├── server/                 # Local development server
├── shared/                 # Shared types and schemas
├── vercel.json            # Vercel configuration
├── package.json           # Dependencies
└── README.md
```

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📋 Environment Setup

No environment variables required for basic functionality. The API works out of the box with:
- QR code generation using the `qrcode` library
- Mock analytics data for demonstration
- Health monitoring endpoints

## 🔗 RapidAPI Integration

This project includes:
- **OpenAPI Specification** (`rapidapi.yaml`)
- **CORS Headers** configured for RapidAPI
- **Professional Documentation** for marketplace listing
- **Rate Limiting Ready** architecture

## 📄 License

MIT License - See LICENSE file for details

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For issues and questions:
- Create an issue in this repository
- Check the documentation in the `/docs` directory