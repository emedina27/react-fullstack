import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import ArticlesList from "./pages/ArticlesList";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div id="page-body">
            <Route path="/" component={HomePage} exact />
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/ArticlePage" component={ArticlePage} />
            <Route path="/rticlesLis" component={ArticlesList} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
