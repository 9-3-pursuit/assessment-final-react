export const sortByProperty = (array, property) => {
  return [...array].sort((a, b) => {
    return a[property].localeCompare(b[property]);
  });
};
