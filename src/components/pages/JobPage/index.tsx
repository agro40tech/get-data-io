import { FC } from "react";

import "./index.css";
import JobArticleTitlesRepeats from "@/components/UI/articles/JobArticle-titles-repeats";
import CreateArrCities from "@/components/services/CreateArr/CreateArr-cities";

import vacansys from "@/components/services/data/vacansys";
import createArrFormatJobs from "@/components/services/CreateArr/CreateArr-format-job";

const JobPage: FC = () => {
  const arrCities = CreateArrCities(vacansys);
  const arrFormatJobs = createArrFormatJobs(vacansys);

  return (
    <section className="main__job-info">
      <ul className="job-info__list">
        <li className="job-info__item">
          <JobArticleTitlesRepeats
            articleTitle="Популярные города вашего направления"
            arrData={arrCities}
          />
        </li>
        <li className="job-info__item">
          <JobArticleTitlesRepeats
            articleTitle="Популярные форматы работы"
            arrData={arrFormatJobs}
          />
        </li>
      </ul>
    </section>
  );
};

export default JobPage;
