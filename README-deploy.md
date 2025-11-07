# Despliegue y pruebas — Garden (instrucciones en español)

Este documento explica cómo desplegar el proyecto en Render (dos opciones) y cómo probarlo localmente.

---

## Resumen rápido

- Para un sitio estático (recomendado): usar `Static Site` en Render, Build: `npm run build`, Publish: `dist`.
- Para ejecutar el servidor Express incluido (Web Service): usar `Web Service` en Render, Start Command: `npm start` (el script `start` ejecuta `node server.cjs`).

---

## Archivos importantes añadidos

- `server.cjs` — servidor Express que sirve la carpeta `dist` (producción) y soporta rutas SPA.
- `render.yaml` — configuración mínima para desplegar como Static Site (opcional).
- `README-deploy.md` — este archivo con instrucciones.

---

## Opción A — Static Site (recomendada para SPAs Vite)

1. En Render.com -> New -> Static Site.
2. Conecta tu repo y selecciona la rama (p. ej. `main`).
3. En settings del servicio, configura:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
4. Render hará `npm install`, ejecutará el build y servirá `dist` desde CDN.

Ventajas:

- CDN automático, SSL, más rápido y barato para sitios estáticos.
- No necesitas `server.cjs` para esta opción.

Si quieres automatizar con `render.yaml`, ya añadí un archivo `render.yaml` en la raíz. Render puede usarlo si habilitas Deploy from repo with `render.yaml`.

---

## Opción B — Web Service (Node + Express)

Útil si quieres que el servidor Node (Express) maneje la entrega de archivos o rutas.

1. En Render.com -> New -> Web Service.
2. Conecta tu repo y selecciona la rama.
3. Build command: (puedes dejar vacío o `npm run build` si quieres construir antes)
4. Start command: `npm start`
   - El `package.json` contiene `"start": "node server.cjs"`.
   - `server.cjs` sirve `dist` y tiene fallback SPA.
5. Render proveerá la variable de entorno `PORT` que `server.cjs` usa (ya soportado).

Notas:

- Si eliges Web Service y quieres que el build se ejecute en Render antes de arrancar, pon `npm run build` como Build Command.
- El servidor servirá los archivos estáticos de `dist`. Asegúrate de que `dist` se genere en la fase de build.

---

## Probar localmente

1. Instalar dependencias:

```powershell
npm install
```

2. Generar la build (produce `dist`):

```powershell
npm run build
```

3. Iniciar el servidor Node (usa la variable PORT):

```powershell
$env:PORT = 4173; npm start
```

- `npm start` ejecuta `node server.cjs`.
- Abre en el navegador: http://localhost:4173

4. Alternativa: usar `vite preview` para servir `dist` con Vite (útil en desarrollo):

```powershell
$env:PORT = 4173; npm run preview
```

---

## Notas prácticas y solución de problemas

- Favicon: el proyecto usa `img/icon.png` como icono de pestaña y Vite lo copiará a `dist/assets` durante el build.
- Caché del navegador: si no ves el favicon actualizado, forzar recarga (Ctrl+F5) o abrir en modo incógnito para evitar caché.
- En Render, si usas Static Site, no necesitas `server.cjs` ni `npm start`.
- Si al arrancar el servidor local obtienes errores de puerto en uso, puede que haya otra instancia de Node corriendo; busca y detén procesos node si es necesario.

---

## Preguntas frecuentes rápidas

- ¿Qué opción elegir? Si tu app es una SPA (Vite build), usa Static Site — es más simple y económico. Si necesitas lógica de servidor, usa Web Service.

- ¿Puedo usar `npm start` en Render para Static Site? No; para Static Site Render no ejecuta `npm start` — usa `buildCommand` y `publishPath`.

---

Si quieres, puedo:

- Añadir un GitHub Action que haga `npm run build` y despliegue a Render automáticamente.
- Ajustar `server.cjs` para servir archivos desde `public/` además de `dist` si prefieres otra estructura.

Dime cuál de las dos opciones (Static Site / Web Service) quieres que deje como instrucciones por defecto en un README más detallado con capturas o cambios automáticos en `package.json` (por ejemplo, poner `start` en `vite preview` de nuevo).
