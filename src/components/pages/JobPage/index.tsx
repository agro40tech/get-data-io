import { FC, useEffect, useState } from "react";
import "./index.css";

import createArrs from "./components/CreateArrs";
import vacancyRequest from "@/components/services/https/get/VacansyRequest";
import getCacheItemArray from "@/components/services/LocalStorage/GetItem-array";
import MainArticles from "./components/Main-articles";

const JobPage: FC = () => {
  const [vacansysArr, setVacancysArr] = useState(Array);
  const [preloader, setPreloader] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setPreloader(true);
        const cacheVacancys = getCacheItemArray("vacansys");

        if (!cacheVacancys || cacheVacancys.length === 0) {
          await new Promise((resolve) => setTimeout(resolve, 15000));
          await vacancyRequest(setVacancysArr);
        } else {
          setVacancysArr(cacheVacancys);
        }
      } catch (error) {
        console.error("Error request data api:", error);
      } finally {
        setPreloader(false);
      }
    };
    fetchData();
  }, []);

  const { arrCities, arrExpJob, arrFormatJobs, arrSalary, arrVacancyLinks } =
    createArrs(vacansysArr);

  const searchValue = localStorage.getItem("request");

  return (
    <section className="main__job-info">
      <div className="job-info__aside-article-wrapper">
        <article className="job-info__aside-article">
          <span className="aside-article__span">Нашлось вакансий: {vacansysArr.length}</span>
          <span className="aside-article__span">По вашему запросу: {searchValue}</span>
        </article>
        <article className="job-info__aside-article">
          <span className="aside-article__span">Фильтры</span>
        </article>
      </div>
      <MainArticles
        arrCities={arrCities}
        arrExpJob={arrExpJob}
        arrFormatJobs={arrFormatJobs}
        arrSalary={arrSalary}
        arrVacancyLinks={arrVacancyLinks}
        preloader={preloader}
      />
    </section>
  );
};

export default JobPage;
