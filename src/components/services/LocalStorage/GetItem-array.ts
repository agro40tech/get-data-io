const getCacheItemArray = (key: string): any[] => {
  const itemString: string = localStorage.getItem(key) as string;
  const itemArray = JSON.parse(itemString);

  return itemArray;
};

export default getCacheItemArray;
