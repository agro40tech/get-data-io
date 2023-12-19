import { FC } from "react";

import "./index.css";
import JobArticle from "@/components/UI/articles/JobArticle";
import vacansys from "@/components/services/data/vacansys";
import CreateArrCitys from "@/components/services/CreateArr/CreateArr-citys";
import CreateArrName from "@/components/services/CreateArr/CreateArr-name";

const JobPage: FC = () => {
  // Создания массива городов через микросервис
  const arrCitys = CreateArrCitys(vacansys);
  // Создание массива назавний вакансий через микросервис
  const arrNames = CreateArrName(vacansys);

  return (
    <section className="main__job-info">
      <ul className="job-info__list">
        <li className="job-info__item">
          <JobArticle articleTitle="Города вакансий" arrData={arrCitys} />
        </li>
        <li className="job-info__item">
          <JobArticle arrData={arrNames} articleTitle="Название вакансий" />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
