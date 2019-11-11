import React from "react";
import ArticlesList from "../components/ArticlesList";
import articleContent from "./article-content";
import NotFoundPage from "./NotFoundPage";
/* add Url prop to react router in App.j. then it will pass match to our Article componenet. We can then get that by adding a destructered {match} to Article function. Match conatins info such as current url to compare match, a prop called param where we'll find :name param. pull url param out of match...


- Article Page component now has  access to the value of the url parameter, and  can make changes to itself.


-When ever .map is used in react it also wants a key prop.

-add key to argumrnt then add key prop to <p> tag.
*/

const ArticlePage = ({ match }) => {
  const name = match.params.name;
  const article = articleContent.find(article => article.name === name);

  if (!article) return { NotFoundPage };

  const otherArticles = articleContent.filter(article => article.name !== name);

  return (
    <>
      <h1>{article.title}</h1>
      {article.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
      :<h3>other Articles:</h3>
      <ArticlesList articles={otherArticles} />
    </>
  );
};



export default ArticlePage;
