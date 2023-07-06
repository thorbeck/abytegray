import markup from "./home.html";

export const Home = () => {
  return {
    slug: "/",
    title: "Home",
    nav: false,
    markup: markup,
  };
};

export default Home;
