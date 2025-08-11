# QR Code API - Professional QR Generation Service

A comprehensive QR Code generation API platform built with React frontend and Vercel serverless backend, designed for RapidAPI marketplace integration.

## 🚀 Features

- **QR Code Generation**: Custom styling, colors, sizes, error correction levels
- **Batch Processing**: Generate up to 100 QR codes in a single request
- **Multiple Formats**: PNG and SVG output formats
- **Analytics**: Usage tracking and statistics
- **Health Monitoring**: Built-in health check endpoints
- **Professional Frontend**: Marketing-ready React landing page

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
    }
  ]
}
```

### QR Code Information
```http
GET /api/qr/info/{qr_id}
```

### Analytics
```http
GET /api/analytics?period=month
```

## 🛠 Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS
- **Backend**: Vercel Serverless Functions, Node.js
- **QR Generation**: qrcode library
- **Styling**: shadcn/ui components, Tailwind CSS
- **State Management**: TanStack Query

## 🚀 Deployment

This project is configured for Vercel deployment:

1. **Push to GitHub**: Upload all files to your repository
2. **Connect to Vercel**: Import your GitHub repository
3. **Automatic Deploy**: Vercel will handle the rest

### Important Notes

- ✅ No environment variables required
- ✅ Vercel auto-detects TypeScript files in `/api` directory
- ✅ React frontend builds automatically with Vite
- ✅ CORS headers configured for RapidAPI integration

## 📋 Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production  
npm run build
```

## 🔗 RapidAPI Integration

- OpenAPI specification included (`rapidapi.yaml`)
- CORS headers configured for marketplace
- Professional documentation and examples
- Rate limiting ready architecture

## 📄 License

MIT License