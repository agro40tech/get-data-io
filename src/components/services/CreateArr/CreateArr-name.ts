// Массив обязательно any так как прихоит слишком большой массив
// Создания массива с именами вакансий
const CreateArrName = (arr: any[]) => {
  const arrCitys: string[] = [];

  arr.forEach((element) => {
    arrCitys.push(element.name);
  });
  return arrCitys;
};

export default CreateArrName;
