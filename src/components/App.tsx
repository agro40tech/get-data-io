import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./UI";

import HomePage from "./pages/HomePage";
import TestPage from "./pages/Test";

// Пути страниц
enum enumPages {
  homePage = "/",
  testPage = "/test",
}

const App: FC = () => {
  return (
    <Routes>
      <Route path={enumPages.homePage} element={<Layout />}>
        <Route path={enumPages.homePage} element={<HomePage />} />
        <Route path={enumPages.testPage} element={<TestPage />} />
      </Route>
    </Routes>
  );
};

export default App;
