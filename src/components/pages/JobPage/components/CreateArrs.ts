import createArrTitlesLinks from "@/components/services/CreateArr/CreateArr-titles-links";
import createArrTitlesRepeats from "@/components/services/CreateArr/CreateArr-titles-repeats";
import createArrSalary from "@/components/services/arrServices/CreateArr-salary";

const createArrs = (arr: any[]) => {
  const arrCities = createArrTitlesRepeats(arr, "address.city", "area.name");
  const arrFormatJobs = createArrTitlesRepeats(arr, "schedule.name");
  const arrExpJob = createArrTitlesRepeats(arr, "experience.name");

  const arrVacancyLinks = createArrTitlesLinks(arr, "name", "alternate_url");

  const arrSalaryCreate = createArrSalary(
    arr,
    "salary.from",
    "salary.to",
    "salary.currency"
  );

  const arrSalary = createArrTitlesRepeats(arrSalaryCreate, "");

  return { arrCities, arrFormatJobs, arrExpJob, arrVacancyLinks, arrSalary };
};
export default createArrs;
