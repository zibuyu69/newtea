export const getResult = (value, allData) => {
  let result = [];

  allData.map((item) => {
    if (item.name.indexOf(value) !== -1) {
      result.push(item);
    }
  });
  return result;
};
