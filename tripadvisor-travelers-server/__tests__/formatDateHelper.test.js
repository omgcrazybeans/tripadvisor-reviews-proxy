/* eslint-disable no-undef */
const { formatDate } = require('../server/helpers.js');

describe('Testing helper function formatDate', () => {
  it('should return a string', () => {
    expect(typeof formatDate()).toBe('string');
  });
  it('should return the same length', () => {
    expect(formatDate().length).toBe(8);
  });
  it('should have the correct order of year, month and day', () => {
    expect(formatDate().slice(0, 4)).toBe('2020');
    expect(Number(formatDate().slice(4, 6))).toBeLessThan(12);
    expect(Number(formatDate().slice(6, 8))).toBeLessThan(31);
  });
});
