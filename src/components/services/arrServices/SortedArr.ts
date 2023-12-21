type typeParameters = {
  name: string;
  repeats: number;
};

type typeArrSorted = typeParameters[];

const sortedArr = (arr: typeArrSorted) => {
  const result = arr.sort((a, b) => {
    if (a.repeats === b.repeats) {
      a.name = a.name.toLowerCase();
      b.name = b.name.toLowerCase();

      if (a.name < b.name) {
        a.name = a.name[0].toUpperCase() + a.name.slice(1);
        b.name = b.name[0].toUpperCase() + b.name.slice(1);

        return -1;
      }
      if (b.name < a.name) {
        a.name = a.name[0].toUpperCase() + a.name.slice(1);
        b.name = b.name[0].toUpperCase() + b.name.slice(1);

        return 1;
      }

      return 0;
    }

    return b.repeats - a.repeats;
  });

  return result;
};

export default sortedArr;
