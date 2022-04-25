// fixme: doesn't lowercase the rest of the word - solution
// const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
const capitalize = (word) => word.charAt(0).toUpperCase() + word.slice(1);

const titleCase = (input, exclusion) => {
  // fixme: exclusion might be undefined - solution
  // const exclusions = (exclusion || '').split(' ').map((w) => w.toLowerCase());
  const exclusions = exclusion.split(' ').map((w) => w.toLowerCase());

  return input
    .split(' ')
    .map((word) => {
      // fixme: should always capitalize 1st word - solution
      // .map((word, index) => {
      // if (index === 0) {
      //   return capitalize(word);
      // }

      // fixme: should always lowercase the comparison - solution
      // if (exclusions.includes(word.toLowerCase())) {
      if (exclusions.includes(word)) {
        // fixme: should always lowercase exclusions - solution
        // return word.toLowerCase();
        return word;
      }

      return capitalize(word);
    })
    .join(' ');
};

module.exports = titleCase;
