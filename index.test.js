import { stringLength, reverseString, capitalize } from './index.js';

describe('Checking string count', () => {
  test('String length should be at least 1 char and maximum of 10 chars', () => {
    expect(stringLength('Full Stack Developer')).toThrow();
  });

  test('Returns the number of characters in string', () => {
    expect(stringLength('Ismail')).toBe(6);
  });
});

describe('Checking string reverse', () => {
  test('String should match revere', () => {
    expect(reverseString('may')).toBe('yam');
  });
});

describe('Capitalize string function', () => {
  test('Should return first letter capitalized', () => {
    expect(capitalize('microverse')).toBe('M');
  });
});
