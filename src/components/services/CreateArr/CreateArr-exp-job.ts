import sortedArr from "../arrServices/SortedArr";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";

type Exp = {
  name: string;
  repeats: number;
};

type ArrExpJob = Exp[];

const createArrExptJob = (arr: any[]): ArrExpJob => {
  const arrExpJob: ArrExpJob = [];

  arr.forEach((element) => {
    const repeats = countOccurrences(
      arr.map((item) => item.experience.name),
      element.experience.name
    );

    const exp: Exp = { name: element.experience.name, repeats };
    arrExpJob.push(exp);
  });

  const arrExpJobClean: Exp[] = removeDuplicates(arrExpJob);

  const result: Exp[] = sortedArr(arrExpJobClean);

  return result;
};

export default createArrExptJob;
