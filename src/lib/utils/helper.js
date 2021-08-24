// date format
// August 19, 2021
export const formatDateMDY = (date) => {
  const splitDate = date.split('-');
  let abc = new Date(`${splitDate[0]}, ${splitDate[1]}, ${splitDate[2]}`);
  const month = abc.toLocaleString('en-us', { month: 'long' });
  const formatedDate = `${month} ${splitDate[2]}, ${splitDate[0]}`;
  return formatedDate;
};

// date format
// 19/02/2021
export const formatDateDMY = (date) => {
  const splitDate = date.split('-');
  const formatedDate = `${splitDate[2]}/${splitDate[1]}/${splitDate[0]}`;
  return formatedDate;
};
