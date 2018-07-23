const {T, map, flip, pipe, cond, join, split, equals, always, modulo, identity} = require('ramda');

module.exports = pipe(
  split(','),
  map(
    cond([
      [pipe(flip(modulo)(15), equals(0)), always("fizzbuzz")],
      [pipe(flip(modulo)(3), equals(0)), always("fizz")],
      [pipe(flip(modulo)(5), equals(0)), always("buzz")],
      [T, identity],
    ])
  ),
  join(',')
);

