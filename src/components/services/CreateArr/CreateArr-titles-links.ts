import getObjectValue from "../arrServices/GetObjectValue";

export interface IObjectArrTitlesLinks {
  name: string;
  link: string;
}

interface ICreateArrFunction {
  (arr: any[], pathToObject: string, pathToLink: string): IObjectArrTitlesLinks[];
}

interface ICreateArrTitlesLinks {
  (propsArr: any[], pathToObject: string, pathToLink: string): IObjectArrTitlesLinks[];
}

const createArr: ICreateArrFunction = (arr, pathToObject, pathToLink) => {
  const resultArr: IObjectArrTitlesLinks[] = [];

  arr.forEach((element) => {
    const object: IObjectArrTitlesLinks = {
      name: getObjectValue(element, pathToObject),
      link: getObjectValue(element, pathToLink),
    };
    resultArr.push(object);
  });

  return resultArr;
};

const createArrTitlesLinks: ICreateArrTitlesLinks = (propsArr, pathToObject, pathToLink) => {
  return createArr(propsArr, pathToObject, pathToLink);
};

export default createArrTitlesLinks;
