# Abytegray - GitHub Copilot Instructions

## Project Overview
Personal blog/web app built with vanilla web components. No frameworks, no build complexity—just modern web standards.

**Uses Embla library** for JSX factory and type definitions (see embla project for library details).

## Core Technology Stack
- **Build Tool:** Vite 7.x (dev server with HMR)
- **Language:** TypeScript + TSX (strict mode, ES2020 target)
- **Components:** Native Web Components with Shadow DOM + TSX syntax
- **JSX Library:** Embla (custom JSX factory, linked via npm workspace)
- **Styling:** CSS Modules (`.module.css`) with CSS custom properties
- **Deployment Target:** Static site (GitHub Pages)
- **Browser Support:** Modern browsers only (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)
  - No polyfills or fallbacks for older browsers
  - Use modern Web APIs freely (Constructable Stylesheets, ES2020+ features, etc.)
  - No transpilation beyond TypeScript to JavaScript

## Architecture Decisions

### ✅ Always Use
- Native `HTMLElement` class extensions
- `customElements.define()` for registration
- Shadow DOM (`this.attachShadow({ mode: 'open' })`)
- TSX syntax for HTML rendering (from Embla library)
- `import { h, Fragment } from 'embla'` for JSX factory
- CSS custom properties for theming/variables
- Vanilla CSS with CSS Modules for scoping

### ❌ Never Use
- Frameworks (React, Vue, Angular, Svelte, Lit, Stencil, etc.)
- React or other framework-specific JSX factories
- CSS preprocessors (Sass, Less, Stylus)
- Virtual DOM libraries
- Runtime template libraries (other than Embla)
- Polyfills or fallbacks for legacy browsers
- Unnecessary transpilation or compilation

## File Structure
```
src/
  components/
    component-name.tsx         # Component logic with TSX
    component-name.module.css  # Scoped styles
  jsx.d.ts                     # JSX type definitions (imports from embla)
  index.ts                     # Entry point, registers all components
index.html                     # HTML entry for Vite
old/                          # IGNORE - legacy code, not current implementation
```

## Component Pattern
```tsx
import { h } from 'embla';
import styles from './component-name.module.css?inline';

// Create stylesheet once, shared across all instances
const sheet = new CSSStyleSheet();
sheet.replaceSync(styles);

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
    
    const value = this.getAttribute('attribute-name') || 'default';
    
    // Clear shadow root
    this.shadowRoot.innerHTML = '';
    
    // Adopt the shared stylesheet (efficient, reused across all instances)
    this.shadowRoot.adoptedStyleSheets = [sheet];
    
    const contentEl = (
      <div className="component-name">
        <p>{value}</p>
        <slot></slot>
      </div>
    );
    
    // Append to shadow root
    this.shadowRoot.appendChild(contentEl);
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
- Import CSS modules with `?inline` suffix and use Constructable Stylesheets
- Create shared `CSSStyleSheet` instances at module level for performance
- Use `adoptedStyleSheets` to attach styles to Shadow DOM
- Use CSS custom properties for all theming values
- Define custom properties in `:root` or `:host` with fallback values
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
