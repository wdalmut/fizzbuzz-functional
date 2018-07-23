const {T, __, map, pipe, cond, join, split, equals, always, modulo, identity} = require('ramda');

module.exports = pipe(
  split(','),
  map(
    cond([
      [pipe(modulo(__, 15), equals(0)), always("fizzbuzz")],
      [pipe(modulo(__, 3), equals(0)), always("fizz")],
      [pipe(modulo(__, 5), equals(0)), always("buzz")],
      [T, identity],
    ])
  ),
  join(',')
);

