import JobArticle, { enumTypesArticleItem } from "@/components/UI/articles/JobArticle";
import DiagramHorizontBar from "@/components/UI/diagrams/ChartHorizontBar";
import { IObjectArrTitlesLinks } from "@/components/services/CreateArr/CreateArr-titles-links";
import { IObjectArrTitlesRepeats } from "@/components/services/CreateArr/CreateArr-titles-repeats";

export interface IMainArticlesProps {
  arrVacancyLinks: IObjectArrTitlesLinks[];
  arrCities: IObjectArrTitlesRepeats[];
  arrFormatJobs: IObjectArrTitlesRepeats[];
  arrExpJob: IObjectArrTitlesRepeats[];
  arrSalary: IObjectArrTitlesRepeats[];
  preloader: boolean;
}

const MainArticles: React.FC<IMainArticlesProps> = ({
  arrVacancyLinks,
  arrCities,
  arrFormatJobs,
  arrExpJob,
  arrSalary,
  preloader,
}) => {
  return (
    <ul className="job-info__list">
      <li className="job-info__item">
        <JobArticle
          articleTitle="Города вакансий"
          arrData={arrCities}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
          hashArr="citys"
        />
      </li>
      <li className="job-info__item item-canvas">
        <article className="job-info__article">
          <DiagramHorizontBar data={arrCities} label="Города вакансий" />
        </article>
      </li>

      <li className="job-info__item">
        <JobArticle
          articleTitle="Формат рабочего дня"
          arrData={arrFormatJobs}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
          hashArr="formatJob"
        />
      </li>
      <li className="job-info__item item-canvas">
        <article className="job-info__article">
          <DiagramHorizontBar data={arrFormatJobs} label="Формат рабочего дня" />
        </article>
      </li>

      <li className="job-info__item">
        <JobArticle
          articleTitle="Опыт работы"
          arrData={arrExpJob}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
          hashArr="expJob"
        />
      </li>
      <li className="job-info__item item-canvas">
        <article className="job-info__article">
          <DiagramHorizontBar data={arrExpJob} label="Опыт работы" />
        </article>
      </li>

      <li className="job-info__item">
        <JobArticle
          articleTitle="Зарплата в месяц"
          arrData={arrSalary}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
          hashArr="salary"
        />
      </li>
      <li className="job-info__item item-canvas">
        <article className="job-info__article">
          <DiagramHorizontBar data={arrSalary} label="Зарплата в месяц" />
        </article>
      </li>

      <li className="job-info__item item-vacancy">
        <JobArticle
          articleTitle="Вакансии"
          arrData={arrVacancyLinks}
          typeArticleItem={enumTypesArticleItem.titleLinks}
          accentClassName="article-vacancy"
          loading={preloader}
          hashArr="vacansys"
        />
      </li>
    </ul>
  );
};

export default MainArticles;
