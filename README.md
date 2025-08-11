# QR Code API

A professional QR Code generation API built for RapidAPI marketplace integration.

## Features

- Generate QR codes with custom styling options
- Batch QR code generation (up to 100 items)
- Multiple formats: PNG, SVG
- Customizable colors, sizes, and error correction levels
- Analytics and usage tracking
- Health monitoring endpoints

## API Endpoints

### Health Check
```
GET /api/health
```

### Generate QR Code
```
POST /api/qr/generate
```
**Request Body:**
```json
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
```
POST /api/qr/batch
```
**Request Body:**
```json
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

### QR Code Info
```
GET /api/qr/info/{qr_id}
```

### Analytics
```
GET /api/analytics?period=month
```

## Deployment

### Vercel Deployment

1. Push code to GitHub repository
2. Connect repository to Vercel
3. Deploy with automatic builds
4. API will be available at: `https://your-app.vercel.app/api/`

### Environment Setup

No environment variables required for basic functionality.

### Important Notes

- Vercel automatically detects TypeScript files in `/api` directory as serverless functions
- No explicit runtime configuration needed in vercel.json
- The `qrcode` package dependency is automatically handled by Vercel

## RapidAPI Integration

This API is designed for RapidAPI marketplace listing. The `rapidapi.yaml` file contains the OpenAPI specification for marketplace integration.

## Tech Stack

- **Runtime**: Node.js with TypeScript
- **Framework**: Vercel Serverless Functions
- **QR Generation**: qrcode library
- **API Documentation**: OpenAPI 3.0 specification

## License

MIT License