import { FC } from "react";

import "./index.css";
import JobArticle, {
  enumTypesArticleItem,
} from "@/components/UI/articles/JobArticle";

import vacansys from "@/components/services/data/vacansys";
import createArrTitlesRepeats from "@/components/services/CreateArr/CreateArr-titles-repeats";
import createArrTitlesLinks from "@/components/services/CreateArr/CreateArr-titles-links";
import createArrSalary from "@/components/services/arrServices/CreateArr-salary";

const JobPage: FC = () => {
  const arrCities = createArrTitlesRepeats(
    vacansys,
    "address.city",
    "area.name"
  );
  const arrFormatJobs = createArrTitlesRepeats(vacansys, "schedule.name");
  const arrExpJob = createArrTitlesRepeats(vacansys, "experience.name");

  const arrVacancyLinks = createArrTitlesLinks(
    vacansys,
    "name",
    "alternate_url"
  );

  const arrSalaryCreate = createArrSalary(
    vacansys,
    "salary.from",
    "salary.to",
    "salary.currency"
  );

  const arrSalary = createArrTitlesRepeats(arrSalaryCreate, "");

  return (
    <section className="main__job-info">
      {/* <h2 className="main__title">
        Мы собрали данные из {vacansys.length} вакансий вот результаты:
      </h2> */}
      <ul className="job-info__list">
        <li className="job-info__item item-vacancy">
          <JobArticle
            articleTitle="Вакансии"
            arrData={arrVacancyLinks}
            typeArticleItem={enumTypesArticleItem.titleLinks}
            accentClassName="article-vacancy"
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Города вакансий"
            arrData={arrCities}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Формат рабочего дня"
            arrData={arrFormatJobs}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Опыт работы"
            arrData={arrExpJob}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Зарплата в месяц"
            arrData={arrSalary}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
