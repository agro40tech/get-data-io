import JobArticle, { enumTypesArticleItem } from "@/components/UI/articles/JobArticle";
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
      <li className="job-info__item item-vacancy">
        <JobArticle
          articleTitle="Вакансии"
          arrData={arrVacancyLinks}
          typeArticleItem={enumTypesArticleItem.titleLinks}
          accentClassName="article-vacancy"
          loading={preloader}
        />
      </li>
      <li className="job-info__item">
        <JobArticle
          articleTitle="Города вакансий"
          arrData={arrCities}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
        />
      </li>
      <li className="job-info__item">
        <JobArticle
          articleTitle="Формат рабочего дня"
          arrData={arrFormatJobs}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
        />
      </li>
      <li className="job-info__item">
        <JobArticle
          articleTitle="Опыт работы"
          arrData={arrExpJob}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
        />
      </li>
      <li className="job-info__item">
        <JobArticle
          articleTitle="Зарплата в месяц"
          arrData={arrSalary}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
          loading={preloader}
        />
      </li>
    </ul>
  );
};

export default MainArticles;
