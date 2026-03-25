# Quantix Merged Application Layer

This directory acts as a non-invasive wrapper to merge **Project 1 (Dashboard)** and **Project 2 (Home Page)** into a single unified application experience without modifying their original source codes or configurations.

## Integration Strategy
- **Composition over Modification**: Both Vite projects are launched concurrently in the background.
- **Micro-Frontend via Reverse Proxy**: An Express.js server routes incoming requests to the appropriate Vite dev server.
- **Dynamic Base URLs**: We inject the `--base=/dashboard/` flag into the Dashboard's Vite application at runtime. This forces it to natively request its assets behind the `/dashboard` proxy path without altering its `vite.config.js`.

### Original Files Untouched
- All original UI, logic, components, configurations (`vite.config.ts`, `index.html`), and routing structures in `Quantix ui and ux` and `Quantix_Systems_01-main` were left 100% untouched.

## Route Mapping
- Requests to `/dashboard` ➔ Proxied to Project 1 (Dashboard)
- Requests to `/` ➔ Proxied to Project 2 (Home Page)

## Run Instructions

1. Make sure all dependencies are installed across projects:
```bash
# Install wrapper dependencies
npm install

# Install Home Page dependencies
cd "Quantix_Systems_01-main/Quantix_Systems_01-main" && npm install

# Install Dashboard dependencies
cd "../Quantix ui and ux/Quantix ui and ux" && npm install
cd ../../
```

2. Start the unified integration layer:
```bash
npm start
```

3. Open your browser:
- Main Application: `http://localhost:3000`
- Dashboard View: `http://localhost:3000/dashboard`
