import sortedArr from "../arrServices/SortedArr";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";
import getObjectValue from "../arrServices/GetObjectValue";

export interface IObjectArrTitlesRepeats {
  name: string;
  repeats: number;
  top?: boolean;
}

interface ICreateArrFunction {
  (arr: any[], path: string, sparePath?: string): IObjectArrTitlesRepeats[];
}

interface ICreateArrTitlesRepeats {
  (arr: any[], path: string, sparePath?: string): IObjectArrTitlesRepeats[];
}

const createArr: ICreateArrFunction = (arr, path, sparePath) => {
  return arr.map((element) => {
    const value = getObjectValue(element, path) || getObjectValue(element, sparePath as string);
    const repeats = countOccurrences(
      arr.map((item) => getObjectValue(item, path) || getObjectValue(item, sparePath as string)),
      path !== "" ? value : element
    );

    return {
      name: path !== "" ? value : element,
      repeats,
    };
  });
};

const createArrTitlesRepeats: ICreateArrTitlesRepeats = (propsArr, path, sparePath) => {
  const arr = sparePath ? createArr(propsArr, path, sparePath) : createArr(propsArr, path);
  const arrClean = removeDuplicates(arr);
  const arrSorted = sortedArr(arrClean);
  const maxRepeats = Math.max(...arrSorted.map((element) => element.repeats));

  return arrSorted.map((element) => ({
    ...element,
    top: element.repeats === maxRepeats,
  }));
};

export default createArrTitlesRepeats;
