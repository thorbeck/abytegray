# Abytegray - GitHub Copilot Instructions

## Project Overview
Personal blog/web app built with vanilla web components. No frameworks, no build complexity—just modern web standards.

## Core Technology Stack
- **Build Tool:** Vite 7.x (dev server with HMR)
- **Language:** TypeScript (strict mode, ES2020 target, no JSX)
- **Components:** Native Web Components with Shadow DOM
- **Styling:** CSS Modules (`.module.css`) with CSS custom properties
- **Deployment Target:** Static site (GitHub Pages)

## Architecture Decisions

### ✅ Always Use
- Native `HTMLElement` class extensions
- `customElements.define()` for registration
- Shadow DOM (`this.attachShadow({ mode: 'open' })`)
- Template literals for HTML rendering
- CSS custom properties for theming/variables
- Vanilla CSS with CSS Modules for scoping

### ❌ Never Use
- Frameworks (React, Vue, Angular, Svelte, Lit, Stencil, etc.)
- JSX/TSX syntax in components
- CSS preprocessors (Sass, Less, Stylus)
- Build-time JSX transformations
- Runtime template libraries

## File Structure
```
src/
  components/
    component-name.ts          # Component logic
    component-name.module.css  # Scoped styles
  index.ts                     # Entry point, registers all components
index.html                     # HTML entry for Vite
old/                          # IGNORE - legacy code, not current implementation
```

## Component Pattern
```typescript
import styles from './component-name.module.css';

export class ComponentName extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  
  connectedCallback() {
    this.render();
  }
  
  render() {
    if (!this.shadowRoot) return;
    
    this.shadowRoot.innerHTML = `
      <style>
        /* Inline styles for shadow DOM */
      </style>
      <div class="component-name">
        <!-- Component markup -->
        <slot></slot>
      </div>
    `;
  }
  
  static get observedAttributes() {
    return ['attribute-name'];
  }
  
  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}

customElements.define('component-name', ComponentName);
```

## Styling Guidelines
- Use CSS custom properties for all theming values
- Define custom properties in `:root` or `:host` with fallback values
- Import CSS modules for reference, but inline styles in shadow DOM
- Use semantic class names
- Leverage cascade and inheritance where appropriate

## Development Commands
- `npm run dev` - Start development server (http://localhost:5173)
- `npm run build` - Type check + production build
- `npm run preview` - Preview production build

## Important Context
- This is a **personal project** embracing web standards
- Priority is learning and control over convenience
- Avoid suggesting framework solutions
- Keep implementation simple and readable
- Shadow DOM provides encapsulation; no need for complex scoping strategies
