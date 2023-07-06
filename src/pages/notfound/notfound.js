import markup from "./notfound.html";

export const NotFound = () => {
  return {
    slug: "404",
    title: "Page not found...",
    nav: false,
    markup: markup,
  };
};

export default NotFound;
