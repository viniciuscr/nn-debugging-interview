const titleCase = require('../src/index.js');

describe('examples', () => {
  test('The Good, the Bad and the Ugly ', () => {
    expect(titleCase('The good, the bad and the ugly', 'a an the of and')).toBe(
      'The Good, the Bad and the Ugly',
    );
  });

  test('A Clash of Kings', () => {
    expect(titleCase('a clash of KINGS', 'a an the of')).toBe(
      'A Clash of Kings',
    );
  });

  test('The Wind in the Willows', () => {
    expect(titleCase('THE WIND IN THE WILLOWS', 'The In')).toBe(
      'The Wind in the Willows',
    );
  });

  test('The Quick Brown Fox', () => {
    expect(titleCase('the quick brown fox')).toBe('The Quick Brown Fox');
  });
});
