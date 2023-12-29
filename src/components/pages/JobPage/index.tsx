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

  return (
    <section className="main__job-info">
      <h2 className="job-info__title">
        Мы собрали данные из {arrVacancyLinks.length} вакансий вот результаты:
      </h2>
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
