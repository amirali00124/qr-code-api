import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for deployment monitoring
  app.get("/api/health", (req, res) => {
    res.status(200).json({ 
      status: "healthy", 
      timestamp: new Date().toISOString(),
      version: "1.0.0",
      environment: process.env.NODE_ENV || "development"
    });
  });

  // Serve deployment package download page
  app.get("/download", (req, res) => {
    const filePath = path.resolve(process.cwd(), "deployment-package", "download.html");
    res.sendFile(filePath);
  });

  // Serve deployment package zip file
  app.get("/download/qr-code-api-deployment.zip", (req, res) => {
    const filePath = path.resolve(process.cwd(), "deployment-package", "qr-code-api-deployment.zip");
    res.setHeader('Content-Type', 'application/zip');
    res.setHeader('Content-Disposition', 'attachment; filename="qr-code-api-deployment.zip"');
    res.sendFile(filePath);
  });

  // put application routes here
  // prefix all routes with /api

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  const httpServer = createServer(app);

  return httpServer;
}
