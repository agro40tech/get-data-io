import arrSorted from "../arrServices/ArrSorted";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";

type Job = {
  name: string;
  repeats: number;
};

type ArrFormatJobs = Job[];

const createArrFormatJobs = (arr: any[]): ArrFormatJobs => {
  const arrFormatJobs: ArrFormatJobs = [];

  arr.forEach((element) => {
    const repeats = countOccurrences(
      arr.map((item) => item.schedule.name),
      element.schedule.name
    );

    const job: Job = { name: element.schedule.name, repeats };
    arrFormatJobs.push(job);
  });
  console.log(arrFormatJobs);

  const arrFormatJobsClean = removeDuplicates(arrFormatJobs);

  const result = arrSorted(arrFormatJobsClean);

  return result;
};

export default createArrFormatJobs;
