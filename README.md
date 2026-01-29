# Abytegray

Personal blog/web app built with vanilla web components. No frameworks—just modern web standards.

## Tech Stack

- **Vite** - Dev server with HMR
- **TypeScript** - Strict mode, ES2020 target
- **Web Components** - Native custom elements with Shadow DOM
- **CSS Modules** - Scoped styling with CSS custom properties

## Development

```bash
npm install
npm run dev      # Start dev server at http://localhost:5173
npm run build    # Production build
npm run preview  # Preview production build
```

## Architecture

- Native `HTMLElement` extensions, no framework wrappers
- Shadow DOM for style encapsulation
- Template literals for HTML rendering
- CSS custom properties for theming
- Static site deployment ready (GitHub Pages)