/**
 * Custom JSX factory functions for creating DOM elements from TSX
 * No external dependencies - just vanilla DOM manipulation
 */

export type JSXChild = Node | string | number | boolean | null | undefined;
export type JSXChildren = JSXChild | JSXChild[];

/**
 * JSX factory function - converts JSX elements to DOM nodes
 * @param tag - HTML tag name or component constructor
 * @param props - Element properties/attributes
 * @param children - Child elements
 */
export function h(
  tag: string | Function,
  props: Record<string, any> | null,
  ...children: JSXChildren[]
): HTMLElement | DocumentFragment {
  // Handle function components (if needed in the future)
  if (typeof tag === 'function') {
    return tag(props, ...children);
  }

  // Create element
  const element = document.createElement(tag);

  // Apply props/attributes
  if (props) {
    Object.entries(props).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key === 'style' && typeof value === 'object') {
        Object.assign(element.style, value);
      } else if (key.startsWith('on') && typeof value === 'function') {
        // Event handlers: onClick -> click
        const eventName = key.substring(2).toLowerCase();
        element.addEventListener(eventName, value);
      } else if (typeof value === 'boolean') {
        if (value) {
          element.setAttribute(key, '');
        }
      } else if (value != null) {
        element.setAttribute(key, String(value));
      }
    });
  }

  // Append children
  appendChildren(element, children.flat(Infinity) as JSXChild[]);

  return element;
}

/**
 * Fragment factory - creates a DocumentFragment to hold multiple children
 * @param _props - Not used for fragments
 * @param children - Child elements
 */
export function Fragment(
  _props: Record<string, any> | null,
  ...children: JSXChildren[]
): DocumentFragment {
  const fragment = document.createDocumentFragment();
  appendChildren(fragment, children.flat(Infinity) as JSXChild[]);
  return fragment;
}

/**
 * Helper to append children to a parent node
 */
function appendChildren(parent: Node, children: JSXChild[]): void {
  children.forEach((child) => {
    if (child == null || child === false || child === true) {
      // Skip null, undefined, false, true
      return;
    }

    if (typeof child === 'string' || typeof child === 'number') {
      parent.appendChild(document.createTextNode(String(child)));
    } else if (child instanceof Node) {
      parent.appendChild(child);
    }
  });
}
