import sortedArr from "../arrServices/SortedArr";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";
import getObjectValue from "../arrServices/GetObjectValue";

// Параметр path добавлен для выбора пути до объекта
const createArr = (arr: any[], path: string) => {
  const resultArr: any[] = [];

  arr.forEach((element) => {
    const repeats = countOccurrences(
      arr.map((element) => getObjectValue(element, path)),
      getObjectValue(element, path)
    );

    const object = { name: getObjectValue(element, path), repeats };
    resultArr.push(object);
  });

  return resultArr;
};

const createArrTitlesRepeats = (propsArr: any[], path: string) => {
  const arr = createArr(propsArr, path);

  const arrClean = removeDuplicates(arr);

  const arrSorted = sortedArr(arrClean);

  const maxRepeats = Math.max(...arrSorted.map((element) => element.repeats));

  const resultArr = arrSorted.map((element) => ({
    ...element,
    top: element.repeats === maxRepeats,
  }));

  return resultArr;
};

export default createArrTitlesRepeats;
