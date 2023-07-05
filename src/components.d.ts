/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { ArticleItem } from "./components/article/article.interface";
import { ArticleListItem } from "./components/article-list/article-list.interface";
import { NavItem } from "./components/nav/nav.interface";
import { RouterItem } from "./components/router/router.interface";
export { ArticleItem } from "./components/article/article.interface";
export { ArticleListItem } from "./components/article-list/article-list.interface";
export { NavItem } from "./components/nav/nav.interface";
export { RouterItem } from "./components/router/router.interface";
export namespace Components {
    interface AbgArticle {
        "item": ArticleItem;
    }
    interface AbgArticleList {
        "items": ArticleListItem[];
        "showDescription": boolean;
    }
    interface AbgNav {
        "routes": NavItem[];
    }
    interface AbgRouter {
        "home": RouterItem;
        "notFound": RouterItem;
        "routes": RouterItem[];
    }
    interface AbgTags {
        "tags": string[];
    }
}
export interface AbgArticleCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgArticleElement;
}
export interface AbgArticleListCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgArticleListElement;
}
export interface AbgNavCustomEvent<T> extends CustomEvent<T> {
    detail: T;
    target: HTMLAbgNavElement;
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
    interface HTMLAbgArticleElement extends Components.AbgArticle, HTMLStencilElement {
    }
    var HTMLAbgArticleElement: {
        prototype: HTMLAbgArticleElement;
        new (): HTMLAbgArticleElement;
    };
    interface HTMLAbgArticleListElement extends Components.AbgArticleList, HTMLStencilElement {
    }
    var HTMLAbgArticleListElement: {
        prototype: HTMLAbgArticleListElement;
        new (): HTMLAbgArticleListElement;
    };
    interface HTMLAbgNavElement extends Components.AbgNav, HTMLStencilElement {
    }
    var HTMLAbgNavElement: {
        prototype: HTMLAbgNavElement;
        new (): HTMLAbgNavElement;
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
        "abg-article": HTMLAbgArticleElement;
        "abg-article-list": HTMLAbgArticleListElement;
        "abg-nav": HTMLAbgNavElement;
        "abg-router": HTMLAbgRouterElement;
        "abg-tags": HTMLAbgTagsElement;
    }
}
declare namespace LocalJSX {
    interface AbgArticle {
        "item"?: ArticleItem;
        "onAbgArticle"?: (event: AbgArticleCustomEvent<string>) => void;
    }
    interface AbgArticleList {
        "items"?: ArticleListItem[];
        "onAbgArticleList"?: (event: AbgArticleListCustomEvent<any>) => void;
        "showDescription"?: boolean;
    }
    interface AbgNav {
        "onAbgNav"?: (event: AbgNavCustomEvent<any>) => void;
        "routes"?: NavItem[];
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
        "abg-article": AbgArticle;
        "abg-article-list": AbgArticleList;
        "abg-nav": AbgNav;
        "abg-router": AbgRouter;
        "abg-tags": AbgTags;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "abg-article": LocalJSX.AbgArticle & JSXBase.HTMLAttributes<HTMLAbgArticleElement>;
            "abg-article-list": LocalJSX.AbgArticleList & JSXBase.HTMLAttributes<HTMLAbgArticleListElement>;
            "abg-nav": LocalJSX.AbgNav & JSXBase.HTMLAttributes<HTMLAbgNavElement>;
            "abg-router": LocalJSX.AbgRouter & JSXBase.HTMLAttributes<HTMLAbgRouterElement>;
            "abg-tags": LocalJSX.AbgTags & JSXBase.HTMLAttributes<HTMLAbgTagsElement>;
        }
    }
}