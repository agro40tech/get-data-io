import arrSorted from "../arrServices/ArrSorted";
import countOccurrences from "../arrServices/CountOccurences";
import removeDuplicates from "../arrServices/RemoveDuplicates";

type City = {
  name: string;
  repeats: number;
};

type ArrCities = City[];

const createArrCities = (arr: any[]): ArrCities => {
  const arrCities: ArrCities = [];

  arr.forEach((element) => {
    const repeats = countOccurrences(
      arr.map((item) => item.area.name),
      element.area.name
    );

    const city: City = { name: element.area.name, repeats };
    arrCities.push(city);
  });

  const arrCitiesClean = removeDuplicates(arrCities);

  const result = arrSorted(arrCitiesClean);

  return result;
};

export default createArrCities;
