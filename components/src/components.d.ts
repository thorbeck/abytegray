/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Icon } from "./components/post/icon.interface";
import { Cover } from "./components/post/cover.interface";
import { PostsItem } from "./components/posts/posts.interface";
import { RouterItem } from "./components/router/router.interface";
export namespace Components {
    interface AbgPost {
        "content": string;
        "cover"?: Cover;
        "created": string;
        "heading": string;
        "icon"?: Icon;
        "slug": string;
        "tags": string[];
        "updated": string;
    }
    interface AbgPosts {
        "posts": PostsItem[];
        "showDescription": boolean;
    }
    interface AbgRouter {
        "home": RouterItem;
        "notFound": RouterItem;
        "routes": RouterItem[];
    }
    interface AbgTags {
        "tags"?: string[];
    }
}
export interface AbgPostCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgPostElement;
}
export interface AbgPostsCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgPostsElement;
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
    interface HTMLAbgPostElement extends Components.AbgPost, HTMLStencilElement {
    }
    var HTMLAbgPostElement: {
        prototype: HTMLAbgPostElement;
        new (): HTMLAbgPostElement;
    };
    interface HTMLAbgPostsElement extends Components.AbgPosts, HTMLStencilElement {
    }
    var HTMLAbgPostsElement: {
        prototype: HTMLAbgPostsElement;
        new (): HTMLAbgPostsElement;
    };
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
        "abg-post": HTMLAbgPostElement;
        "abg-posts": HTMLAbgPostsElement;
        "abg-router": HTMLAbgRouterElement;
        "abg-tags": HTMLAbgTagsElement;
    }
}
declare namespace LocalJSX {
    interface AbgPost {
        "content"?: string;
        "cover"?: Cover;
        "created"?: string;
        "heading"?: string;
        "icon"?: Icon;
        "onAbgPost"?: (event: AbgPostCustomEvent<string>) => void;
        "slug"?: string;
        "tags"?: string[];
        "updated"?: string;
    }
    interface AbgPosts {
        "onAbgPosts"?: (event: AbgPostsCustomEvent<any>) => void;
        "posts"?: PostsItem[];
        "showDescription"?: boolean;
    }
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
        "abg-post": AbgPost;
        "abg-posts": AbgPosts;
        "abg-router": AbgRouter;
        "abg-tags": AbgTags;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "abg-post": LocalJSX.AbgPost & JSXBase.HTMLAttributes<HTMLAbgPostElement>;
            "abg-posts": LocalJSX.AbgPosts & JSXBase.HTMLAttributes<HTMLAbgPostsElement>;
            "abg-router": LocalJSX.AbgRouter & JSXBase.HTMLAttributes<HTMLAbgRouterElement>;
            "abg-tags": LocalJSX.AbgTags & JSXBase.HTMLAttributes<HTMLAbgTagsElement>;
        }
    }
}
