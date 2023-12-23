import getObjectValue from "./GetObjectValue";

const createSalary = (
  element: any,
  pathSalaryFrom: string,
  pathSalaryTo: string,
  pathSalaryCurrency: string
) => {
  let salary = "Зарплата не указана";
  const salaryCurrency = getObjectValue(element, pathSalaryCurrency);

  if (salaryCurrency) {
    let salaryFrom = getObjectValue(element, pathSalaryFrom);
    let salaryTo = getObjectValue(element, pathSalaryTo);

    if (salaryFrom >= 10000) {
      salaryFrom = salaryFrom / 1000 + "к.";
    }

    if (salaryTo >= 10000) {
      salaryTo = salaryTo / 1000 + "к.";
    }

    salary =
      salaryFrom && salaryTo
        ? `от ${salaryFrom} до ${salaryTo} ${salaryCurrency}`
        : salaryFrom
        ? `от ${salaryFrom} ${salaryCurrency}`
        : salaryTo
        ? `до ${salaryTo} ${salaryCurrency}`
        : salary;
  }

  return salary;
};

const createArrSalary = (
  propsArr: any[],
  pathSalaryFrom: string,
  pathSalaryTo: string,
  pathSalaryCurrency: string
) => {
  const resultArr: any[] = [];

  propsArr.forEach((element) => {
    const salary = createSalary(
      element,
      pathSalaryFrom,
      pathSalaryTo,
      pathSalaryCurrency
    );

    return resultArr.push(salary);
  });

  return resultArr;
};

export default createArrSalary;
