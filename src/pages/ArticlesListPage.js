import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";

const ArticlesListPage = () => (
  <>
    <ArticlesList articles={articleContent} />
  </>
);

export default ArticlesListPage;
