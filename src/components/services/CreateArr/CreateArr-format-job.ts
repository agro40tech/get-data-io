import sortedArr from "../arrServices/SortedArr";
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

  const arrFormatJobsClean: Job[] = removeDuplicates(arrFormatJobs);

  const result: Job[] = sortedArr(arrFormatJobsClean);

  return result;
};

export default createArrFormatJobs;
