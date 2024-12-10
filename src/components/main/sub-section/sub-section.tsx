import React from "react";
import SubArticle1 from "./article-1/sub-article-1";
import SubArticle2 from "./article-2/sub-article-2";
import SubArticle3 from "./article-3/sub-article-3";

const SubSection = () => {
  return (
    <section className="w-full h-auto sub-section-bg">
      <SubArticle1 />
      <SubArticle2 />
      <SubArticle3 />
    </section>
  );
};

export default SubSection;
