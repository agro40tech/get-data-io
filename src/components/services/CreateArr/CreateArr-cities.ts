import sortedArr from "../arrServices/SortedArr";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";

const createArrCities = (arr: any[]) => {
  const arrCities: any[] = [];

  arr.forEach((element) => {
    const repeats = countOccurrences(
      arr.map((item) => item.area.name),
      element.area.name
    );

    const city = { name: element.area.name, repeats };
    arrCities.push(city);
  });

  const arrCitiesClean = removeDuplicates(arrCities);

  const arrCitiesSorted = sortedArr(arrCitiesClean);

  const maxRepeats = Math.max(
    ...arrCitiesSorted.map((element) => element.repeats)
  );

  const result = arrCitiesSorted.map((element) => ({
    ...element,
    top: element.repeats === maxRepeats,
  }));

  return result;
};

export default createArrCities;
