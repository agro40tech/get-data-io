import { FC, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./UI";

import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import NotFoundPage from "./pages/NotFoundPage";
import ArticlePage from "./pages/ArticlePage";

// Пути страниц
enum enumPages {
  homePage = "/",
  articlePage = "/viewArticle",
}

const App: FC = () => {
  const [jobPage, setJobPage] = useState("/");

  useEffect(() => {
    const vacansysItem = localStorage.getItem("vacansys");

    if (vacansysItem) {
      setJobPage("/viewjob");
    }
  }, []);

  return (
    <Routes>
      <Route path={enumPages.homePage} element={<Layout />}>
        <Route path={enumPages.homePage} element={<HomePage />} />
        <Route path={jobPage} element={<JobPage />} />
        <Route path={enumPages.articlePage} element={<ArticlePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
