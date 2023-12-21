import { FC } from "react";

import "./index.css";
import JobArticle, {
  enumTypesArticleItem,
} from "@/components/UI/articles/JobArticle";

import vacansys from "@/components/services/data/vacansys";
import createArrTitlesRepeats from "@/components/services/CreateArr/CreateArr-titles-repeats";
import createArrTitlesLinks from "@/components/services/CreateArr/CreateArr-title-links";

const JobPage: FC = () => {
  const arrCities = createArrTitlesRepeats(vacansys, "area.name");
  const arrFormatJobs = createArrTitlesRepeats(vacansys, "schedule.name");
  const arrExpJob = createArrTitlesRepeats(vacansys, "experience.name");

  const arrVacancyLinks = createArrTitlesLinks(
    vacansys,
    "name",
    "alternate_url"
  );

  return (
    <section className="main__job-info">
      <h2 className="main__title">
        Мы собрали данные из {vacansys.length} вакансий вот результаты:
      </h2>
      <ul className="job-info__list">
        <li className="job-info__item">
          <JobArticle
            articleTitle="Популярные города вашего направления"
            arrData={arrCities}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Популярные форматы рабочего дня"
            arrData={arrFormatJobs}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Популярные требования к опыту работы"
            arrData={arrExpJob}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Вакансии"
            arrData={arrVacancyLinks}
            typeArticleItem={enumTypesArticleItem.titleLinks}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
