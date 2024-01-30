import createArrTitlesLinks from "@/components/services/CreateArr/CreateArr-titles-links";
import createArrTitlesRepeats from "@/components/services/CreateArr/CreateArr-titles-repeats";
import createArrSalary from "@/components/services/arrServices/CreateArr-salary";

const createArrs = (arr: any[]) => {
  const arrCities = createArrTitlesRepeats(arr, "address.city", "area.name");
  const arrFormatJobs = createArrTitlesRepeats(arr, "schedule.name");
  const arrExpJob = createArrTitlesRepeats(arr, "experience.name");
  const arrVacancyLinks = createArrTitlesLinks(arr, "name", "alternate_url");

  const arrSalaryCreate = createArrSalary(arr, "salary.from", "salary.to", "salary.currency");
  const arrSalary = createArrTitlesRepeats(arrSalaryCreate, "");

  localStorage.setItem("arrCitys", JSON.stringify(arrCities));
  localStorage.setItem("arrFormatJobs", JSON.stringify(arrFormatJobs));
  localStorage.setItem("arrExpJob", JSON.stringify(arrExpJob));
  localStorage.setItem("arrVacancyLinks", JSON.stringify(arrVacancyLinks));
  localStorage.setItem("arrSalary", JSON.stringify(arrSalary));

  return { arrCities, arrFormatJobs, arrExpJob, arrVacancyLinks, arrSalary };
};
export default createArrs;
