// Удаление повторяющихся элементов
const removeDuplicates = <T>(arr: T[]): T[] =>
  Array.from(new Set(arr.map((item) => JSON.stringify(item)))).map((item) =>
    JSON.parse(item)
  );

export default removeDuplicates;
