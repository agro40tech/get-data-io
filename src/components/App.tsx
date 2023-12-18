import { FC } from "react";
import { Route, Routes } from "react-router-dom";

import Layout from "./UI";

import HomePage from "./pages/HomePage";

// Пути страниц
enum enumPages {
  homePage = "/",
}

const App: FC = () => {
  return (
    <Routes>
      <Route path={enumPages.homePage} element={<Layout />}>
        <Route path={enumPages.homePage} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
