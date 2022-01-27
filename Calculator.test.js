import Calculator from './Calculator.js';

describe('Addition function', () => {
  test('Should return appropriate sum value : 6', () => {
    expect(Calculator.add(3, 3)).toBe(6);
  });
  test('Should return appropriate sum value: 8', () => {
    expect(Calculator.add(4, 4)).toBe(8);
  });
  test('Should return appropriate sum value: 10', () => {
    expect(Calculator.add(5, 5)).toBe(10);
  });
});

describe('Subtracting function', () => {
  test('Should return appropriate sub value : 0', () => {
    expect(Calculator.subtract(3, 3)).toBe(0);
  });
  test('Should return appropriate sub value: 4', () => {
    expect(Calculator.subtract(8, 4)).toBe(4);
  });
  test('Should return appropriate sub value: 3', () => {
    expect(Calculator.subtract(7, 4)).toBe(3);
  });
});

describe('Division function', () => {
  test('Should return appropriate div value : 5', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
  });
  test('Should return appropriate div value: 0', () => {
    expect(Calculator.divide(0, 3)).toBe(0);
  });
  test('Should return appropriate div value: 3', () => {
    expect(Calculator.divide(9, 3)).toBe(3);
  });
});

describe('Multiply function', () => {
  test('Should return appropriate multiply value : 4', () => {
    expect(Calculator.multiply(2, 2)).toBe(4);
  });
  test('Should return appropriate multiply value: 49', () => {
    expect(Calculator.multiply(7, 7)).toBe(49);
  });
  test('Should return appropriate multiply value: 9', () => {
    expect(Calculator.multiply(3, 3)).toBe(9);
  });
});
