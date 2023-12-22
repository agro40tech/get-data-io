const getObjectValue = (obj: any, path: string) => {
  if (!path) {
    return obj;
  }
  const pathSegments = path.split(".");
  const result = pathSegments.reduce((currentObj, key) => {
    return currentObj && currentObj[key] !== undefined
      ? currentObj[key]
      : undefined;
  }, obj);

  return result;
};

export default getObjectValue;
