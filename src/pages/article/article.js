import markup from "./article.html";

export const Article = () => {
  return {
    slug: "article",
    title: "Article",
    nav: false,
    markup: markup,
  };
};

export default Article;
