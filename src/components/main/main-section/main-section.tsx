import React from "react";
import MainArticle1 from "./article-1/main-article-1";
import MainArticle2 from "./article-2/main-article-2";
import MainArticle3 from "./article-3/main-article-3";

const MainSection = () => {
  return (
    <section className="w-full h-auto linear">
      <MainArticle1 />
      <MainArticle2 />
      <MainArticle3 />
    </section>
  );
};

export default MainSection;
