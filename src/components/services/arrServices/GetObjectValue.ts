// Функция для получения значения объекта по строковому пути
const getObjectValue = (obj: any, path: string) => {
  const pathSegments = path.split(".");
  return pathSegments.reduce((currentObj, key) => currentObj[key], obj);
};

export default getObjectValue;
