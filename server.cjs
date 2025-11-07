// Simple Express static server (CommonJS) — moved from app.js and renamed to avoid collision with App.tsx
const express = require("express");
const path = require("path");

// Use PORT env var when provided (hosting providers set this)
const port = process.env.PORT || 3000;

const app = express();

// Archivos estaticos (CSS, JS, IMAGES)
// Servir los archivos generados por `vite build` (dist)
app.use(express.static(path.join(__dirname, "dist")));

// RUTAS DE MI PAGINA (SPA): servir index.html desde dist para todas las rutas
// For Express 5 / router compatibility use '*' rather than '/*'
// Fallback para SPA sin usar path-to-regexp: sirve index.html para todas las rutas
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// LINEA DE ARRANQUE DEL SERVIDOR
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
