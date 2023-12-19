import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./UI";

import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";

// Пути страниц
enum enumPages {
  homePage = "/",
  jobPage = "/viewjob",
}

const App: FC = () => {
  return (
    <Routes>
      <Route path={enumPages.homePage} element={<Layout />}>
        <Route path={enumPages.homePage} element={<HomePage />} />
        <Route path={enumPages.jobPage} element={<JobPage />} />
      </Route>
    </Routes>
  );
};

export default App;
