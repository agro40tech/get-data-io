import { FC } from "react";

import "./index.css";
import JobArticleTitlesRepeats from "@/components/UI/articles/JobArticle-titles-repeats";

import vacansys from "@/components/services/data/vacansys";
import createArrTitlesRepeats from "@/components/services/CreateArr/CreateArr-titles-repeats";

const JobPage: FC = () => {
  const arrCities = createArrTitlesRepeats(vacansys, "area.name");
  const arrFormatJobs = createArrTitlesRepeats(vacansys, "schedule.name");
  const arrExpJob = createArrTitlesRepeats(vacansys, "experience.name");

  return (
    <section className="main__job-info">
      <h2 className="main__title">
        Мы собрали данные из {vacansys.length} вакансий вот результаты:
      </h2>
      <ul className="job-info__list">
        <li className="job-info__item">
          <JobArticleTitlesRepeats
            articleTitle="Популярные города вашего направления"
            arrData={arrCities}
          />
        </li>
        <li className="job-info__item">
          <JobArticleTitlesRepeats
            articleTitle="Популярные форматы рабочего дня"
            arrData={arrFormatJobs}
          />
        </li>
        <li className="job-info__item">
          <JobArticleTitlesRepeats
            articleTitle="Популярные требования к опыту работы"
            arrData={arrExpJob}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
