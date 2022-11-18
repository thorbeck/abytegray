/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { RouterItem } from "./components/router/router.interface";
export namespace Components {
    interface AbgRouter {
        "home": RouterItem;
        "notFound": RouterItem;
        "routes": RouterItem[];
    }
    interface AbgTags {
        "tags"?: string[];
    }
}
export interface AbgRouterCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgRouterElement;
}
export interface AbgTagsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgTagsElement;
}
declare global {
    interface HTMLAbgRouterElement extends Components.AbgRouter, HTMLStencilElement {
    }
    var HTMLAbgRouterElement: {
        prototype: HTMLAbgRouterElement;
        new (): HTMLAbgRouterElement;
    };
    interface HTMLAbgTagsElement extends Components.AbgTags, HTMLStencilElement {
    }
    var HTMLAbgTagsElement: {
        prototype: HTMLAbgTagsElement;
        new (): HTMLAbgTagsElement;
    };
    interface HTMLElementTagNameMap {
        "abg-router": HTMLAbgRouterElement;
        "abg-tags": HTMLAbgTagsElement;
    }
}
declare namespace LocalJSX {
    interface AbgRouter {
        "home"?: RouterItem;
        "notFound"?: RouterItem;
        "onAbgRouter"?: (event: AbgRouterCustomEvent<any>) => void;
        "routes"?: RouterItem[];
    }
    interface AbgTags {
        "onAbgTags"?: (event: AbgTagsCustomEvent<any>) => void;
        "tags"?: string[];
    }
    interface IntrinsicElements {
        "abg-router": AbgRouter;
        "abg-tags": AbgTags;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "abg-router": LocalJSX.AbgRouter & JSXBase.HTMLAttributes<HTMLAbgRouterElement>;
            "abg-tags": LocalJSX.AbgTags & JSXBase.HTMLAttributes<HTMLAbgTagsElement>;
        }
    }
}
