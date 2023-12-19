// Массив обязательно any так как прихоит слишком большой массив
// Создания массива с городами
const CreateArrCitys = (arr: any[]) => {
  const arrCitys: string[] = [];

  arr.forEach((element) => {
    arrCitys.push(element.area.name);
  });
  return arrCitys;
};

export default CreateArrCitys;
