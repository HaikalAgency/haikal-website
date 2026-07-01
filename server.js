import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createServer as createViteServer } from 'vite';
import contactHandler from './api/contact.js';

dotenv.config();

async function createServer() {
  const app = express();

  // Create Vite server in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa',
  });

  app.use(cors());
  app.use(express.json());

  // Use API routes
  app.all('/api/contact', contactHandler);

  // Use vite's connect instance as middleware
  app.use(vite.middlewares);

  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
