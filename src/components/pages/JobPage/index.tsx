import { FC, useEffect, useState } from "react";
import axios from "axios";

import "./index.css";
import JobArticle, {
  enumTypesArticleItem,
} from "@/components/UI/articles/JobArticle";

import createArrs from "./CreateArrs";

const JobPage: FC = () => {
  const [vacansysArr, setVacancysArr] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const retString: any = localStorage.getItem("vacansys");
        const retArr = JSON.parse(retString);

        if (!retArr || retArr.length === 0) {
          const currentUrl = window.location.href;
          const searchParams = new URLSearchParams(currentUrl.split("?")[1]);
          const searchValue = searchParams.get("search");

          await new Promise((resolve) => setTimeout(resolve, 15000));

          const response: any = await axios.get(
            `https://api.hh.ru/vacancies?text=${searchValue}&per_page=100`,
            {
              headers: {
                "User-Agent": "Get-Data-io/1.0 (volkovvova67@gmail.com)",
              },
            }
          );
          setVacancysArr(response.data.items);
          localStorage.setItem("vacansys", JSON.stringify(response.data.items));
          console.log("request successful");
        } else {
          // Используем данные из localStorage
          setVacancysArr(retArr);
        }
      } catch (error) {
        console.error("Error request data api:", error);
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
      {/* <h2 className="job-info__title">
        Мы собрали данные из {retArr.length} вакансий вот результаты:
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
