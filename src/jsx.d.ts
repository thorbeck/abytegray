/**
 * TypeScript JSX type definitions for custom JSX factory
 */

import { h, Fragment } from 'embla';

declare global {
  namespace JSX {
    // All standard HTML elements
    interface IntrinsicElements {
      [elemName: string]: any;
      
      // Common HTML elements with better typing
      div: HTMLAttributes;
      span: HTMLAttributes;
      p: HTMLAttributes;
      a: AnchorHTMLAttributes;
      button: ButtonHTMLAttributes;
      input: InputHTMLAttributes;
      label: HTMLAttributes;
      form: FormHTMLAttributes;
      h1: HTMLAttributes;
      h2: HTMLAttributes;
      h3: HTMLAttributes;
      h4: HTMLAttributes;
      h5: HTMLAttributes;
      h6: HTMLAttributes;
      img: ImgHTMLAttributes;
      ul: HTMLAttributes;
      ol: HTMLAttributes;
      li: HTMLAttributes;
      section: HTMLAttributes;
      article: HTMLAttributes;
      nav: HTMLAttributes;
      header: HTMLAttributes;
      footer: HTMLAttributes;
      main: HTMLAttributes;
      aside: HTMLAttributes;
      style: HTMLAttributes;
      slot: HTMLAttributes;
    }

    interface ElementChildrenAttribute {
      children: {};
    }

    // Base HTML attributes
    interface HTMLAttributes {
      className?: string;
      class?: string;
      id?: string;
      style?: Partial<CSSStyleDeclaration> | string;
      title?: string;
      tabIndex?: number;
      role?: string;
      
      // Event handlers
      onClick?: (event: MouseEvent) => void;
      onInput?: (event: Event) => void;
      onChange?: (event: Event) => void;
      onSubmit?: (event: Event) => void;
      onFocus?: (event: FocusEvent) => void;
      onBlur?: (event: FocusEvent) => void;
      onKeyDown?: (event: KeyboardEvent) => void;
      onKeyUp?: (event: KeyboardEvent) => void;
      onMouseEnter?: (event: MouseEvent) => void;
      onMouseLeave?: (event: MouseEvent) => void;
      
      // Allow any other attributes
      [key: string]: any;
    }

    interface AnchorHTMLAttributes extends HTMLAttributes {
      href?: string;
      target?: string;
      rel?: string;
    }

    interface ButtonHTMLAttributes extends HTMLAttributes {
      type?: 'button' | 'submit' | 'reset';
      disabled?: boolean;
    }

    interface InputHTMLAttributes extends HTMLAttributes {
      type?: string;
      value?: string | number;
      placeholder?: string;
      disabled?: boolean;
      required?: boolean;
      name?: string;
    }

    interface FormHTMLAttributes extends HTMLAttributes {
      action?: string;
      method?: string;
    }

    interface ImgHTMLAttributes extends HTMLAttributes {
      src?: string;
      alt?: string;
      width?: number | string;
      height?: number | string;
      loading?: 'lazy' | 'eager';
    }
  }
}

export {};
