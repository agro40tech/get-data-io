import { FC, useEffect, useState } from "react";
import "./index.css";

import createArrs from "./components/CreateArrs";
import vacancyRequest from "@/components/services/https/get/VacansyRequest";
import getCacheItemArray from "@/components/services/LocalStorage/GetItem-array";
import MainArticles from "./components/Main-articles";

const JobPage: FC = () => {
  const [vacansysArr, setVacancysArr] = useState(Array);
  const [preloader, setPreloader] = useState(false);

  const { arrCities, arrExpJob, arrFormatJobs, arrSalary, arrVacancyLinks } =
    createArrs(vacansysArr);

  const defaultMessageLoading: string = "Ищем...";

  let countVacancys = vacansysArr.length > 0 ? vacansysArr.length : defaultMessageLoading;
  let searchValue: string = defaultMessageLoading;

  let searchValueArea;
  if (localStorage.getItem("requestArea")) {
    searchValueArea = defaultMessageLoading;
  }

  let popularCity: string = defaultMessageLoading;
  let popularExpJob: string = defaultMessageLoading;
  let popularFormatJobs: string = defaultMessageLoading;
  let popularSalary: string = defaultMessageLoading;

  if (vacansysArr.length > 0) {
    searchValue = localStorage.getItem("request") as string;
    searchValue = searchValue.slice(1, -1);

    if (searchValueArea) {
      searchValueArea = localStorage.getItem("requestArea") as string;
      searchValueArea = searchValueArea.slice(1, -1);
    }

    popularCity = arrCities[0].name;
    popularExpJob = arrExpJob[0].name;
    popularFormatJobs = arrFormatJobs[0].name;
    popularSalary = arrSalary[0].name;
  }

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

  return (
    <section className="main__job-info">
      <div className="job-info__aside-article-wrapper">
        <article className="job-info__aside-article article">
          <span className="article__span">Нашлось вакансий: {countVacancys}</span>
          <span className="article__span">По вашему запросу: {searchValue}</span>
          {searchValueArea ? <span>По вашему городу: {searchValueArea}</span> : null}
        </article>
        <article className="job-info__bottom-article article">
          <span className="article__span bold">В среднем вакансия выглядит так:</span>
          <span className="article__span">Город: {popularCity}</span>
          <span className="article__span">Формат рабочего дня: {popularFormatJobs}</span>
          <span className="article__span">Опыт работы: {popularExpJob}</span>
          <span className="article__span">Зарплата: {popularSalary}</span>
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
