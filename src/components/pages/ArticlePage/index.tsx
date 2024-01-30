import { FC } from "react";
import "./index.css";
import { IObjectArrTitlesRepeats } from "@/components/services/CreateArr/CreateArr-titles-repeats";
import getCacheItemArray from "@/components/services/LocalStorage/GetItem-array";
import JobArticle, { enumTypesArticleItem } from "@/components/UI/articles/JobArticle";
import DiagramBar from "@/components/UI/diagrams/ChartBar";

const ArticlePage: FC = () => {
  const currentUrl = window.location.href;
  const searchParams = currentUrl.split("#")[1];

  let outArr: IObjectArrTitlesRepeats[];
  let articleTitle: string = "Таблица по вакансии";

  switch (searchParams) {
    case "citys":
      outArr = getCacheItemArray("arrCitys");
      articleTitle = "Города вакансий";
      break;
    case "formatJob":
      outArr = getCacheItemArray("arrFormatJobs");
      articleTitle = "Формат работы";
      break;
    case "expJob":
      outArr = getCacheItemArray("arrExpJob");
      articleTitle = "Опыт работы";
      break;
    case "salary":
      outArr = getCacheItemArray("arrSalary");
      articleTitle = "Зарплата в месяц";
      break;
    case "vacansys":
      outArr = getCacheItemArray("arrVacancyLinks");
      break;

    default:
      outArr = [];
      articleTitle = "Таблица по вакансии";
      break;
  }

  return (
    <section className="main__article-info">
      <div className="article-info__graph-wrapper">
        <article className="graph-wrapper__article article">
          <span className="article__span">Фильтры</span>
        </article>
        <article className="graph-wrapper__article article article__graph">
          <DiagramBar data={outArr} label={articleTitle} />
        </article>
      </div>
      <div className="article-info__article-wrapper">
        <JobArticle
          articleTitle={articleTitle}
          arrData={outArr}
          loading={false}
          typeArticleItem={enumTypesArticleItem.titleRepeats}
        />
      </div>
    </section>
  );
};

export default ArticlePage;
