import { FC, useEffect, useState } from "react";

import "./index.css";
import JobArticle, {
  enumTypesArticleItem,
} from "@/components/UI/articles/JobArticle";

import vacansys from "@/components/services/data/vacansys";
import createArrs from "./CreateArrs";

const JobPage: FC = () => {
  const [vacansysArr, setVacancysArr] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Получение данных из localStorage
        const retString: any = localStorage.getItem("vacansys");
        const retArr = JSON.parse(retString);

        // Если данных в localStorage нет, то делаем асинхронный запрос
        if (!retArr || retArr.length === 0) {
          // Имитация асинхронной загрузки данных
          await new Promise((resolve) => setTimeout(resolve, 15000));

          localStorage.setItem("vacansys", JSON.stringify(vacansys));
          setVacancysArr(vacansys);
        } else {
          // Используем данные из localStorage
          setVacancysArr(retArr);
        }
      } catch (error) {
        console.error("Ошибка загрузки данных:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { arrCities, arrExpJob, arrFormatJobs, arrSalary, arrVacancyLinks } =
    createArrs(vacansysArr);

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
            loading={loading}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Города вакансий"
            arrData={arrCities}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
            loading={loading}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Формат рабочего дня"
            arrData={arrFormatJobs}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
            loading={loading}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Опыт работы"
            arrData={arrExpJob}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
            loading={loading}
          />
        </li>
        <li className="job-info__item">
          <JobArticle
            articleTitle="Зарплата в месяц"
            arrData={arrSalary}
            typeArticleItem={enumTypesArticleItem.titleRepeats}
            loading={loading}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
