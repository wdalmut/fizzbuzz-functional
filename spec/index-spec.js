const fizzbuzz = require('../src');

describe("FizzBuzz", () => {
  it("should return the same number", () => {
    expect(fizzbuzz("1,2")).toBe("1,2");
  });

  it("should return fizz", () => {
    expect(fizzbuzz('1,2,3')).toBe("1,2,fizz");
  });

  it("should return buzz", () => {
    expect(fizzbuzz('4,5')).toBe("4,buzz");
  });

  it("should return fizz and buzz", () => {
    expect(fizzbuzz('1,2,3,4,5,6')).toBe("1,2,fizz,4,buzz,fizz");
  });

  it("should return fizzbuzz", () => {
    expect(fizzbuzz('13,14,15')).toBe('13,14,fizzbuzz');
  });

  it("should works completely", () => {
    expect(fizzbuzz('1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16'))
      .toEqual('1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz,16');
  })
});
