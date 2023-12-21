import getObjectValue from "../arrServices/GetObjectValue";

// Параметр path добавлен для выбора пути до объекта
const createArr = (arr: any[], pathToObject: string, pathToLink: string) => {
  const resultArr: any[] = [];

  arr.forEach((element) => {
    const object = {
      name: getObjectValue(element, pathToObject),
      link: getObjectValue(element, pathToLink),
    };
    resultArr.push(object);
  });

  return resultArr;
};

const createArrTitlesLinks = (
  propsArr: any[],
  pathToObject: string,
  pathToLink: string
) => {
  const resultArr = createArr(propsArr, pathToObject, pathToLink);

  return resultArr;
};

export default createArrTitlesLinks;
