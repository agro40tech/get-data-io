import { FC } from "react";

import "./index.css";
import JobArticle from "@/components/UI/articles/JobArticle";

const JobPage: FC = () => {
  const arrDataCitys: any = [
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
    "Саратов",
  ];

  return (
    <section className="main__job-info">
      <ul className="job-info__list">
        <li className="job-info__item">
          <JobArticle
            articleTitle="Популярные города вашего направления"
            arrData={arrDataCitys}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
