// Рассчет повторений
const countOccurrences = <T>(arr: T[], target: T): number => {
  return arr.reduce(
    (count, element) => (element === target ? count + 1 : count),
    0
  );
};

export default countOccurrences;
