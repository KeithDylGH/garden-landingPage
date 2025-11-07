// Simple Express static server (CommonJS) — moved from app.js and renamed to avoid collision with App.tsx
const express = require("express");
const path = require("path");

// Use PORT env var when provided (hosting providers set this)
const rawPort = process.env.PORT;
let port = 3000;
if (rawPort !== undefined) {
  const parsed = Number(rawPort);
  if (Number.isInteger(parsed) && parsed > 0) {
    port = parsed;
  } else {
    // Fail fast so the host (Render) surfaces the misconfiguration in the deploy logs
    console.error(
      `FATAL: PORT environment variable is not a positive integer: '${rawPort}'. Exiting to surface the configuration error to the host.`
    );
    // Exit immediately to avoid starting the server (so logs are unambiguous)
    // Use process.exit after writing the error; this should be visible in deploy logs.
    process.exit(1);
  }
}

const fs = require("fs");
const app = express();

// Archivos estaticos (CSS, JS, IMAGES)
// Servir los archivos generados por `vite build` (dist)
app.use(express.static(path.join(__dirname, "dist")));

// RUTAS DE MI PAGINA (SPA): servir index.html desde dist para todas las rutas
// For Express 5 / router compatibility use '*' rather than '/*'
// Fallback para SPA sin usar path-to-regexp: sirve index.html para todas las rutas
app.use((req, res) => {
  const indexPath = path.join(__dirname, "dist", "index.html");
  if (!fs.existsSync(indexPath)) {
    // Return a helpful 404 when the production build is missing (avoids ENOENT stack traces)
    res
      .status(404)
      .send(
        "Not Found - production build not present. Run `npm run build` before starting or configure Render to run the build."
      );
    return;
  }
  res.sendFile(indexPath);
});

// LINEA DE ARRANQUE DEL SERVIDOR
// Bind to 0.0.0.0 so hosting providers can detect the open port
app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
