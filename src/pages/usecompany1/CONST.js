export const getResult = (value, allData) => {
  let result = [];

  allData.map((item) => {
    if (item.company_name.indexOf(value) !== -1) {
      item.id = item.ID;
      item.name = item.company_name;

      result.push(item);
    }
  });
  return result;
};
